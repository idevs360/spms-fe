import React, { useState } from 'react'
import style from '../css/Login.module.css'
import { Link } from 'react-router-dom'

function Login() {
  const[formData, setFormData] = useState({
      email:'',
      password:''
  })


  const formDataHandler = (event) =>{
    const {name, value} = event.target;
    setFormData({...formData, [name]:value});
  }

  const formSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div className={style.mainContainer}>
       <h2>Welcome to CodeNCoffee</h2>

       <div className={style.card}>
            <p className={style.cardHeader}>Login to CodeNCoffe</p>

            <form onSubmit={formSubmitHandler}>
            <div className={style.emailDetails}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='xyz@gmail.com'
                name='email'
                value={formData.email}
                onChange={formDataHandler}             
                />                
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='********' 
                name='password'
                value={formData.password}
                onChange={formDataHandler} 
                />               
            </div>

            <div className={style.btnContainer}>
                <button className={style.loginBtn}>Login</button>
            </div>
            </form>

            <div className={style.linkContainer}>
                <Link className={style.bottomLinks} to="/forgot-password">Forgot Password</Link>
                <Link className={style.bottomLinks} to="/signup">Sign Up</Link>
            </div>

       </div>
    </div>
  )
}

export default Login