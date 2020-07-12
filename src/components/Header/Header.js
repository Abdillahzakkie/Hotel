import React from 'react';
import "./header.css";

const Header = ({ input1, input2 }) => {
    return (
        <div className='center title'>
            <div className="card">
                <h1>{input1}</h1>
            </div>
            <div className="card">
                {input2}
            </div>
        </div>
    )
}
export default Header
