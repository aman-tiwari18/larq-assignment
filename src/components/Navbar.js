import React from 'react'

const Navbar = () => {
    return (
        <div className = "flex justify-between py-8 px-40">
            <div>
                <h1 className = "text-3xl">LARQ</h1>
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
