import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import "./Styles/home.css";
import {ProductContext} from "../Context/ProductContext";
import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import side_img from "../assets/home1.jpeg";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";


// Slider images
import img1 from "../assets/hero.jpeg";
import img2 from "../assets/hero.jpg";


const Home = ({companyName}) => {
    const context = useContext(ProductContext);
    const {featuredProducts} = context;
    let [slider, setslider] = useState(0);
    const sliderImg = [img1, img2];

    const handleSlider = e => {
        const current = e.currentTarget.dataset.id;
        if(current === 'next') {
            slider < (sliderImg.length - 1) 
                ? setslider(slider + 1)
                : setslider(0)      
        }
        if(current === 'prev') {
            const img = (sliderImg.length - 1);
            if(slider === img){
                setslider(0)
            }
            if(slider === 0) {
                setslider(img)
            } else {
                setslider(slider - 1)
            }
        }
    }

    return (
        <div className='home'>
            <StyledHero img ={sliderImg[slider]} className='heroBcg'>
                <div className="center">
                    <Banner title={companyName} to={'/facilities'}>
                        Discover more
                    </Banner>
                </div>
                <div > 
                    <button 
                        className="prev" 
                        onClick={handleSlider} data-id='prev'
                    ></button>
                </div>
                <div >
                    <button 
                        className="next" 
                        onClick={handleSlider} data-id='next'>
                    </button>
                </div>
            </StyledHero>
            <section className='center section'>
                <div> <img src={side_img} alt=""/> </div>
                <div>
                    <h2>First Class Services</h2>
                    <p>
                        B Hotel is the tallest hospitality building in Nigeria, 
                        and with its terraces, it offers splendid views of the Lagos city, 
                        most importantly the Lagos Port and Lagos skyline. It is a 10 minutes drive away 
                        from Ikoyi Club; with its proximity to Silverbird Cinemas and Embassies, 
                        it has the right location for guests to enjoy their stay.
                    </p>
                    <Link to='/about'>
                        <button>read more</button>
                    </Link>
                </div>
            </section>

            <section className='center section'>
                <div> <img src={side_img} alt=""/> </div>
                <div>
                    <h2>Little About B Hotel</h2>
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
            
            <Header input1='featured products'/>
            <Card cardItem={featuredProducts} />
        </div>
    )
}

export default ErrorBoundary(Home)
