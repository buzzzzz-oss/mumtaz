import React, { useEffect } from 'react';
import { Briefcase, CheckCircle, Search, Target, Users, Star } from 'lucide-react';
import '../styles/DivisionPage.css';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        { title: 'Growth Opportunities', icon: <Target size={30} />, desc: 'Continuous learning and clear paths for career advancement.' },
        { title: 'Inclusive Culture', icon: <Users size={30} />, desc: 'A diverse and supportive environment where everyone belongs.' },
        { title: 'Excellence', icon: <Star size={30} />, desc: 'Committed to high standards and recognizing outstanding performance.' },
        { title: 'Impact', icon: <Briefcase size={30} />, desc: 'Work that matters and makes a real difference in our community.' }
    ];

    const benefits = ['Health Insurance', 'Competitive Salary', 'Flexible Working', 'Training Programs', 'Team Events', 'Performance Bonuses'];

    return (
        <div className="division-page cc-page">
            <section className="page-hero">
                <div className="container animate-on-scroll">
                    <h1>Careers at Mumtaz</h1>
                    <p>Join our team of dedicated professionals.</p>
                </div>
            </section>

            <section className="service-intro container section-padding">
                <div className="intro-grid animate-on-scroll">
                    <div className="intro-text">
                        <h2>Build Your Future With Us</h2>
                        <p>At Mumtaz, we believe our people are our greatest asset. We are always looking for talented, driven individuals to join our growing team across all divisions.</p>
                        <div className="intro-stats">
                            <div className="stat">
                                <h4>Great</h4>
                                <p>Culture</p>
                            </div>
                            <div className="stat">
                                <h4>Growth</h4>
                                <p>Opportunities</p>
                            </div>
                            <div className="stat">
                                <h4>100+</h4>
                                <p>Roles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-grid-section bg-light section-padding">
                <div className="container">
                    <div className="section-title animate-on-scroll">
                        <h2>Why Work With Us?</h2>
                        <p>Discover the benefits of building your career at Mumtaz.</p>
                    </div>
                    <div className="services-grid">
                        {values.map((value, index) => (
                            <div key={index} className="service-item-card animate-on-scroll">
                                <div className="service-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sectors-section container section-padding">
                <div className="section-title animate-on-scroll">
                    <h2>Employee Benefits</h2>
                </div>
                <div className="sectors-grid animate-on-scroll">
                    {benefits.map((item, index) => (
                        <div key={index} className="sector-tag">
                            <CheckCircle size={18} className="icon" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-section animate-on-scroll">
                <div className="container">
                    <h2>Ready to join us?</h2>
                    <p>Explore our open positions and take the next step in your career.</p>
                    <button className="btn btn-secondary">View Open Positions</button>
                </div>
            </section>
        </div>
    );
};

export default Careers;
