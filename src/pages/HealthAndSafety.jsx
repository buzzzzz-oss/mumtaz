import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle } from 'lucide-react';
import '../styles/SocialImpact.css';

const HealthAndSafety = () => {
    const initiatives = [
        "Implementation of strict occupational health and safety procedures",
        "Regular safety training and awareness programs for employees",
        "Risk assessments and safe operational practices across all services",
        "Proper use of protective equipment and safety protocols"
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
                            <ShieldAlert size={40} />
                        </div>
                        <h1 className="si-title">Health and Safety</h1>
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
                            Health and safety are fundamental priorities in every aspect of Mumtaz Services Group’s operations. We follow strict safety standards to protect employees, clients and the environments in which we operate.
                        </p>
                        <p className="si-lead text-dark mb-5">
                            Our health and safety framework focuses on prevention, training and continuous improvement.
                        </p>

                        <h3 className="mb-4" style={{ color: '#002147', fontWeight: '700' }}>Key safety commitments include:</h3>

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
                                By fostering a strong culture of safety, we ensure that every project and service is delivered responsibly and securely.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HealthAndSafety;
