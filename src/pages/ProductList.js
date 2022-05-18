// Imports
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

// Component
const ProductList = ({products}) => {
  // Declarations
  
  // State
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (products) {
//       setIsLoading(false);
//     }
//   }, [products])
  
  console.log('product', products);
  
//   if (isLoading) {
//     return <img className="loading" src="https://i.gifer.com/7HXg.gif" alt='loading gif' />
//   }
  
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