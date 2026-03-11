import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Assets
import logo from '../assets/mumtaz_logo_white.png';
import bgImage from '../assets/mumtaz_team.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const logoRef = useRef(null);
    const linesRef = useRef([]);

    useGSAP(() => {
        // Initial setup for entrance animations
        gsap.set(logoRef.current, { opacity: 0, y: 10 });
        gsap.set(linesRef.current, { opacity: 0, y: 15 });

        // Master entrance timeline
        const tl = gsap.timeline();

        // Logo Sharp Fade In
        tl.to(logoRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        });

        // Staggered Headlines
        // Delays exactly as requested: 0.4s, 0.7s, 1.0s relative to absolute 0
        tl.to(linesRef.current[0], { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.4)
            .to(linesRef.current[1], { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.7)
            .to(linesRef.current[2], { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 1.0);

        // Very subtle parallax on scroll
        gsap.to(bgRef.current, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

    }, { scope: heroRef });

    return (
        <section
            ref={heroRef}
            style={styles.heroSection}
        >
            {/* Background Parallax Layer */}
            <div
                ref={bgRef}
                style={styles.bgImage}
            />

            {/* Dark Navy Overlay - 65% opacity */}
            <div style={styles.overlay} />

            {/* Content Container */}
            <div style={styles.contentContainer}>
                {/* Logo */}
                <div style={styles.logoContainer}>
                    <img
                        ref={logoRef}
                        src={logo}
                        alt="Mumtaz Services Group Logo"
                        style={styles.logo}
                    />
                </div>

                {/* Headlines */}
                <div style={styles.headlinesContainer}>
                    <h1 style={styles.headline}>
                        <span ref={el => linesRef.current[0] = el} style={styles.line}>Unified</span>
                        <span ref={el => linesRef.current[1] = el} style={styles.line}>Certified</span>
                        <span ref={el => linesRef.current[2] = el} style={styles.line}>Operational</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

const styles = {
    heroSection: {
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage: {
        position: 'absolute',
        top: '-10%', // Extra height to allow parallax y movement
        left: 0,
        width: '100%',
        height: '130%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#07141f',
        opacity: 0.65,
        zIndex: 1,
    },
    contentContainer: {
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1200px',
        padding: '85px 20px 0 20px', // Extra padding top to account for navbar visually
    },
    logoContainer: {
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        width: 'min(600px, 90vw)', // Increased size as requested
        height: 'auto',
        objectFit: 'contain',
    },
    headlinesContainer: {
        textAlign: 'center',
    },
    headline: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        margin: 0,
        color: '#ffffff',
        fontFamily: 'var(--font-headline)',
    },
    line: {
        display: 'block',
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 'normal', // Let the webfont family dictate the boldness
        lineHeight: 1.1,
        letterSpacing: '0.02em',
    }
};

export default Hero;
