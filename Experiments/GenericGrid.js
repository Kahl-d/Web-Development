import React, { useState, useEffect } from 'react';
import './kl.css';  // Make sure to include the CSS file
import { FaArrowDown } from "react-icons/fa6";

const GridItem = ({ index, children, handleMouseEnter, handleMouseLeave, ishighlighted }) => {
    return (
        <div
            className={`item ${ishighlighted ? 'highlighted' : ''}`}
            data-index={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};

const Grid = ({ items }) => {
    

    const [hoveredIndex, setHoveredIndex] = useState(null);

    
    
    const handelingScroll = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };


    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const calculateDistance = (i, j, gridSize) => {
        const x1 = i % gridSize;
        const y1 = Math.floor(i / gridSize);
        const x2 = j % gridSize;
        const y2 = Math.floor(j / gridSize);
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    return (
        <div className="wrapper_lp" onScroll={handelingScroll}>
            {/* <div id='downarrow' onClick={handelingScroll}><FaArrowDown/><span id='down'>Scroll Down</span></div> */}
            <div className="grid_lp">
                {items.map((item, index) => {
                    const distance =
                        hoveredIndex !== null
                            ? calculateDistance(index, hoveredIndex, 20)
                            : null;
                    return (
                        <div
                            key={index}
                            className={`item ${item.ishighlighted ? 'highlighted' : ''}`}
                            data-distance={distance <= 3 ? distance : ''}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* {item.icon ? <>{item.icon} {item.name}</> : item.name} */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const GenericGrid = ({ numberOfBoxes }) => {


    const Kindices = [105, 85,65, 125, 125,145, 165,185, 205, 225, 245, 265, 166, 147, 187, 128, 208, 109,229, 90, 250,71,271, 273];
    
    // Generating generic items with highlighted class for specified indices
    const items = Array.from({ length: 320 }, (_, index) => ({
        name: `Item ${index}`,
        ishighlighted: Kindices.includes(index)
    }));

    return <Grid items={items}/>;
};

export default GenericGrid;
