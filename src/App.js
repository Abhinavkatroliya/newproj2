import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from "./components/Product";
import Products from "./components/Products";
import Cart from './components/Cart';






function App() {
  return (
    <Router>
    <>
     
        <Navbar />
        <Routes>
          <Route  path ="/" element={<Home/>}/>
          <Route  path ="/products" element={<Product/>}/>
          <Route  path ="/products/:id" element={<Products/>}/>
          <Route  path ="/cart" element={<Cart/>}/>
        </Routes>
     
    </>
    </Router>


  );
}

export default App;
