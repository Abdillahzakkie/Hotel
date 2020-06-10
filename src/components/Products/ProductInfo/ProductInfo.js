import React from 'react';
import "../products.css";
import { Link } from 'react-router-dom';

const ProductInfo = (props) => {
    const {seller, name, price, quantity, reviews} = props;

    return (
        <section className='product-section'>
            <h2>info</h2>
            <p>seller: {seller || 'Seller name'}</p>
            <p>product: {name}</p>
            <p>price : {`$${price}`}</p>
            <p>quantity : {quantity}</p>
            <p>reviews : {reviews}</p>

            <Link to='/' className='product-checkout'>checkout</Link>
        </section>
    )
}

export default ProductInfo
