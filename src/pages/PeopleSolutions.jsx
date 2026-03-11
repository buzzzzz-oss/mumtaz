import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/WhatWeDo.css'; // Reusing the layout styles



const PeopleSolutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="wwd-page ps-page">
            <section className="wwd-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920')" }}>
                <div className="container animate-on-scroll">
                    <h1>PEOPLE SOLUTIONS</h1>
                    <p>Leading workforce and outsourcing solutions for your operational success.</p>
                </div>
            </section>

            <div className="wwd-content-wrapper container">
                <Link to="/what-we-do" className="back-link">
                    <ArrowLeft size={18} /> Back to What We Do
                </Link>

                <div className="wwd-content-section" style={{ marginTop: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="wwd-text-area" style={{ paddingLeft: 0 }}>
                            <h2 className="wwd-subtitle" style={{ fontSize: '2rem', textTransform: 'none', lineHeight: '1.3', marginBottom: '20px', color: 'var(--primary)' }}>
                                Professional Manpower Supply & Workforce Support Services in UAE
                            </h2>
                            <p className="wwd-description" style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#556b82' }}>
                                Mumtaz Integrated Services Group delivers structured manpower supply services in UAE, supporting businesses across Sharjah, Dubai, Abu Dhabi, and other Emirates with skilled, semi-skilled, and certified workforce solutions.
                            </p>
                            <p className="wwd-description" style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#556b82' }}>
                                With over 100+ trained professionals, we provide reliable manpower support for residential communities, commercial properties, industrial facilities, warehouses, hospitality sectors, and marine environments.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginTop: '30px', marginBottom: '20px', fontFamily: 'var(--font-headline)' }}>
                                Our People Solutions include:
                            </h3>

                            <div style={{ marginBottom: '25px' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '15px', fontWeight: '600' }}>Skilled & Semi-Skilled Manpower Supply</h4>
                                <div className="features-list" style={{ marginTop: '0', gap: '10px' }}>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Skilled manpower supply in Dubai, Sharjah & Abu Dhabi</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Semi-skilled workforce deployment</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Industrial workforce solutions</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Warehouse & logistics manpower support</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Marine and offshore support staff</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '15px', fontWeight: '600' }}>Housekeeping & Hospitality Staffing</h4>
                                <div className="features-list" style={{ marginTop: '0', gap: '10px' }}>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Housekeeping staff supply</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Hotel and hospitality workforce solutions</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Cleaning staff deployment</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Facility support staff</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '35px' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '15px', fontWeight: '600' }}>Technical & Soft Maintenance Support</h4>
                                <div className="features-list" style={{ marginTop: '0', gap: '10px' }}>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Electrical maintenance technicians</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Plumbing and carpentry manpower</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Minor repair & facility maintenance staff</span>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                        <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>Site supervision and operational support</span>
                                    </div>
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '20px', fontFamily: 'var(--font-headline)' }}>
                                We ensure:
                            </h3>
                            <div className="features-list" style={{ marginTop: '0', marginBottom: '35px' }}>
                                <div className="feature-item">
                                    <div className="feature-icon">✓</div>
                                    <span>Proper documentation and compliance with UAE labour regulations</span>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">✓</div>
                                    <span>Trained and certified personnel</span>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">✓</div>
                                    <span>Structured workforce deployment</span>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">✓</div>
                                    <span>Ongoing supervision and performance monitoring</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#f0f4f8', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--secondary)' }}>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: 'var(--primary)', margin: 0, fontStyle: 'italic', fontWeight: '500' }}>
                                    "Our manpower supply services in UAE are designed to provide operational continuity, workforce flexibility, and cost-effective staffing solutions for businesses across multiple sectors."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSolutions;
