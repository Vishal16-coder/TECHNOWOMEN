import React, { createContext, useReducer } from 'react'
import "./App.css";
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Product';
import Login from './components/Login';
import Ideas from './components/Ideas';
import Resources from './components/Resource';
import Register from './components/Register';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';
import { intialState,reducer } from '../src/reducer/UseReducer';
export const UserContext =createContext();
const App=()=>{
  const [state,dispatch]=useReducer(reducer,intialState);
  return (
      <>
      <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Navbar/>,<Home/></>}/>
        <Route path='/home' element={<><Navbar/>,<Home/></>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resources' element={<><Navbar/>,<Resources/></>}/>
        <Route path='/ideas' element={<Ideas/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
     </>
  );
};

export default  App;
