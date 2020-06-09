import React from "react";
import {Link} from 'react-router-dom'

let Navlist = [
    { id: '/', name: 'home' },
    { id: '/facilities', name: 'facilities' },
    { id: '/rooms', name: 'rooms & rent' },
    { id: '/contact', name: 'contact' },
];
Navlist = Navlist.map(item => {
    return (
        <Link key={item.id} to={item.id}>
            <li>{item.name}</li>
        </Link>
    )
});
export default Navlist