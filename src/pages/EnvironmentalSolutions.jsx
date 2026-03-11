import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/WhatWeDo.css'; // Reusing the layout styles



const EnvironmentalSolutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="wwd-page env-page">
            <section className="wwd-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1920')" }}>
                <div className="container animate-on-scroll">
                    <h1>ENVIRONMENTAL SOLUTIONS</h1>
                    <p>Sustainable pest management and hygiene solutions for healthier spaces.</p>
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
                                Pest Control Services in UAE
                            </h2>
                            <p className="wwd-description" style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#556b82' }}>
                                As a municipality-approved pest control company in Dubai, Sharjah, and Abu Dhabi, we operate under a structured Integrated Pest Management (IPM) system.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginTop: '30px', marginBottom: '20px', fontFamily: 'var(--font-headline)' }}>
                                Our services include:
                            </h3>

                            <div style={{ marginBottom: '25px' }}>
                                <div className="features-list" style={{ marginTop: '0', gap: '10px' }}>
                                    {[
                                        "Residential pest control services",
                                        "Commercial pest control solutions",
                                        "Termite control (pre & post construction)",
                                        "Rodent control services",
                                        "Bed bug treatment",
                                        "Cockroach and ant control",
                                        "Mosquito control",
                                        "Warehouse pest control",
                                        "Industrial pest management",
                                        "Marine & ship dock pest control",
                                        "AMC pest control contracts"
                                    ].map((item, index) => (
                                        <div className="feature-item" key={index}>
                                            <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                            <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="wwd-description" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#556b82', fontStyle: 'italic', marginBottom: '40px' }}>
                                All treatments are performed using municipality-approved chemicals by certified technicians, ensuring full compliance with UAE environmental and public health regulations.
                            </p>

                            <h2 className="wwd-subtitle" style={{ fontSize: '2rem', textTransform: 'none', lineHeight: '1.3', marginBottom: '20px', color: 'var(--primary)' }}>
                                Professional Cleaning Services in UAE
                            </h2>
                            <p className="wwd-description" style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#556b82', marginBottom: '30px' }}>
                                We provide ISO-aligned cleaning services in Dubai, Sharjah, and Abu Dhabi, covering residential, commercial, hospitality, and industrial sectors.
                            </p>

                            <div style={{ marginBottom: '25px' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '15px', fontWeight: '600' }}>Residential & Villa Cleaning</h4>
                                <div className="features-list" style={{ marginTop: '0', gap: '10px' }}>
                                    {[
                                        "Villa deep cleaning services",
                                        "Move-in / move-out cleaning",
                                        "Sofa, carpet & mattress cleaning",
                                        "Kitchen & bathroom sanitization",
                                        "Post-renovation cleaning"
                                    ].map((item, index) => (
                                        <div className="feature-item" key={index}>
                                            <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                            <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '15px', fontWeight: '600' }}>Commercial & Hospitality Cleaning</h4>
                                <div className="features-list" style={{ marginTop: '0', gap: '10px' }}>
                                    {[
                                        "Office cleaning services",
                                        "Retail showroom cleaning",
                                        "Hotel housekeeping support",
                                        "Restaurant & kitchen hood cleaning (municipality compliant)",
                                        "Grease trap cleaning"
                                    ].map((item, index) => (
                                        <div className="feature-item" key={index}>
                                            <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                            <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '25px' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '15px', fontWeight: '600' }}>Industrial & Heavy-Duty Cleaning</h4>
                                <div className="features-list" style={{ marginTop: '0', gap: '10px' }}>
                                    {[
                                        "Warehouse cleaning services",
                                        "Factory & industrial site cleaning",
                                        "Marine & dry dock cleaning",
                                        "High-pressure washing",
                                        "Large-scale infrastructure cleaning"
                                    ].map((item, index) => (
                                        <div className="feature-item" key={index}>
                                            <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                            <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '35px' }}>
                                <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary)', marginBottom: '15px', fontWeight: '600' }}>Water Tank & Environmental Compliance Services</h4>
                                <div className="features-list" style={{ marginTop: '0', gap: '10px' }}>
                                    {[
                                        "Municipality-approved water tank cleaning",
                                        "Reservoir and overhead tank disinfection",
                                        "Wastewater handling compliance",
                                        "Environmental safety monitoring",
                                        "No unauthorized discharge policies"
                                    ].map((item, index) => (
                                        <div className="feature-item" key={index}>
                                            <div className="feature-icon" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>✓</div>
                                            <span style={{ fontSize: '1.05rem', color: '#556b82', fontWeight: '400' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#f0f4f8', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--secondary)', marginTop: '35px' }}>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: 'var(--primary)', margin: 0, fontStyle: 'italic', fontWeight: '500' }}>
                                    "Our environmental solutions in UAE help businesses maintain regulatory compliance, protect public health, and operate in line with municipality and ISO standards."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default EnvironmentalSolutions;
