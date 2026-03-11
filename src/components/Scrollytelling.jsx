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

        // Apply scale. Desktop: ~45% visual size. Mobile: Force fit to screen width.
        let scale = 0.45;
        if (window.innerWidth <= 768) {
            // Guarantee the image fits 95% of the screen width on portrait mobile
            scale = (canvasWidth * 0.95) / drawWidth;
        } else if (window.innerWidth <= 1024) {
             scale = 0.6; // Slightly larger for tablets
        }
        
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
                background: 'radial-gradient(circle at center, #0B2B50 0%, #011026 50%, #000611 100%)', // Center glow fading to navy
                zIndex: 2,
                width: '100%'
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


                {/* Fading Golden Headline */}
                <div 
                    className="scrolly-headline"
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: 0,
                        width: '100%',
                        textAlign: 'center',
                        zIndex: 30,
                        opacity: progress > 0.1 ? 1 : 0,
                        transform: `translateY(${progress > 0.1 ? 0 : 20}px)`,
                        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        pointerEvents: 'none'
                    }}
                >
                    <h2 style={{
                        color: 'var(--secondary, #d4af37)',
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        textShadow: '0 4px 15px rgba(0, 0, 0, 0.8)',
                    }}>
                        We Serve Across the Emirates
                    </h2>
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
                            zIndex: 10,
                            boxShadow: '0 0 80px 30px rgba(0, 50, 100, 0.4)' // Map edge glow blending
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Scrollytelling;
