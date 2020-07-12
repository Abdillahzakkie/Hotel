import React from 'react';
import "./scrollTop.css";

const ScrollTop = () => {
    return (
        <div className='center scrollTop scroll-link' onClick={() => window.scrollTo({top: 0, left: 0})}>
            <span>⬆</span>
        </div>
    )
}
export default ScrollTop