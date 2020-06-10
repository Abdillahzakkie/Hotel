import React from 'react';
import {FiPhoneIncoming} from "react-icons/fi";
import {GoLocation} from "react-icons/go";
import {BsEnvelope} from "react-icons/bs";
import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import mainImg from "../assets/hero.jpeg";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import "./Styles/contact.css";

const Contact = () => {
    return (
        <>
            <StyledHero img ={mainImg} className='heroBcg'>
                <div className="center">
                    <Banner title={'Contact page'} subtitle={'This page is still under build'}>
                        return to home
                    </Banner>
                </div>
            </StyledHero>
            <section className='center section'>
                <div className='contact-info'> 
                    <FiPhoneIncoming />
                    <GoLocation />
                    <BsEnvelope />
                </div>
                <div>
                    <h2>First Class Services</h2>
                    <p>
                        B Hotel is the tallest hospitality building in Nigeria, 
                        and with its terraces, it offers splendid views of the Lagos city, 
                        most importantly the Lagos Port and Lagos skyline. 
                        It is a 10 minutes drive away from Ikoyi Club; 
                        with its proximity to Silverbird Cinemas and Embassies, 
                        it has the right location for guests to enjoy their stay.
                    </p>
                    <button>reserve</button>
                </div>
            </section>
        </>
    )
}

export default ErrorBoundary(Contact)
