import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// We will use a custom split implementation since gsap/SplitText is a premium plugin
// and standard npm install gsap does not include it by default. 
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplitText = ({
    text,
    className = '',
    delay = 50,
    duration = 1.25,
    ease = 'power3.out',
    splitType = 'chars',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    tag = 'p',
    onLetterAnimationComplete
}) => {
    const ref = useRef(null);
    const animationCompletedRef = useRef(false);
    const onCompleteRef = useRef(onLetterAnimationComplete);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    // Keep callback ref updated
    useEffect(() => {
        onCompleteRef.current = onLetterAnimationComplete;
    }, [onLetterAnimationComplete]);

    useEffect(() => {
        if (document.fonts.status === 'loaded') {
            setFontsLoaded(true);
        } else {
            document.fonts.ready.then(() => {
                setFontsLoaded(true);
            });
        }
    }, []);

    useGSAP(
        () => {
            if (!ref.current || !text || !fontsLoaded) return;
            // Prevent re-animation if already completed
            if (animationCompletedRef.current) return;
            const el = ref.current;

            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
            const sign =
                marginValue === 0
                    ? ''
                    : marginValue < 0
                        ? `-=${Math.abs(marginValue)}${marginUnit}`
                        : `+=${marginValue}${marginUnit}`;
            const start = `top ${startPct}%${sign}`;

            // Custom splitting logic for 'chars' or 'words'
            const words = text.split(' ');
            let targets = [];

            // Clear original text
            el.innerHTML = '';

            words.forEach((word, wordIndex) => {
                const wordEl = document.createElement('span');
                wordEl.style.display = 'inline-block';
                wordEl.style.whiteSpace = 'nowrap';

                if (splitType.includes('chars')) {
                    const chars = word.split('');
                    chars.forEach(char => {
                        const charEl = document.createElement('span');
                        charEl.style.display = 'inline-block';
                        charEl.textContent = char;
                        charEl.className = 'split-char';
                        wordEl.appendChild(charEl);
                        targets.push(charEl);
                    });
                } else {
                    wordEl.textContent = word;
                    wordEl.className = 'split-word';
                    targets.push(wordEl);
                }

                el.appendChild(wordEl);

                // Add space after word if not last
                if (wordIndex < words.length - 1) {
                    const spaceEl = document.createElement('span');
                    spaceEl.innerHTML = '&nbsp;';
                    spaceEl.style.display = 'inline-block';
                    el.appendChild(spaceEl);
                }
            });

            gsap.fromTo(
                targets,
                { ...from },
                {
                    ...to,
                    duration,
                    ease,
                    stagger: delay / 1000,
                    scrollTrigger: {
                        trigger: el,
                        start,
                        once: true,
                        fastScrollEnd: true,
                        anticipatePin: 0.4
                    },
                    onComplete: () => {
                        animationCompletedRef.current = true;
                        onCompleteRef.current?.();
                    },
                    willChange: 'transform, opacity',
                    force3D: true
                }
            );

            return () => {
                ScrollTrigger.getAll().forEach(st => {
                    if (st.trigger === el) st.kill();
                });
            };
        },
        {
            dependencies: [
                text,
                delay,
                duration,
                ease,
                splitType,
                JSON.stringify(from),
                JSON.stringify(to),
                threshold,
                rootMargin,
                fontsLoaded
            ],
            scope: ref
        }
    );

    const renderTag = () => {
        const style = {
            textAlign,
            overflow: 'hidden',
            display: 'inline-block',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            willChange: 'transform, opacity'
        };
        const classes = `split-parent ${className}`;
        const Tag = tag || 'p';

        return (
            <Tag ref={ref} style={style} className={classes}>
                {text}
            </Tag>
        );
    };
    return renderTag();
};

export default SplitText;
