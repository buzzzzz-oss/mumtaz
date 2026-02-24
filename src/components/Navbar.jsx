import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Shield, Droplets, UserCheck, Home as HomeIcon, MessageSquare } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: <HomeIcon size={18} /> },
        { name: 'Facility Management', path: '/facility-management', icon: <Shield size={18} /> },
        { name: 'Pest Control', path: '/pest-control', icon: <Droplets size={18} /> },
        { name: 'Cleaning Crew', path: '/cleaning-crew', icon: <UserCheck size={18} /> },
        { name: 'Inquiry', path: '/inquiry', icon: <MessageSquare size={18} /> },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <span className="logo-main">MUMTAZ</span>
                    <span className="logo-sub">SERVICES GROUP</span>
                </Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink to={link.path} className={({ isActive }) => isActive ? 'active' : ''}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name} onClick={() => setIsOpen(false)}>
                            <NavLink to={link.path}>
                                <span className="icon">{link.icon}</span>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <li onClick={() => setIsOpen(false)}>
                        <Link to="/inquiry" className="btn btn-primary">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
