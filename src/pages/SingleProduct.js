import React, {useContext} from 'react';
import {ProductContext} from '../Context/ProductContext';
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Navbar from '../components/Navbar/Navbar';
import Loading from '../components/Loading/Loading';

import ProductDetail from "../components/Products/ProductDetail/ProductDetail";
import ProductInfo from "../components/Products/ProductInfo/ProductInfo";
import Error from "./Error";
import "./Styles/singleProduct.css";



const SingleProduct = props => {
    const context = useContext(ProductContext);

    const {getSlug, loading} = context;
    let products = getSlug(props.match.params.id);
    if(!context || loading) { return <Loading /> }
    if(!products) { return <Error /> }

    const {seller, name, price, images, reviews, quantity, extras, description} = products;

    const [mainImg, ...rest] = images;
    const ProductImage = rest.map((item, i) => {
        return (
            <div className='image' key={i}>
                <img src={item} alt={name} />
            </div>
        )
    });

    return (
        <>
            <Navbar background={mainImg} 
                title={name} subtitle={seller} 
                optionalText='return to store' 
            />
            <div className='single-product'>
                <section className='center products-image'>
                    {ProductImage}
                </section>
                <section className='center product-container'>
                    <ProductDetail description={description} />
                    <ProductInfo 
                        seller={seller} 
                        name={name} price={price} quantity={quantity} 
                        reviews={reviews}
                    />
                </section>
                <section className="extras">
                    <h3>extras</h3>
                    <ul>{ extras.map((item, i) => <li key={i}>- {item}</li>) }</ul>
                </section>
            </div>
        </>
    )
}
export default ErrorBoundary(SingleProduct)