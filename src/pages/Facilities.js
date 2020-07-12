import React, {useContext} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from "../components/Banner/Banner";
import defaultBcg from "../assets/bg.jpeg";
import "./Styles/facilities.css";
import {ProductContext} from "../Context/ProductContext";
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";



const Facilities = () => {
    const context = useContext(ProductContext);
    const {selectValue, handleSelectChange, category, sortedProducts} = context;


    // Get unique category and map result
    const selectOption = category.map(item => <option key={item}>{item}</option>);

    const OptionButton = (
        <select value={selectValue} onChange={handleSelectChange}>
            {selectOption}
        </select>
    )
    return (
        <div className='facilities'  >
            <Navbar title='Hotel Ng' optionalText='Discover more'/>
            <Header input1='Projects' input2={OptionButton} />
            <Card cardItem={sortedProducts} />
        </div>
    )
}

export default ErrorBoundary(Facilities)
