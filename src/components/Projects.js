import React from "react";
import "./projects.css";
import imagenlucianiautomoviles from "../img/captura_pantalla-home.png";
//import imagenhernandezcabañas from "../img/hernandez_cabañas.png";
import imagenhernandezcabañas from "../img/imagen-Hernandez-Cabañas-JVF.jpeg";
import imagennearbytour from "../img/Imagen-NearByTour1.jpeg";
import imagenMeddyplus from "../img/Imagen-Meddyplus.jpeg";
//import imagenAyudaHumanitaria from "../img/imagen.humanitarian-aid.jpeg";

function Projects() {
  return (
    <div id="projects">
      <h2 className="titulo-projects">Projects</h2>

      <div className="caja-madre">
        {/* <div className="caja-projects">
          <div className="caja-luciani-automoviles">
            <div className="div-text-project">
              <span className="text-projects">
                <span className="title-text-projects">Ayuda Humanitaria</span><span className="fecha-app">(Nov/Dic 2023):</span>
                <br />
                Es una aplicación diseñada para gestionar donaciones voluntarias en situaciones de desastres naturales, accidentes u otras adversidades. Creamos esta aplicación en No Country con la colaboración de un grupo de 5 desarrolladores (3 en el Frontend y 2 en el Backend), junto con un QA Tester. En mi caso, participé en el Frontend.
                <br />
                Herramientas utilizadas: en el frontend se utilizó Next js 13,
                Typescript, Tailwind css y Redux. En el backend se utilizó
                ASp.Net, MVC WebApi, SqlServer y Microsopt Identity. Por último
                el QA Tester utilizó Excel y Jira.
              </span>
            </div>

            <div className="contenedor-presentación">
              <a href="https://www.youtube.com/watch?v=eUTqOknSewE&list=LL&index=3">
                <p>Video presentación</p>
              </a>
            </div>

            <div className="div-image-project">
              <a href="https://s12-18-tn-csharp-next.vercel.app/">
                <img
                  className="image-project"
                  src={imagenAyudaHumanitaria}
                  alt="Imágen NearByTour"
                />
              </a>
            </div>
            <div className="div-button-ver-proyecto">
              <a href="https://s12-18-tn-csharp-next.vercel.app/">
                <p className="button-ver-proyecto">Ver app</p>
              </a>
            </div>
          </div>
        </div> */}

        <div className="caja-projects">
          <div className="caja-luciani-automoviles">
            <div className="div-text-project">
              <span className="text-projects">
                <span className="title-text-projects">NearByTour</span><span className="fecha-app">(Set/Oct 2023):</span>
                <br />
                Es una aplicación versátil que te permite descubrir tesoros
                ocultos y experiencias auténticas en destinos locales de todo el
                mundo, al mismo tiempo que te brinda la posibilidad de
                contribuir tus propios descubrimientos a la comunidad de
                viajeros.
                <br />
                Fue creada en No Coutry por un grupo de 3 Diseñadores UX UI y 8
                Desarrolladrores (6 en el Frontend y 2 en el Backend). Yo
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
                <p>Video presentación</p>
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
                <p className="button-ver-proyecto">Ver app</p>
              </a>
            </div>
          </div>
        </div>

        <div className="caja-projects">
          <div className="caja-luciani-automoviles">
            <div className="div-text-project">
              <span className="text-projects">
                <span className="title-text-projects">Meddyplus</span><span className="fecha-app">(Ago/Set 2023):</span>
                <br />
                App para una Clínica de Medicina Integral. Permite crear citas
                médicas para atención online, crear historias clínicas online y
                muchas otras funciones. Muy práctica tanto para el paciente como
                para el médico.
                <br />
                Fue creada en No Coutry por un grupo de Desarrolladrores, 3 en
                el Frontend y 4 en el Backend. Yo trabajé en el Frontend. En el
                Frontend se utilizaron herramientas como Vite, React.js,
                Typescript y Tailwind CSS, proporcionando una base sólida para
                una experiencia de usuario fluida y atractiva. En el Backend, se
                implementaron Node.js, Typescript y SQL para garantizar un
                rendimiento robusto y una gestión eficiente de la base de datos.
              </span>
            </div>

            <div className="contenedor-presentación">
              <a href="https://d3ml0dc5hiowr8.cloudfront.net/meddyplus.mp4">
                <p>Video presentación</p>
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
                <p className="button-ver-proyecto">Ver app</p>
              </a>
            </div>
          </div>
        </div>

        <div className="caja-projects">
          <div className="caja-luciani-automoviles">
            <div className="div-text-project">
              <span className="text-projects">
                <span className="title-text-projects">Hernandez Cabañas</span><span className="fecha-app">(Abr/Dic 2023):</span>
                <br />
                Aplicación diseñada para facilitar reservas y alquileres de
                cabañas, ha sido creada con la poderosa combinación de
                tecnologías líderes en la industria, tales como React.js,
                Express.js, Node.js y Mongo DB. Este proyecto, conformado por el
                stack MERN, destaca por su eficiencia y versatilidad.
                <br />
                Se hizo uso de Netlify para el despliegue del frontend y Render
                para el backend. Estas opciones han sido elegidas por su
                confiabilidad, garantizando un rendimiento estable y eficiente
                en todas las áreas de la aplicación. En la gestión de datos,
                Hernandez Cabañas utiliza la robusta plataforma de bases de
                datos Mongo DB Atlas, un entorno seguro y eficiente para
                almacenar y recuperar datos críticos.
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
                <p className="button-ver-proyecto">Ver app</p>
              </a>
            </div>
          </div>
        </div>

        <div className="caja-projects">
          <div className="caja-luciani-automoviles">
            <div className="div-text-project">
              <span className="text-projects">
                <span className="title-text-projects">
                  Luciani-Automóviles
                </span>
                <span className="fecha-app">(Feb/Mar 2023):</span>
                <br />
                App de consecionaria de automóviles. Crada con React js, Express
                js, Node js y Mongo DB (Mern Stack Project). Para el despliegue
                del frontend, se confía en la eficiencia de Netlify, una
                plataforma reconocida por su facilidad de uso y robustez. En el
                ámbito del backend, la aplicación se apoya en Render, una opción
                confiable que garantiza un rendimiento estable y eficiente. En
                lo que respecta a la gestión de datos, se hace uso de la
                avanzada plataforma de bases de datos MongoDB Atlas. Esta
                elección estratégica permite almacenar y recuperar datos de
                manera segura y eficiente, asegurando la integridad y
                disponibilidad de toda información relevante. Es importante
                señalar que, debido a la elección de un plan gratuito en Render,
                es posible experimentar una demora inicial al solicitar datos al
                backend.
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
                <p className="button-ver-proyecto">Ver app</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
