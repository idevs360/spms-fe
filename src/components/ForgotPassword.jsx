import React, { useState } from "react";
import style from "../css/ForgotPassword.module.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const[isEmailVerified, setIsEmailVerified] = useState(false)


    const verifyEmail = (event) => {
        event.preventDefault();
        console.log("email is verified")
        setIsEmailVerified(!isEmailVerified)
    }

    const setNewPassword = (event)=>{
        event.preventDefault();
        console.log('New password set')
    }

  return (
    <div className={style.mainContainer}>
      <h2>
        <Link className={style.links} to="/">
          Forgot Password
        </Link>
      </h2>

      <div className={style.card}>
        <p>Find Your Account</p>

        <form onSubmit={isEmailVerified?setNewPassword : verifyEmail}>
          <div className={style.emailDetails}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" readOnly={isEmailVerified} />
            {isEmailVerified ? '': <p className={style.blink}>Incorrect Email!</p>}

            {isEmailVerified? (<div className={style.emailDetails}>
              <label htmlFor="password">New Password</label>
              <input type="password" placeholder="Password" />
            </div>):''}
          </div>

          <div className={style.buttonContainer}>
            <button className={style.updateButton}>{isEmailVerified?'Update':'Verify'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
