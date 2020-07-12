import React from 'react';
import {Link} from "react-router-dom";
import './banner.css';


const Banner = ({optionalText, title, titleSpan, subtitle, to}) => {
    return (
        <div className='banner'>
            <h2>{title || 'Company name'} 
                <span>{titleSpan}</span>
            </h2>
            <div />
            <p>{subtitle || 'Welcome message'}</p>
            <Link to= {to ? to : '/'}>
                <button>
                    {optionalText ? optionalText : 'discover more'}
                </button>
            </Link>
        </div>
    )
}

export default Banner
