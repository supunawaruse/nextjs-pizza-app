import { useState } from "react"
import HeroSection from '../../components/HeroSection'
import styles from '../../styles/Login.module.css'
import {useRouter} from 'next/router'
import axios from "axios"

const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const router = useRouter()

    const onLogin = async () => {
        try {
            await axios.post("http://localhost:3000/api/login",{username,password})
            router.push("/admin")
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    return (
    <div className={styles.container}>
         <HeroSection text={'Login'} />
         <div className='container mt-5'>
             <div className={`${styles.loginBox} row`}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="form-label">password</label>
                    <input type="text" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="button" onClick={onLogin} className={` ${styles.loginBtn} btn btn-warning mb-4`}>Login</button>
                {
                    error && <span>Wrong Credentials</span>
                }
             </div>
        </div>
    </div>  
  )
}

export default Login