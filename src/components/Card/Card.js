import React from 'react';
import "./card.css";
import Loading from "../Loading/Loading";

const Card = ({cardItem}) => {
    if(!cardItem) { return <Loading /> }
    const filteredProjects = cardItem.map(item => {
        return (
            <div key={item.id} className="center card">
                <img src={item.images[0]} alt={item.name} />
                <h2>
                    {/* maximum characters 20 words */}
                    {item.name}
                </h2>
                <a href={item.slug} target='_blank' rel='noopener noreferrer'>
                    <button className="center features">features</button>
                </a>
            </div>
        )
    });

    return (
        <div className='services-container'>
            <div className="center services">
                {filteredProjects}
            </div>
        </div>
    )
}

export default Card
