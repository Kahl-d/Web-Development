import React, { useState } from 'react';
import './grid.css';  // Make sure to include the CSS file
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { PiFileSqlFill } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { SiD3Dotjs } from "react-icons/si";

const GridItem = ({ index, children, handleMouseEnter, handleMouseLeave }) => {
    return (
        <div
            className="item"
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
        <div className="wrapper">
            <div className="grid">
                {items.map((item, index) => {
                    const distance =
                        hoveredIndex !== null
                            ? calculateDistance(index, hoveredIndex, 5)
                            : null;
                    return (
                        <div
                            key={index}
                            className="item"
                            data-distance={distance <= 1 ? distance : ''}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.icon ? <>{item.icon} {item.name}</> : item.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const SkillGrid = () => {
    const skills = [
        
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <IoLogoJavascript /> },
        { name: "Go", icon: <FaGolang /> },
        { name: "SQL", icon: <PiFileSqlFill /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <IoLogoCss3 /> },
        { name: "React", icon: <FaReact /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Tableau", icon: <IoLogoTableau /> },
        { name: "D3.js", icon: <SiD3Dotjs /> },
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "Statistical Data Analysis" },
        { name: "Natural Language Processing" },
        { name: "Computer Vision" },
        { name: "Data Mining" },
        { name: "Artificial Intelligence" },
        { name: "Generative AI" }
    ];

    return <Grid items={skills} />;
};

export default SkillGrid;
