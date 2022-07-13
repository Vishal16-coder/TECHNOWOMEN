import React , {useEffect , useState,useContext} from 'react';
import bg from "../images/resources-hero.png";
import {useNavigate ,NavLink } from 'react-router-dom';
import { UserContext } from '../App';


const Product = () => {
  const {state,dispatch}=useContext(UserContext);
  const navigate=useNavigate();
  const [userData,setUserData]=useState({});
  const callAboutpage=async ()=>{
     try{ 
        const res=await fetch('/getdata',{
        method:"GET",
        headers:{
            //Accept:"application/json",
            "Content-Type":"application/json"
        },
        //credentials: "include"
      });
      const data=await res.json();
      console.log(data);
      setUserData(data);
      if(!res.status==200){ 
        const error=new Error(res.error);
        throw error;
      }
     }catch(err){
        console.log(err);
        navigate('/login'); 
     }
  }
  useEffect(() => {
      callAboutpage();
  }, []);
  
  return (
    <>
     <div id="topnav" className='topnav'>
           {/*<h5>Welcome Vishal</h5>*/}
           <div class="logo-image">
                  <NavLink className="nav-link px-4" to="/logout"><button className="btn login-btn">Logout</button></NavLink>
           </div>
           <div class="logo-image">
              <img src={userData.image}class="img-fluid"/>
           </div>
           <h1>{userData.username}</h1>
           <h3>See products list</h3>
          
     </div>
<div className="d-flex justify-content-center align-items-center mt-5"> <button className="btn btn-dark">OUR CATEGORIES</button>
    </div>
    <div className="d-flex justify-content-center mt-3"> <span className="text text-center">Finding Best Products Now in Your Fingertips</span>
    </div>
    <div className="row mt-3 g-5">
        <div className="col-md-3">
            <div className="card p-1">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Mobile</span> <span>Phones</span> </div>
                    <div> <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Head</span> <span>Phones</span> </div>
                    <div> <img src="https://i.imgur.com/SHWASPG.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Smart</span> <span>Watches</span> </div>
                    <div> <img src=" https://i.imgur.com/Ya0OXCv.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Air</span> <span>Purifiers</span> </div>
                    <div> <img src="https://i.imgur.com/2gvGwbh.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2tr5">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Vacuum</span> <span>Cleaners</span> </div>
                    <div> <img src="https://i.imgur.com/UMQJpSG.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Washing</span> <span>Machines</span> </div>
                    <div> <img src="https://i.imgur.com/e9CyhXR.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Smart</span> <span>Televisions</span> </div>
                    <div> <img src=" https://i.imgur.com/Zq8VigZ.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
    </div>
    {/* footer*/ }
    <div className="container-fluid" style={{ backgroundColor: '#666' }}>
          <div className='row'>
            <div className="col-lg-4 col-md-4 col-sm-4" >
               <h4> <a href="/home">BACK</a></h4> 
                <h3><a className='text-white' href="#topnav" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>TechnoWom@n</a></h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <p><a className='text-white' href='https://github.com/Vishal16-coder/project_mern_memories'>
                   GNU General Public License v3.0
                   <a href="https://github.com/Vishal16-coder/project_mern_memories">
                    <i className="fab fa-github fa-3x"></i>
                </a>
                </a></p>
            </div>
            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright: TechnoWom@n - 2022    
            </div>
        </div>
        </div>
   </> 
  )
};

export default Product;
