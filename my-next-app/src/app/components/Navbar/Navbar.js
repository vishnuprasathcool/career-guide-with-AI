"use client";
import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Next Step</div>
            <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="#features">Features</Link>
                <Link href="/about">About</Link>
                <Link href="#contact">Contact</Link>
            </div>
            <button className="nav-cta">Login</button>
        </nav>
    );
};

export default Navbar;
