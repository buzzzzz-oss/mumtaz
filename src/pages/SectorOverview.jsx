import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { standardSectors, featuredSector } from '../data/sectorsData';
import './SectorOverview.css';

const SectorOverview = () => {
    const { sectorId } = useParams();
    const [sector, setSector] = useState(null);

    useEffect(() => {
        // Find the sector by ID
        if (featuredSector.id === sectorId) {
            setSector(featuredSector);
        } else {
            const found = standardSectors.find(s => s.id === sectorId);
            setSector(found);
        }
        window.scrollTo(0, 0);
    }, [sectorId]);

    if (!sector) {
        return (
            <div className="sector-overview-page">
                <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
                    <h2>Sector not found</h2>
                    <p style={{ marginTop: '1rem', color: 'var(--color-text)' }}>The sector you are looking for does not exist.</p>
                    <Link to="/sectors" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Back to Sectors</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="sector-overview-page fade-in">
            {/* Hero Section */}
            <header className="sector-hero" style={{ backgroundImage: `url(${sector.image})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="sector-icon fade-in" style={{ animationDelay: '0.2s' }}>{sector.icon}</span>
                    <h1 className="fade-in" style={{ animationDelay: '0.4s' }}>{sector.title}</h1>
                    <p className="fade-in" style={{ animationDelay: '0.6s' }}>Overview & Specialized Solutions</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="container overview-content">
                <div className="content-layout">
                    <div className="main-details fade-in">
                        <h2>{sector.title} Solutions</h2>
                        <p className="lead-text">{sector.description}</p>

                        <h3>Key Focus Areas</h3>
                        <ul className="focus-list">
                            <li>Comprehensive Maintenance & Facility Management</li>
                            <li>Specialized Cleaning & Hygiene Protocols</li>
                            <li>Integrated Pest Management Services</li>
                            <li>Manpower Supply & Operational Support</li>
                            <li>Municipality-Approved Compliance Standards</li>
                        </ul>

                        <h3>Why Choose Mumtaz?</h3>
                        <p>With decades of experience traversing various industries, we bring tailored intelligence to the {sector.title} sector. Our approach combines rigorous municipality-approved compliance, innovative property solutions, and highly trained personnel to elevate your operational standards.</p>
                        <p>We work closely with clients to curate standard operating procedures (SOPs) that align tightly with their strategic goals, ensuring absolute safety, efficiency, and a pristine environment.</p>
                    </div>

                    {/* Sidebar / CTA */}
                    <aside className="overview-sidebar fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="cta-card">
                            <h3>Need tailored support?</h3>
                            <p>Contact our experts to discuss how we can elevate your facility standards.</p>
                            <Link to="/inquiry" className="btn-primary full-width">Get a Quote</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default SectorOverview;
