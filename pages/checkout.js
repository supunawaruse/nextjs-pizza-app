import HeroSection from '../components/HeroSection'
import styles from '../styles/Checkout.module.css'
import { useEffect } from 'react';

const checkout = () => {

  return (
    <div className={styles.container}>
    <HeroSection text={'Checkout'} />
    
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-12 col-md-8'>
            <h2 className={styles.headerText}>Billing Details</h2>
            <form className='mt-3'>
                <div className='row'>
                    <div className='col-6 mb-3'>
                        <label className={`${styles.form_name} form-label`}>First Name</label>
                        <input type="text" className={`${styles.form_input} form-control`} placeholder="First Name"/>
                    </div>
                    <div className='col-6 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Last Name</label>
                        <input type="text" className={`${styles.form_input} form-control`} placeholder="Last Name"/>
                    </div>
                    <div className='col-12 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Address</label>
                        <input type="email" className={`${styles.form_input} form-control`} placeholder="Address"/>
                    </div>
                    <div className='col-12 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Town/City</label>
                        <input type="email" className={`${styles.form_input} form-control`}  placeholder="Town/City"/>
                    </div>
                    <div className='col-6 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Email</label>
                        <input type="email" className={`${styles.form_input} form-control`} placeholder="Email"/>
                    </div>
                    <div className='col-6 mb-3'>
                        <label className={`${styles.form_name} form-label`}>Contact No</label>
                        <input type="text" className={`${styles.form_input} form-control`} placeholder="Contact No"/>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
    
    <div className={`${styles.middleSection} text-center mx-0 mt-5 px-3`}>
          <h2 className={styles.textStyle}>Life is not about finding yourself, it is about finding pizza.</h2>
    </div>
    </div>
  )
}

export default checkout