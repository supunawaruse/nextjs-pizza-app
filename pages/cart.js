import HeroSection from '../components/HeroSection'
import styles from '../styles/Cart.module.css'
import Image from "next/image"
import PizzaCard from '../components/PizzaCard'
import { useDispatch, useSelector } from 'react-redux'
import {reset} from '../redux/cartSlice'

const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)

    const onCartClear = () =>{
        dispatch(reset())
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
                        <th style={{width:'35%',textAlign:'start'}} className={styles.tableHeader} scope="col">Product</th>
                        <th style={{width:'15%'}} className={styles.tableHeader} scope="col">Price</th>
                        <th style={{width:'10%'}} className={styles.tableHeader} scope="col">QTY</th>
                        <th style={{width:'15%'}} className={styles.tableHeader} scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                       {cart.products.map((product)=>(
                           <tr key={product._id}>
                           <td>
                               <Image src={require('../public/pizzaSmall1.png')} alt="" className='img-fluid' />
                           </td>
                           <td className={styles.tableProduct}>
                               <p className={styles.tableItem}>{product.title}</p>
                               <p className={styles.tableSize}>Size:Small</p>
                           </td>
                           <td className={styles.tablePrice}>${product.price}</td>
                           <td className={styles.tableQty}>{product.quantity}</td>
                           <td className={styles.tablePrice}>${product.price * product.quantity}</td>
                           </tr>
                       ))}
                    </tbody>
                </table>
                </div>
                </div>
                <div className={`${styles.cartColumn} col-12 col-md-4 p-4`}>
                    <h1 className={styles.cartTitle}>Cart Totals</h1>
                    <p className={styles.cartText}>CART SUBTOTAL</p>
                    <p className={styles.cartText}>SHIPPING AND HANDLING</p>
                    <hr style={{height:2,color:'white'}} />
                    <h4 className={styles.tablePrice}>Order Total	${cart.total}</h4>
                    <button className={`${styles.updateBtn} btn mb-2 mt-2 py-2`} onClick={onCartClear}>CLEAR CART</button>
                    <button className={`${styles.checkoutBtn} btn py-2`}>PROCEED TO CHECKOUT</button>
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