import React from 'react';
import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import mainImg from "../assets/hero.jpeg";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import "./Styles/contact.css";

const Contact = () => {
    return (
        <div className='center contact'>
            <StyledHero img ={mainImg} className='heroBcg'>
                <div className="center">
                    <Banner title={'Contact page'} subtitle={'This page is still under build'}>
                        return to home
                    </Banner>
                </div>
            </StyledHero>
            <div className="center contact-container">
                <section className='box'>
                    <div className='center'>
                        <h1>b hotel comapny</h1>
                        <div />
                        <p>Seattle, WA 98122</p>
                        <p>info@bhotel.com</p>
                        <p>P 206.219.5599 | F 206.973.5350</p>
                    </div>
                </section>
                <section className="box">
                    hello world
                </section>
            </div>
        </div>
    )
}

export default ErrorBoundary(Contact)
