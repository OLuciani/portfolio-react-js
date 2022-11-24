import React from 'react';
import "./componentNavbar.css";

function ComponentNavbar(props) {
  return (
    <div>
      <a href={props.id}>

      <button className='button'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        {props.titulo}
      </button>
      </a>

    </div>
  )
}

export default ComponentNavbar;