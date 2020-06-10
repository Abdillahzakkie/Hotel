import React from 'react'
import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import mainImg from "../assets/hero.jpeg";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";


const Rooms_Rent = () => {
    return (
        <>
            <StyledHero img ={mainImg} className='heroBcg'>
                <div className="center">
                    <Banner title={'Hotel Ng'} subtitle={'This page is still under build'}>
                        return to home
                    </Banner>
                </div>
            </StyledHero>
        </>
    )
}

export default ErrorBoundary(Rooms_Rent)
