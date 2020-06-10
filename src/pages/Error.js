import React from 'react'
import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import mainImg from "../assets/hero.jpeg";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const Error = () => {
    return (
        <StyledHero img ={mainImg} className='heroBcg'>
            <div className="center">
                <Banner title={'404'} subtitle={'page not found'}>
                    return to home
                </Banner>
            </div>
        </StyledHero>
    )
}

export default ErrorBoundary(Error)
