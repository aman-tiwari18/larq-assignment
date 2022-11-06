import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import Bottles from "./screens/Bottles";
import Product from "./screens/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="h-screen">
                <Navbar />
                <Homepage />
              </div>
              <Bottles />
              <Work />
              <Testimonials />
            </div>
          }
        />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
