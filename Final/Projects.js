import React, { useState, useEffect } from 'react';
import './projects.css';
import { IoIosClose } from "react-icons/io";
import ProjectImage from '../Resources/7456408.png'

const Projects = () => {
    const projects = [
        {
            name: "Flight Fare Prediction",
            description: "This project analyzed flight prices and operations at San Francisco International Airport (SFO) using statistical models like regression, classification, and random forests. It focused on factors influencing fares, such as travel dates, airlines, and destinations. Using data from Expedia, the study provided insights into fare patterns and helped predict price variations, benefiting travelers and airlines.",
            link: "https://github.com/Kahl-d/Fare-Prediction-App",
            image: "https://cdn.educba.com/academy/wp-content/uploads/2019/04/Predictive-Modeling.jpg"
        },
        {
            name: "Advance NLP Techniques",
            description: "This repository showcases various NLP mini-projects, utilizing techniques such as n-grams, word embeddings, and generative language models. Projects include text classification with PyTorch, Naive Bayes classifiers, and more, highlighting a range of applications in natural language processing.",
            link: "https://github.com/Kahl-d/Natural-Language-Processing",
            image: "https://cdn-images-1.medium.com/max/1500/1*MKsqxsgoS5WXMNc_zQF4wQ.jpeg"
        },
        {
            name: "SmartSearch: Web Text Retrieval System",
            description: "This project implements a text retrieval system that extracts and indexes text from web pages to create a searchable dictionary of unique words. Using this dictionary, the system ranks documents based on their relevance to user queries. The database includes 50 documents across topics like Economics, Android, Covid, Bitcoin, and Football. By applying a ranking function that considers term frequency and inverse document frequency, the system provides a ranked list of relevant documents for any given query.",
            link: "https://github.com/Kahl-d/Information-Retrieval",
            image: "https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1681989875/Algolia_com_Blog_assets/Featured_images/ux/what-is-intelligent-search-and-how-does-it-work/dntm8rnlmgbl51m9ozwy.jpg"
        },
        {
            name: "SF Housing & Renewable Energy Trends",
            description: "This project features an interactive dashboard to visualize San Francisco's housing market. Using datasets from Zillow, SF Crime Data, Simple Maps, and GreatSchools, it displays average home values, rent prices, crime rates, and demographic factors by zip code. Key technologies include data visualization libraries (D3.js, Chart.js), web scraping tools (BeautifulSoup, NLTK), and statistical analysis techniques.",
            link: "https://github.com/Kahl-d/DataWiz-Visualization",
            image: "https://cdn.dribbble.com/users/434413/screenshots/19978179/media/bfd59a26b7f69672c1270d8b3d582a66.png?resize=400x0"
        },
        {
            name: "UMAme - Personalized Culinary Platform",
            description: "UMAme a personalized culinary platform that enhances everyday cooking by combining robust data algorithms with an intuitive interface. It allows users to tweak recipes, add ingredients, and share personalized creations. The platform features step-by-step instructions, in-recipe timers, and a dynamic ecosystem for user comments and suggestions. UMAme supports culinary exploration and encourages experimentation.",
            link: "https://github.com/Kahl-d/UMAMe1",
            image: "https://images.freeimages.com/clg/istock/previews/9255/92550943-vector-umami-concept-template.jpg"
        },
        {
            name: "Machine Learning in Healthcare",
            description: "Applications of machine learning algorithms in improving healthcare outcomes.",
            link: "https://github.com/your-repo",
            image: "https://images.freeimages.com/clg/istock/previews/9255/92550943-vector-umami-concept-template.jpg"
        },
        {
            name: "Blockchain Technology and Its Applications",
            description: "Understanding blockchain technology and its potential use cases beyond cryptocurrencies.",
            link: "https://github.com/your-repo",
            image: "https://images.freeimages.com/clg/istock/previews/9255/92550943-vector-umami-concept-template.jpg"
        }
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [rightWidth, setRightWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [draggingDiv, setDraggingDiv] = useState(null);
    const [isMobileView, setIsMobileView] = useState(false); // Added state for mobile view

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setDraggingDiv("right");
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
    
        const dx = e.clientX - startX;
        const dxPercent = (dx / window.innerWidth) * 100;
    
        const newRightWidth = Math.min(Math.max(rightWidth - dxPercent, 5), 65);
        const newCenterWidth = 100 - newRightWidth;
        if (newCenterWidth >= 5) {
          setRightWidth(newRightWidth);
        }
    
        setStartX(e.clientX);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
        setDraggingDiv(null);
      };

    useEffect(() => {
        const handleScroll = () => {
            const projectsBody = document.getElementById('projectsBody');
            if (projectsBody.scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        const projectsBody = document.getElementById('projectsBody');
        projectsBody.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        handleResize(); // Initial check

        return () => {
            projectsBody.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setRightWidth(35);
    };

    const handleCloseClick = () => {
        setSelectedProject(null);
        setRightWidth(0);
    };

    return (
        <div id='mainContainer' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div id='projectScreenPC' style={{ width: `${rightWidth}%` }}>
                <div className="resizer" onMouseDown={handleMouseDown} />
                {selectedProject && (
                    <div className='screenCard'>
                        <IoIosClose onClick={handleCloseClick} className='clsBtn'/>
                        <img src={selectedProject.image} alt={selectedProject.name} className='screenImage' />
                        <h2>{selectedProject.name}</h2>
                        <p>{selectedProject.description}</p>
                        <div className="screenLink">
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                )}
            </div>
            <div id="projectsContainer" style={{ width: `${100 - rightWidth}%`}}>
                <div id="projectsHeader" className={isScrolled ? 'scrolled' : ''}>
                    <img
                        src="https://cdn.harappa.education/wp-content/uploads/2021/07/18045048/Big-Picture-Thinking.jpg"
                        alt="projects"
                        id="headerImg"
                        className={isScrolled ? 'scrolled' : ''}
                    />
                    <h1 className={isScrolled ? 'scrolled' : ''}>Projects</h1>
                </div>

                <div id="projectsBody" className={isScrolled ? 'scrolled' : ''}>
                    <div className="category" id="category1">
                        <span>Machine Learning</span>
                        <div className="horizontal-scroll">
                            {projects.map((project, index) => (
                                <div key={index} className="projectCard" onClick={() => handleProjectClick(project)}>
                                    <img src={project.image} alt={project.name} className="projectImgCard" />
                                    <div className="textCard">
                                        <h2>{project.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category" id="category2">
                        <span>Machine Learning</span>
                        <div className="horizontal-scroll">
                            {projects.map((project, index) => (
                                <div key={index} className="projectCard" onClick={() => handleProjectClick(project)}>
                                    <img src={project.image} alt={project.name} className="projectImgCard" />
                                    <div className="textCard">
                                        <h2>{project.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="category" id="category3">
                        <span>Machine Learning</span>
                        <div className="horizontal-scroll">
                            {projects.map((project, index) => (
                                <div key={index} className="projectCard" onClick={() => handleProjectClick(project)}>
                                    <img src={project.image} alt={project.name} className="projectImgCard" />
                                    <div className="textCard">
                                        <h2>{project.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="category" id="category4">
                        <span>Machine Learning</span>
                        <div className="horizontal-scroll">
                            {projects.map((project, index) => (
                                <div key={index} className="projectCard" onClick={() => handleProjectClick(project)}>
                                    <img src={project.image} alt={project.name} className="projectImgCard" />
                                    <div className="textCard">
                                        <h2>{project.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile view screen */}
            {isMobileView && selectedProject && (
                <div className="mobileProjectScreen">
                    <IoIosClose onClick={handleCloseClick} className='clsBtn'/>
                    <img src={selectedProject.image} alt={selectedProject.name} className='mscreenImage' />
                    <h2>{selectedProject.name}</h2>
                    <p>{selectedProject.description}</p>
                    <div className="mscreenLink">
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;