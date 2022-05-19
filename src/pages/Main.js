import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../component/SearchContainer";

function Main(props) {

    const [products, setProducts] = useState(null)
    useEffect(() => {
        const getProducts = async () => {
            //const URL ="https://fakestoreapi.com/products"
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setProducts(data)
            console.log(data.title)
            console.log(products)
            //   console.log(data.data)
        }
        getProducts()
    }, [])
    
    if (!products) return <h1> We can’t find a product</h1>
    const loaded = 
    //     return (
        //         <>
        //     <div classname= "h1">
        //  <h1>hello</h1>
        //    </div>
        
        
        // <h1> Kaimono </h1>
        
        products.map((product, idx) => {
            return (
                <div key={idx} >
                    
                        <h1></h1>
                        <Link to={`/ProductDetail/${product.id}`}>

                            <h3> {product.category}
                                <img src={product.image} alt={product.title} /></h3>
                        </Link>
                    </div>
                )
            })
        

        // //    </>
        // )
    
    return loaded 
}
export default Main