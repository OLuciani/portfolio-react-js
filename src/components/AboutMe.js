import React from 'react';
import "./aboutMe.css";
import imagen from "../img/desarrollador.webp";

function AboutMe() {
  return (
    <div id="about">
         <h2 className="titulo-about-me">About me</h2>
    
        <div className="caja-about-me">
          <div>
            <p className="text-about-me">
              
              Me gusta el trabajo en equipo y me<br />
              motiva superar desafíos. Estoy en la<br />
              búsqueda de una empresa que me<br />
              permita potenciar mi desarrollo<br />
              profesional.
            </p>

            <div className="div-button-download-CV">
              <a href="./data/CV Oscar Miguel Luciani.pdf" download><button className='button-descargar-cv'>Descargar CV</button></a>
            </div>

          </div>

          <img className='imagen-about-me' src={imagen} alt="imagen-desarrollador" />
        </div>

    </div>
  )
}

export default AboutMe;