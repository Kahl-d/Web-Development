import React, { useEffect } from "react";
import './projects.css';

const Projects = () => {
    useEffect(() => {
        const scrollContainer = document.getElementById('projectsContainer');

        const handleScroll = (event) => {
            if (scrollContainer) {
                const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                const isAtStart = scrollContainer.scrollLeft === 0;
                const isAtEnd = scrollContainer.scrollLeft >= maxScrollLeft;
                const deltaY = event.deltaY;

                if ((deltaY < 0 && isAtStart) || (deltaY > 0 && isAtEnd)) {
                    // Allow the default scroll behavior to occur
                    return;
                }

                // Prevent default vertical scrolling
                event.preventDefault();
                scrollContainer.scrollLeft += deltaY;
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', handleScroll);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    scrollContainer.classList.add('touching-top');
                } else {
                    scrollContainer.classList.remove('touching-top');
                }
            },
            { threshold: [0, 1] } // Observe when the element is fully or partially in view
        );

        if (scrollContainer) {
            observer.observe(scrollContainer);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', handleScroll);
                observer.unobserve(scrollContainer);
            }
        };
    }, []);

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

    return (
        <div id="projectsContainer" className="section">
            <div className="section-title">Projects</div>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="project-info">
                            <div className="project-name">{project.name}</div>
                            <div className="project-description">{project.description}</div>
                            <button><a href={project.link} target="_blank" rel="noreferrer" className="project-link">View Project</a></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
