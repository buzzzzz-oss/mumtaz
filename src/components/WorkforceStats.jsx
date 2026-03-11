import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import './WorkforceStats.css';
import silhouetteImg from '../assets/100.png';

const WorkforceStats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });
    const [count, setCount] = useState(0);

    // Number counting animation
    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = 100;
            const duration = 2500; // 2.5 seconds
            const incrementTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) {
                    clearInterval(timer);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView]);

    // Silhouette variants for staggered layered fade-in
    const silhouetteVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: i === 1 ? 0.8 : i === 2 ? 0.5 : 0.3, // Opacity based on layer index
            y: 0,
            scale: i === 1 ? 1 : i === 2 ? 0.95 : 0.9, // Scale based on layer index
            transition: {
                delay: i * 0.4, // Stagger delay
                duration: 1.5,
                ease: "easeOut"
            }
        })
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 2.8, // Start after number counting finishes (2.5s)
                duration: 1,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const stats = [
        { label: 'Projects Completed', value: '5,000+', icon: <CheckCircle size={24} /> },
        { label: 'Expert Staff', value: '250+', icon: <Users size={24} /> },
        { label: 'Years Excellence', value: '12+', icon: <Award size={24} /> },
        { label: 'Client Satisfaction', value: '99%', icon: <TrendingUp size={24} /> }
    ];

    return (
        <section className="workforce-stats-section" ref={ref}>
            <div className="workforce-container">

                {/* Foreground Counter and Text */}
                <div className="workforce-content">
                    <motion.div
                        className="counter-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="counter-number">{count}</span>
                        <span className="counter-plus">+</span>
                    </motion.div>

                    <motion.div
                        className="workforce-details"
                        variants={textVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.h3 variants={itemVariants} className="workforce-title">100+ Certified Technicians</motion.h3>
                        <motion.p variants={itemVariants} className="workforce-subtitle">Municipality Approved</motion.p>
                        <motion.p variants={itemVariants} className="workforce-highlight">ISO & OSHH Accredited</motion.p>
                    </motion.div>
                </div>

                {/* Layered Silhouettes Effect */}
                <div className="silhouettes-wrapper">
                    {/* Furthest Layer */}
                    <motion.img
                        src={silhouetteImg}
                        alt=""
                        className="silhouette-layer layer-3"
                        custom={3}
                        variants={silhouetteVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />
                    {/* Middle Layer */}
                    <motion.img
                        src={silhouetteImg}
                        alt=""
                        className="silhouette-layer layer-2"
                        custom={2}
                        variants={silhouetteVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />
                    {/* Foreground Layer */}
                    <motion.img
                        src={silhouetteImg}
                        alt="Workforce Silhouettes"
                        className="silhouette-layer layer-1"
                        custom={1}
                        variants={silhouetteVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />
                </div>
            </div>

            {/* Added Stats Bar aligned exactly at the bottom with z-index matching foreground text */}
            <div className="workforce-stats-bar-wrapper">
                <div className="workforce-stats-bar">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="workforce-stat-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 3 + (index * 0.2), duration: 0.8 }}
                        >
                            <div className="workforce-stat-icon">{stat.icon}</div>
                            <div className="workforce-stat-info">
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Embedded Specific Fixes to Ensure Palette Remains Identical */}
            <style>{`
                .section-label { color: var(--secondary); font-size: 0.9rem; font-weight: 700; letter-spacing: 2px; display: block; margin-bottom: 15px; text-transform: uppercase; }
            `}</style>
        </section>
    );
};

export default WorkforceStats;
