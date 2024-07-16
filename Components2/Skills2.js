import React from "react";
import "./skills2.css";
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

const skills1 = [
  {
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "Go",
    icon: <FaGolang />,
  },
  {
    name: "SQL",
    icon: <PiFileSqlFill />,
  }
];

const skills2 = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <IoLogoCss3 />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Flask",
      icon: <SiFlask />,
    }
  ];

  const skills3 = [
    {
      name: "PyTorch",
      icon: <SiPytorch />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow />,
    },
    {
      name: "Keras",
      icon: <SiKeras />,
    },
    {
      name: "Pandas",
      icon: <SiPandas />,
    },
    {
      name: "NumPy",
      icon: <SiNumpy />,
    },
    {
      name: "Scikit-learn",
      icon: <SiScikitlearn />,
    },
    {
      name: "Tableau",
      icon: <IoLogoTableau />,
    },
    {
      name: "D3.js",
      icon: <SiD3Dotjs />,
    }
  ];

const skills4 = [
    {
        name: "Machine Learning"
    },
    {
        name: "Deep Learning"
    },
    {
        name: "Statistical Data Analysis"
    },
    {
        name: "Natural Language Processing"
    },
    {
        name: "Computer Vision"
    },
    {
        name: "Big Data"
    },
    {
        name: "Data Mining"
    },
    {
        name: "Artificial Intelligence"
    },
    {
        name: "Generative AI"
    }
];

const Skills2 = () => {


  return (
    <div className="wrapper">
      <div className="items">
        {skills1.map((skill, index) => (
          <div
            key={index}
            className="item"
            tabIndex="0"
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
              <div className="skill-name">
                {skill.name}
              </div>
          </div>
        ))}
      </div>
      <div className="items">
        {skills2.map((skill, index) => (
          <div
            key={index}
            className="item"
            tabIndex="0"
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
              <div className="skill-name">
                {skill.name}
              </div>
          </div>
        ))}
      </div>
      <div className="items">
        {skills3.map((skill, index) => (
          <div
            key={index}
            className="item"
            tabIndex="0"
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
              <div className="skill-name">
                {skill.name}
              </div>
          </div>
        ))}
      </div>
      <div className="items">
        {skills4.map((skill, index) => (
          <div
            key={index}
            className="item"
            tabIndex="0"
          >
              <div className="skill-name">
                {skill.name}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Skills2;
