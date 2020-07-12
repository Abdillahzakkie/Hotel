import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundStyle from "../StyleComponents/BackgroundStyle";
import Banner from "../Banner/Banner";
import logo from "../../assets/logo.png";
import defaultBcg from "../../assets/hero.jpeg";
import "./navbar.css";

let NavList = ['', 'facilities', 'blog', 'about', 'contact', 'my account'];
NavList = NavList.map(item => {
    return (
        <Link to={`/${item.replace(' ', '_')}`} key={item} 
            className={item !== 'my account' ? 'nav-links-item' : 'nav-links-item my-account'}>
            <li>{item !== '' ? item : 'home'}</li>
        </Link>
    )
});

const Navbar = ({ background, title, titleSpan, subtitle, optionalText }) => {
    const [navState, setNavState] = useState(false);

    return (
        <>
            <BackgroundStyle defaultBcg={background ? background : defaultBcg}>
                <div className="general-navbar">
                    <nav className="center navbar">
                        <div className="nav-brand">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="nav-toggle" onClick={() => setNavState(!navState)}>
                            <button>{navState ? "⬆" : "⬇"}</button>
                        </div>
                        <div className= {navState ? "links nav-mobile-container" : "links links-container"}>
                            <ul>{NavList}</ul>
                        </div>
                    </nav>
                    <Banner title={title} titleSpan={titleSpan} subtitle={subtitle}>
                        {optionalText}
                    </Banner>
                </div>
            </BackgroundStyle>
        </>
    )
}

export default Navbar