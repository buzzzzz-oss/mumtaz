import React, { useEffect } from 'react';
import { Shield, Settings, Zap, Droplets, HardHat, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/DivisionPage.css';
import imgHero from '../assets/001_transparent.png';

const FacilityManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'Mechanical & Electrical', icon: <Zap size={30} />, desc: 'Expert maintenance of power systems, HVAC, and mechanical infrastructure.' },
        { title: 'Plumbing & Drainage', icon: <Droplets size={30} />, desc: 'Comprehensive water system management and emergency repair services.' },
        { title: 'Civil Works', icon: <HardHat size={30} />, desc: 'Specialized building repairs, painting, and structural maintenance.' },
        { title: 'HVAC Maintenance', icon: <Settings size={30} />, desc: 'Regular servicing and emergency repairs for centralized and split AC systems.' },
        { title: 'Energy Management', icon: <PenTool size={30} />, desc: 'Optimizing building energy consumption through smart monitoring solutions.' },
        { title: 'AMC Contracts', icon: <Shield size={30} />, desc: 'Tailored Annual Maintenance Contracts for residential and commercial properties.' }
    ];

    const sectors = ['Residential Communities', 'Commercial Offices', 'Industrial Facilities', 'Hospitality & Hotels', 'Educational Institutions', 'Retail Malls'];

    return (
        <div className="division-page fm-page">
            <section className="page-hero">
                <div className="container animate-on-scroll">
                    <h1>Facility Management</h1>
                    <p>Integrated solutions for building performance and longevity.</p>
                </div>
            </section>

            <section className="service-intro container section-padding">
                <div className="intro-grid animate-on-scroll">
                    <div className="intro-text">
                        <h2>Reliable Maintenance for Modern Infrastructure</h2>
                        <p>Mumtaz Facility Management division provides a comprehensive suite of hard and soft services designed to ensure your property operates at peak efficiency. We combine technical expertise with a customer-centric approach to deliver value across every square meter.</p>
                        <div className="intro-stats">
                            <div className="stat">
                                <h4>24/7</h4>
                                <p>Support</p>
                            </div>
                            <div className="stat">
                                <h4>ISO</h4>
                                <p>Certified</p>
                            </div>
                            <div className="stat">
                                <h4>100%</h4>
                                <p>Compliance</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src={imgHero} alt="Technical Maintenance" />
                    </div>
                </div>
            </section>

            <section className="services-grid-section bg-light section-padding">
                <div className="container">
                    <div className="section-title animate-on-scroll">
                        <h2>Our Specialized Services</h2>
                        <p>From individual repairs to comprehensive facility outsourcing.</p>
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
                    <h2>Sectors We Serve</h2>
                </div>
                <div className="sectors-grid animate-on-scroll">
                    {sectors.map((sector, index) => (
                        <div key={index} className="sector-tag">
                            <CheckCircle size={18} className="icon" />
                            <span>{sector}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section animate-on-scroll">
                <div className="container">
                    <h2>Secure your assets with Mumtaz FM</h2>
                    <p>Get a customized facility management proposal today.</p>
                    <button className="btn btn-secondary">Request a Survey</button>
                </div>
            </section>
        </div>
    );
};

export default FacilityManagement;
