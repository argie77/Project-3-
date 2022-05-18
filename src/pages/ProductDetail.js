import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
const ProductDetail = (props) => {
  // Declaratoins
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams()
  const { products } = props;

  // State
  const [product, setProduct] = useState(null);
  
  // Effects
  useEffect(() => {
    // 
    if (product) {
      const foundProduct = product.find((p) => p.id === params.id);
      setProduct(foundProduct);
    } else {
      getProduct();
    }
  }, []);
  
  // Getter
  function getProduct() {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      console.log('res', res)
      setProduct(res);
    })
  }
   
  const loaded = () => (
    <div>
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <img src={product.image} alt={product.title} />
    </div>
  );

  const loading = () => (
    <h1>Loading...</h1>
  );
  // if coin has data, run the loaded function, otherwise, run loading
  return product ? loaded() : loading();
};
export default ProductDetail;



