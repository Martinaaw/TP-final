import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';

const Login= ()=> {
const handleSubmit = (e)=>{
  e.preventDefualt();  
  const { email, password } = e.target.elements;
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      setUser(userCredential.user.email);
      console.log(userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
 

    return (
<>
      <h2>Login</h2>
      <div className="Form_Login">
      <form onSubmit={handleSubmit}>
        <div className="Email"> 
        <label> Email </label>
          <input type="text" placeholder="sofia@gmail.com" name="email" />
          </div>
          <div className="password"> 
        <label>Password</label>
          <input type="text" placeholder="put your password "name="password" />
          </div>
        <button type="submit">login</button>
      </form>
      </div>
    </>
    
  )
}

        

export default Login;
