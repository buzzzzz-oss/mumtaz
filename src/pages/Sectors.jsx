import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sectors.css';
import { standardSectors, featuredSector } from '../data/sectorsData';

const Sectors = () => {
    useEffect(() => {
        // Basic intersection observer for scroll reveal animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.sector-card, .featured-sector-card');
        cards.forEach((card) => observer.observe(card));

        return () => cards.forEach((card) => observer.unobserve(card));
    }, []);

    return (
        <div className="sectors-page">
            {/* Subtle parallax background movement */}
            <div className="sectors-bg-pattern"></div>

            <header className="sectors-header">
                <div className="container">
                    <h1>OUR SECTORS</h1>
                    <p>Premium solutions across diverse industries in the UAE.</p>
                </div>
            </header>

            <div className="sectors-container">
                {/* Featured Sector: Residential */}
                <section className="featured-sector fade-in">
                    <Link
                        to={`/sectors/${featuredSector.id}`}
                        className="featured-sector-card"
                        style={{ backgroundImage: `url(${featuredSector.image})`, display: 'block', textDecoration: 'none' }}
                    >
                        <div className="sector-card-overlay"></div>
                        <div className="featured-badge">🔥 {featuredSector.badge}</div>
                        <div className="featured-content">
                            <h2>{featuredSector.title}</h2>
                            <p>{featuredSector.description}</p>
                        </div>
                    </Link>
                </section>

                {/* Standard Sectors Grid */}
                <section className="standard-sectors fade-in">
                    <div className="all-sectors-grid">
                        {standardSectors.map((sector, index) => (
                            <Link
                                to={`/sectors/${sector.id}`}
                                key={index}
                                className="sector-card"
                                style={{
                                    animationDelay: `${(index % 4) * 0.1}s`,
                                    backgroundImage: `url(${sector.image})`,
                                    display: 'block',
                                    textDecoration: 'none'
                                }}
                            >
                                <div className="sector-card-overlay"></div>
                                <div className="sector-card-content">
                                    <h3>{sector.title}</h3>
                                    <p>{sector.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Sectors;
