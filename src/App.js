import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

function App() {
 
  return (
    <div>
      <header>
        <Navbar /> 

        <Sidebar /> 
      </header>
      <main>
        <Inicio />

       <AboutMe /> 

        <Skills />

        <Projects />

        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
