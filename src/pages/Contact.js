import React, {useState} from 'react';
import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import mainImg from "../assets/hero.jpeg";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import "./Styles/contact.css";

const Contact = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    return (
        <div className='center contact'>
            <StyledHero img ={mainImg} className='heroBcg'>
                <div className="center">
                    <Banner title={'Contact page'} subtitle={'This page is still under build'}>
                        return to home
                    </Banner>
                </div>
            </StyledHero>
            <div className="center contact-container">
                <section className="center section">
                    <h2>contact us</h2>
                    
                </section>
                <section className="section">
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

export default ErrorBoundary(Contact)
