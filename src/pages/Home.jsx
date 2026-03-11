import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle, TrendingUp, Award, Users, Leaf } from 'lucide-react';
import SplitText from '../components/SplitText';
import Hero from '../components/Hero';
import ConveyorHero from '../components/ConveyorHero'; // temporary test import
import Scrollytelling from '../components/Scrollytelling';
import OperationalDivisions from '../components/OperationalDivisions';
import WorkforceStats from '../components/WorkforceStats';
import '../styles/Home.css';

// Existing assets
import imgFacilityManager from '../assets/facility_manager.png';
import imgPestControl from '../assets/pest_control_technician.png';
import imgCleaningStaff from '../assets/cleaning_staff.png';
import facilityImage from '../assets/1.png';
import cleaningImage from '../assets/2.png';
import pestImage from '../assets/image.jpg';
import divisionsGroupImage from '../assets/101.png';

// Accreditations
import logoIso9001 from '../assets/quality.png';
import logoIso14001 from '../assets/Environmental Management.jpg';
import logoIso45001 from '../assets/Occupational Health & Safety.png';
import logoSharjahOshh from '../assets/Sharjah OSHH Logo.webp';
import logoSharjahMuni from '../assets/[Sharjah Municipality].png';
import logoDubaiMuni from '../assets/Dubai_Municipality_Logo.jpg';
import logoAbuDhabiMuni from '../assets/Abu-Dhabi-Municipality.jpg';

