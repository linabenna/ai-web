import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import AILogo from '../assets/ai-logo-2.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () => setClick(!click);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => window.removeEventListener('scroll', changeColor);
    }, []);

    return (
        <div className={color ? 'header-bg' : 'header'}>
            <Link to='/'>
                <img src={AILogo} className='logo' alt='Logo' />
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/community'>Community</Link>
                </li>
                <li>
                    <Link to='/apply'>Join the Board</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: '#fff' }} />
                ) : (
                    <FaBars size={20} style={{ color: '#fff' }} />
                )}
            </div>
        </div>
    );
}

export default Navbar;
