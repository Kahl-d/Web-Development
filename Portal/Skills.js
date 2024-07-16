import React, { useState } from "react";
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
import './skills.css';

const Skills = () => {
    const skills = [
        { name: "C++", category: "Language", icon: <SiCplusplus /> },
        { name: "Python", category: "Language", icon: <FaPython /> },
        { name: "JavaScript", category: "Language", icon: <IoLogoJavascript /> },
        { name: "Go", category: "Language", icon: <FaGolang /> },
        { name: "SQL", category: "Language", icon: <PiFileSqlFill /> },
        { name: "HTML", category: "Development", icon: <FaHtml5 /> },
        { name: "CSS", category: "Development", icon: <IoLogoCss3 /> },
        { name: "React", category: "Development", icon: <FaReact /> },
        { name: "Flask", category: "Development", icon: <SiFlask /> },
        { name: "PyTorch", category: "Development", icon: <SiPytorch /> },
        { name: "TensorFlow", category: "Development", icon: <SiTensorflow /> },
        { name: "Keras", category: "Development", icon: <SiKeras /> },
        { name: "Pandas", category: "Development", icon: <SiPandas /> },
        { name: "NumPy", category: "Development", icon: <SiNumpy /> },
        { name: "Scikit-learn", category: "Development", icon: <SiScikitlearn /> },
        { name: "Tableau", category: "Development", icon: <IoLogoTableau /> },
        { name: "D3.js", category: "Development", icon: <SiD3Dotjs /> },
        { name: "Machine Learning", category: "Development" },
        { name: "Deep Learning", category: "Development" },
        { name: "Statistical Data Analysis", category: "Development" },
        { name: "Natural Language Processing", category: "Development" },
        { name: "Computer Vision", category: "Development" },
        { name: "Data Mining", category: "Development" },
        { name: "Artificial Intelligence", category: "Development" },
        { name: "Generative AI", category: "Development" },
        { name: "Communication", category: "Soft Skills" },
        { name: "Teamwork", category: "Soft Skills" },
        { name: "Problem Solving", category: "Soft Skills" },
        { name: "Time Management", category: "Soft Skills" },
        { name: "Adaptability", category: "Soft Skills" }
    ];

    const [filteredSkills, setFilteredSkills] = useState(skills);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'All') {
            setFilteredSkills(skills);
        } else {
            setFilteredSkills(skills.filter(skill => skill.category === category));
        }
    };

    return (
        <div id="skillsContainer">
            <div id="skillsHeader">Skills</div>
            <div id="skillsFilter">
                <div className={`filters ${activeFilter === 'All' ? 'active' : ''}`} onClick={() => handleFilter('All')}>All</div>
                <div className={`filters ${activeFilter === 'Language' ? 'active' : ''}`} onClick={() => handleFilter('Language')}>Language</div>
                <div className={`filters ${activeFilter === 'Development' ? 'active' : ''}`} onClick={() => handleFilter('Development')}>Development</div>
                <div className={`filters ${activeFilter === 'Soft Skills' ? 'active' : ''}`} onClick={() => handleFilter('Soft Skills')}>Soft Skills</div>
            </div>
            <div id="skills">
                {filteredSkills.map((skill, index) => (
                    <div key={index} className="skill">
                        {skill.icon && <span className="icon">{skill.icon}</span>}
                        <span className="name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;