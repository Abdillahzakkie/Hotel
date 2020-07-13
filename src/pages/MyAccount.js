import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import mainImg from "../assets/hero.jpeg";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import "./Styles/my-account.css";

const MyAccount = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    return (
        <div className='center contact'>
            <Navbar background={mainImg} 
                title='Contact page' 
                subtitle='This page is still under build'
                optionalText='return to home'
            />
            <div className="center contact-container">
                <section className="center section">
                    <h2>contact us</h2>
                </section>
                <section className="center section">
                    <h2>contact us</h2>
                    <form action="" className='center form-group'>
                        <input value={input1} 
                            type="text" placeholder='Full Name'
                            onChange={e => setInput1(e.target.value)}
                            required
                        />
                        <input value={input2} 
                            type="email" placeholder='Email'
                            onChange={e => setInput2(e.target.value)}
                            required
                        />
                        <textarea value={input3}
                            placeholder='Message'
                            onChange={e => setInput3(e.target.value)}
                            required 
                        />
                        <button type='submit'>send</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default ErrorBoundary(MyAccount)
