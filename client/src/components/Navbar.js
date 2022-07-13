import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {
  const {state,dispatch}=useContext(UserContext);

  const Rendermenu=()=>{
            if(state){
                return(
                    <>
                            <li className="nav-item">
                                <NavLink className="nav-link px-4 active" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-4" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-4" to="/resources">Resources</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-4" to="/ideas">Ideas</NavLink>
                            </li>
                            <li className="nav-item">
                                    <NavLink className="nav-link px-4" to="/logout"><button className="btn login-btn">Logout</button></NavLink>
                            </li> 
                    </>
                )
            }else{
                return(
                    <> 
                        <li className="nav-item">
                            <NavLink className="nav-link px-4 active" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink className="nav-link px-4" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink className="nav-link px-4" to="/resources">Resources</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-4" to="/ideas">Ideas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-4" to="/login"><button className="btn login-btn">Login</button></NavLink>
                        </li>
                    </>
                )
            }
  }
  return (
   <>
        <nav className="navbar navbar-expand-lg selectDisable">
            <NavLink className="navbar-brand" to="/">
                TECHNOWOMEN
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <Rendermenu/>
                </ul>
            </div>
        </nav>
  </>
  )
};

export default Navbar;