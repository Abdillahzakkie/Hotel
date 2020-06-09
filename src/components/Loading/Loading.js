import React from "react";
import "./loading.css";
import loading from "./gif/loading-arrow.gif";

const Loading = ({ preloader }) => (
    <div className='loading'>
        <img src={preloader || loading} alt='loading' />
    </div>
);
export default Loading