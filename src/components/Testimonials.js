import React from 'react'
import Card from './Card'
import Footer from './Footer'
import "./Testimonials.css"
import prof1 from '../assets/avatar1.png'
import prof2 from '../assets/avatar2.png'
import prof3 from '../assets/avatar3.png'

const Testimonials = () => {
    return (
        <div className = "tcolor">
            <div className = "py-6  ">
                <div className = "text-center text-3xl pb-10 italic text-white">
                    TESTIMONIALS
                </div>

                <div className = "flex justify-evenly items-center mt-[55px]">
                <Card  img = {prof2} name = {"Austin Wade"} title = {"Athelete"} company = {"ADIDAS"} />
                <Card  img = {prof1} name = {"Jaydon Bator"} title = {"Sr. Editor"} company = {"OPRAH MAGAZINE"}  smallCard/>
                <Card img = {prof3} name = {"Sarah"} title = {"Photographer"} company = {"BBC"} />
                </div>
            </div>
            <div className = "mt-[50px]">
            <Footer/>
            </div>
            
        </div>
        
    )
}

export default Testimonials
