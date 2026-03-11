import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import '../styles/Scrollytelling.css'; // Create CSS for styles
import { MapPin } from 'lucide-react';

const FRAME_COUNT = 192; // Total frames from ezgif extraction
const SCROLL_DISTANCE = 300; // 300vh for a comfortable scrub length

const Scrollytelling = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const currentFrame = useRef(-1); // Start at -1 so frame 0 draws immediately
    const targetFrame = useRef(0); // The frame we *should* be at based on scroll
    const isRendering = useRef(false);
    const [progress, setProgress] = useState(0); // State for progress matching animation sequence

    // Progressive loading scheme
    useEffect(() => {
        let isPristine = true;

        const loadImages = () => {
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                // Match the naming convention ezgif-frame-001.jpg
                const frameIndex = i.toString().padStart(3, '0');
                img.src = `/sequence/ezgif-frame-${frameIndex}.jpg`;
                imagesRef.current[i - 1] = img;

                // Immediately paint the first frame once loaded
                if (i === 1) {
                    img.onload = () => {
                        if (isPristine) {
                            renderFrame(0);
                        }
                    };
                }
            }
        };

        loadImages();

        return () => {
            isPristine = false;
        };
    }, []);

    // The single robust drawing function
    const renderFrame = (index) => {
        const img = imagesRef.current[index];
        const canvas = canvasRef.current;
        if (!canvas || !img || !img.complete) return;

        // Use standard transparent alpha if we want CSS background color trailing to show
        const ctx = canvas.getContext('2d');
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Clear previous frame
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Background-size: COVER logic, but top-anchored to preserve the native map text
        const canvasRatio = canvasWidth / canvasHeight;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            // Screen wider than image. Image width matches screen, height gets cropped
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        } else {
            // Screen taller than image. Image height matches screen, width gets cropped
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imgRatio;
            offsetY = 0;
            offsetX = (canvasWidth - drawWidth) / 2;
        }

        // Apply scale to make the map occupy ~30% of screen width visually 
        // We do this by scaling down the drawing and centering it
        const scale = 0.45; // ~30-40% visual size
        const scaledWidth = drawWidth * scale;
        const scaledHeight = drawHeight * scale;

        const centerOffsetX = (canvasWidth - scaledWidth) / 2;
        const centerOffsetY = (canvasHeight - scaledHeight) / 2 + (canvasHeight * 0.05); // Slight shift down

        // Draw the image onto the canvas sharply, scaled and centered
        ctx.drawImage(img, centerOffsetX, centerOffsetY, scaledWidth, scaledHeight);
        currentFrame.current = index;
    };

    // The rAF render loop
    const renderLoop = () => {
        if (currentFrame.current !== targetFrame.current) {
            renderFrame(targetFrame.current);
        }

        isRendering.current = window.requestAnimationFrame(renderLoop);
    };

    useEffect(() => {
        // Start the render loop
        isRendering.current = window.requestAnimationFrame(renderLoop);

        return () => {
            if (isRendering.current) {
                window.cancelAnimationFrame(isRendering.current);
            }
        };
    }, []);

    // Keep canvas physically sized to internal pixel ratio for retina sharpness
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas || !canvas.parentElement) return;

            const rect = canvas.parentElement.getBoundingClientRect();
            // Bound the DPR to avoid memory exhaustion on absurdly high DPR devices, but keep it sharp on standard retina displays
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // Force an immediate redraw when sizing changes
            if (currentFrame.current >= 0) {
                renderFrame(currentFrame.current);
            }
        };

        window.addEventListener('resize', handleResize);
        // Initial sizing
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Decoupled scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();

            // The total height the user can actually scroll while pinned
            const scrollableSpace = rect.height - window.innerHeight;

            // Offset from the top of the viewport
            const scrolled = -rect.top;

            // Map the scroll distance.
            // We use 80% of the scroll space to play the animation, leaving the final 20%
            // as "resting time" so the final frame (with the text) remains visible before it unpins!
            const animationSpace = scrollableSpace * 0.80;
            let prog = scrolled / animationSpace;

            prog = Math.max(0, Math.min(1, prog));
            setProgress(prog); // Update react state for declarative UI

            // Map progress to an exact integer frame index using Math.round to ensure it easily reaches the last frame
            const frameIndex = Math.min(FRAME_COUNT - 1, Math.round(prog * (FRAME_COUNT - 1)));

            // Update the target for the rAF loop
            targetFrame.current = frameIndex;
        };

        // Passive guarantees scroll scrolling performance won't hitch
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial calculation
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation sequence points (out of 1.0 progress)
    const mapDrawn = progress > 0.4;
    const abuDhabiVisible = progress > 0.5;
    const dubaiVisible = progress > 0.6;
    const sharjahVisible = progress > 0.7;
    const linesVisible = progress > 0.8;

    return (
        <section
            ref={containerRef}
            className="scrollytelling-section"
            style={{
                height: `${SCROLL_DISTANCE}vh`,
                position: 'relative',
                backgroundColor: '#000611', // Very dark navy matching image sequence
                zIndex: 2,
                width: '100%',
                overflow: 'hidden'
            }}
        >
            <div
                className="scrollytelling-sticky"
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* Background Decor: Animated Subtle Quote */}
                <div className="bg-quote">
                    Serving Across the Emirates
                </div>

                {/* Background Decor: Subtle Glowing UAE Outline mapping the same canvas size but low opacity */}
                <div className="bg-map-outline" style={{ opacity: progress > 0.1 ? 1 : 0 }}>
                    <img src="/sequence/ezgif-frame-192.jpg" alt="UAE Map Outline" />
                </div>

                {/* Centered Heading */}
                <div className="map-heading-container" style={{ opacity: progress > 0.1 ? 1 : 0 }}>
                    <h2>Operating Across the Emirates</h2>
                </div>

                {/* Main Animation Container - Centered */}
                <div className="map-animation-container">
                    <canvas
                        ref={canvasRef}
                        className="scrollytelling-canvas"
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'block',
                            position: 'relative',
                            zIndex: 10
                        }}
                    />

                    {/* Overlay elements strictly positioned relative to the centered map container */}
                    <div className="map-overlay-layer">

                        {/* Abu Dhabi Pin */}
                        <AnimatePresence>
                            {abuDhabiVisible && (
                                <motion.div
                                    className="map-pin pin-abudhabi"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                >
                                    <div className="pin-pulse"></div>
                                    <div className="pin-dot"></div>
                                    <span className="pin-label">Abu Dhabi</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Dubai Pin */}
                        <AnimatePresence>
                            {dubaiVisible && (
                                <motion.div
                                    className="map-pin pin-dubai"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                >
                                    <div className="pin-pulse"></div>
                                    <div className="pin-dot"></div>
                                    <span className="pin-label">Dubai</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Sharjah Pin */}
                        <AnimatePresence>
                            {sharjahVisible && (
                                <motion.div
                                    className="map-pin pin-sharjah"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                >
                                    <div className="pin-pulse"></div>
                                    <div className="pin-dot"></div>
                                    <span className="pin-label">Sharjah</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Connection Lines */}
                        <AnimatePresence>
                            {linesVisible && (
                                <svg className="map-lines-svg">
                                    {/* Abu Dhabi to Dubai curve */}
                                    <motion.path
                                        d="M 28% 68% Q 40% 40% 58% 52%"
                                        className="connection-line"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    />
                                    {/* Dubai to Sharjah curve */}
                                    <motion.path
                                        d="M 58% 52% Q 65% 42% 70% 32%"
                                        className="connection-line"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                                    />
                                </svg>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Scrollytelling;
