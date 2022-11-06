import { useEffect, useState } from "react";
import bottleBlue from "../assets/bottleBlue.png";
import bottleGreen from "../assets/bottleGreen.png";
import bottleDarkGreen from "../assets/bottleDarkGreen.png";
import bottlePink from "../assets/bottlePink.png";
import "./Bottle.css";
function Bottles() {
  const [position, setPosition] = useState(false);

  useEffect(() => {
      console.log(position)
    const handleScroll = (e) => {
      if (window.scrollY > 450) {
        setPosition(true);
        console.log("working")
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);
  return (
    <div className="h-screen w-full flex flex-col justify-center bg-white">
      <div
        className="h-4/5"
        style={{
          background:
            "linear-gradient(180deg, rgba(28, 91, 79, 0.2) 0%, rgba(28, 142, 128, 0.2) 100%), radial-gradient(81.25% 325% at 14.27% 29.03%, #565859 9.84%, rgba(17, 24, 30, 0.98) 65.12%)",
        }}
      >
          
        <div className="relative">
          <div className={
              !position ? 'absolute translate-y-[300px]' : 'bottleBlue'
          }>
            <img
              src={bottleBlue}
              alt="bottleBlue"
              width="350px"
              height="auto"
            />
          </div>
          <div
            className={
                !position ? 'absolute translate-x-[550px] translate-y-[-40px]' : 'bottleGreen'
            }
          >
            <img
              src={bottleGreen}
              alt="bottleBlue"
              width="450px"
              height="auto"
            />
          </div>
          <div className={
            !position ? "absolute translate-x-[700px] translate-y-[400px]" : "bottleDarkGreen"
          }>
            <img
              src={bottleDarkGreen}
              alt="bottleBlue"
              width="450px"
              height="auto"
            />
          </div>
          <div className={
              !position ? "absolute right-0 translate-y-0" : "bottlePink"
          }>
            <img
              src={bottlePink}
              alt="bottleBlue"
              width="350px"
              height="auto"
            />
          </div>
          <div className="flex absolute h-screen w-full justify-center items-center">
            <div className="text-7xl font-bold text-white text-center">
              A smart <br />
              way to sip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottles;
