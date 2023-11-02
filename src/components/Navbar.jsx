import React from "react";
import "./page.css";

export default function Navbar(){

   const imageAltText="animeTvLogo";
   const logo="logo-black-removebg-preview.png";
    return(
<div >
    <nav  class="container">
    <img className="nav-img" src={logo} alt={imageAltText} width="300" height="200" />
     <ul className="items">
        <li href="#" className ="menu">MENU</li>
        <li href="#" className="about">ABOUT </li>
        <li href="#" className="contact">CONTACT</li>
       
    </ul>

     <button className="btn">Login</button>

     </nav>

</div>
    
    );
};