import React from "react";
import "./projects.css";
import imagenclavedesol from "../img/clave-de-sol.png";
import imagenlucianiautomoviles from "../img/luciani-automoviles.png";
import imagenportfolio from "../img/portfolio.png";

function Projects() {
  return (
    <div id="projects">
      <h2 className="titulo-projects">Projects</h2>

      <div className="caja-madre">

        <div className="caja-projects">
          <div className="div-text-project">
            <p className="text-projects">CLAVE DE SOL:<br/>Proyecto grupal de Ecommerce creado con Node JS, Express y MySQL en el marco de Digital House.</p>
          </div>

          <img className="image-project" src={imagenclavedesol} alt="imagen-clave-de-sol" />
        </div>

        <div className="caja-projects">
          <div className="div-text-project">
            <p className="text-projects">LUCIANI AUTOMOVILES:<br/>Proyecto de práctica individual de Ecommerce creado con Node JS, Express y MySQL.</p> 
          </div>

          <img className="image-project" src={imagenlucianiautomoviles} alt="imagen-luciani-automoviles" />
        </div>  

        <div className="caja-projects">
          <div className="div-text-project">
            <p className="text-projects">PORTFOLIO:<br/>Proyecto de este Portfolio creado con React Js.</p> 
          </div>

          <img className="image-project" src={imagenportfolio} alt="imagen-portfolio" />
        </div>  

      </div>

    </div>
  );
}

export default Projects;
