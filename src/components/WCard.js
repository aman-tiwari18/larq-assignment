import React from "react";

const WCard = ({ props }) => {
    console.log(props.Image)
  return (
    <div className="relative flex items-center justify-center h-[250px] w-1/3 bg-[#F5F5F5]">
      {props?.Image ? (
       <img src={props.Image} className='w-full h-full' alt='back'/>
      ) : (
        <>
          <div className="text-[120px] font-bold flex absolute opacity-10">
            {props?.backGround}
          </div>
          <div className="absolute mt-[4px] text-[18px] text-center text-quote font-semibold">
            {props?.Heading}
          </div>
        </>
      )}
    </div>
  );
};

export default WCard;
