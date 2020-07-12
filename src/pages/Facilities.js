import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
// import defaultBcg from "../assets/bg.jpeg";
import "./Styles/facilities.css";
import {ProductContext} from "../Context/ProductContext";
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const Facilities = () => {
    const context = useContext(ProductContext);
    const {selectValue, handleSelectChange, category, sortedProducts} = context;

    const OptionButton = (
        <select value={selectValue} onChange={handleSelectChange}>
            { category.map(item => <option key={item}>{item}</option>) }
        </select>
    )
    return (
        <div className='facilities'>
            <Navbar title='Hotel Ng' optionalText='Discover more' />
            <Header input1='Projects' input2={OptionButton} />
            <Card cardItem={sortedProducts} />
        </div>
    )
}

export default ErrorBoundary(Facilities)
