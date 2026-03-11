import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/LeadershipProfile.css';

const leadershipData = {
    'saleem-mookada-aliyar': {
        name: 'Saleem Mookada Aliyar',
        title: 'Founder & Chairman',
        bio: [
            'Mr. Salim Mookada Aliyar founded Mumtaz in 2006 with a clear commitment to building a structured and dependable service organization. Under his leadership, the company evolved from a specialized pest control provider in Sharjah into a multi-million dirham facilities solutions group operating across three Emirates.',
            'His strategic foresight and operational discipline laid the foundation for sustainable growth, workforce stability, and long-term client partnerships. Over nearly two decades, he has guided the company through expansion into Dubai and Abu Dhabi while strengthening service capabilities across residential, commercial, industrial, and marine sectors.',
            'As Chairman, he continues to define the long-term strategic direction of the Group, ensuring governance, financial prudence, and operational integrity remain at the core of the organization.'
        ],
        image: null,
    },
    'sahad-saleem': {
        name: 'Sahad Saleem',
        title: 'Executive Director',
        bio: [
            'As Executive Director, Sahad Salim leads the Group’s modernization and strategic transformation initiatives. Representing the next generation of leadership, he is responsible for driving structural development, brand evolution, digital integration, and future-ready operational systems.',
            'His focus includes strengthening corporate governance frameworks, refining service delivery models, enhancing workforce presentation standards, and positioning Mumtaz as a contemporary, performance-driven facilities solutions provider.',
            'Under his direction, the company is transitioning toward technology-enabled processes, premium brand positioning, and scalable growth strategies aligned with evolving market demands across the UAE.'
        ],
        image: null,
    },
    'sahil-saleem': {
        name: 'Sahil Saleem',
        title: 'Executive Director',
        bio: [
            'As Executive Director, Sahil Sidhi plays a strategic role in operational alignment and internal optimization. His responsibilities include enhancing interdepartmental coordination, improving workflow efficiency, and supporting structured execution across service verticals.',
            'He contributes to maintaining performance consistency as the Group expands its footprint and service capacity, ensuring that operational systems remain disciplined, measurable, and scalable.',
            'His involvement strengthens the leadership framework supporting the Group’s long-term growth agenda.'
        ],
        image: null,
    },
    'sahar-said': {
        name: 'Sahar Said',
        title: 'Director of Operations',
        bio: [
            'As Director of Operations, Sahar Saeed oversees all operational activities across the Group’s three Emirates. Having been part of the organization since its establishment in 2006, he brings extensive institutional knowledge and field-level expertise.',
            'He is responsible for operational execution, workforce deployment, compliance oversight, quality control, and risk management. His leadership ensures that service standards are maintained, contractual commitments are fulfilled, and operational performance remains consistent across residential, commercial, industrial, and marine environments.',
            'His long-standing contribution has been instrumental in sustaining operational stability throughout the company’s expansion phases.'
        ],
        image: null,
    },
};

const LeadershipProfile = () => {
    const { leaderId } = useParams();
    const navigate = useNavigate();

    const profile = leadershipData[leaderId];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [leaderId]);

    if (!profile) {
        return (
            <div className="profile-not-found">
                <h2>Profile not found</h2>
                <button onClick={() => navigate('/about-us')} className="back-btn">
                    <ArrowLeft size={20} /> Back to About Us
                </button>
            </div>
        );
    }

    return (
        <div className="leadership-page">
            <div className="page-hero">
                <div className="hero-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content text-center"
                    >
                        <button onClick={() => navigate('/about-us')} className="back-btn header-back-btn">
                            <ArrowLeft size={16} /> Back to Team
                        </button>
                        <h1 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>{profile.name}</h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{profile.title}</p>
                    </motion.div>
                </div>
            </div>

            <section className="profile-content section-padding">
                <div className="container">
                    <div className="profile-grid">
                        <motion.div
                            className="profile-image-col"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {profile.image ? (
                                <img src={profile.image} alt={profile.name} className="profile-image" />
                            ) : (
                                <div className="profile-image-placeholder">
                                    <span>Image Pending</span>
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            className="profile-text-col"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="profile-name">{profile.name}</h2>
                            <h3 className="profile-title">{profile.title}</h3>

                            <div className="profile-bio">
                                {profile.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeadershipProfile;
