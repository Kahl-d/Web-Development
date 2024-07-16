import React from "react";
import './con.css';
import { FaBoltLightning } from "react-icons/fa6";
import { GiLightBulb } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import ContactPic from '../Resources/contactpic.png';
import { FaArrowAltCircleDown } from "react-icons/fa";

const Contact = () => {

    const linkedInLink = 'https://www.linkedin.com/in/khalid-mehtab-khan-0982b1173/';
    const gitHubLink = 'https://github.com/Kahl-d';
    const twitterLink = 'https://x.com/ashvatthamaa';
    const instagramLink = 'https://www.instagram.com/ashvatthama.__/';

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        alert('Form submitted!');
    };

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div id="contactContainer">
            <div id="contactTop" className="contactSection">
                <img src={ContactPic} id="contactPic" />
                <h1>I'd love to work with you</h1>
                <p>Here are some of my previous work reviews</p>
                <div id="contactReviews">
                    <div className="review">
                        <FaBoltLightning />
                        <span>Quick at resolution</span>
                    </div>
                    <div className="review">
                        <GiLightBulb />
                        <span>Innovative</span>
                    </div>
                    <div className="review">
                        <MdOutlineConnectWithoutContact />
                        <span>Great communication</span>
                    </div>
                </div>
            </div>

            <div id="contactBottom">
                <div id="bottomLeft" className="contactSection">
                    <div id="contactInfo">
                        <div className="contactItem">
                            <div className="innerItem">
                                <span className="infoHead">You can e-mail me here</span>
                                <span className="infoinfo">email.khalidmkhan@gmail.com</span>
                            </div>
                            <div className="btn" onClick={() => handleClick('mailto:email.khalidmkhan@gmail.com')}>
                                <FaSquareArrowUpRight className="takeArrow" />
                            </div>
                        </div>
                        <div className="contactItem">
                            <div className="innerItem">
                                <span className="infoHead">Give me a call</span>
                                <span className="infoinfo">+1 404 263 7813</span>
                            </div>
                            <div className="btn" onClick={() => handleClick('tel:+14042637813')}>
                                <FaSquareArrowUpRight className="takeArrow" />
                            </div>
                        </div>
                        <div className="contactItem">
                            <div className="innerItem">
                                <span className="infoHead">You can find me in</span>
                                <span className="infoinfo">San Francisco</span>
                            </div>
                            <div className="btn" onClick={() => handleClick('https://www.google.com/maps/place/San+Francisco')}>
                                <FaSquareArrowUpRight className="takeArrow" />
                            </div>
                        </div>

                        <div className="socialProfiles">
                            <div className="socialProfileItem">
                                <FaGithubSquare className="icons" onClick={() => handleClick(gitHubLink)} />
                            </div>
                            <div className="socialProfileItem">
                                <FaLinkedin className="icons" onClick={() => handleClick(linkedInLink)} />
                            </div>
                            <div className="socialProfileItem">
                                <FaSquareXTwitter className="icons" onClick={() => handleClick(twitterLink)} />
                            </div>
                            <div className="socialProfileItem">
                                <FaSquareInstagram className="icons" onClick={() => handleClick(instagramLink)} />
                            </div>
                        </div>
                        <div id="resumeDiv">
                            <span>Download Resume</span>
                            <FaArrowAltCircleDown/>
                        </div>
                    </div>
                </div>

                <div id="bottomRight" className="contactSection">
                    <form id="conForm" onSubmit={handleFormSubmit}>
                        <div id="formTop">
                            <input type="text" placeholder="First Name" required />
                            <input type="text" placeholder="Last Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="tel" placeholder="Phone" required />
                        </div>
                        <div id="formMid">
                            <span>Reason for contact</span>
                            <div id="radioOptions">
                                <div>
                                    <input type="radio" name="reason" value="work" required />
                                    <label>Work</label>
                                </div>
                                <div>
                                    <input type="radio" name="reason" value="collab" required />
                                    <label>Collaboration</label>
                                </div>
                                <div>
                                    <input type="radio" name="reason" value="other" required />
                                    <label>Other</label>
                                </div>
                            </div>
                        </div>
                        <div id="formBottom">
                            <textarea placeholder="Message" required></textarea>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
