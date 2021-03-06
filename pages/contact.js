import { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import { ToastContainer, toast } from 'react-toastify';
import styles from '../styles/Contact.module.css'
import axios from 'axios'


const Contact = () => {

    const [customerMessage,setCustomerMessage] = useState({customerName:"",email:"",subject:"",message:""})
    const [btnDisable,setBtnDisable] = useState(true)

    useEffect(()=>{
        if(customerMessage.customerName !== "" && customerMessage.email !== "" && customerMessage.subject !== "" && customerMessage.message !== ""){
            setBtnDisable(false)
        }else{
            setBtnDisable(true)
        }
    },[customerMessage])
    
    const onTextChange = (e) => {
        setCustomerMessage({
            ...customerMessage,
            [ e.target.name]:e.target.value
        })
    }

    const onSubmit = async (e) => {
       e.preventDefault();
        try {
            await axios.post("http://localhost:3000/api/customer_message",customerMessage)
            setCustomerMessage({customerName:"",email:"",subject:"",message:""})
            toast.success("your message has been successfully sent")
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className={styles.container}>
    <ToastContainer theme='dark' autoClose={3000} />
    <HeroSection text={'Contact Us'} />
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-12 col-md-8'>
            <h2 className={styles.headerText}>We are pizza makers, and our mission is to make cool pizza which feeds all your senses.</h2>
            <p className={styles.simpleText}>If you have questions or comments, please get a hold of us in whichever way is most convenient. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod legunt saepius.</p>
            
            <form className='mt-3 needs-validation' onSubmit={(e)=>onSubmit(e)} >
                <div className="mb-3">
                    <label className={`${styles.form_name} form-label`}>Your Name</label>
                    <input name='customerName' type="text" className={`${styles.form_input} form-control`} value={customerMessage.customerName} onChange={(e)=>onTextChange(e)} required/>
                </div>
                <div className="mb-3">
                    <label className={`${styles.form_name} form-label`}>Email address</label>
                    <input name='email' type="email" className={`${styles.form_input} form-control`} value={customerMessage.email} onChange={(e)=>onTextChange(e)} required/>
                </div>
                <div className="mb-3">
                    <label className={`${styles.form_name} form-label`}>Subject</label>
                    <input name='subject' type="text" className={`${styles.form_input} form-control`} value={customerMessage.subject} onChange={(e)=>onTextChange(e)} required/>
                </div>
                <div className="mb-3">
                    <label className={`${styles.form_name} form-label`}>Your Message</label>
                    <textarea name='message' type="text" className={`${styles.form_input} form-control`} value={customerMessage.message} onChange={(e)=>onTextChange(e)} required/>
                </div>
                <button type="submit"  className={`${styles.contact_button} btn`} >Send Message</button>
            </form>

            </div>

            <div className={`${styles.contactColumn} col-12 col-md-4 px-4 py-4 px-md-3 py-md-3`}>
            <h1 className={styles.headerText}>Get in Touch</h1>
            <p className={styles.simpleText}>Phone: <span style={{color:'#D94F2B'}}>+34 9 368 7050</span></p>
            <p className={styles.simpleText}>Email: <span style={{color:'#D94F2B'}}>order@pizza.com</span></p>
            <h1 className={styles.headerText}>Store Address</h1>
            <p className={styles.simpleText}>CENTRO COMERCIAL LAS GLORIAS</p>
            <p className={styles.simpleText}>Avinguda Diagonal, 208</p>
            <p className={styles.simpleText}>Barcelona, Spain</p>
            <h1 className={styles.headerText}>Working Hours</h1>
            <p className={styles.simpleText}>Tuesday: 10:00 - 21:00</p>
            <p className={styles.simpleText}>Wednesday: 10:00 - 21:00</p>
            <p className={styles.simpleText}>Thursday: 10:00 - 21:00</p>
            <p className={styles.simpleText}>Friday: 10:00 - 21:00</p>
            <p className={styles.simpleText}>Saturday: 12:00 - 19:00</p>
            <p className={styles.simpleText}>Sunday / Monday: Closed</p>
            </div>
        </div>
    </div>
    
    <div className={`${styles.middleSection} text-center mx-0 mt-5 px-3`}>
          <h2 className={styles.textStyle}>Life is not about finding yourself, it is about finding pizza.</h2>
    </div>
    </div>
  )
}

export default Contact