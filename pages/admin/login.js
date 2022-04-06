import { useState } from "react"
import HeroSection from '../../components/HeroSection'
import styles from '../../styles/Login.module.css'
import {useRouter} from 'next/router'

const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const router = useRouter()

    return (
    <div className={styles.container}>
         <HeroSection text={'Login'} />
         <div className='container mt-5'>
             <div className={`${styles.loginBox} row`}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-4">
                    <label className="form-label">password</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className={` ${styles.loginBtn} btn btn-warning mb-4`}>Login</button>
             </div>
        </div>
    </div>  
  )
}

export default Login