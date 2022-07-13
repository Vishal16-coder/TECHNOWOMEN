import React ,{ useContext, useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import logi from "../images/girl.gif";
const Login = () => { 
  //for login and logout
   const {state,dispatch}=useContext(UserContext);
   const navigate=useNavigate();
   const[email,setEmail]=useState('');
   const[password,setPassword]=useState('');
   

   const loginUser=async (e)=>{
      e.preventDefault();
      const res=await fetch('/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        //credentials:"include",
        body: JSON.stringify({
           email, password
        })
      }); 
      const data= res.json();

      if(res.status===400 || !data){
          window.alert("BAD CREDENTIALS");
      }
      else {
        dispatch({type:"USER",payload:true});
        window.alert("Successfully logined");
        navigate('/home');
       }
  }
  return (
    <>
     <section id="login">
        <div className="row">
            <div id="login-form" className="col-lg-6">
                <h1><NavLink to="/login">TECHIFY</NavLink></h1>
                <h3>Log in.</h3>
                <p>Log in with your data that you entered during your resgistration.</p>

                <form method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Your e-mail</label>
                        <input placeholder="name@domain.com"
                         type="email" className="form-control" name="email" id="email"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="at least 8 characters" 
                        type="password" className="form-control" name="password" id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div> 
                    <div className="checkbox">
                        <label><input type="checkbox"/> Keep me signed in</label>
                    </div>
                    <button type="submit" className="btne submit-btn"onClick={loginUser}>Log in</button>
                    <p className="extra">Dont't have an account? <NavLink to="/register">Sign Up</NavLink></p>
                    <h4> <NavLink to="/home">BACK</NavLink></h4> 
                </form>
        </div>
            <div id="login-img" className="col-lg-6">
                <img width="100%" src={logi} alt="login-hero"/>
            </div>
      </div>
    </section>
  </>
  )
};
export default Login;
