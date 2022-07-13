import React, { useState } from 'react';
import { NavLink ,useNavigate } from 'react-router-dom';
import signup from "../images/login-hero.gif";
const Register = () => {
    const navigate=useNavigate();
    const[user,setUser]=useState({
        username:"",email:"", password:"",cpassword:"",image:""
      });
      let name, value;
      const handleInputs=(e)=>{
        console.log(e); 
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
      }
      //this will send frontend data to authjs file in backend ,which will store data to db
    const Postdata =async (e)=>{
         e.preventDefault();
          const { username, email,password,cpassword,image}=user;

          const res=await fetch('/register',{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify({
              username, email, password, cpassword,image
            })
          });
          const data = await res.json();
          if(res.status ===422 || !data){
              window.alert("Invalid registration");
              console.log("INVALID");
          }else{
            window.alert("Valid registration");
            navigate('/login');
          }
    }
    return (
      <>
      <section id="login">
          <div className="row">
              <div id="signup-form" className="col-lg-6">
                  <h3>Hello!</h3>
                  <p>Sign up to get started</p>
                  <form method="POST">
                      <div className="form-group">
                          <label for="username">Username</label>
                          <input placeholder="JohnWick" type="text" name="username"className="form-control" id="username"
                          value={user.username}
                          onChange={handleInputs}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Your e-mail</label>
                          <input placeholder="name@domain.com" type="email" name="email" className="form-control" id="email"
                          value={user.email}
                          onChange={handleInputs}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input placeholder="at least 8 characters" type="password" name="password" className="form-control" id="password"
                          value={user.password}
                          onChange={handleInputs}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="cpassword">Confirm Password</label>
                          <input placeholder="enter password again" type="password" name="cpassword" className="form-control" id="cpassword"
                          value={user.cpassword}
                          onChange={handleInputs}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="image">Profile Picture</label>
                        <input placeholder="url" type="text" name="image" className="form-control" id="image"
                         value={user.image}
                         onChange={handleInputs}/>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox"/> I agree with the Terms and conditions</label>
                    </div>
                      <p className="extra">Already have an account? <NavLink to="/login">Sign In</NavLink></p>
                      <button type="submit" className="btne submit-btn" onClick={Postdata}>Sign up</button>
  
                  </form>
              </div>
              <div id="login-img" className="col-lg-6">
                  <img width="100%" src={signup} alt="login-hero"/>
          </div>
          </div>
      </section>
    </>
    )
};

export default Register;
