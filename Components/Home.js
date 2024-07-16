import React from "react";
import './home.css'
import profileImage from '../Resources/profile.png'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { FaKorvue } from "react-icons/fa";


const Home = () => {
    return ( 
        <div className="section" id="homeContainer">
            
            <div id="main">
                <div id="mainText">
                    <p className="fs1">Hi, I'm 
                        <span className="highlightText"> Khalid</span>
                    
                    </p>
                    <p className="fs2">Innovative data science enthusiast with a keen aptitude for identifying patterns and insights within numbers and data. Passionate
                    about leveraging IT solutions in public sector, with proven ability to adapt and excel in collaborative, cross-departmental projects.
                    Driven towards advancing technology through creative solutions and meticulous learning. Excels in applying comprehensive
                    tatistical analysis and machine learning techniques to develop and optimize predictive models and AI-driven applications.</p>
                    <button>Get in touch</button>
                </div>
                <div id="links">
                    <div className="line"></div>
                    <MdContactPage />
                    <HiOutlineMail />
                    <FaLinkedin />
                    <FaGithub />

                </div>
                <img src={profileImage} alt="profile" id="profileImg"/>
            </div>
        </div>
    )
}



export default Home;