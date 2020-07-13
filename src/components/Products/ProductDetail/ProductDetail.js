import React from 'react';
import "../products.css";

export default function ProductDetail({description}) {
    return (
        <section className='product-section'>
            <h2>details</h2>
            <p>{description}</p>
        </section>
    )
}