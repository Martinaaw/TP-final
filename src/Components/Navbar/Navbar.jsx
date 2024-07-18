import React, { useState } from "react";
import './Navbar.css';
import logo from '../logo/logoo.png'
import shoppingcart from '../shoppingcart/shoppingcart.png'
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Navbar = () => {
    const [Menu, SetMenu]= useState("Home");
   
    return (
         <> 
        <div className="Navbar">    
        <div className="Navlogo">
            <img src={logo} alt="" />
            <p> Tienda </p>
            </div>
                <ul className="Menu">
                    <li onClick={()=> {SetMenu ("Home")}}><NavLink style= {{ textDecoration : "none"}} to= '/home'> Home</NavLink> {Menu === "Home"? <hr/> : <> </>  }</li>
                <li onClick={()=> {SetMenu ("Products")}}> <NavLink style= {{ textDecoration : "none"}} to= '/Products'> Products </NavLink> {Menu === "Products"? <hr/> : <> </>  }</li>
                </ul>
                <div className="NavLogin">
                  <NavLink to ='Login'>  <button> Login </button> </NavLink> 
                    <div className="ShoppingLogo">
                        <img src={shoppingcart} alt="" />
                    <div className="NavRegister">
                        <NavLink to= 'Register'><button> Register </button></NavLink>
                    </div>
                    </div>
                </div>
                </div>   
            <Outlet></Outlet>
            </>
    
    )
}

export default Navbar;