import React, { useState } from "react";
import style from "../css/Signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
 const[formData, setFormData] = useState({
    fName: '',
    lName: '',
    mobile:'',
    dob:'',
    gender:'',
    email:'',
    password:''
 })

 const formDataHandler = (event) =>{
  const{name, value} = event.target;
  setFormData({...formData, [name]:value});
 }


 const onSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(formData)
 }


  return (
    <div className={style.mainContainer}>
      <h2><Link className={style.headerLinks} to="/">Sign Up</Link></h2>
      <p><Link className={style.headerLinks} to="/">Its Quick and easy</Link></p>

    <form onSubmit={onSubmitHandler}>
    <div className={style.card}>
        <div className={style.nameRow}>
          <div className={style.col}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" placeholder="first name" 
            name="fName"
            value={formData.fName}
            onChange={formDataHandler}/>
          </div>
          <div className={style.col}>
            <label htmlFor="first-name">Last Name</label>
            <input type="text" placeholder="last name"
            name="lName"
            value={formData.lName}
            onChange={formDataHandler}
            />
          </div>
        </div>

        <div className={style.mobileNumber}>
          <label htmlFor="first-name">Mobile Name</label>
          <input type="text" placeholder="last name" 
          name="mobile"
          value={formData.mobile}
          onChange={formDataHandler}
          />
        </div>

        <div className={style.nameRow}>
          <div className={style.col}>
            <label htmlFor="dob">DOB</label>
            <input type="date" placeholder="DOB" 
            name="dob"
            value={formData.dob}
            onChange={formDataHandler}
            />
          </div>
          <div className={style.col}>
            <label htmlFor="first-name">Gender</label>
            <select name="gender"
            value={formData.gender}
            onChange={formDataHandler}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className={style.mobileNumber}>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" 
          name="email"
          value={formData.email}
          onChange={formDataHandler}
          />
        </div>

        <div className={style.mobileNumber}>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" 
          name="password"
          value={formData.password}
          onChange={formDataHandler}
          />
        </div>

        <div className={style.signUpContainer}>
          <button className={style.btn}>Sign Up</button>
        </div>
      </div>

    </form>
    </div>
  );
}

export default Signup;
