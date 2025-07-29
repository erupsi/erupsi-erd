import React, { useEffect, useState } from 'react'
import EMarket from './components/eMarket';
// import EMarket from "./components/eMarket.jsx"; 

function Ecommerce(){

    return(
        <div>
            <EMarket />
        </div>
    )

    // const [products, setProducts] = useState([]);
    
    // useEffect(() => {
    //     fetch("http://localhost:3000/products")
    //     .then((res) => res.json())
    //     .then((data) => setProducts(data))
    //     .catch((err) => console.error("Error fetching products:", err));
    // }, []);
    // console.log(products); 

    // return (
    //     <div className="grid grid-cols-2 gap-4 p-4 bg-amber-400">
    //     {products.map((product) => (
    //         <div key={product.id} className="border rounded-xl p-4 shadow">
    //         <h2 className="text-xl font-semibold">{product.name}</h2>
    //         <p>{product.description}</p>
    //         <p className="text-green-600 font-bold">Rp {product.price}</p>
    //         </div>
    //     ))}
    //     </div>
    // );
}

export default Ecommerce;