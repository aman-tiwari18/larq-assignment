import React from 'react'
import './Card.css'


const Card = ({smallCard=false ,img, name, title, company}) => {
    console.log({smallCard})
    return (
        <div className = 
        {`justify-center color  text-white ${!smallCard ? ' h-[250px] w-[350px] text-[12px]' : 'h-[300px] w-[450px] text-[16px]'} px-5 py-5  items-center border-2 rounded-lg`}>
            <div className = {` absolute ${!smallCard ?'w-[55px] mt-[-50px]' : 'w-[75px] mt-[-62px]'} flex   rounded-[50px] border-b-2 border-white `}>
                <img src = {img} alt = 'avatar'/>
            </div>
            <div className = "py-8  items-center">Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases.<br/>
                They did a great job!
            </div>
            
            <div className = {`flex  justify-between ${!smallCard ? 'mt-[20px] text-[10px]' :  'mt-[35px] text-[14px]'} `}>
                <div>
                <div>
                {name}
                </div>
                <div className = {`${!smallCard ? 'text-[8px]' : 'text-[12px]'} `}>
                {title}
                </div>
                </div>
                
                <div className = {`font-bold italic ${!smallCard ? 'text-[12px]' : 'text-[18px]'}`}>
                {company}
                </div>
            </div>


        </div>
    )
}

export default Card
