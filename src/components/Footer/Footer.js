import React from 'react';
import "./footer.css";

const Footer = ({companyName}) => {
    const getYear = new Date().getFullYear();
    return (
        <div className='center footer'>
            <p>
                copyright &copy; {getYear} {companyName} Company
            </p>
        </div>
    )
}
export default Footer