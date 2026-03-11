import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, CheckCircle } from 'lucide-react';
import '../styles/SocialImpact.css';

const EnvironmentAndSustainability = () => {
    const initiatives = [
        "Using municipality-approved pest control treatments and eco-conscious cleaning products",
        "Promoting responsible chemical handling and disposal procedures",
        "Implementing water-efficient cleaning and sanitation practices",
        "Supporting recycling and waste reduction initiatives",
        "Encouraging sustainable operational practices across all service divisions"
    ];

    return (
        <div className="social-impact-page pb-50">
            {/* Dark Hero Section */}
            <section className="si-hero">
                <div className="container">
                    <motion.div
                        className="si-hero-content text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="si-pillar-icon-wrapper mx-auto mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#d4af37' }}>
                            <Leaf size={40} />
                        </div>
                        <h1 className="si-title">Environment & Sustainability</h1>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="si-content-section section-padding pt-0">
                <div className="container">
                    <motion.div
                        className="content-wrapper mx-auto"
                        style={{ maxWidth: '800px' }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="si-lead text-dark mb-4">
                            Sustainability is an essential part of Mumtaz Services Group’s operations. We continuously strive to reduce environmental impact by adopting responsible service practices and supporting initiatives that promote environmental awareness.
                        </p>
                        <p className="si-lead text-dark mb-5">
                            Our environmental approach focuses on efficient resource management, responsible waste handling and environmentally conscious service delivery.
                        </p>

                        <h3 className="mb-4" style={{ color: '#002147', fontWeight: '700' }}>Key initiatives include:</h3>

                        <ul className="list-unstyled mb-5">
                            {initiatives.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    className="d-flex align-items-start mb-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                                    style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}
                                >
                                    <CheckCircle size={20} className="me-3 mt-1 flex-shrink-0" style={{ color: '#00643a' }} />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="p-4 rounded" style={{ backgroundColor: 'rgba(0, 100, 58, 0.05)', borderLeft: '4px solid #00643a' }}>
                            <p className="m-0" style={{ fontSize: '1.15rem', color: '#002147', fontWeight: '600' }}>
                                Through these efforts, we aim to help clients maintain safe, hygienic and environmentally responsible facilities.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default EnvironmentAndSustainability;
