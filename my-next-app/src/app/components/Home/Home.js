"use client";
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["AI Guidance", "Next Step"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && text === fullText) {

                setTimeout(() => setIsDeleting(true), 3000); // Wait 3 seconds before deleting

            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="logo">Next Step</div>
                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <button className="nav-cta">Login</button>
            </nav>

            <main className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Shape Your Future with <br /><span className="highlight">{text}<span className="cursor">|</span></span>
                    </h1>
                    <p className="hero-subtitle">
                        Navigate your professional journey with precision. Our AI-powered platform provides personalized career paths, skill analysis, and resume optimization.
                    </p>
                    <div className="hero-buttons">
                        <button className="primary-btn">Start Your Journey</button>
                        <button className="secondary-btn">Learn More</button>
                    </div>
                </div>


            </main>
        </div>
    );
};

export default Home;
