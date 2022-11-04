import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import Bottles from "./screens/Bottles";

function App() {
  return (
    <div >
      
      <div className = "h-screen">
      <Navbar />
      <Homepage />
      </div>
      <Bottles />
      <Work/>
      <Testimonials/>

    </div>
  );
}

export default App;
