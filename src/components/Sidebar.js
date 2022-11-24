import React from 'react';
import ComponentNavbar from './ComponentNavbar';
import './sideBar.css';

function Sidebar() {
  return (
    <>
      <div className='sidebar'> 

        <p onClick={()=>{let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none"}} className="close-sidebar">X
        </p>

        <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none"}} className="component-sidebar">
          <ComponentNavbar titulo={"Home"} id={"#home"} />
        </div>

        <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none"}} className="component-sidebar">
          <ComponentNavbar  titulo={"About me"} id={"#about"} />
        </div>

        <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none"}} className="component-sidebar">
          <ComponentNavbar titulo={"Skills"} id={"#skills"} />
        </div>

        <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none"}} className="component-sidebar">
          <ComponentNavbar titulo={"Projects"} id={"#projects"} />
        </div>

        <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
            mostrar.style.display = "none"}} className="component-sidebar">
          <ComponentNavbar titulo={"Contact"} id={"#contact"} />
        </div>

      </div> 
    </>
  )
}

export default Sidebar; 