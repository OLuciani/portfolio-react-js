import React, { useEffect, useState } from "react";
import "./inicio.css";
import imagen from "../img/foto-perfil.jpeg";

function Inicio() {
  const [showTransitionInicio, setShowTransitionInicio] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTransitionInicio(true);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div id="home" className={`caja-inicio inicio`}>
        <div className={`box-inicio ${showTransitionInicio ? "inicio-transition" : ""}`}>
          <p className="hola">Hola, soy </p>
          <p className="nombre-inicio">Oscar Miguel Luciani</p>
          <p className="p-profesion-inicio">Frontend Developer</p>
        </div>

        <div className="div-photo">
          <img className="photo" src={imagen} alt="foto-perfil" />
        </div>
      </div>
    </>
  );
}

export default Inicio;
