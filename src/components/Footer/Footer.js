import React from 'react';
import "./footer.css";

const Footer = () => {
    const getYear = new Date().getFullYear();
    return (
        <div className='center footer'>
            <p>
                copyright &copy; {getYear} B Hotel Company
            </p>
        </div>
    )
}
export default Footer