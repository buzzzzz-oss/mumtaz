import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SplitText from './SplitText';
import '../styles/Home.css'; // Keep inheriting original hero button styles

const FRAME_COUNT = 192; // Total Frames based on our sequence
const SCROLL_DISTANCE_VH = 300; // Let's use 300vh for scroll duration

const ScrollytellingHero = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [imagesPreloaded, setImagesPreloaded] = useState(false);
    const imagesRef = useRef([]);

    // Preload images into memory
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        // Preload first frame fast
        const loadFrame = (index) => {
            return new Promise((resolve) => {
                const img = new Image();
                // Sequence format: ezgif-frame-001.jpg
                const numStr = String(index).padStart(3, '0');
                img.src = `/sequence/ezgif-frame-${numStr}.jpg`;

                img.onload = () => {
                    loadedCount++;
                    imgArray[index - 1] = img;
                    if (loadedCount === FRAME_COUNT) {
                        imagesRef.current = imgArray;
                        setImagesPreloaded(true);
                    }
                    resolve(img);
                };
            });
        };

        // Kick off loading starting at index 1
        const loadAll = async () => {
            // load the first image immediately so we can paint it
            const firstImg = await loadFrame(1);
            if (canvasRef.current) {
                paintFrame(canvasRef.current, firstImg);
            }

            // Now load the rest in background
            const promises = [];
            for (let i = 2; i <= FRAME_COUNT; i++) {
                promises.push(loadFrame(i));
            }
            // we don't strictly need to await all here
        };

        loadAll();
    }, []);

    const paintFrame = (canvas, image) => {
        if (!canvas || !image) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Match canvas dimensions to actual screen display size
        const { width, height } = canvas.getBoundingClientRect();

        // Handle cases where canvas dimensions aren't initialized yet
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }

        // Object-fit: cover implementation on canvas
        const imageRatio = image.width / image.height;
        const canvasRatio = width / height;

        let drawWidth, drawHeight;
        let offsetX = 0, offsetY = 0;

        if (imageRatio > canvasRatio) {
            // Image is wider than canvas
            drawHeight = height;
            drawWidth = height * imageRatio;
            offsetX = (width - drawWidth) / 2;
        } else {
            // Image is taller than canvas
            drawWidth = width;
            drawHeight = width / imageRatio;
            offsetY = (height - drawHeight) / 2;
        }

        // Fill canvas with black first, just in case
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        // smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Removed Scroll Logic to prevent scroll down animation sequence

    // handle Resize
    useEffect(() => {
        const handleResize = () => {
            // Just trigger a re-paint of the first frame on resize
            if (!containerRef.current || !canvasRef.current || imagesRef.current.length === 0) return;

            paintFrame(canvasRef.current, imagesRef.current[0]);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                height: `100vh`, // Static height instead of scroll runway
                position: 'relative',
                width: '100%',
                overflow: 'hidden'
            }}
            className="scrolly-container"
        >
            <div
                className="scrolly-static"
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                {/* Canvas Base layer */}
                <canvas
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block'
                    }}
                />

                {/* Content Overlay */}
                <div style={styles.overlayContainer}>
                    <div style={styles.overlayGradient} />
                    <div className="container hero-content" style={styles.textContent}>
                        <span className="hero-subtitle" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>MUMTAZ SERVICES GROUP</span>
                        <h1 style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)', zIndex: 10 }}>
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
                        <p style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>UAE's premier provider of Facility Management, Pest Control, and specialized Cleaning services. We power better environments for living and working.</p>
                        <div className="hero-btns" style={{ position: 'relative', zIndex: 10 }}>
                            <Link to="/facility-management" className="btn btn-primary">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlayContainer: {
        position: 'absolute',
        inset: 0,
        zIndex: 5,
        display: 'flex',
        alignItems: 'center'
    },
    // We want the image to be visible, so let's stick to a very mild vignette or gradient if we need text readability.
    overlayGradient: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,33,71, 0.8) 0%, rgba(0,33,71, 0) 60%)',
        zIndex: 0
    },
    textContent: {
        position: 'relative',
        zIndex: 10,
        paddingTop: '80px' // adjust roughly for navbar height
    }
}

export default ScrollytellingHero;
