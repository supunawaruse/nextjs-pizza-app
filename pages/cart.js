import HeroSection from '../components/HeroSection'
import styles from '../styles/Cart.module.css'
import Image from "next/image"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {reset,removeFromCart} from '../redux/cartSlice'
import {PayPalScriptProvider,PayPalButtons,usePayPalScriptReducer} from "@paypal/react-paypal-js";

const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const [checkoutBtn,setCheckoutBtn] = useState(false)

    const onCartClear = () =>{
        dispatch(reset())
    }

    const onRemoveFromCart = (product,index) =>{
        console.log(cart.products)
        dispatch(removeFromCart({product,index}))
    }

    // This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};
// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        console.log(data)
                        console.log(details)
                    });
                }}
            />
        </>
    );
}

  return (
    <div className={styles.container}>
        <HeroSection text={'Shopping Cart'} />
        <div className='container mt-5'>
            <div className='row mb-4'>
                <div className='col-12 col-md-8'>
                <div className="table-responsive mb-4">
                <table className="table text-center">
                    <thead>
                        <tr>
                        <th style={{width:'25%'}} className={styles.tableHeader} scope="col"></th>
                        <th style={{width:'30%',textAlign:'start'}} className={styles.tableHeader} scope="col">Product</th>
                        <th style={{width:'15%'}} className={styles.tableHeader} scope="col">Price</th>
                        <th style={{width:'5%'}} className={styles.tableHeader} scope="col">QTY</th>
                        <th style={{width:'15%'}} className={styles.tableHeader} scope="col">Total</th>
                        <th style={{width:'10%'}} className={styles.tableHeader} scope="col">X</th>
                        </tr>
                    </thead>
                    <tbody>
                       {cart.products.map((product,index)=>(
                           <tr key={product._id}>
                           <td>
                               <Image src={require('../public/pizzaSmall1.png')} alt="" className='img-fluid' />
                           </td>
                           <td className={styles.tableProduct}>
                               <p className={styles.tableItem}>{product.title}</p>
                               <p className={styles.tableSize}>Size: {product.size === 0 ? 'Small' : product.size === 1 ? 'Medium' : 'Large'}</p>
                               {
                                   product.options.length > 0 && (
                                        <p className={styles.tableSize}>Extra: {product.options.map((o)=> (`${o.text} `))}</p>
                                   )
                               }
                           </td>
                           <td className={styles.tablePrice}>${product.price}</td>
                           <td className={styles.tableQty}>{product.quantity}</td>
                           <td className={styles.tablePrice}>${product.price * product.quantity}</td>
                           <td onClick={()=>onRemoveFromCart(product,index)} className={styles.tablePrice}><i className="bi bi-trash"></i></td>
                           </tr>
                       ))}
                    </tbody>
                </table>
                </div>
                </div>
                <div className={`${styles.cartColumn} col-12 col-md-4 p-4`}>
                    <h1 className={styles.cartTitle}>Cart Totals</h1>
                    <p className={styles.cartText}>CART SUBTOTAL : ${cart.total}</p>
                    <p className={styles.cartText}>SERVICE CHARGES : ${parseInt(cart.total * (10/100))}</p>
                    <hr style={{height:2,color:'white'}} />
                    <h4 className={styles.tablePrice}>Order Total	${cart.total + parseInt(cart.total * (10/100))}</h4>
                    <button className={`${styles.updateBtn} btn mb-2 mt-2 py-2`} onClick={onCartClear}>CLEAR CART</button>
                   
                    {
                        checkoutBtn === false ? (
                            <button className={`${styles.checkoutBtn} btn py-2`} disabled={cart.products.length === 0} onClick={()=>setCheckoutBtn(true)} >PROCEED TO CHECKOUT</button>
                        ):(
                            <div className='mt-3'>
                                <button className={`${styles.checkoutBtn} btn py-2 mb-2`} >Cash On Delivery</button>
                                <PayPalScriptProvider
                                options={{
                                    "client-id": "AaJ9oWGNH-i5fozVQhza4GNHk571CW4NLJ24tiAdXx-Y_l_VE1giqcBo6JzVr4aHmikPlGO6caX2DQnp",
                                    components: "buttons",
                                    currency: "USD",
                                    "disable-funding":"credit,card,p24"
                                }}
                                >
                                <ButtonWrapper
                                    currency={currency}
                                    showSpinner={false}
                                />
                                </PayPalScriptProvider>
                            </div>
                        )
                    }
                   
                </div>
            </div>
            
        </div>

        <div className={`${styles.middleSection} text-center mx-0`}>
          <h2 className={styles.textStyle}>Life is not about finding yourself, it is about finding pizza.</h2>
        </div>
       

    </div>
  )
}

export default Cart