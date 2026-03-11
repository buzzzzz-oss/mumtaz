import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Shield, Droplets, UserCheck, Home as HomeIcon, MessageSquare, ChevronDown, Briefcase } from 'lucide-react';
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
        {
            name: 'About Us',
            path: '/about-us',
            icon: <Shield size={18} />,
            dropdown: [
                { name: 'Our Story', path: '/about-us#our-story' },
                { name: 'Our History', path: '/about-us#our-history' },
                { name: 'Executive Leadership', path: '/about-us#executive-leadership' }
            ]
        },
        {
            name: 'What We Do',
            path: '/what-we-do',
            icon: <Shield size={18} />,
            dropdown: [
                { name: 'People Solutions', path: '/people-solutions' },
                { name: 'Environmental Solutions', path: '/environmental-solutions' }
            ]
        },
        { name: 'Sectors', path: '/sectors', icon: <Shield size={18} /> },
        { name: 'Facility Management', path: '/facility-management', icon: <Shield size={18} /> },
        { name: 'Pest Control', path: '/pest-control', icon: <Droplets size={18} /> },
        { name: 'Cleaning Crew', path: '/cleaning-crew', icon: <UserCheck size={18} /> },
        { name: 'Careers', path: '/careers', icon: <Briefcase size={18} /> },
        { name: 'Inquiry', path: '/inquiry', icon: <MessageSquare size={18} /> },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <Link to="/" className="logo">
                    <span className="logo-main">MUMTAZ</span>
                </Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.name} className={link.dropdown ? 'has-dropdown' : ''}>
                            <NavLink to={link.path} className={({ isActive }) => isActive ? 'active' : ''}>
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} style={{ marginLeft: '4px' }} />}
                            </NavLink>
                            {link.dropdown && (
                                <ul className="dropdown-menu">
                                    {link.dropdown.map(dropItem => (
                                        <li key={dropItem.name}>
                                            <a href={dropItem.path}>{dropItem.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
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
                        <li key={link.name} className={link.dropdown ? 'mobile-has-dropdown' : ''}>
                            <NavLink to={link.path} onClick={() => !link.dropdown && setIsOpen(false)}>
                                <span className="icon">{link.icon}</span>
                                {link.name}
                                {link.dropdown && <ChevronDown size={16} style={{ marginLeft: 'auto' }} />}
                            </NavLink>
                            {link.dropdown && (
                                <ul className="mobile-dropdown-menu">
                                    {link.dropdown.map(dropItem => (
                                        <li key={dropItem.name} onClick={() => setIsOpen(false)}>
                                            <a href={dropItem.path}>{dropItem.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
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
