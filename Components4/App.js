import React, { useState } from "react";
import './app.css';
import Skills from '../Portal/Skills';
import NewProjects from './NewProjects'
import Profile from './Profile';

import ColorOs from "./ColorOs";
import { GiCaptainHatProfile } from "react-icons/gi";
import { TbTools } from "react-icons/tb";
import { GiLightProjector } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const ExpandedContent = ({ index }) => {
    // Example expanded content for each screen
    const contents = [
        <Profile />,
        <Skills />,
        <NewProjects />,
        <ColorOs />
    ];
    return contents[index];
};

const App = () => {
    const [expandedScreen, setExpandedScreen] = useState(null);

    const handleScreenClick = (index) => {
        setExpandedScreen(index);
    };

    const handleCloseClick = (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the screen
        setExpandedScreen(null);
    };

    const profile = <div className="tile">
        <GiCaptainHatProfile />
        Profile
    </div>

    return (
        <div id="appContainer">
            {[profile, 'Skills', 'Projects', 'Contact'].map((title, index) => (
                <div
                    key={index}
                    className={`screen ${expandedScreen === index ? `expanded ${getScreenPosition(index)}` : expandedScreen !== null ? 'shrink' : ''}`}
                    onClick={() => handleScreenClick(index)}
                >
                    {expandedScreen === index ? (
                        <ExpandedContent index={index} />
                    ) : (
                        <div>{title}</div>
                    )}
                    {expandedScreen === index && (
                        <button className="close-button" onClick={handleCloseClick}>×</button>
                    )}
                </div>
            ))}
        </div>
    );
};

const getScreenPosition = (index) => {
    switch (index) {
        case 0:
            return 'top-left';
        case 1:
            return 'top-right';
        case 2:
            return 'bottom-left';
        case 3:
            return 'bottom-right';
        default:
            return '';
    }
};

export default App;
