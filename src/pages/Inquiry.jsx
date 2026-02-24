// src/pages/Inquiry.jsx
import React from 'react';
import '../styles/Inquiry.css';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const Inquiry = () => {
    return (
        <div className="inquiry-page">
            <div className="inquiry-hero">
                <div className="container">
                    <h1>Talk to a Specialist Today</h1>
                    <p>Ready to support you with tailored proposals, on-site assessments and premium service uplift.!</p>
                </div>
            </div>

            <div className="container inquiry-content section-padding">
                <div className="contact-methods">
                    <div className="contact-card">
                        <Phone className="contact-icon" size={32} />
                        <h3>Call Us</h3>
                        <p>Toll Free: <strong>800 688</strong></p>
                    </div>
                    <a href="mailto:info@almumtaz.ae" className="contact-card" style={{ textDecoration: 'none' }}>
                        <Mail className="contact-icon" size={32} />
                        <h3>Email Us</h3>
                        <p><strong>info@almumtaz.ae</strong></p>
                    </a>
                    <a href="https://www.almumtaz.ae" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none' }}>
                        <Globe className="contact-icon" size={32} />
                        <h3>Visit Us</h3>
                        <p><strong>www.almumtaz.ae</strong></p>
                    </a>
                </div>

                <div className="offices-section">
                    <h2>Our Offices</h2>
                    <div className="offices-grid">
                        <div className="office-card">
                            <MapPin className="office-icon" size={24} />
                            <div>
                                <h4>Sharjah</h4>
                                <p>Al Manakh</p>
                            </div>
                        </div>
                        <div className="office-card">
                            <MapPin className="office-icon" size={24} />
                            <div>
                                <h4>Dubai</h4>
                                <p>Al Murar</p>
                            </div>
                        </div>
                        <div className="office-card">
                            <MapPin className="office-icon" size={24} />
                            <div>
                                <h4>Abu Dhabi</h4>
                                <p>Mumtaz Services LLC SPC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquiry;
