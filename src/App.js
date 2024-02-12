import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import ProductDetailpage from './page/ProductDetailpage';
import Productpage from './page/Productpage';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/products" element={<Productpage />}/>
        <Route path="/products/:id" element={<ProductDetailpage />}/> 
      </Routes>
    </div>
  );
}

export default App;
