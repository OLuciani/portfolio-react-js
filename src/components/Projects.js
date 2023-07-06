import React from "react";
import "./projects.css";
//import imagenclavedesol from "../img/clave-de-sol.png";
import imagenlucianiautomoviles from "../img/captura_pantalla-home.png";
import imagenportfolio from "../img/portfolio.png";
import imagenhernandezcabañas from "../img/hernandez_cabañas.png";

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
          <div className="box-projects">
              <div className="div-text-project">
                <p className="text-projects">HERNANDEZ CABAÑAS es un proyecto de desarrollo web basado en la arquitectura MERN (MongoDB, Express, React, Node.js) que utiliza la biblioteca Luxon para manejar fechas y tiempos de manera eficiente. Este proyecto ofrece un sitio web dedicado a las reservas y alquiler de cabañas. La plataforma permite a los usuarios realizar reservas de dos maneras: utilizando un filtro que muestra las cabañas disponibles al seleccionar las fechas de entrada y salida, o explorando todas las cabañas y sus fechas disponibles para realizar la reserva. El frontend se encuentra alojado en Netlify (plan gratuito), mientras que el backend se hospeda en Render (plan gratuito). La base de datos utilizada es MongoDBAtlas (también plan gratuito).<br />Actualmente, el proyecto se encuentra en desarrollo y se planea agregar funciones adicionales, como un registro de clientes y la integración de Mercado Pago para facilitar la confirmación de las reservas. El objetivo a corto plazo es completar estas mejoras y ofrecer una experiencia aún más completa para los usuarios.</p> 
              </div>

            <a href="https://hernandez-cabanas.netlify.app/">
              <div className="div-image-project">
                <img className="image-project" src={imagenhernandezcabañas} alt="imagen-hernandez-cabañas" />
              </div>
              {/* <div className="div-button-ver-proyecto">
                <p className="button-ver-proyecto">Ver Proyecto</p>
              </div> */}
            </a>
          </div>
        </div> 

        <div className="caja-projects">
          <div className="box-projects">
              <div className="div-text-project">
                <p className="text-projects">LUCIANI AUTOMÓVILES es un proyecto de desarrollo web que se basa en la arquitectura MERN (MongoDB, Express, React, Node.js). Su objetivo principal es brindar a los usuarios un sitio web especializado en la venta de automóviles Mercedes Benz 0km, así como automóviles usados de diversas marcas.<br />Para la implementación de este proyecto, se utilizan diferentes tecnologías y servicios. El frontend está desarrollado en React js y se encuentra alojado en Netlify (plan gratuito), mientras que el backend se basa en Node.js y Express, y se hospeda en Render (plan gratuito). La base de datos utilizada es MongoDBAtlas (plan gratuito), que ofrece una solución confiable y escalable para almacenar la información de los automóviles y sus detalles.</p> 
              </div>

            <a href="https://luciani-automoviles.netlify.app/">
              <div className="div-image-project">
                <img className="image-project" src={imagenlucianiautomoviles} alt="imagen-luciani-automoviles" />
              </div>
              {/* <div className="div-button-ver-proyecto">
                <p className="button-ver-proyecto">Ver Proyecto</p>
              </div> */}
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
