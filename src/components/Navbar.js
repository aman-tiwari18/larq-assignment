import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div className = "flex justify-between py-8 px-40">
            <div>
            <img src = {logo} alt = "search" style= {{height: "24px" ,width:"100px"}} />
            </div>
            <div className = " text-xl font-bold flex text-gray-500  gap-16 items-center">
                
                <ul className = "hover:text-black">Home</ul>   
                <ul className = "hover:text-black">About</ul>
                <ul className = "hover:text-black">Bottles</ul>
                <ul className = "hover:text-black">Contacts</ul>
                <button className = "bg-buttonColor text-black rounded-md h-10 w-28 font-semibold text-lg">Login</button>
                
            </div>
        </div>
    )
}

export default Navbar
