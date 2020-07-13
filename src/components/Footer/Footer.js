import React from 'react';
import "./footer.css";

export default function Footer () {
    const getYear = new Date().getFullYear();
    return (
        <div className='center footer'>
            <p>
                &copy; {getYear} DragonLord, All Rights Reserved - Designed & Built with 💖 by DragonLord.
            </p>
        </div>
    )
}