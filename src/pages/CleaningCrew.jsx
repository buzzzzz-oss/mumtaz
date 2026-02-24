import React, { useEffect } from 'react';
import { UserCheck, Sparkles, Coffee, Home, Building, Droplets, CheckCircle, Clock } from 'lucide-react';
import introImage from '../assets/Whisk_c96d16f7084b58c90bc44d83354c553edr.jpeg';
import '../styles/DivisionPage.css';

const CleaningCrew = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'General Cleaning', icon: <Sparkles size={30} />, desc: 'Daily and weekly cleaning services for residential apartments, villas, and commercial offices.' },
        { title: 'Deep Cleaning', icon: <Droplets size={30} />, desc: 'Thorough sanitation of kitchens, bathrooms, and living areas with specialized steam cleaning.' },
        { title: 'Hospitality Support', icon: <Coffee size={30} />, desc: 'Providing trained stewards, housekeepers, and banquet staff for hotels and events.' },
        { title: 'Office Boy/Girl Services', icon: <UserCheck size={30} />, desc: 'Dedicated staff for office administrative support, pantry management, and visitor assistance.' },
        { title: 'Upholstery & Carpet', icon: <Home size={30} />, desc: 'Professional cleaning of sofas, carpets, and curtains using eco-friendly stain removers.' },
        { title: 'Retail & Event Cleaning', icon: <Sparkles size={30} />, desc: 'Meticulous cleaning for retail showrooms and large-scale event venues before and after events.' }
    ];

    const highlights = ['Background Verified Staff', 'Same-Day Service available', 'Premium Cleaning Products', 'Flexible Scheduling', 'Uniformed & Professional', 'Direct Supervision'];

    return (
        <div className="division-page cc-page">
            <section className="page-hero">
                <div className="container animate-on-scroll">
                    <h1>Cleaning Crew</h1>
                    <p>Meticulous cleaning and hospitality support services.</p>
                </div>
            </section>

            <section className="service-intro container section-padding">
                <div className="intro-grid animate-on-scroll">
                    <div className="intro-text">
                        <h2>The Standard of Spotless</h2>
                        <p>Mumtaz Cleaning Crew brings hospitality-grade cleaning standards to your doorstep. Whether it's a luxury residence, a high-traffic corporate office, or a prestigious hotel event, our trained professionals deliver unmatched attention to detail and a commitment to hygiene.</p>
                        <div className="intro-stats">
                            <div className="stat">
                                <h4>500+</h4>
                                <p>Crew</p>
                            </div>
                            <div className="stat">
                                <h4>Daily</h4>
                                <p>Support</p>
                            </div>
                            <div className="stat">
                                <h4>5-Star</h4>
                                <p>Service</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src={introImage} alt="Professional Cleaning" />
                    </div>
                </div>
            </section>

            <section className="services-grid-section bg-light section-padding">
                <div className="container">
                    <div className="section-title animate-on-scroll">
                        <h2>Our Specialized Support</h2>
                        <p>Reliable staffing and cleaning solutions for every requirement.</p>
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
                    <h2>Why Our Crew?</h2>
                </div>
                <div className="sectors-grid animate-on-scroll">
                    {highlights.map((item, index) => (
                        <div key={index} className="sector-tag">
                            <CheckCircle size={18} className="icon" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section animate-on-scroll">
                <div className="container">
                    <h2>Experience the Mumtaz cleaning standard</h2>
                    <p>Schedule your professional cleaning session or hire hospitality staff today.</p>
                    <button className="btn btn-secondary">Book a Crew</button>
                </div>
            </section>
        </div>
    );
};

export default CleaningCrew;
