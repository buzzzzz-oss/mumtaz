import React, { useEffect } from 'react';
import { Droplets, Shield, Search, CheckCircle, Zap, Wind, Bug, AlertCircle } from 'lucide-react';
import '../styles/DivisionPage.css';

const PestControl = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'General Pest Control', icon: <Bug size={30} />, desc: 'Treatment for cockroaches, ants, spiders, and silverfish in residential and commercial spaces.' },
        { title: 'Termite Protection', icon: <Shield size={30} />, desc: 'Pre and post-construction termite treatment using advanced soil barrier techniques.' },
        { title: 'Bed Bug Eradication', icon: <AlertCircle size={30} />, desc: 'Specialized heat and chemical treatments for rapid and complete bed bug removal.' },
        { title: 'Rodent Management', icon: <Search size={30} />, desc: 'Effective baiting and trapping systems to keep your property free of rats and mice.' },
        { title: 'Disinfection Services', icon: <Droplets size={30} />, desc: 'Hospital-grade sanitization for homes, offices, and industrial warehouses.' },
        { title: 'Bird Control', icon: <Wind size={30} />, desc: 'Humane bird spikes and netting solutions to protect building facades from pigeon damage.' }
    ];

    const certifications = ['Municipality Approved', 'Eco-Friendly Chemicals', 'Certified Technicians', 'HACCP Compliant', 'ISO 9001:2015', 'Dubai Municipality Registered'];

    return (
        <div className="division-page pc-page">
            <section className="page-hero">
                <div className="container animate-on-scroll">
                    <h1>Pest Control</h1>
                    <p>Scientific pest management for a healthier environment.</p>
                </div>
            </section>

            <section className="service-intro container section-padding">
                <div className="intro-grid animate-on-scroll">
                    <div className="intro-text">
                        <h2>Your Shield Against Pests</h2>
                        <p>Mumtaz Pest Control is a leading provider of integrated pest management (IPM) services in the UAE. Our Municipality-approved technicians use the latest scientific methods and eco-friendly products to ensure your home or business remains pest-free and safe for occupants.</p>
                        <div className="intro-stats">
                            <div className="stat">
                                <h4>100%</h4>
                                <p>Safe</p>
                            </div>
                            <div className="stat">
                                <h4>2h</h4>
                                <p>Response</p>
                            </div>
                            <div className="stat">
                                <h4>Guaranteed</h4>
                                <p>Results</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" alt="Professional Pest Control" />
                    </div>
                </div>
            </section>

            <section className="services-grid-section bg-light section-padding">
                <div className="container">
                    <div className="section-title animate-on-scroll">
                        <h2>Our Pest Solutions</h2>
                        <p>Targeted treatments for every type of infestation.</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-item-card animate-on-scroll">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sectors-section container section-padding">
                <div className="section-title animate-on-scroll">
                    <h2>Trust & Certifications</h2>
                </div>
                <div className="sectors-grid animate-on-scroll">
                    {certifications.map((cert, index) => (
                        <div key={index} className="sector-tag">
                            <CheckCircle size={18} className="icon" />
                            <span>{cert}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section animate-on-scroll">
                <div className="container">
                    <h2>Take control of your space today</h2>
                    <p>Book a free pest inspection with our certified experts.</p>
                    <button className="btn btn-secondary">Get Free Quote</button>
                </div>
            </section>
        </div>
    );
};

export default PestControl;
