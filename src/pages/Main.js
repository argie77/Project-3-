import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../component/SearchContainer";

function Main(props) {

    const [products, setProducts] = useState(null)
    useEffect(() => {
        const getProducts = async () => {
           
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setProducts(data)
         
        }
        getProducts()
    }, [])
    
    //Ray help with the if to properly read the map
    if (!products) return <h1 className="loaded">Loading... </h1>
    const loaded = 
   
        //Troy help to resize the image
        products.map((product, idx) => {
            return (
                <div key={idx} >
                    
                        <h1></h1>
                        <Link to={`/ProductDetail/${product.id}`}>

                            <h3> {product.category}
                                
                                <img className="image" src={product.image} alt={product.title} /></h3>
                        </Link>
                    </div>
                )
            })
        

       
    
    return loaded 
}
export default Main