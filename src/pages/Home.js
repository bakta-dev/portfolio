import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Modal from '../components/openCV';
import CV from '../assets/images/cv.png';

library.add(fas, faGithub, faLinkedin)
const Home = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
    
  return (
   
    <div className="home"> 
    <div className="left_home">
    <div className="div_logo_home"><img className="Logo_home" src={Logo} alt="logo bakta-co"/></div>
     <section className="reseaux">
     
        <a href="https://www.linkedin.com/in/bakta-mecheri-10a3b4219/" className="icon_reseaux"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/bakta-co" className="icon_reseaux"><FontAwesomeIcon icon={faGithub} /></a>

    </section>  
    </div>
    <section className="desc_home">
    <div className="description">
   <h1 className="titre_home"> Bienvenue !</h1>
<p className="presentation_home">Je suis <span className="moi">Mecheri Bakta</span>, une développeuse web passionnée et créative, spécialisée dans la création d'expériences numériques engageantes et innovantes. Avec une solide connaissance dans le développement frontend, je suis déterminé à donner vie à vos idées avec des solutions technologiques de pointe.

<br/>N'hésitez pas à parcourir mon portfolio et à me contacter pour discuter de vos projets et de la façon dont je peux vous aider à les concrétiser. Merci de votre visite !
    </p></div>
    <div className="container_bouton">
    <div className="div_boutons"> <div className="bouton_home"><Link to="/projets">Projets</Link></div>
     <div className="bouton_home"><Link to="/contact">Contact</Link></div>
     <div className="App">
      <div className="bouton_home">
        <div className="boutonCV" onClick={openModal}>Mon CV</div>
      </div>
      {modalOpen && (
        <Modal
          imageUrl={CV}
          altText="CV Mecheri Bakta"
          onClose={closeModal}
        />
      )}
    </div>
    </div></div>
    
    </section>
  
   
    </div>
  );
};

export default Home;