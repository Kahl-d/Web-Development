import React, { useEffect } from "react";
import './appn.css';
import { IoBuild } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
// import Projects from "./Projects";
import GenericGrid from '../Experiments/GenericGrid'
// import Home from '../Components2/Home'
import Home from '../Portal/Home'
import Contact from './Contact'
// import Skills from '../Components/Skills';
import ProjectSkillsContainer from '../Portal/ProjectSkillsContainer'

const AppN = () => {

    useEffect(() => {
        const handleNavClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });

        const sections = document.querySelectorAll('.part');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (navLink) {
                    navLink.classList.toggle('active', entry.isIntersecting);
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });

        // Clean up the event listeners on unmount
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleNavClick);
            });
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div id="appContainer">
            <div id="appContent">
                <div className="part" id="landing">
                    <GenericGrid/>
                </div>
                <div className="part" id="home">
                    {/* <div className="sticky-tag">
                        Home
                    </div> */}
                    <Home/>

                </div>
                
                <div className="part" id="skills">
                    {/* <div className="sticky-tag">Skills</div>
                    <Skills/> */}
                    <ProjectSkillsContainer/>
                </div>
                {/* <div className="part" id="projects">
                    <Projects />
                </div> */}
                <div className="part" id="contact">
                    <div className="sticky-tag">Contact</div>
                    <Contact/>
                </div>
                
            </div>
            <div id="appNav">
                <div>
                    <a href="#landing" className="nav-link">
                        <span>Home</span>
                    </a>
                </div>
                <div>
                    <a href="#home" className="nav-link">
                        <IoPersonCircle />
                        <span>Profile</span>
                    </a>
                </div>
                
                <div>
                    <a href="#skills" className="nav-link">
                        <GiSkills />
                        <span>Skills</span>
                    </a>
                </div>
                {/* <div>
                    <a href="#projects" className="nav-link">
                        <IoBuild />
                        <span>Projects</span>
                    </a>
                </div> */}
                <div>
                    <a href="#contact" className="nav-link">
                        <MdContacts />
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AppN;
