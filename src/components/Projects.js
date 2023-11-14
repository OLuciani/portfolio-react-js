import React from "react";
import "./projects.css";
import imagenlucianiautomoviles from "../img/captura_pantalla-home.png";
import imagenhernandezcabañas from "../img/hernandez_cabañas.png";
import imagennearbytour from "../img/Imagen-NearByTour1.jpeg";
import imagenMeddyplus from "../img/Imagen-Meddyplus.jpeg";

function Projects() {
  return (
    <div id="projects">
      <h2 className="titulo-projects">Projects</h2>

      <div className="caja-madre">
        <div className="caja-projects">
          <div className="caja-luciani-automoviles">          
              <div className="div-text-project">
                <span className="text-projects">
                  <span className="title-text-projects">NearByTour:</span>
                  <br />
                  Es una aplicación versátil que te permite descubrir tesoros
                  ocultos y experiencias auténticas en destinos locales de todo
                  el mundo, al mismo tiempo que te brinda la posibilidad de
                  contribuir tus propios descubrimientos a la comunidad de
                  viajeros.
                  <br />
                  Fue creada en No Coutry por un grupo de 3 Diseñadores UX UI y 8 Desarrolladrores (6 en
                  el Frontend y 2 en el Backend). Yo
                  trabajé en el Frontend.
                  <br />
                  Herramientas utilizadas: En el frontend se utilizó Next js 13,
                  Typescript y Tailwind css. En el backend se utilizó Next js,
                  Javascript, Firebase, Cloudinary, Postaman y Algolia. Los
                  Diseñadores UX UI emplearon Figma.
                </span>
              </div>

              <div className="contenedor-presentación">
                <a href="https://www.youtube.com/watch?v=Hc3N-QXwT7Q">
                  <p>Video presentación de NearByTour</p>
                </a>
              </div>           

            <div className="div-image-project">
              <a href="https://nearbytour.vercel.app/home">
                <img
                  className="image-project"
                  src={imagennearbytour}
                  alt="Imágen NearByTour"
                />
              </a>
            </div>
            <div className="div-button-ver-proyecto">
              <a href="https://nearbytour.vercel.app/home">
                <p className="button-ver-proyecto">Ver App</p>
              </a>
            </div>
          </div>
        </div>

        <div className="caja-projects">
          <div className="caja-luciani-automoviles">
              <div className="div-text-project">
                <span className="text-projects">
                  <span className="title-text-projects">Meddyplus:</span>
                  <br />
                  App para una Clínica de Medicina Integral. Permite crear citas
                  médicas para atención online, crear historias clínicas online
                  y muchas otras funciones. Muy práctica tanto para el paciente
                  como para el médico. 
                  <br />
                  Fue creada en No Coutry por un grupo de Desarrolladrores, 3 en
                  el Frontend y 4 en el Backend. Yo trabajé en el Frontend.
                  <br />
                  Herramientas utilizadas: En el frontend
                  se utilizó Vite, React js, Typescript y Tailwind css. En el
                  backend se utilizó Node js, Typecript y SQL.
                </span>
              </div>

              <div className="contenedor-presentación">
                <a href="https://d3ml0dc5hiowr8.cloudfront.net/meddyplus.mp4">
                  <p>Video presentación de Meddyplus</p>
                </a>
              </div>

            <div className="div-image-project">
              <a href="https://meddyplus.netlify.app">
                <img
                  className="image-project"
                  src={imagenMeddyplus}
                  alt="Imágen Meddyplus"
                />
              </a>
            </div>
            <div className="div-button-ver-proyecto">
              <a href="https://meddyplus.netlify.app">
                <p className="button-ver-proyecto">Ver App</p>
              </a>
            </div>
          </div>
        </div>

        <div className="caja-projects">
          <div className="caja-luciani-automoviles">
            <div className="div-text-project">
              <span className="text-projects">
                <span className="title-text-projects">Hernandez Cabañas:</span>
                <br />
                App para reservas y alquiler de cabañas. Crada con React js, Express js, Node js y Mongo DB (Mern Stack Project). Se utiliza Netlify para el deploy del Frontend y Render para el Backend. Para la Base de Datos empleo Mongo DB Atlas. Cabe aclarar que al utilizar un plan gratuito de Render tiene una demora la primera vez que se piden datos al Backend.
              </span>
            </div>

            <div className="div-image-project">
              <a href="https://hernandez-cabanas.netlify.app/">
                <img
                  className="image-project"
                  src={imagenhernandezcabañas}
                  alt="imagen-hernandez-cabañas"
                />
              </a>
            </div>
            <div className="div-button-ver-proyecto">
              <a href="https://hernandez-cabanas.netlify.app/">
                <p className="button-ver-proyecto">Ver App</p>
              </a>
            </div>
          </div>
        </div>

        <div className="caja-projects">
          <div className="caja-luciani-automoviles">
            <div className="div-text-project">
              <span className="text-projects">
                <span className="title-text-projects">
                  Luciani-Automóviles:
                </span>
                <br />
                App de consecionaria de automóviles. Crada con React js, Express js, Node js y Mongo DB (Mern Stack Project). Se utiliza Netlify para el deploy del Frontend y Render para el Backend. Para la Base de Datos empleo Mongo DB Atlas. Cabe aclarar que al utilizar un plan gratuito de Render tiene una demora la primera vez que se piden datos al Backend.
              </span>
            </div>

            <div className="div-image-project">
              <a href="https://luciani-automoviles.netlify.app/">
                <img
                  className="image-project"
                  src={imagenlucianiautomoviles}
                  alt="imagen-luciani-automoviles"
                />
              </a>
            </div>
            <div className="div-button-ver-proyecto">
              <a href="https://luciani-automoviles.netlify.app/">
                <p className="button-ver-proyecto">Ver App</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
