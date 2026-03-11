import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './ConveyorHero.css';
import { standardSectors } from '../data/sectorsData';

// Build the array from standardSectors
let sliderCards = standardSectors.map(sector => ({
    id: sector.id,
    title: sector.title,
    image: sector.image,
    link: `/sectors/${sector.id}`
}));

// Find residential and move it to the front
const resIndex = sliderCards.findIndex(card => card.id === 'real-estate' || card.id === 'residential');
if (resIndex > -1) {
    const resCard = sliderCards.splice(resIndex, 1)[0];
    sliderCards.unshift(resCard);
}

const ConveyorHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [gap, setGap] = useState(0);

    // Calculate dimensions for accurate translation
    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setCardWidth(width * 0.85);
                setGap(width * 0.05);
            } else {
                setCardWidth(width * 0.6); // 60vw
                setGap(width * 0.04); // 4vw
            }
        };

        updateDimensions();
        // Initial call is enough for first render, resize listener handles the rest
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const nextSlide = () => {
        if (currentIndex < sliderCards.length) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleDragEnd = (e, { offset, velocity }) => {
        const swipeThreshold = 50;
        if (offset.x < -swipeThreshold && currentIndex < sliderCards.length) {
            nextSlide();
        } else if (offset.x > swipeThreshold && currentIndex > 0) {
            prevSlide();
        }
    };

    // Calculate the translation value:
    // Left padding of the container centers the first card.
    // X translate is simply -(cardWidth + gap) * currentIndex
    const translateAmount = -(cardWidth + gap) * currentIndex;

    // Use inline styling for dynamic padding calculation
    // Left padding centers the active card: (100vw - cardWidth) / 2
    const paddingLeft = cardWidth > 0 ? `calc(50vw - ${cardWidth / 2}px)` : '20vw';

    return (
        <section className="swipe-slider-section">
            {/* Background elements to match previous feel */}
            <div className="swipe-parallax-bg"></div>
            <div className="swipe-overlay-text">MUMTAZ</div>

            <div className="swipe-slider-container" ref={containerRef} style={{ paddingLeft }}>
                <motion.div
                    className="swipe-slider-track"
                    animate={{ x: translateAmount }}
                    transition={{ type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: -sliderCards.length * (cardWidth + gap), right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    style={{ cursor: 'grab' }}
                    whileDrag={{ cursor: 'grabbing' }}
                >
                    {/* Intro Slide */}
                    <motion.div
                        className={`swipe-card intro-slide ${currentIndex === 0 ? 'active' : ''}`}
                        style={{
                            width: cardWidth > 0 ? `${cardWidth}px` : '60vw',
                            marginRight: `${gap}px`,
                            background: 'transparent',
                            border: 'none',
                            boxShadow: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0
                        }}
                        animate={{
                            scale: currentIndex === 0 ? 1 : 0.95,
                            opacity: currentIndex === 0 ? 1 : 0.4
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <motion.h2
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                                fontWeight: 900,
                                color: '#000',
                                textTransform: 'uppercase',
                                lineHeight: 1,
                                textAlign: 'center',
                                margin: 0,
                                fontFamily: 'var(--font-headline, sans-serif)',
                                whiteSpace: 'nowrap'
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: currentIndex === 0 ? 1 : 0, y: currentIndex === 0 ? 0 : 50 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            SECTORS WE SERVE
                        </motion.h2>
                    </motion.div>

                    {sliderCards.map((card, index) => {
                        const actualIndex = index + 1;
                        const isActive = actualIndex === currentIndex;
                        return (
                            <motion.div
                                key={card.id}
                                className={`swipe-card ${isActive ? 'active' : ''}`}
                                data-type={card.id}
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.3), rgba(0, 33, 71, 0.7)), url(${card.image})`,
                                    width: cardWidth > 0 ? `${cardWidth}px` : '60vw',
                                    marginRight: index === sliderCards.length - 1 ? 0 : `${gap}px`
                                }}
                                animate={{
                                    scale: isActive ? 1 : 0.95,
                                    opacity: isActive ? 1 : 0.6
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className="swipe-card-index">{(index + 1).toString().padStart(2, '0')}</div>
                                <div className="swipe-card-inner">
                                    <h2 className="swipe-card-title">{card.title}</h2>
                                    <div className="swipe-card-ornament"></div>
                                    <Link to={card.link} className="swipe-card-btn" style={{ pointerEvents: 'auto' }} onDragStart={e => e.preventDefault()}>
                                        Explore <ArrowUpRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ConveyorHero;
