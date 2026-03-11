import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import pestImage from '../assets/2.png';
import cleaningImage from '../assets/3.png';
import facilitiesImage from '../assets/1.png';
import './OperationalDivisions.css';

const divisions = [
    {
        id: 'pest',
        title: 'Pest Control',
        description: 'Advanced integrated pest management for residential, commercial and industrial environments.',
        cssClass: 'panel-pest',
        bgImage: pestImage,
        link: '/pest-control'
    },
    {
        id: 'cleaning',
        title: 'Cleaning\nServices',
        description: 'Professional deep cleaning and hygiene solutions for villas, offices and facilities.',
        cssClass: 'panel-cleaning',
        bgImage: cleaningImage,
        link: '/cleaning-crew'
    },
    {
        id: 'facilities',
        title: 'Facilities\nManagement',
        description: 'Comprehensive manpower and facility support services across the UAE.',
        cssClass: 'panel-facilities',
        bgImage: facilitiesImage,
        link: '/facility-management'
    }
];

const OperationalDivisions = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-20%' });

    return (
        <section className="divisions-section" ref={ref}>
            <div className="divisions-container">
                {divisions.map((division, index) => (
                    <motion.div
                        key={division.id}
                        className={`division-panel ${division.cssClass}`}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.15,
                            ease: [0.25, 1, 0.5, 1]
                        }}
                        style={{
                            backgroundImage: division.bgImage ? `url(${division.bgImage})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Background Micro-animation layer */}
                        <div className="panel-micro-bg"></div>

                        {/* Content Layer */}
                        <div className="panel-content">
                            <h2 className="division-title">{division.title}</h2>
                            <p className="division-desc">{division.description}</p>

                            <Link to={division.link} className="division-explore-btn">
                                EXPLORE <ArrowUpRight className="explore-icon" size={20} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OperationalDivisions;
