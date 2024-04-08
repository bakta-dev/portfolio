import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png"


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      <img className="Logo_header" src={Logo} alt="logo bakta-co"/>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/projets">Projets</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};



// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from "@fortawesome/free-brands-svg-icons";

// library.add(fas, faGithub);

// const Navbar = () => {
//   const [activeTab, setActiveTab] = useState(""); 

//   return (

  //   <div className="navbar">
  //     <nav>
  //       <ul>
  //         <li>
  //           <NavLink
  //             to="/"
  //             activeClassName="active" 
  //             onClick={() => setActiveTab("Accueil")} 
  //           >
  //             <FontAwesomeIcon className="nav_icon" icon="fa-solid fa-house" /><span> Accueil</span>
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink
  //             to="/about"
  //             activeClassName="active"
  //             onClick={() => setActiveTab("A propos")}
  //           >
  //            <span className="item"> <FontAwesomeIcon className="nav_icon" icon="fa-solid fa-user" /> A propos</span>
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink
  //             to="/services"
  //             activeClassName="active"
  //             onClick={() => setActiveTab("Services")}
  //           >
  //             <span className="item" ><FontAwesomeIcon className="nav_icon" icon="fa-solid fa-computer" />Services</span> 
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink
  //             to="/projets"
  //             activeClassName="active"
  //             onClick={() => setActiveTab("Projets")}
  //           >
  //            <span className="item" >  <FontAwesomeIcon className="nav_icon" icon="fa-solid fa-diagram-project" />Projets</span>
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink
  //             to="/contact"
  //             activeClassName="active"
  //             onClick={() => setActiveTab("Contact")}
  //           >
  //           <span className="item"><FontAwesomeIcon className="nav_icon" icon="fa-solid fa-address-card" /> Contact</span>
  //           </NavLink>
  //         </li>
   

  //       </ul>
  //     </nav>
  //   </div>
//    );
// };

export default Header;
