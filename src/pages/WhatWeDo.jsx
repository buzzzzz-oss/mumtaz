import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/WhatWeDo.css';

import peopleImage from '../assets/2.png';
import envImage from '../assets/3.png';
import mumtazLogo from '../assets/mumtaz_logo_white.png';

const WhatWeDo = () => {
    const [activeTab, setActiveTab] = useState('people');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        people: {
            title: "PEOPLE SOLUTIONS",
            description: "Mumtaz Integrated Services Group delivers structured manpower supply services in UAE, supporting businesses across Sharjah, Dubai, Abu Dhabi, and other Emirates with skilled, semi-skilled, and certified workforce solutions. With over 100+ trained professionals, we provide reliable manpower support for residential communities, commercial properties, industrial facilities, warehouses, hospitality sectors, and marine environments.",
            image: peopleImage,
            logoLine1: "MUMTAZ",
            logoLine2: "PEOPLE",
            link: "/people-solutions"
        },
        environmental: {
            title: "ENVIRONMENTAL SOLUTIONS",
            description: "Mumtaz Environmental Services leads the way in sustainable pest management and hygiene solutions. We are dedicated to creating healthier, safer living and working spaces. By utilizing advanced, eco-friendly methods and following strict compliance standards, our environmental team protects your premises while supporting broader sustainability goals.",
            image: envImage,
            logoLine1: "MUMTAZ",
            logoLine2: "ENVIRONMENT",
            link: "/environmental-solutions"
        }
    };

    const currentData = content[activeTab];

    return (
        <div className="wwd-page">
            <section className="wwd-hero">
                <div className="container animate-on-scroll">
                    <h1>WHAT WE DO</h1>
                    <p>Over two decades of excellence in integrated facility solutions.</p>
                </div>
            </section>

            <div className="wwd-content-wrapper container">
                <div className="wwd-tabs-container">
                    <div className="wwd-tabs">
                        <button
                            className={`wwd-tab ${activeTab === 'people' ? 'active' : ''}`}
                            onClick={() => setActiveTab('people')}
                        >
                            People Solutions
                        </button>
                        <button
                            className={`wwd-tab ${activeTab === 'environmental' ? 'active' : ''}`}
                            onClick={() => setActiveTab('environmental')}
                        >
                            Environmental Solutions
                        </button>
                    </div>
                </div>

                <div className="wwd-content-section">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="wwd-tab-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="wwd-image-area">
                                <div className="wwd-main-circle">
                                    <img src={currentData.image} alt={currentData.title} />
                                </div>
                                <div className="wwd-logo-circle">
                                    <img src={mumtazLogo} alt="MUMTAZ Logo" className="wwd-circle-logo" />
                                    <span className={activeTab === 'environmental' ? 'text-env' : ''}>{currentData.logoLine2}</span>
                                </div>
                            </div>

                            <div className="wwd-text-area">
                                <h2 className="wwd-subtitle">{currentData.title}</h2>
                                <p className="wwd-description">
                                    {currentData.description}
                                </p>
                                <Link to={currentData.link} className="wwd-btn-learn-more">
                                    LEARN MORE <ArrowRight size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
