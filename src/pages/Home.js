import React, {useContext} from 'react';
// import {Link} from "react-router-dom";
import "./Styles/home.css";
import {ProductContext} from "../Context/ProductContext";
import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import defaultBcg from "../assets/hero.jpeg";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const Home = ({companyName}) => {
    const context = useContext(ProductContext);
    const {featuredProducts} = context;

    return (
        <div className='home'>
            <StyledHero img ={defaultBcg} className='heroBcg'>
                <div className="center">
                    <Banner title={companyName} to={'/facilities'} />
                </div>
            </StyledHero>            
            <Header input1='featured products'/>
            <Card cardItem={featuredProducts} />
        </div>
    )
}

export default ErrorBoundary(Home)
