// App3.js
import React, { useState } from "react";
import "./ps.css";
import Skills from "./Skills";
import Profile from "./Profile";
import Projects from "./Projects";
import { IoClose } from "react-icons/io5";

const ProjectSkillsContainer = () => {
  const [rightWidth, setRightWidth] = useState(35);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [draggingDiv, setDraggingDiv] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <div id="mainContainer" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div id="PSContainer" className="section">
        <div id="appCenter" className="section" style={{ width: `${100 - rightWidth}%` }}>
          <Projects setTheSelectedProject={setSelectedProject} />
        </div>

        <div id="appRight" className="section" style={{ width: `${rightWidth}%`, borderLeft: "2px solid #000" }}>
          <div className="resizer" onMouseDown={handleMouseDown} />
          {selectedProject ? (
            <div id="projectScreen">
              <IoClose
                id="closeBtn"
                onClick={() => setSelectedProject(null)}/>
              
              <div className="projectDetail">
                
                  <img src={selectedProject.image} alt={selectedProject.name} className="projectImg" />
                  <h2>{selectedProject.name}</h2>
                  
                  <p>{selectedProject.description}</p>
                  <button 
                    onClick={() => window.open(selectedProject.link, "_blank", "noopener noreferrer")}
                    className="card-button"
                  >
                    View on GitHub
                  </button>
                
              </div>
            </div>
          ) : (
            <div>Waiting</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSkillsContainer;
