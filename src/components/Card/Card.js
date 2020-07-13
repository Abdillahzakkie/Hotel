import React from 'react';
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading";
import "./card.css";

export default function Card({cardItem}) {
    if(!cardItem) { return <Loading /> }

    const filteredProjects = cardItem.map(item => {
        return (
            <div key={item.id} className="center card">
                <img src={item.images[0]} alt={item.name} />
                <h2>
                    {/* maximum characters 20 words */}
                    {item.name}
                </h2>
                <Link to={`/facilities/${item.id}`}>
                    <button className="center features">features</button>
                </Link>
            </div>
        )
    });
    return <div className="center card-list">{filteredProjects}</div>
}