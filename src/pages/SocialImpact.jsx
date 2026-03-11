import React from 'react';
import { motion } from 'framer-motion';
import { Users, Leaf, ShieldAlert, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/SocialImpact.css';

// Reusable scroll animation component using framer-motion's whileInView
const FadeUpSection = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.25, 1, 0.5, 1] }}
        >
            {children}
        </motion.div>
    );
};

const SocialImpact = () => {
    const pillars = [
        {
            id: 'community',
            title: 'Community',
            icon: <Users size={40} />,
            desc: 'Mumtaz Services Group proudly supports the communities we serve across Sharjah, Dubai and Abu Dhabi. Our services help maintain safe, hygienic and comfortable environments for residential and commercial spaces.',
            link: '/social-impact/community'
        },
        {
            id: 'environment',
            title: 'Environment & Sustainability',
            icon: <Leaf size={40} />,
            desc: 'Through implementing green cleaning chemicals and advanced waste reduction strategies, we protect the planet while guaranteeing premium maintenance of your properties.',
            link: '/social-impact/environment-and-sustainability'
        },
        {
            id: 'health',
            title: 'Health & Safety',
            icon: <ShieldAlert size={40} />,
            desc: 'Safety is non-negotiable. Our strict ISO-compliant protocols ensure every environment we touch—from deep cleaning projects to pest control—exceeds industry standards of safety and care.',
            link: '/social-impact/health-and-safety'
        },
        {
            id: 'people',
            title: 'Our People',
            icon: <HeartHandshake size={40} />,
            desc: 'Our frontline workforce is our greatest asset. We prioritize employee wellbeing, ongoing skill development, and creating a supportive culture that rewards excellence and dedication.',
            link: '/social-impact/our-people'
        }
    ];

    return (
        <div className="social-impact-page pb-50">
            {/* Hero Section */}
            <section className="si-hero">
                <div className="container">
                    <motion.div
                        className="si-hero-content text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="si-title">Social Impact</h1>
                        <p className="si-lead mx-auto">
                            At Mumtaz Services Group, social responsibility is an essential part of our operations. Beyond delivering environmental and facilities solutions across the UAE, we are committed to creating a positive impact through responsible practices, workforce wellbeing, and community support.
                        </p>
                        <p className="si-sub-lead mx-auto">
                            Our social impact strategy focuses on four pillars: Community, Environment & Sustainability, Health & Safety, and Our People.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="si-pillars-section section-padding bg-light">
                <div className="container">
                    <div className="si-pillars-grid">
                        {pillars.map((pillar, index) => (
                            <FadeUpSection key={pillar.id} delay={index * 0.15}>
                                <div className="si-pillar-card">
                                    <div className="si-pillar-icon-wrapper">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="si-pillar-title">{pillar.title}</h3>
                                    <p className="si-pillar-desc">{pillar.desc}</p>
                                    <Link to={pillar.link} className="si-pillar-link mt-auto">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </FadeUpSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SocialImpact;
