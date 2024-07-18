import React from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Register.css';

const Register = ()=>{
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
      };

    return (
        <>
        <h2>Register</h2>
        <div className="Form_Register"> 
        <form onSubmit={handleSubmit}>
          <div className="Email"> 
            <label> Email </label>
            <input type="text" placeholder="sofia@gmail.com" name="email" />
            </div>
            <div className="password"> 
          <label> Password</label>
            <input type="text"placeholder= "enter password.."name="password"/>
        </div>
          <button type="submit">register</button>
        </form>
        </div>
      </>
  
    )
}



export default Register;