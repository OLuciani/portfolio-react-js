import React from "react";
import "./projects.css";
//import imagenclavedesol from "../img/clave-de-sol.png";
import imagenlucianiautomoviles from "../img/captura_pantalla-home.png";
import imagenportfolio from "../img/portfolio.png";

function Projects() {
  return (
    <div id="projects">
      <h2 className="titulo-projects">Projects</h2>

      <div className="caja-madre">

        {/* <div className="caja-projects">
          <div className="div-text-project">
            <p className="text-projects">CLAVE DE SOL:<br/>Proyecto grupal de Ecommerce creado con Node JS, Express y MySQL en el marco de Digital House.</p>
          </div>

          <img className="image-project" src={imagenclavedesol} alt="imagen-clave-de-sol" />
        </div> */}

        <div className="caja-projects">
          <div className="caja-luciani-automoviles">
              <div className="div-text-project">
                <p className="text-projects">LUCIANI AUTOMOVILES:<br/>Mern Stack Project usando Netlify para el Frontend (creado en React Js), Render para el Backend (creado en Node Js y Express Js) y MongoDB Atlas para la Base de Datos.</p> 
              </div>

            <a href="https://luciani-automoviles.netlify.app/">
              <div className="div-image-project">
                <img className="image-project" src={imagenlucianiautomoviles} alt="imagen-luciani-automoviles" />
              </div>
              <div className="div-button-ver-proyecto">
                <p className="button-ver-proyecto">Ver Proyecto</p>
              </div>
            </a>
          </div>
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
