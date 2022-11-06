import React from 'react'
import fav from '../assets/FavIcon.png'
import cart from "../assets/CartIcon.png";
import search from '../assets/SearchIcon.png'
import user from '../assets/UserIcon.png'
import logo from '../assets/logo.png'
const ProdNavbar = () => {
    return (
        <div className = "bg-white fixed bg-white top-0 w-full h-16 z-10 shadow-lg">
            <div className = "flex     justify-between py-4 px-40">
            <div className  = "flex gap-16 items-center">
                <img src = {logo} alt = "search" style= {{height: "24px" ,width:"100px"}} />   
                <img src = {search} alt = "search" style= {{height: "16px" ,width:"16px"}} /> 

            </div>
            <div className = " text-xl font-bold flex   gap-16 items-center">
                
                <ul className = "hover:text-black">Products</ul>   
                <ul className = "hover:text-black">Technology</ul>
                <ul className = "hover:text-black">
                <img src = {user} alt = "search" style= {{height: "16px" ,width:"16px"}} />
                </ul>
                <ul className = "hover:text-black">
                <img src = {fav} alt = "search" style= {{height: "16px" ,width:"16px"}}/>
                </ul>
                <ul className = "hover:text-black">
                <img src = {cart} alt = "search"  style= {{height: "16px" ,width:"16px"}}/>
                </ul>
                
            </div>
        </div>
        </div>
    )
}

export default ProdNavbar
