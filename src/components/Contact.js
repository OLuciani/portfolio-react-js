import React from 'react';
import "./contact.css";
import imagencontact from "../img/contacts.jpg";

function Contact() {
  return (
    <div id="contact">
            <h2 className="titulo-contact">Contact</h2>
        <div className="caja-contact">
          <div className='text-contact'>

            <div className='item-contact'>
              <p className="p-info-contact"><span className='p-contact'>Localidad: </span>Ciudad de Córdoba - Argentina</p>
            </div>
             
            <div className='item-contact'>
              <p className="p-info-contact"><span className='p-contact'>Nacionalidad: </span>Argentino / Italiano</p>
            </div>

            <div className='item-contact'>
              <p className="p-info-contact"><span className='p-contact'>Email: </span>lucianioscar1@gmail.com</p>
            </div>

            <div className='item-contact'>
              <p className="p-info-contact"><span className='p-contact'>Teléfono: </span>54 9 351 5320693</p>
            </div>
            
            <div className='item-contact'>         
              <p className="p-hipervinc">
                <a className="p-contact p-hipervinc" href="https://www.linkedin.com/in/oscarluciani" target="_blank ">Linkedin: 
                  <i className="fa-brands fa-linkedin-in icon-hiperv" />
                </a>
              </p> 
            </div>
            
            <div className='item-contact'>
              <p className="p-hipervinc">
                <a className="p-contact p-hipervinc" href="https://github.com/OLuciani" target="_blank ">Github:     
                  <i className="fa-brands fa-github icon-hiperv" />  
                </a>
              </p> 
            </div>

          </div>

          <div className='div-photo'>
            <img className="photo-contact" src={imagencontact} alt="imagen-contacts" />
          </div>

        </div>
    </div>
  )
}

export default Contact;