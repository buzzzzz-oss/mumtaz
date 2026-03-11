import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-info">
                    <Link to="/" className="logo">
                        <span className="logo-main">MUMTAZ</span>
                    </Link>
                    <p className="footer-desc">
                        Your trusted partner in the UAE for Facilities Management, Pest Control, and Cleaning services. Committed to excellence and sustainability.
                    </p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/facility-management">Facility Management</Link></li>
                        <li><Link to="/pest-control">Pest Control</Link></li>
                        <li><Link to="/cleaning-crew">Cleaning Crew</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <MapPin size={18} className="icon" />
                            <span>Office 402, Business Bay, Dubai, UAE</span>
                        </li>
                        <li>
                            <Phone size={18} className="icon" />
                            <span>+971 4 123 4567</span>
                        </li>
                        <li>
                            <Mail size={18} className="icon" />
                            <span>info@mumtazservices.ae</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Mumtaz Services Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
