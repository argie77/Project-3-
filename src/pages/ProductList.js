// Imports
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

// Component
const ProductList = ({products}) => {

  
  console.log('product', products);
  

  
  return (
    <div>
      {products.map((product, idx) => {
        return (
          <Link key={idx} to={`/ProductDetail/${product.id}`} >
              <p>{product.title}</p>
          </Link>
        )
      })}
      
    </div>
  )
};

export default ProductList;