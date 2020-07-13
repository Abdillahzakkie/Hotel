import React from 'react';
import "./header.css";

export default function Header ({ item1, item2 }) {
    return (
        <div className='center title'>
            <div className="card">
                <h1>{item1}</h1>
            </div>
            <div className="card">{item2}</div>
        </div>
    )
}