const Home = () => {
    // Scroll animation hook for new sections
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    const stats = [
        { label: 'Projects Completed', value: '5,000+', icon: <CheckCircle size={24} /> },
        { label: 'Expert Staff', value: '250+', icon: <Users size={24} /> },
        { label: 'Years Excellence', value: '12+', icon: <Award size={24} /> },
        { label: 'Client Satisfaction', value: '99%', icon: <TrendingUp size={24} /> }
    ];

    const divisions = [
        {
            title: "People Solutions",
            desc: "Premium janitorial, deep cleaning, and hospitality support staff maintaining pristine corporate environments.",
            icon: <Users size={32} />,
            img: cleaningImage,
            link: "/people-solutions"
        },
        {
            title: "Environmental Solutions",
            desc: "Advanced commercial and residential pest eradication utilizing eco-friendly, ISO-compliant methodologies.",
            icon: <Leaf size={32} />,
            img: pestImage,
            link: "/environmental-solutions"
        }
    ];

    const accreditations = [
        { src: logoIso9001, alt: "ISO 9001:2015" },
        { src: logoIso14001, alt: "ISO 14001:2015" },
        { src: logoIso45001, alt: "ISO 45001:2018" },
        { src: logoSharjahOshh, alt: "Sharjah OSHH" },
        { src: logoSharjahMuni, alt: "Sharjah Municipality" },
        { src: logoDubaiMuni, alt: "Dubai Municipality" },
        { src: logoAbuDhabiMuni, alt: "Abu Dhabi Municipality" },
    ];

    return (
        <div className="home">
            {/* Embedded Specific Fixes to Ensure Palette Remains Identical */}
            <style>{`
                .section-label { color: var(--secondary); font-size: 0.9rem; font-weight: 700; letter-spacing: 2px; display: block; margin-bottom: 15px; text-transform: uppercase; }
                .who-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
                .stats-mini { display: flex; gap: 40px; margin: 30px 0; border-top: 1px solid rgba(0,0,0,0.1); border-bottom: 1px solid rgba(0,0,0,0.1); padding: 20px 0; }
                .stat-item h4 { font-size: 2rem; color: var(--secondary); margin-bottom: 5px; }
                .stat-item span { font-size: 0.9rem; font-weight: 600; color: var(--text-muted); }
                .text-link { color: var(--primary); font-weight: bold; display: flex; align-items: center; gap: 5px; transition: color 0.3s; }
                .text-link:hover { color: var(--secondary); }
                
                .bg-dark { background-color: var(--primary); color: var(--white); padding: 80px 0; }
                .text-light { color: var(--secondary); }
                .text-white { color: var(--white); font-size: 3rem; margin-bottom: 50px; text-align: center; }
                .divisions-panels { display: flex; width: 100%; height: 600px; }
                .division-panel { flex: 1; position: relative; overflow: hidden; color: var(--white); transition: flex 0.5s ease; border-right: 1px solid rgba(255,255,255,0.1); cursor: pointer; text-decoration: none; }
                .division-panel:hover { flex: 1.5; }
                .panel-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.8s ease; }
                .division-panel:hover .panel-bg { transform: scale(1.05); }
                .panel-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0, 33, 71, 0.95) 0%, rgba(0, 33, 71, 0.4) 100%); }
                .panel-content { position: absolute; bottom: 0; left: 0; width: 100%; padding: 50px 40px; z-index: 2; }
                .panel-icon { color: var(--secondary); margin-bottom: 20px; }
                .panel-content h3 { font-size: 2rem; margin-bottom: 15px; color: var(--white); }
                .panel-content p { color: rgba(255,255,255,0.8); margin-bottom: 25px; opacity: 0; transform: translateY(20px); transition: all 0.4s ease; max-width: 90%; }
                .division-panel:hover .panel-content p { opacity: 1; transform: translateY(0); }
                .explore-btn { color: var(--secondary); font-weight: bold; display: flex; align-items: center; gap: 10px; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
                
                .sus-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
                .sus-placeholder { background: var(--bg); height: 500px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
                .sus-list { list-style: none; padding: 0; margin-top: 30px; }
                .sus-list li { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; font-weight: 500; font-size: 1.1rem; }
                .icon-green { color: #10b981; }
                
                @media(max-width: 992px) {
                    .who-grid, .sus-grid { grid-template-columns: 1fr; }
                    .divisions-panels { flex-direction: column; height: auto; }
                    .division-panel { height: 350px; }
                }
            `}</style>

            {/* PREMIUM STATIC HERO */}
            <Hero />

            <Scrollytelling />

            <OperationalDivisions />

            <WorkforceStats />

            <ConveyorHero />



            {/* NEW WHO WE ARE - OVERVIEW */}
            <section className="who-we-are section-padding">
                <div className="container">
                    <div className="who-grid animate-on-scroll">
                        <div className="who-text">
                            <span className="section-label">WHO WE ARE</span>
                            <h2>Driving Innovation in Integrated Solutions</h2>
                            <p className="lead-text">For over two decades, Mumtaz Services Group has been a trusted cornerstone of enterprise operations.</p>
                            <p>We are a leading provider of comprehensive environmental, facility, and operational support solutions. Through an unwavering commitment to quality, sustainability, and human-centric service, we protect assets and elevate environments for major corporations, government entities, and residential communities.</p>
                            <div className="stats-mini">
                                <div className="stat-item">
                                    <h4>20+</h4>
                                    <span>Years Experience</span>
                                </div>
                                <div className="stat-item">
                                    <h4>3</h4>
                                    <span>Core Divisions</span>
                                </div>
                                <div className="stat-item">
                                    <h4>ISO</h4>
                                    <span>Certified</span>
                                </div>
                            </div>
                            <Link to="/about-us" className="text-link">More about Mumtaz <ArrowRight size={16} /></Link>
                        </div>
                        <div className="who-image-placeholder" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={divisionsGroupImage}
                                alt="Facilities, Environment, Hospitality divisions"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW WHAT WE DO - DIVISIONS */}
            <section className="what-we-do bg-dark">
                <div className="container-fluid p-0">
                    <div className="divisions-header animate-on-scroll">
                        <span className="section-label text-light" style={{ textAlign: 'center' }}>WHAT WE DO</span>
                        <h2 className="text-white">Our Expertise</h2>
                    </div>
                    <div className="divisions-panels">
                        {divisions.map((div, i) => (
                            <Link to={div.link} key={i} className="division-panel animate-on-scroll" style={{ transitionDelay: `${i * 0.2}s` }}>
                                <div className="panel-bg" style={{ backgroundImage: `url(${div.img})` }}></div>
                                <div className="panel-overlay"></div>
                                <div className="panel-content">
                                    <div className="panel-icon">{div.icon}</div>
                                    <h3>{div.title}</h3>
                                    <p>{div.desc}</p>
                                    <span className="explore-btn">Explore Division <ArrowRight size={16} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SUSTAINABILITY & INNOVATION */}
            <section className="sustainability section-padding">
                <div className="container">
                    <div className="sus-grid animate-on-scroll">
                        <div className="sus-image">
                            <div className="sus-placeholder" style={{ backgroundImage: `url(${cleaningImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,33,71,0.2)' }}></div>
                                <Leaf size={64} color="var(--white)" style={{ zIndex: 2, filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))' }} />
                            </div>
                        </div>
                        <div className="sus-content">
                            <span className="section-label">SUSTAINABILITY</span>
                            <h2>Committed to a Greener Tomorrow</h2>
                            <p>At Mumtaz, environmental stewardship is built into the fabric of our operations. From implementing green cleaning chemicals to advanced waste reduction strategies, we protect the planet while protecting your properties.</p>

                            <ul className="sus-list">
                                <li><CheckCircle size={20} className="icon-green" /> Eco-friendly chemical integration</li>
                                <li><CheckCircle size={20} className="icon-green" /> Resource conservation protocols</li>
                                <li><CheckCircle size={20} className="icon-green" /> Health & Safety compliance</li>
                            </ul>

                            <Link to="/inquiry" className="btn btn-primary" style={{ marginTop: '30px' }}>Partner With Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW ACCREDITATIONS CAROUSEL */}
            <section className="accreditations-section section-padding bg-dark animate-on-scroll">
                <div className="container-fluid" style={{ padding: '0' }}>
                    <div className="accreditations-header container" style={{ marginBottom: '40px' }}>
                        <h2 className="text-white" style={{ marginBottom: '10px' }}>Accreditations & Certifications</h2>
                        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>Certified excellence ensuring the highest global standards in every sector we serve.</p>
                    </div>

                    <div className="accreditations-marquee-container">
                        <div className="accreditations-marquee-track">
                            {[1, 2, 3].map((setIndex) => (
                                <React.Fragment key={setIndex}>
                                    {accreditations.map((logo, index) => (
                                        <div key={`${setIndex}-${index}`} className="accreditation-card">
                                            <div className="accreditation-logo-frame">
                                                <img src={logo.src} alt={logo.alt} className="accreditation-logo" />
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
