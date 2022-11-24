import React from "react";
import "./projects.css";
import imagenclavedesol from "../img/clave-de-sol.jpeg";
import imagenlucianiautomoviles from "../img/luciani-automoviles.jpeg";
import imagenportfolio from "../img/portfolio.jpeg";

function Projects() {
  return (
    <div id="projects">
      <h2 className="titulo-projects">Projects</h2>

      <div className="caja-madre">

        <div className="caja-projects">
          <div className="div-text-project">
            <p className="text-projects">CLAVE DE SOL:<br/>Proyecto grupal de Ecommerce creado con Node JS, Express y MySQL en el marco de Digital House durante el curso de Desarrollo Web Full Stack.</p>
          </div>

          <img className="image-project" src={imagenclavedesol} alt="imagen-clave-de-sol" />
        </div>

        <div className="caja-projects">
          <div className="div-text-project">
            <p className="text-projects">LUCIANI AUTOMOVILES:<br/>Proyecto de práctica individual de Ecommerce creado con Node JS, Express y MySQL.<br/>Todavía en ejecución.</p> 
          </div>

          <img className="image-project" src={imagenlucianiautomoviles} alt="imagen-luciani-automoviles" />
        </div>  

        <div className="caja-projects">
          <div className="div-text-project">
            <p className="text-projects">PORTFOLIO:<br/>Proyecto de este Portfolio creado con React Js con contenido estático.</p> 
          </div>

          <img className="image-project" src={imagenportfolio} alt="imagen-portfolio" />
        </div>  

      </div>

    </div>
  );
}

export default Projects;
