import React, {useContext} from 'react';
import {ProductContext} from '../Context/ProductContext';
import Navbar from '../components/Navbar/Navbar';
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const Home = () => {
    const context = useContext(ProductContext);
    const {featuredProducts} = context;

    return (
        <div className='home'>
            <Navbar />
            <Header input1='featured products'/>
            <Card cardItem={featuredProducts} />
        </div>
    )
}

export default ErrorBoundary(Home)
