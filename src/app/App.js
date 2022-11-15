import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Admin from './Admin/Admin'
import React from "react";
import Products from "./Productos/products";

function App() {
  return (
    <div>
      

      <Router>
                
        <Routes>
          <Route path="/" element={<Homepage />} >
            <Route path="product" element={<Products />} />
            </Route>

          

          <Route path="admin" element={<Admin />} />
          
          
        </Routes>
      </Router>
    </div>
  );

}

export default App;
