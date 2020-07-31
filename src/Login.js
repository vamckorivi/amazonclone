import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom'
import './Login.css'
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    //state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event =>{
        event.preventDefault();//This stops default refresh
        //login logic
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                //logged in, redirect to home
                history.push("/");

            })
            .catch(e=>alert(e.message))

    }
    //register logic
    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //created a user and logged in
                //redirect to home page
                history.push("/");

            })
            .catch(e=>alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
            <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-amazon_logo.svg.png"
                alt=""
            />
      </Link>
      <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input value={email} onChange={event=> setEmail(event.target.value)} type="email" />
            <h5>Password</h5>
            <input value={password} onChange={event=> setPassword(event.target.value)} type="password"/>
            <button className="login__signInButton" 
                type="submit" onClick={login}>Sign In</button>
          </form>
          <p>
              By Signing-in, you agree to terms and conditions of this site.
          </p>
          <button onClick={register}>Create your Amazon Account</button>
      </div>
            
    </div>
    )
}

export default Login
