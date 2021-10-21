import React from 'react';
import products from '../products'
import Product from '../components/Product'

export default function Homescreen(props) {
    return (
        <div className="row justify-content-center">
            {products.map(product=>{
                return <Product product={product}/>
            })}
        </div>
    );
}