import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
import {FaAlignRight} from "react-icons/fa";
import logo from "../../assets/logo.jpg";


let Navlist = [
    { id: '/', name: 'home' },
    { id: '/facilities', name: 'facilities' },
    { id: '/about', name: 'about' },
    { id: '/contact', name: 'contact' },
];
Navlist = Navlist.map(item => {
    return (
        <Link key={item.id} to={item.id}>
            <li>{item.name}</li>
        </Link>
    )
});

const Navbar = ({companyName}) => {
    const [navState, setNavState] = useState(false);
    const handleToggle = () => setNavState(!navState);

    return (
        <nav className='center navbar'>
            <div className="center nav-brand">
                <Link to='/'>
                    <img src={logo} alt=""/>
                </Link>
                <button className="nav-toggle" onClick={handleToggle}>
                    <FaAlignRight />
                </button>
            </div>
            <div className="nav-links">
                <ul className={navState ? "links nav-mobile" : "links nav-large"}>
                    {Navlist}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
