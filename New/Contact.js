import React from "react";
import './con.css';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import QRCode from 'qrcode.react';  // Import QR code library

const Contact = () => {
    const resumeUrl = "https://drive.google.com/file/d/1iUgdv-RzgXUjhsCTlK5s1QWRRK-h2wL_/view?usp=drive_link"; // Update with your GitHub Pages URL

    return (
        <div id="contactContainer" className="section">
            <div id="homeContact">
                {/* Call */}
                <a href="tel:404-263-7813" className="infoDiv">
                    <IoIosCall />
                    <div className="info">(404) 263 7813</div>
                </a>
                <a href="mailto:email.khalidmkhan@gmail.com" className="infoDiv">
                    <MdEmail />
                    <div className="info">email.khalidmkhan@gmail.com</div>
                </a>
                <a href="https://www.linkedin.com/in/khalid-mehtab-khan-0982b1173/" className="infoDiv">
                    <CiLinkedin />
                    <div className="info">www.linkedin.com/in/khalid-mehtab-khan</div>
                </a>
                {/* github */}
                <a href="https://github.com/Kahl-d" className="infoDiv">
                    <FaGithub />
                    <div className="info">github.com/Kahl-d</div>
                </a>
                {/* twitter */}
                <a href="https://x.com/ashvatthamaa" className="infoDiv">
                    <FaSquareXTwitter />
                    <div className="info">x.com/ashvatthamaa</div>
                </a>
                {/* instagram */}
                <a href="https://www.instagram.com/ashvatthama.__/" className="infoDiv">
                    <TiSocialInstagram />
                    <div className="info">@ashvatthama.__</div>
                </a>
            </div>
            <h1>Get in touch ..</h1>
            <div id="contactDownload">
                <div className="contactDownloadDiv">
                    <QRCode value={resumeUrl} className="QRCode"/>  {/* Add QR code here */}
                </div>
                <div className="contactDownloadDiv" id="resumeBtn">
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>  {/* Add link to open in a new tab */}
                </div>
            </div>
        </div>
    )
}

export default Contact;
