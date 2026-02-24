import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Droplets, UserCheck, ArrowRight, CheckCircle, TrendingUp, Award, Users } from 'lucide-react';
import CircularGallery from '../components/CircularGallery';
import BlurText from '../components/BlurText';
import SplitText from '../components/SplitText';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import imgFacilityManager from '../assets/facility_manager.png';
import imgPestControl from '../assets/pest_control_technician.png';
import imgCleaningStaff from '../assets/cleaning_staff.png';

import imgPestControlService from '../assets/Whisk_e845c88df9a74139fbe4d069797d3674dr.jpeg';
import imgCleaningService from '../assets/Whisk_34d21d48ff5c89faddf4df3b69130029eg.png';
import imgHospitalityService from '../assets/Whisk_c66b503792067ca8747456474c5e0baedr.jpeg';
import imgFacilitiesService from '../assets/Whisk_2a530be890d7f6da0d744476a81736c5dr.jpeg';
import imgCorporateService from '../assets/Whisk_0da8ff3d0a8a6f48d04448dc98dc45bddr.jpeg';
import imgFacilityManagement from '../assets/1.jpg';
import imgPestControlDivision from '../assets/2.jpeg';
import imgCleaningCrewDivision from '../assets/Whisk_c96d16f7084b58c90bc44d83354c553edr.jpeg';

import logoIso9001 from '../assets/quality.png';
import logoIso14001 from '../assets/Environmental Management.jpg';
import logoIso45001 from '../assets/Occupational Health & Safety.png';
import logoSharjahOshh from '../assets/Sharjah OSHH Logo.webp';
import logoSharjahMuni from '../assets/[Sharjah Municipality].png';
import logoDubaiMuni from '../assets/Dubai_Municipality_Logo.jpg';
import logoAbuDhabiMuni from '../assets/Abu-Dhabi-Municipality.jpg';

const accreditationLogos = [
    { src: logoIso9001, alt: "ISO 9001:2015" },
    { src: logoIso14001, alt: "ISO 14001:2015" },
    { src: logoIso45001, alt: "ISO 45001:2018" },
    { src: logoSharjahOshh, alt: "Sharjah OSHH" },
    { src: logoSharjahMuni, alt: "Sharjah Municipality" },
    { src: logoDubaiMuni, alt: "Dubai Municipality" },
    { src: logoAbuDhabiMuni, alt: "Abu Dhabi Municipality" },
];

