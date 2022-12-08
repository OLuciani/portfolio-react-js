import React from 'react';
import "./inicio.css";
import imagen from "../img/foto-perfil.jpeg";

function Inicio() {
  return (
   <>
      <div id="home" className='caja-inicio'>
        <div>
          <p className='hola'>Hola, soy </p>
          <p className='nombre-inicio'>Oscar Miguel Luciani</p>
          <p className='p-profesion-inicio'>Desarrollador Web Full Stack</p>
        </div>

        <div className='div-photo'>
          <img className="photo" src={imagen} alt="foto-perfil" />
        </div>
        
      </div>
    </>
  )
}

export default Inicio;