import React ,{useEffect , useState,useContext} from 'react';
import bg from "../images/Hero Image.gif";
import bgb from "../images/svg/wave (10).svg";
import { UserContext } from '../App';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const {state,dispatch}=useContext(UserContext);
  const [userData,setUsername]=useState('');
  const userHome=async()=>{
     try{ 
        const res=await fetch('/getdata',{
        method:"GET",
        headers:{
            //Accept:"application/json",
            "Content-Type":"application/json"
        },
      });
      const data=await res.json();
      console.log(data);
      setUsername(data.username);
     }catch(err){
        console.log(err);
        //navigate('/login'); 
     }
  }
  useEffect(() => {
      userHome();
  }, []);
  return (
        <>
        <section id="hero-section">
        <div className="container-fluid-hero">
            <div className="row">
                <div className="col-lg-6 hero-intro">
                    <h3>{state? 'Welcome ':'Login to explore'} {userData}</h3>
                    <h1>Empowering women across communities to get started in tech<span>.</span></h1>
                    <p>We see you, we hear you and we empower you!</p>
                    <a href="#go-here"><button className="btne btn-lg cta">Learn More</button></a>
                </div>
                <div className="col-lg-6 hero-image">
                    <img className="image-fluid w-100" src={bg} alt="bg" />
                </div>
            </div>
        </div>
        <img className="hero-wave" src={bgb} alt="techno"/>
    </section>

    <section id="description-section">
        <div id="go-here" className="container-fluid">
            <h1>One-platform for all your goals.</h1>
            <p>This platform is designed to connect women all over the world where they can get all information related to the tech and can share their ideas. 
                They can get resources as per their need and can connect with other women to work upon their ideas. 
                It can also be used by women to sell their homemade products which will help them in their economic growth.
                </p>
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <p><i className="fas fa-calendar-check fa-2x"></i></p>
                            <h5>Resources</h5>
                            <p className="card-text">These are some resources which can help and can motivate women to advance their careers, pursue their dreams, and inspire others women and girls .</p>
                            <NavLink href="/resources"><button className="btne btn-lg description-cta">Learn more</button></NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <p><i className="fas fa-shopping-cart fa-2x"></i></p>
                            <h5>Products</h5>
                            <p className="card-text">For women to sell their homemade products which will help them in their economic growth.They can add their products on your website</p>
                            <NavLink href="/products"><button className="btne btn-lg description-cta">Learn more</button></NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <p><i className="fas fa-search fa-2x"></i></p>
                            <h5>Ideas</h5>
                            <p className="card-text">These are some ideas which will lead women and girl to grow in open source.You can also drop your idea and can share your ideas.</p>
                            <NavLink href="/ideas"><button className="btne btn-lg description-cta">Learn more</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="container-fluid" style={{ backgroundColor: '#e6198e' }}>
        <div className="row" >
            <div className="col-lg-4 col-md-4 col-sm-4" >
                <h1><a className='text-white' href="#hero-section" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>Technowomen</a></h1>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <p><a className='text-white' href='https://github.com/Vishal16-coder/TECHNOWOMEN'>
                   GNU General Public License v3.0
                   <a href="https://github.com/Vishal16-coder/TECHNOWOMEN/blob/main/LICENSE">
                    <i className="fab fa-github fa-3x"></i>
                </a>
                </a></p>
            </div>
            <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright: TechnoWom@n - 2022    
            </div>
            
        </div>
    </div>

   </>
  )
};

export default Home;