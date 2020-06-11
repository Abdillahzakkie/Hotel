import React, {useContext} from 'react';
import {ProductContext} from '../Context/ProductContext';
import "./Styles/singleProduct.css";
import StyledHero from '../components/StyledHero/StyledHero';
import Banner from "../components/Banner/Banner";
import Loading from '../components/Loading/Loading';

import ProductDetail from "../components/Products/ProductDetail/ProductDetail";
import ProductInfo from "../components/Products/ProductInfo/ProductInfo";
import Error from "./Error";


const SingleProduct = props => {
    const context = useContext(ProductContext);
    const {getSlug, loading} = context;
    
    let products = getSlug(props.match.params.slug);

    if(!context || loading) {return <Loading />}
    if(!products) {return <Error />}

    const {seller, name, price, images, reviews, quantity, extras, description} = products;

    const [mainImg, ...rest] = images;
    const ProductImage = rest.map((item, i) => <div className='image'><img key={i} src={item} alt={name} /></div>);

    return (
        <>
            <StyledHero img ={mainImg} className='heroBcg'>
                <div className="center">
                    <Banner title={name} subtitle={seller}>return to store</Banner>
                </div>
            </StyledHero>
            <div className='single-product'>
                <section className='center products-image'>
                    {ProductImage}
                </section>
                <section className='center product-container'>
                    <ProductDetail description={description} />
                    <ProductInfo seller={seller} 
                        name={name} price={price} quantity={quantity} 
                        reviews={reviews}
                    />
                </section>
                <section className="extras">
                    <h3>extras</h3>
                    <ul> 
                        { extras.map((item, i) => <li key={i}>- {item}</li>) } 
                    </ul>
                </section>
            </div>
        </>
    )
}
export default SingleProduct