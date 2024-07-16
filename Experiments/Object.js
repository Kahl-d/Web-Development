import React, { useEffect, useRef, useState } from "react";
import './c.css';

const Object = () => {
    const objectRef = useRef(null);
    const bElementsRef = useRef([]);
    const [clipPaths, setClipPaths] = useState([]);
    const [colors, setColors] = useState({});

    useEffect(() => {
        const object = objectRef.current;
        const bElements = Array.from(document.querySelectorAll('.b'));
        bElementsRef.current = bElements;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: Array.from({ length: 101 }, (_, i) => i / 100)
        };

        const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        const observerCallback = (entries) => {
            let newClipPaths = [];

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const objectRect = object.getBoundingClientRect();
                    const entryRect = entry.target.getBoundingClientRect();

                    const intersectionTop = Math.max(objectRect.top, entryRect.top);
                    const intersectionBottom = Math.min(objectRect.bottom, entryRect.bottom);
                    const intersectionHeight = Math.max(0, intersectionBottom - intersectionTop);

                    const intersectionPercentageTop = ((intersectionTop - objectRect.top) / objectRect.height) * 100;
                    const intersectionPercentageBottom = ((intersectionBottom - objectRect.top) / objectRect.height) * 100;

                    const id = entry.target.id;
                    if (!colors[id]) {
                        setColors(prevColors => ({ ...prevColors, [id]: getRandomColor() }));
                    }

                    newClipPaths.push({
                        id: entry.target.id,
                        clipPath: `polygon(0% ${intersectionPercentageTop}%, 100% ${intersectionPercentageTop}%, 100% ${intersectionPercentageBottom}%, 0% ${intersectionPercentageBottom}%)`
                    });

                    console.log(`Object is intersecting with ${entry.target.id}, Intersection height: ${intersectionHeight}px`);
                }
            });

            setClipPaths(newClipPaths);
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        bElements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [colors]);

    return (
        <div id="mainContainer">
            <div id="object1" className="object" ref={objectRef}>
                {clipPaths.map((path, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            clipPath: path.clipPath,
                            backgroundColor: colors[path.id] || 'transparent',
                            zIndex: index + 1
                        }}
                    />
                ))}
            </div>
            <div className="b" id="b1"></div>
            <div className="b" id="b2"></div>
            <div className="b" id="b3"></div>
            <div className="b" id="b4"></div>
            <div className="b" id="b5"></div>
        </div>
    );
};

export default Object;
