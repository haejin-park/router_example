import { useState } from 'react';
import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import Loginpage from './page/Loginpage';
import ProductDetailpage from './page/ProductDetailpage';
import Productpage from './page/Productpage';
import {Routes, Route, Navigate } from "react-router-dom";
import Userpage from './page/Userpage';


function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate === true? <Userpage /> : <Navigate to="/login"/>; 
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/products" element={<Productpage />}/>
        <Route path="/products/:id" element={<ProductDetailpage />}/> 
        <Route path="/login" element={<Loginpage />}/> 
        <Route path="/user" element={<PrivateRoute />}/> 

      </Routes>
    </div>
  );
}

export default App;
