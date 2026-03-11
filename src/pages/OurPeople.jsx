import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, CheckCircle } from 'lucide-react';
import '../styles/SocialImpact.css';

const OurPeople = () => {
    const initiatives = [
        "Professional training and certification programs",
        "Continuous skills development for technicians and support staff",
        "Employee welfare and supportive workplace environments",
        "Recognition programs that celebrate performance and dedication"
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
                            <HeartHandshake size={40} />
                        </div>
                        <h1 className="si-title">Our People</h1>
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
                            Our people are the foundation of Mumtaz Services Group’s success. We are committed to building a professional workforce that is skilled, motivated and supported.
                        </p>
                        <p className="si-lead text-dark mb-5">
                            With more than 100 trained professionals across the UAE, we invest in employee wellbeing, training and professional development to ensure consistent service excellence.
                        </p>

                        <h3 className="mb-4" style={{ color: '#002147', fontWeight: '700' }}>Our people initiatives include:</h3>

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
                                By investing in our workforce, we ensure our teams remain capable, confident and prepared to deliver exceptional service.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurPeople;
