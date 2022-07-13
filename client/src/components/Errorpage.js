import React from 'react'
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
  return (
    <section class="notFound">
        <div class="img">
        </div>
        <div class="text">
        <h1>404</h1>
        <h2>Couldn't Find the page :(</h2>
        <h3>Page Not Found - lets take you <NavLink to="/home">BACK</NavLink></h3> 
        </div>
    </section>
  )
};

export default Errorpage;