import React from 'react';
import ComponentNavbar from './ComponentNavbar';
import "./navBar.css";

function Navbar() {
  return (
    <>
      <div className='div-navbar'>
        <nav className="navbar">
          <p className='abreviatura-nombre'>OL</p>

          <div className="button-header">
            <ComponentNavbar titulo={"Home"} id={"#home"} />
          </div>
          <div className="button-header">
            <ComponentNavbar titulo={"About me"} id={"#about"} />
          </div>
          <div className="button-header">
            <ComponentNavbar titulo={"Skills"} id={"#skills"} />
          </div>
          <div className="button-header">
            <ComponentNavbar titulo={"Projects"} id={"#projects"} />
          </div>
          <div className="button-header">
            <ComponentNavbar titulo={"Contact"} id={"#contact"} />
          </div>

          <i onClick={()=>{let occult = document.querySelector(".sidebar");
          occult.style.display = "block"}} class="fa-solid fa-bars icono-burger image-icon"></i>
        </nav>
      </div>

    </>
  )
}

export default Navbar;