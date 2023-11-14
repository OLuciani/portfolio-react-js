import React from 'react';
import "./aboutMe.css";
import imagen from "../img/desarrollador.webp";

function AboutMe() {
  return (
    <div id="about">
         <h2 className="titulo-about-me">About me</h2>
    
        <div className="caja-about-me">
          <div className="content-text">
            <p className="text-about-me">
              Apasionado del Desarrollo Web desde principios de 2021, comencé como autodidacta en Java y más tarde completé un Bootcamp de Full Stack Developer (Node.js) en Digital House. Me he capacitado con entusiasmo en herramientas como React.js, Next.js, Typescript, Javascript, HTML, CSS, Tailwind CSS, Vite js, MySQL y MongoDB entre otras.
              Mi trayectoria comenzó como Full Stack Developer, pero evolucionó hacia un enfoque especializado en el Frontend. Actualmente, colaboro en emulaciones de proyectos reales con equipos multidisciplinarios en No Country, trabajando junto a Backend Developers, UX/UI Designers, TL, PM, y otros. Siempre en busca de nuevas oportunidades de crecimiento y desarrollo profesional, mi objetivo es contribuir en un entorno que valore mis habilidades y fomente mi evolución en la carrera.
            </p>

            {/* <div className="div-button-download-CV">
              <a href="./data/CV (ES)-Oscar Luciani - Frontend.pdf" download><button className='button-descargar-cv'>Descargar CV</button></a>
            </div> */}

          </div>

          <img className='imagen-about-me' src={imagen} alt="imagen-desarrollador" />
        </div>

        <div className="div-button-download-CV">
          <a href="./data/CV (ES)-Oscar Luciani - Frontend.pdf" download><button className='button-descargar-cv'>Descargar CV</button></a>
        </div>

    </div>
  )
}

export default AboutMe;