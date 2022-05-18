import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from "./component/Nav"
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Home from './component/Home';


function App() {
  // State
  const [products, setProducts] = useState([])

  // Effects
  useEffect(() => {
    const getProducts= () => {
      fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        //we define products (use setmethod to define)
        console.log(res.data)
        setProducts(res.data);
      })
    }
    getProducts();
  }, [])

  // Getters
  

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes >
          <Route index element= {<Main />} />
          <Route path="/Productlist/" element={<ProductList products={products} />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
