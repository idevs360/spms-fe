import React, { useState } from 'react'
import style from '../css/Login.module.css'

function Login() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('');

    console.log(email, password)


  return (
    <div className={style.mainContainer}>
       <h2>Welcome to CodeNCoffee</h2>

       <div className={style.card}>
            <p className={style.cardHeader}>Login to CodeNCoffe</p>

            <div className={style.emailDetails}>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='xyz@gmail.com'
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />                
                
                <label htmlFor="password">Password</label>
                <input type="text" placeholder='********'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />               
            </div>

            <div className={style.btnContainer}>
                <button className={style.loginBtn}>Login</button>
            </div>

            <div className={style.linkContainer}>
                <a className={style.bottomLinks} href="forgot-password">Forgot Password</a>
                <a className={style.bottomLinks} href="sign-up">Sign Up</a>
            </div>

       </div>
    </div>
  )
}

export default Login