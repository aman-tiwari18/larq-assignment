import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import Bottles from "./screens/Bottles";
import Product from "./screens/Product";

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
      {/* <Product/> */}

    </div>
  );
}

export default App;
