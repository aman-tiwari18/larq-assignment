import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

function App() {
  return (
    <div >
      
      <div className = "h-screen">
      <Navbar />
      <Homepage />
      </div>
      <Work/>
      <Testimonials/>
      {/* <Work/> */}
    </div>
  );
}

export default App;
