import React from "react";
import "./homepage.css";
import CapPng from "../assets/cap.png";
import bottle from "../assets/bottle.png";

const Homepage = () => {
  const [style, setStyle] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setStyle(true);
    }, 1300);
  }, []);

  return (
    <div className="flex justify-center section">
      <div className={style ? "next" : "cap"}>
        <img src={CapPng} alt="cap" width="120px" />
      </div>
      <div className="circle"></div>
      <div className="bottle">
        <img src={bottle} alt="cap" width="150px" />
      </div>
      <div className="heading">
        <div>Self Cleaning bottle</div>
        <div className="mt-[-10px]">In 60 Seconds</div>
      </div>
      <div className="sub-heading">
        <div>Hit refresh with the intelligently clean bottle built for adventure.</div>
      </div>
      <div className = {style ? "kbutton" : "prebutton"}>
          <button>KNOW MORE</button>
      </div>
    </div>
  );
};

export default Homepage;
