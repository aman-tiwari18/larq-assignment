import React from 'react'

const WorkCard = ({props}) => {
    return (
        <div className = "relative flex items-center  ">
            <div className = "text-[120px] font-bold absolute opacity-10">{props?.backGround}</div>
            <div className = "absolute mt-[4px] ml-[22px] text-[18px] text-quote font-semibold">
                {props?.heading}
            </div>
            <div className = "mt-[100px] ml-[22px] opacity-50 font-semibold text-[12px]">
            {props?.subHeading}
            </div>
        </div>
    )
}

export default WorkCard
