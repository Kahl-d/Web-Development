import React, {useState} from "react";
import './home.css'

import HomePic from '../Resources/homepic.png'


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

const Grid = ({items}) => {

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
        <div id="homeContainer">
            <img src={HomePic} alt="Home" id="homePic" />

            <div id="homeText">
                <div id="hiText">
                    Hi I'm
                </div>
                <div id="nameText">
                    Khalid Mehtab Khan
                </div>
                <div id="roleText">
                    <div id="roleText1">
                        Data Scientist
                    </div>
                    <div id="roleText2">
                        Statistical Modeling Enthusiast
                    </div>
                    <div id="roleText3">
                        Full Stack Developer
                        
                    </div>
                    <div id="roleText3">
                        Creative Designer
                    </div>
                </div>
            </div>


            <div className="wrapper_lp">
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
        </div>

    )
};


const Home = ({ numberOfBoxes }) => {


    const Kindices = [];
    
    // Generating generic items with highlighted class for specified indices
    const items = Array.from({ length: 320 }, (_, index) => ({
        name: `Item ${index}`,
        ishighlighted: Kindices.includes(index)
    }));

    return <Grid items={items}/>;
};




export default Home;