const Home = () => {
    const detailedServices = [
        {
            title: "PEST CONTROL SOLUTIONS — SAFE, COMPLIANT, EFFECTIVE",
            image: imgPestControlService,
            desc: "Mumtaz provides premium pest control services for residential, commercial and industrial properties across the UAE.",
            offeringsTitle: "Key Offerings:",
            offerings: [
                "General & Targeted Pest Treatments",
                "Rodent Control & Proofing",
                "Termite Management (Pre/Post Construction)",
                "Bird Control & Netting Solutions",
                "Fumigation Services",
                "Warehouse & Industrial Pest Protection",
                "Annual Pest Protection Contracts"
            ],
            conclusion: "Our treatments are fully approved, regulated and geared toward long-term prevention and peace of mind.",
            keywords: "pest control UAE, termite treatment, rodent control services, commercial pest control, industrial pest solutions"
        },
        {
            title: "PREMIUM CLEANING & HYGIENE SERVICES",
            image: imgCleaningService,
            desc: "Our professional cleaning division delivers high-end hygiene and sanitation across facilities of all sizes.",
            offeringsTitle: "Signature Solutions:",
            offerings: [
                "Deep Cleaning & General Maintenance",
                "Villa & Apartment Cleaning",
                "Office & Corporate Space Cleaning",
                "Commercial Property Cleaning",
                "Disinfection & Sanitization",
                "High-Level & Difficult-Access Cleaning",
                "Water Tank Cleaning Services"
            ],
            conclusion: "",
            keywords: "villa cleaning UAE, office cleaning services Dubai, commercial sanitization, disinfectant cleaning services, high-level cleaning UAE"
        },
        {
            title: "HOSPITALITY SUPPORT & STAFFING SERVICES",
            image: imgHospitalityService,
            desc: "As one of our most sought-after services, we provide professional hospitality support and workforce solutions tailored for hotels, resorts, serviced apartments and premium venues.",
            offeringsTitle: "Hospitality Services Include:",
            offerings: [
                "Front-of-House Staff",
                "Housekeeping Teams",
                "Service Ambassadors",
                "Support Staff Deployment",
                "Long-Term Workforce Solutions",
                "Event Support Staffing"
            ],
            conclusion: "Our hospitality professionals are trained, certified and prepared to meet exacting standards of the UAE hospitality market.",
            keywords: "hospitality staffing UAE, hotel support staff, professional housekeeping staff, event support teams"
        },
        {
            title: "FACILITIES MANAGEMENT & MANPOWER SUPPLY",
            image: imgFacilitiesService,
            desc: "We deliver integrated facilities solutions that enhance operational uptime and organizational productivity.",
            offeringsTitle: "Services Provided:",
            offerings: [
                "Soft Facilities Management Services",
                "Technical Support (Plumbing, Carpentry, Electrical)",
                "Property Support & Maintenance",
                "Preventive Maintenance Plans",
                "Skilled Manpower Supply",
                "Long-Term Facility Support Contracts (AMC)"
            ],
            conclusion: "With scalable teams and reliable service coverage, we support partners across industries.",
            keywords: "facilities management UAE, manpower supply services, property maintenance contract UAE, AMC facilities support"
        },
        {
            title: "CORPORATE SOLUTIONS & AMC CONTRACTS",
            image: imgCorporateService,
            desc: "Mumtaz Services Group partners with corporate clients to deliver Annual Maintenance Contracts that ensure long-term reliability, predictable costs and consistent service quality.",
            offeringsTitle: "AMC Benefits:",
            offerings: [
                "Scheduled Regular Service Visits",
                "Priority Support",
                "Dedicated Service Teams",
                "Compliance Assurance",
                "Fixed Annual Budgeting"
            ],
            conclusion: "Ideal for: Residential Buildings • Commercial Towers • Retail & Malls • Industrial Facilities • Hospitality Chains",
            keywords: "AMC pest control UAE, facilities AMC services, corporate maintenance contracts UAE"
        }
    ];

    const stats = [
        { label: 'Projects Completed', value: '5,000+', icon: <CheckCircle size={24} /> },
        { label: 'Expert Staff', value: '250+', icon: <Users size={24} /> },
        { label: 'Years Excellence', value: '12+', icon: <Award size={24} /> },
        { label: 'Client Satisfaction', value: '99%', icon: <TrendingUp size={24} /> }
    ];

    const sectorsWeServe = [
        { title: 'Residential Communities', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800' },
        { title: 'Commercial Offices', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
        { title: 'Retail & Shopping Centres', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=800' },
        { title: 'Hospitality & Hotels', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
        { title: 'Industrial Facilities', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
        { title: 'Healthcare Centers', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
        { title: 'Educational Campuses', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800' },
        { title: 'Government Entities', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="hero-subtitle">MUMTAZ SERVICES GROUP</span>
                    <h1>
                        <SplitText
                            text="Expert Solutions for a"
                            className="split-heading"
                            delay={30}
                            duration={1}
                            tag="span"
                            textAlign="left"
                        />
                        {' '}
                        <span style={{ color: "var(--secondary)" }}>
                            <SplitText
                                text="Seamless Community"
                                className="split-heading"
                                delay={30}
                                duration={1}
                                tag="span"
                                textAlign="left"
                            />
                        </span>
                    </h1>
                    <p>UAE's premier provider of Facility Management, Pest Control, and specialized Cleaning services. We power better environments for living and working.</p>
                    <div className="hero-btns">
                        <Link to="/facility-management" className="btn btn-primary">Our Services</Link>

                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    </div>
                ))}
            </section>



            {/* Why Premium Section */}
            <section className="why-premium">
                <div className="container why-premium-container">
                    <div className="why-premium-left">
                        <BlurText
                            text="WHY MUMTAZ"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="why-premium-title"
                        />
                        <BlurText
                            text="— WHAT MAKES US PREMIUM"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="highlight"
                        />
                    </div>
                    <div className="why-premium-right">
                        <div className="premium-features-list">
                            <div className="premium-feature-item">
                                <CheckCircle size={24} className="icon" />
                                <span>Legacy of 20+ Years in the UAE</span>
                            </div>
                            <div className="premium-feature-item">
                                <CheckCircle size={24} className="icon" />
                                <span>100+ Certified & Professional Technicians</span>
                            </div>
                            <div className="premium-feature-item">
                                <CheckCircle size={24} className="icon" />
                                <span>Physically Licensed & Regulated Services</span>
                            </div>
                            <div className="premium-feature-item">
                                <CheckCircle size={24} className="icon" />
                                <span>Dedicated Hospitality Support Services (Top Seller)</span>
                            </div>
                            <div className="premium-feature-item">
                                <CheckCircle size={24} className="icon" />
                                <span>Scalable Teams for Any Facility Size</span>
                            </div>
                            <div className="premium-feature-item">
                                <CheckCircle size={24} className="icon" />
                                <span>Municipality & OSHH Regulatory Approvals</span>
                            </div>
                        </div>
                        <p className="premium-conclusion">
                            We deliver not just services — we deliver confidence, performance and reliability at scale.
                        </p>
                    </div>
                </div>
            </section>
            {/* Brand Architecture Section */}
            <section className="brand-architecture section-padding">
                <div className="container">
                    <div className="architecture-header text-center">
                        <h2>Mumtaz Brand Architecture</h2>
                        <p className="architecture-subtitle">One Brand. Three Specialized Divisions.</p>
                    </div>

                    <div className="architecture-grid">
                        {/* Division 1 */}
                        <div className="architecture-card">
                            <div className="image-gap" style={{ backgroundImage: `url(${imgFacilityManagement})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                {/* Image placeholder / gap */}
                            </div>
                            <div className="architecture-content">
                                <h3>Mumtaz Facility Management</h3>
                                <p>The core division providing comprehensive facility management solutions.</p>
                            </div>
                        </div>

                        {/* Division 2 */}
                        <div className="architecture-card">
                            <div className="image-gap" style={{ backgroundImage: `url(${imgPestControlDivision})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                {/* Image placeholder / gap */}
                            </div>
                            <div className="architecture-content">
                                <h3>Mumtaz Pest Control</h3>
                                <p>A specialized division focused on safe, effective, and professional pest control services.</p>
                            </div>
                        </div>

                        {/* Division 3 */}
                        <div className="architecture-card">
                            <div className="image-gap" style={{ backgroundImage: `url(${imgCleaningCrewDivision})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                {/* Image placeholder / gap */}
                            </div>
                            <div className="architecture-content">
                                <h3>Mumtaz Cleaning Crew</h3>
                                <p>A dedicated cleaning services division delivering hygiene, freshness, and detailed cleaning solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us section-padding">
                <div className="container why-us-grid">
                    <div className="why-us-content">
                        <h3>ABOUT US</h3>
                        <h2>PROFESSIONAL. CERTIFIED. FUTURE-READY.</h2>
                        <p>Mumtaz Services Group is a UAE-based integrated services provider with 20+ years of operational excellence in environmental solutions, cleaning & hygiene, facilities management, hospitality support and manpower supply across the Emirates. We are trusted by residential communities, commercial enterprises, hospitality chains, government bodies and industrial facilities.</p>
                        <p style={{ marginTop: '15px' }}>With more than 100+ trained and certified professionals, we deliver efficient, compliant, and scalable services geared toward safety, performance, and regulatory alignment.</p>
                        <p style={{ marginTop: '15px', fontWeight: '600', color: 'var(--primary)' }}>Our commitment is simple: Reliable solutions that protect people, property and reputation.</p>
                        <a href="#about" className="btn btn-primary" style={{ marginTop: '30px' }}>About Our Group</a>
                    </div>
                    <div className="why-us-image">
                        {/* Floating Badges */}
                        <div className="floating-badge badge-1">20+ Years Experience</div>
                        <div className="floating-badge badge-2">ISO Certified</div>
                        <div className="floating-badge badge-3">100+ Professionals</div>
                        <div className="floating-badge badge-4">Municipality Approved UAE</div>

                        <div className="about-slider-container">
                            <img src={imgFacilityManager} alt="Facility Manager" className="about-slide slide-1" />
                            <img src={imgPestControl} alt="Pest Control Technician" className="about-slide slide-2" />
                            <img src={imgCleaningStaff} alt="Cleaning Staff" className="about-slide slide-3" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Detailed Core Services Section */}
            <section className="csd-section">
                <div className="container">
                    <div className="csd-header-row">
                        <div className="csd-header-left">
                            <h2>OUR CORE SERVICES</h2>
                        </div>
                        <div className="csd-header-right">
                            <Link to="/facility-management" className="btn btn-outline-white">VIEW OUR SERVICES</Link>
                        </div>
                    </div>
                    <div className="csd-content-row">
                        <motion.div
                            className="csd-col"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {detailedServices.filter((_, i) => i % 2 === 0).map((service, index) => (
                                <div key={index} className="csd-card">
                                    <div className="csd-image-container">
                                        <img src={service.image} alt={service.title.split('—')[0].trim()} />
                                    </div>
                                    <div className="csd-card-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <div className="csd-offerings">
                                            <h4>{service.offeringsTitle}</h4>
                                            <ul>
                                                {service.offerings.map((offering, i) => (
                                                    <li key={i}>{offering}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        {service.conclusion && <p className="csd-conclusion">{service.conclusion}</p>}

                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="csd-col"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            {detailedServices.filter((_, i) => i % 2 !== 0).map((service, index) => (
                                <div key={index} className="csd-card">
                                    <div className="csd-image-container">
                                        <img src={service.image} alt={service.title.split('—')[0].trim()} />
                                    </div>
                                    <div className="csd-card-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <div className="csd-offerings">
                                            <h4>{service.offeringsTitle}</h4>
                                            <ul>
                                                {service.offerings.map((offering, i) => (
                                                    <li key={i}>{offering}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        {service.conclusion && <p className="csd-conclusion">{service.conclusion}</p>}

                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Sectors We Serve */}
            <section className="sectors-showcase section-padding">
                <div className="container-fluid" style={{ padding: '0 20px' }}>
                    <div className="sectors-header container">
                        <h2>Sectors We Serve</h2>
                    </div>
                    <div style={{ height: '600px', position: 'relative' }}>
                        <CircularGallery
                            items={sectorsWeServe.map(s => ({ image: s.image, text: s.title }))}
                            bend={3}
                            textColor="#002147"
                            borderRadius={0.05}
                            scrollSpeed={2}
                            scrollEase={0.02}
                            font="500 30px Outfit, sans-serif"
                        />
                    </div>
                </div>
            </section>
            {/* Accreditations & Certifications */}
            <section className="accreditations-section">
                <div className="container-fluid" style={{ padding: '0' }}>
                    <div className="accreditations-header container">
                        <h2>ACCREDITATIONS & CERTIFICATIONS</h2>
                        <p>Mumtaz Services Group is proud to be:</p>
                    </div>
                    <div className="accreditations-marquee-container">
                        <div className="accreditations-marquee-track">
                            {[1, 2, 3].map((setIndex) => (
                                <React.Fragment key={setIndex}>
                                    {accreditationLogos.map((logo, index) => (
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
