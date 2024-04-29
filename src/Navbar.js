import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

import homeIcon from './Images/icons8-mosque-50.png';
import qiblaIcon from './Images/icons8-qibla-direction-50.png';
import trackerIcon from './Images/icons8-checkmark-32.png';
import settingsIcon from './Images/icons8-settings-32.png';
//Imported icon images for navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">
                        <img src={homeIcon} alt="Home" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/qibla">
                        <img src={qiblaIcon} alt="Qibla" />
                        Qibla
                    </Link>
                </li>
                <li>
                    <Link to="/tracker">
                        <img src={trackerIcon} alt="Tracker" />
                        Tracker
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <img src={settingsIcon} alt="Information" />
                        Information
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

