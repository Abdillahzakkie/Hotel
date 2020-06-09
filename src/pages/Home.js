import React, {useState, useContext} from 'react';
import "./Styles/home.css";
import {ProductContext} from "../Context/ProductContext";
import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";


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

    console.log(featuredProducts)
    return (
        <div className='home'>
            <StyledHero img ={sliderImg[slider]} className='heroBcg'>
                <div className="center">
                    <Banner title={companyName}>
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
            <Header input1='unique products'/>
            <Card cardItem={featuredProducts} />
        </div>
    )
}

export default Home
