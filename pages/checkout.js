import HeroSection from '../components/HeroSection'
import styles from '../styles/Checkout.module.css'
import { useEffect, useState } from 'react';
import {PayPalScriptProvider,PayPalButtons,usePayPalScriptReducer} from "@paypal/react-paypal-js";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import {reset} from '../redux/cartSlice'

const Checkout = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const router = useRouter()
    const [checkoutBtn,setCheckoutBtn] = useState(false)
    const [orderData,setOrderData] = useState({firstName:"",lastName:"",email:"",contactNo:"",address:"",pizzas:[],total:0,status:0,paymentMethod:0})

    useEffect(()=>{
        if(orderData.firstName !== "" && orderData.lastName !== "" && orderData.address !== "" && orderData.email !== "" && orderData.contactNo !== "" ){
            setCheckoutBtn(true)
        }else{
            setCheckoutBtn(false)
        }
    },[orderData])

    const onTextChange = (e)=>{
        setOrderData({
            ...orderData,
            [ e.target.name]:e.target.value
        })
    }


    const createOrder = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/orders",data)
            console.log(res)
            dispatch(reset())
            router.push("/orders/" + res.data._id)
        } catch (error) {
            console.log(error)
        }
    }

        // This values are the props in the UI
    const amount = cart.total + parseInt(cart.total * (10/100));
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
                        createOrder({
                            firstName:orderData.firstName,
                            lastName:orderData.lastName,
                            email:orderData.email,
                            contactNo:orderData.contactNo,
                            address:orderData.address,
                            pizzas:cart.products,
                            total:cart.total + parseInt(cart.total * (10/100)),
                            status:0,
                            paymentMethod:0,
                        })

                    });
                }}
            />
        </>
    );
}

  return (
    <div className={styles.container}>
    <HeroSection text={'Checkout'} />
    
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-12 col-md-8'>
            <h2 className={styles.headerText}>Billing Details</h2>
            <form className='mt-3 needs-validation'>
                <div className='row'>
                    <div className='col-6 mb-3'>
                        <label className={`${styles.form_name} form-label`}>First Name</label>
                        <input name='firstName' type="text" className={`${styles.form_input} form-control`} value={orderData.firstName}  placeholder="First Name" required onChange={(e)=>onTextChange(e)} />
                    </div>
                    <div className='col-6 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Last Name</label>
                        <input name='lastName' type="text" className={`${styles.form_input} form-control`} value={orderData.lastName} placeholder="Last Name" required onChange={(e)=>onTextChange(e)} />
                    </div>
                    <div className='col-12 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Address</label>
                        <input name='address' type="text" className={`${styles.form_input} form-control`} value={orderData.address} placeholder="Address" required onChange={(e)=>onTextChange(e)} />
                    </div>
                    <div className='col-6 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Email</label>
                        <input name='email' type="email" className={`${styles.form_input} form-control`} value={orderData.email} placeholder="Email" required onChange={(e)=>onTextChange(e)} />
                    </div>
                    <div className='col-6 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Contact No</label>
                        <input name='contactNo' type="text" className={`${styles.form_input} form-control`} value={orderData.contactNo} placeholder="Contact No" required onChange={(e)=>onTextChange(e)} />
                    </div>
                </div>
            </form>
            </div>

            <div className={`${styles.contactColumn} col-12 col-md-4 px-4 py-4 px-md-3 py-md-3`}>
                {
                    !checkoutBtn ? (
                        <p className={styles.checkoutText}>You need to fill all the filed to complete checkout process</p>
                    ):(
                        <>
                         <p className={styles.checkoutText}>Pay with paypal</p>
                        <PayPalScriptProvider
                        options={{
                            "client-id": process.env.PAYPAL_CLIENT_ID,
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
                        </>
                    )
                }
                
            </div>
        </div>
    </div>
    
    <div className={`${styles.middleSection} text-center mx-0 mt-5 px-3`}>
          <h2 className={styles.textStyle}>Life is not about finding yourself, it is about finding pizza.</h2>
    </div>
    </div>
  )
}

export default Checkout