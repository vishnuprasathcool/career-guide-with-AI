"use client";
import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Next Step</div>

            <div className="hamburger" onClick={toggleMenu}>
                <div className={isOpen ? "line open" : "line"}></div>
                <div className={isOpen ? "line open" : "line"}></div>
                <div className={isOpen ? "line open" : "line"}></div>
            </div>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="#features" onClick={() => setIsOpen(false)}>Features</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                <button className="nav-cta mobile-cta">Login</button>
            </div>
            <button className="nav-cta desktop-cta">Login</button>
        </nav>
    );
};

export default Navbar;
