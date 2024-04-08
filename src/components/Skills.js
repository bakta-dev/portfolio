import React,{ useState } from 'react';
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/skillsData'
import { skillsImage }  from '../components/skillsImages'

function Skills() {

    const skillBoxStyle = {
        background: 'variable-background-or',
        boxShadow: '0px 0px 30px "#3fc3374d"'
    };

 
    return (
        <div className="skills" >
            <div className="skillsHeader">
                <h2>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={100} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id}style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills