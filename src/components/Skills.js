import React from "react";
import "./skills.css";
import imagenskills from "../img/skills.jpg";
import imagennode from "../img/node.png";
import imagenhtml from "../img/html5.png";
import imagenmysql from "../img/mysql.png";
import imagengit from "../img/git.png";

function Skills() {
  return (
    <div id="skills">
      <h2 className="titulo-skills">Skills</h2> 

      <div className="caja-skills">
        <ul className="box-skills1">
          <li>Node Js<img className="imagen-node" src={imagennode} alt="imagen-nodeJS"/></li>   
          <li>Javascript<i className="fa-brands fa-js icono-javascript" /></li>
          <li>HTML<img className="imagen-html5" src={imagenhtml} alt="imagen-html5"/></li>    
          <li>CSS3<i className="fa-brands fa-css3 icono-css3" /></li>   
          <li>React Js<i className="fa-brands fa-react icono-react" /></li>
          <li>Express<span className="span-express">Express</span><i className="fa-brands fa-js icono-javascript" /></li>
          <li>MySQL<img className="imagen-mysql" src={imagenmysql} alt="imagen-mysql"/></li>
          <li>Creación y consumo de API's</li>
          <li>Git<img className="imagen-git" src={imagengit} alt="imagen-git"/></li>    
          
        </ul>

        <img className="photo-skills" src={imagenskills} alt="imagen-skills" />

        <ul className="box-skills2">
          <li>Metodologías Agiles - Scrum</li>
          <li>OPP</li>
          <li>Patrón de Arquitectura MVC</li>
          <li>Postman</li>
          <li>Sequelize</li>
          <li>Vs Code</li>
          <li>Java<i className="fa-brands fa-java icono-java" /></li>    
          <li>Inglés - Sigo estudiando</li>
          <li>Italiano - Conversación</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
