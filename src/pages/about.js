import React from "react";
import Diplome from "../assets/images/diplome.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Skills from "../components/Skills";
const About = () => {

  return (
   
    <div className="About"> 
    <div className="div_about">
    <div className="desc_about">
      <div className="quisuisje">
    <h1 className="titre_about">Qui je suis</h1>
    <div className="presentation_about">Je me présente, je suis Bakta, une intégratrice Web basée à Paris, en France. Mon parcours m'a mené à suivre une formation spécialisée en intégration Web chez OpenClassrooms, au cours de laquelle j'ai eu l'opportunité de concrétiser une variété de projets. Grâce à cette expérience, j'ai développé un large éventail de compétences dans le domaine de la création de sites Web. Le présent site Web témoigne du fruit de mes efforts et de mon apprentissage au fil de cette formation.
    </div></div>
    
      <div className="diplomes">
    <h2> <FontAwesomeIcon className="diplome-icon" icon="fa-solid fa-graduation-cap" />Mes diplomes</h2> 
   
    <div className="diplome">Baccalauréat Scientifique </div>
    <div className="diplome">Intégrateur web </div>
    </div></div>

    <div className="skills"> 
    <Skills/>
    </div></div></div>
    
  );
};

export default About;