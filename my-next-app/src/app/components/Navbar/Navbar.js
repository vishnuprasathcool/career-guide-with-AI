"use client";
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Next Step</div>
            <div className="nav-links">
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            <button className="nav-cta">Login</button>
        </nav>
    );
};

export default Navbar;
