import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
//import ComponentNavbar from "./components/ComponentNavbar";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
 
  return (
    <div /* className="proyecto" */>
      <header>

       {/*  <nav className="navbar">
          <div className="div-name">
            <span className="name">Oscar Miguel Luciani</span>
          </div>

          

          <div className="button-header">
            <ComponentNavbar titulo={"About me"} id={"#about"} />
          </div>
          <div className="button-header">
            <ComponentNavbar titulo={"Skills"} id={"#skills"} />
          </div>
          <div className="button-header">
            <ComponentNavbar titulo={"Proyects"} id={"#proyects"} />
          </div>
          <div className="button-header">
            <ComponentNavbar titulo={"Contact"} id={"#contact"} />
          </div>
          <div className="button-header">
            <ComponentNavbar titulo={"Imprimir CV"} />
          </div>
          
          

          <i onClick={()=>{let occult = document.querySelector(".sidebar");
         occult.style.display = "block"}} class="fa-solid fa-bars icono-burger image-icon"></i>
 
        </nav> */}

        <Navbar /> 

        <Sidebar /> 

       {/* <div className='sidebar'> 

          <p onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="close-sidebar">X</p>

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
            <ComponentNavbar titulo={"Proyects"} id={"#proyects"} />
          </div>

          <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="component-sidebar">
            <ComponentNavbar titulo={"Contact"} id={"#contact"} />
          </div>

          <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
              mostrar.style.display = "none"}} className="component-sidebar">
            <ComponentNavbar titulo={"Imprimir CV"} />
          </div> 
        </div>  */}
        
      </header>
      <main>

        <Inicio />


       {/*  <div id="about" className="caja-about-me">
          <div>
            <h2 className="titulo-about-me">About me:</h2>
            <p className="text-about-me">
              Hola. Soy Desarrollador Web Full Stack.<br />
              Me gusta el trabajo en equipo y me<br />
              motiva superar desafíos. Estoy en la<br />
              busqueda de una empresa que me<br />
              me permita potenciar mi desarrollo<br />
              profesional.
            </p>
          </div>

          <img className="photo" src="/img/Foto perfil.jpeg" alt="Foto" />
        </div> */}

       <AboutMe /> 

       {/*  <div id="skills" className="caja">
          <div> 
            <h2 className="titulo-about-me">Skills:</h2>

            <div>
              <i className="fa-brands fa-react icons-skills"></i>
            </div>

            <div>
             <i className="fa-brands fa-html5  icons-skills"></i>  
            </div>

            <div>
              <i className=""></i>
            </div>

            <div>
              <i className=""></i>
            </div>

            <div>
              <i className=""></i>
            </div>

            <div>
              <i className=""></i>
            </div>

            <div>
              <i className=""></i>
            </div>

            <div>
              <i className=""></i>
            </div>
            <p className="text-about-me">
              blabalalallallalallalalllal
              <br />
              lalallalallallallalal
              <br /> blslsllslaslslas
              <br />
              dkdkdkkdkdkkdkdkkdkkd
              <br />
              dldlldldlldlldldllldldl
            </p>
          </div>

          <img className="photo" src="/img/Foto perfil.jpeg" alt="Foto" />
        </div> */}

        <Skills />

       {/*  <div id="proyects" className="caja-proyects">
          <div>
            <h2 className="titulo-proyects">Proyects:</h2>
            <p className="text-proyects">
              bla bla bla...
            </p>
          </div>

          <img className="photo" src="/img/Foto perfil.jpeg" alt="Foto" />
        </div> */}

        <Projects />


        {/* <div id="contact" className="caja">
          <div>
            <h2 className="titulo-about-me">Contact:</h2>
            
            <div>
              
              <i className="fa-solid fa-envelope icon-hiperv" /> 
              <p className="p-hipervinc">Email: lucianioscar1@gmail.com</p>
            </div>
            
            <div>         
              <p className="p-hipervinc">
                <a href="https:/linkedin.com/in/oscarluciani">
                  <i className="fa-brands fa-linkedin-in icon-hiperv" />
                </a>Linkedin:
              </p> 
            </div>
            
            <div>
              <p className="p-hipervinc">
                <a className="hipervinc" href="https://github.com/OLuciani">      
                  <i className="fa-brands fa-github icon-hiperv" />  
                </a>Github:
              </p> 
            </div>

            <p className="text-about-me">
              blabalalallallalallalalllal
              <br />
              lalallalallallallalal
              <br /> blslsllslaslslas
              <br />
              dkdkdkkdkdkkdkdkkdkkd
              <br />
              dldlldldlldlldldllldldl
            </p>
          </div>

          <img className="photo" src="/img/Foto perfil.jpeg" alt="Foto" />
        </div> */}

        <Contact />


      </main>

      <footer>
        
        {/* <a href="https:/linkedin.com/in/oscarluciani">
          <i className="fa-brands fa-linkedin-in icon-linkedin" />
        </a> 

        <a href="https://github.com/OLuciani">
          <i className="fa-brands fa-github icon-github" />  
        </a>  */}

        <Footer />

      </footer>
    </div>
  );
}

export default App;
