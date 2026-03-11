import React, { useEffect } from 'react';
import { Shield, Users, Award, CheckCircle, Globe, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../styles/AboutUs.css';

import introImage from '../assets/1.png'; // Facility image
import aboutImage1 from '../assets/2.png'; // Cleaning
import aboutImage2 from '../assets/3.png'; // Pest Control

const AboutUs = () => {
    // Parallax mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the parallax
    const springConfig = { damping: 20, stiffness: 50, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Transforms for different depth layers
    const xMain = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
    const yMain = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

    const xSub1 = useTransform(smoothX, [-0.5, 0.5], [25, -25]);
    const ySub1 = useTransform(smoothY, [-0.5, 0.5], [25, -25]);

    const xSub2 = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
    const ySub2 = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xCalc = (e.clientX - rect.left) / rect.width - 0.5;
        const yCalc = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(xCalc);
        mouseY.set(yCalc);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    const values = [
        {
            icon: <Award size={32} />,
            title: "Value Creation",
            desc: "We focus on delivering measurable service outcomes that improve operational performance and reduce long-term risk for our clients."
        },
        {
            icon: <Users size={32} />,
            title: "Customer Focus",
            desc: "Every contract, from villa communities to industrial facilities, is approached with accountability, responsiveness, and professionalism."
        },
        {
            icon: <Shield size={32} />,
            title: "Integrity",
            desc: "We operate with transparency, regulatory compliance, and ethical standards in every engagement."
        },
        {
            icon: <Briefcase size={32} />,
            title: "Teamwork",
            desc: "Our strength lies in coordinated operations, trained personnel, and disciplined execution across departments and Emirates."
        },
        {
            icon: <Globe size={32} />,
            title: "Community",
            desc: "We contribute to healthier residential communities, safer industrial environments, and sustainable facility operations throughout the UAE."
        }
    ];

    const milestones = [
        { year: "2006", text: "Mumtaz established" },
        { year: "2007", text: "Introduction of professional cleaning services" },
        { year: "2012", text: "Launch of manpower supply solutions" },
        { year: "2018", text: "Establishment of Dubai branch operations" },
        { year: "2020", text: "Expansion into Abu Dhabi & Formal structuring of integrated facilities management services" }
    ];

    return (
        <div className="about-page">
            <section className="page-hero">
                <div className="container animate-on-scroll">
                    <h1>ABOUT MUMTAZ</h1>
                    <p>Over two decades of excellence in integrated facility solutions.</p>
                </div>
            </section>

            <section id="our-story" className="about-intro section-padding" style={{ scrollMarginTop: '80px' }}>
                <div className="container">
                    <div className="intro-grid animate-on-scroll">
                        <div className="intro-text">
                            <h2 className="section-subtitle our-story-title">OUR STORY</h2>
                            <p>
                                Founded in 2006 in Sharjah, Mumtaz began its journey after a major residential project in Al Nahda required structured and municipality-compliant pest control services in Sharjah. Recognizing the growing demand for professional pest management across the UAE’s expanding real estate sector, the company was established with a strong focus on reliability, safety, and service excellence.
                            </p>
                            <p>
                                Starting as a specialized pest control company in the UAE, Mumtaz quickly earned trust across residential and commercial communities, including premium villa areas such as Arabian Ranches, Emirates Hills, and The Meadows, where quality, discretion, and operational discipline were essential.
                            </p>
                            <p>
                                Over time, Mumtaz expanded into industrial pest control and marine environmental services in the UAE, supporting ship docks, marine yards, and offshore operations that require strict safety compliance and technical precision.
                            </p>

                        </div>
                        <div
                            className="intro-image-collage"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <motion.div
                                className="img-main-wrapper FloatAnimation-Main"
                                style={{ x: xMain, y: yMain }}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <img src={introImage} alt="Mumtaz Facility Operations" className="img-main" />
                            </motion.div>

                            <motion.div
                                className="img-sub-wrapper img-1-wrapper FloatAnimation-Sub1"
                                style={{ x: xSub1, y: ySub1 }}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <img src={aboutImage1} alt="Cleaning Services" className="img-sub img-1" />
                            </motion.div>

                            <motion.div
                                className="img-sub-wrapper img-2-wrapper FloatAnimation-Sub2"
                                style={{ x: xSub2, y: ySub2 }}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            >
                                <img src={aboutImage2} alt="Pest Control" className="img-sub img-2" />
                            </motion.div>

                            <motion.div
                                className="experience-badge FloatAnimation-Badge"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
                            >
                                <span className="years">20+</span>
                                <span className="text">Years of<br />Excellence</span>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="mission-vision-design animate-on-scroll">
                <div className="mvd-container">

                    <motion.div
                        className="mvd-row mission-row"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mvd-content">
                            <h2 className="mvd-title">MISSION</h2>
                            <p className="mvd-desc">
                                To provide dependable, compliant, and performance-driven facility solutions that enable residential, commercial, and industrial environments to operate safely, efficiently, and sustainably. We support communities, businesses, and industries by ensuring their spaces are clean, protected, maintained, and professionally managed — allowing them to focus on their core objectives with confidence.
                            </p>
                        </div>
                        <motion.div
                            className="mvd-connector"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.5, originX: 0 }}
                        >
                            <div className="mvd-dot"></div>
                            <svg className="mvd-svg-line" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2 L 150 2 L 350 80" stroke="var(--secondary)" strokeWidth="2" fill="none" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mvd-row vision-row"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="mvd-content">
                            <h2 className="mvd-title">VISION</h2>
                            <p className="mvd-desc">
                                To be a trusted UAE-grown facilities solutions provider recognized for operational excellence, workforce professionalism, and long-term client partnerships across the Emirates. We envision communities and workplaces that are safer, healthier, and more efficiently managed through structured and reliable service systems.
                            </p>
                        </div>
                        <motion.div
                            className="mvd-connector"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.8, originX: 0 }}
                        >
                            <div className="mvd-dot"></div>
                            <svg className="mvd-svg-line" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2 L 350 2" stroke="var(--secondary)" strokeWidth="2" fill="none" />
                            </svg>
                        </motion.div>
                    </motion.div>

                </div>
            </section>

            <section className="core-values section-padding bg-light">
                <div className="container animate-on-scroll">
                    <div className="section-title text-center">
                        <h3 className="section-subtitle">WHY CHOOSE US</h3>
                        <h2>Our Core Values</h2>
                        <p>The principles that guide every decision and service we provide.</p>
                    </div>
                    <div className="values-grid">
                        {values.map((val, idx) => (
                            <div key={idx} className="value-card">
                                <div className="icon-wrapper">{val.icon}</div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="our-history" className="milestones-section section-padding" style={{ scrollMarginTop: '80px' }}>
                <div className="container animate-on-scroll">
                    <div className="section-title">
                        <h2>Our Journey</h2>
                    </div>
                    <div className="timeline">
                        {milestones.map((item, idx) => (
                            <div key={idx} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3>{item.year}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="executive-leadership" className="executive-leadership section-padding" style={{ backgroundColor: 'var(--primary)', scrollMarginTop: '80px' }}>
                <div className="container animate-on-scroll">
                    <div className="section-title text-center">
                        <h3 className="section-subtitle">LEADERSHIP</h3>
                        <h2 style={{ color: 'var(--white)' }}>Executive Leadership Team</h2>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Guided by industry veterans committed to service excellence and sustainable growth.</p>
                    </div>
                    <div className="leadership-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>

                        <Link to="/leadership/saleem-mookada-aliyar" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <div className="leader-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="leader-img-placeholder" style={{ width: '100%', height: '300px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', marginBottom: '20px' }}></div>
                                <h3 style={{ margin: '0 0 5px 0', color: 'var(--white)' }}>Saleem Mookada Aliyar</h3>
                                <p style={{ margin: '0', color: 'var(--secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Founder & Chairman</p>
                            </div>
                        </Link>

                        <Link to="/leadership/sahad-saleem" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <div className="leader-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="leader-img-placeholder" style={{ width: '100%', height: '300px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', marginBottom: '20px' }}></div>
                                <h3 style={{ margin: '0 0 5px 0', color: 'var(--white)' }}>Sahad Saleem</h3>
                                <p style={{ margin: '0', color: 'var(--secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Executive Director</p>
                            </div>
                        </Link>

                        <Link to="/leadership/sahil-saleem" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <div className="leader-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="leader-img-placeholder" style={{ width: '100%', height: '300px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', marginBottom: '20px' }}></div>
                                <h3 style={{ margin: '0 0 5px 0', color: 'var(--white)' }}>Sahil Saleem</h3>
                                <p style={{ margin: '0', color: 'var(--secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Executive Director</p>
                            </div>
                        </Link>

                        <Link to="/leadership/sahar-said" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <div className="leader-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div className="leader-img-placeholder" style={{ width: '100%', height: '300px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px', marginBottom: '20px' }}></div>
                                <h3 style={{ margin: '0 0 5px 0', color: 'var(--white)' }}>Sahar Said</h3>
                                <p style={{ margin: '0', color: 'var(--secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Director of Operations</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            <section className="cta-section animate-on-scroll">
                <div className="container">
                    <h2>Ready to partner with Mumtaz?</h2>
                    <p>Discover how our decades of experience can elevate your facility standards.</p>
                    <a href="/inquiry" className="btn btn-secondary">Contact Our Team</a>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
