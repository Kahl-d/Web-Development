import React from 'react';
import './skills.css'
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



const Skills = () => {
    return (
        <div id='skillContainer'>
            <div className='skillRow'>
                <div className='skillBox'>
                    {/* c++ */}
                    <div className='skillIcon'>
                        <SiCplusplus />
                    </div>
                    <div className='skillText'>
                        <h3>C++</h3>
                    </div>
                </div>

                <div className='skillBox'>
                    <div className='skillIcon'>
                        <FaPython/>
                    </div>
                    <div className='skillText'>
                        <h3>Python</h3>
                    </div>
                </div>

                <div className='skillBox'>
                    <div className='skillIcon'>
                        <IoLogoJavascript/>
                    </div>
                    <div className='skillText'>
                        <h3>JavaScript</h3>
                    </div>
                </div>

                {/* go */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <FaGolang/>
                    </div>
                    <div className='skillText'>
                        <h3>Go</h3>
                    </div>
                </div>

                {/* SQL */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <PiFileSqlFill/>
                    </div>
                    <div className='skillText'>
                        <h3>SQL</h3>
                    </div>
                </div>

                
            </div>

            <div className='skillRow'>
                {/* HTML */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <FaHtml5/>
                    </div>
                    <div className='skillText'>
                        <h3>HTML</h3>
                    </div>
                </div>
                    
                    {/* CSS */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <IoLogoCss3/>
                    </div>
                    <div className='skillText'>
                        <h3>CSS</h3>
                    </div>
                </div>

                {/* React */}

                <div className='skillBox'>
                    <div className='skillIcon'>
                        <FaReact/>
                    </div>
                    <div className='skillText'>
                        <h3>React</h3>
                    </div>
                </div>

                {/* Flask */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <SiFlask/>
                    </div>
                    <div className='skillText'>
                        <h3>Flask</h3>
                    </div>
                </div>

                {/* Tableau */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <IoLogoTableau/>
                    </div>
                    <div className='skillText'>
                        <h3>Tableau</h3>
                    </div>
                </div>

                {/* d3.js */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <SiD3Dotjs/>
                    </div>
                    <div className='skillText'>
                        <h3>d3.js</h3>
                    </div>
                </div>
            </div>

            <div className='skillRow'>
                {/* Pytorch */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <SiPytorch/>
                    </div>
                    <div className='skillText'>
                        <h3>Pytorch</h3>
                    </div>
                </div>
                    
                    {/* Tensorflow */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <SiTensorflow/>
                    </div>
                    <div className='skillText'>
                        <h3>Tensorflow</h3>
                    </div>
                </div>

                {/* Keras */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <SiKeras/>
                    </div>
                    <div className='skillText'>
                        <h3>Keras</h3>
                    </div>
                </div>

                {/* pandas */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <SiPandas/>
                    </div>
                    <div className='skillText'>
                        <h3>Pandas</h3>
                    </div>
                </div>

                {/* numpy */}
                <div className='skillBox'>
                    <div className='skillIcon'>
                        <SiNumpy/>
                    </div>
                    <div className='skillText'>
                        <h3>Numpy</h3>
                    </div>
                </div>

                {/* scikit-learn */}

                <div className='skillBox'>
                    <div className='skillIcon'>
                        <SiScikitlearn/>
                    </div>
                    <div className='skillText'>
                        <h3>Scikit-learn</h3>
                    </div>
                </div>



            </div>

            <div className='skillRow'>
                <div className='os'>Machine Learning</div>
                <div className='os'>Deep Learning</div>
                <div className='os'>Statistical Data Analysis</div>
                <div className='os'>Natural Language Processing</div>
                <div className='os'>Computer Vision</div>
                <div className='os'>Big Data</div>
                <div className='os'>Data Mining</div>
                <div className='os'>Artificial Intelligence</div>
                <div className='os'>Generative AI</div>
                
            </div>

       

            
        
        </div>
    );
    }


export default Skills;