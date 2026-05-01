
import './App.css'
import misionImg from "./assets/Fundacion Saynara.png";
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <div className="logoCircle">S</div>
          <span>Fundación Saynara</span>
        </div>

        <div className="navLinks">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#programas">Programas</a>
          <a href="#contacto">Contacto</a>
          <a href="https://www.instagram.com/saynara.pe/" target="_blank">Instagram</a>
          <a href="https://wa.me/51999999999" target="_blank">WhatsApp</a>
          <button>Donar</button>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="heroText">
          <p className="tag">Voluntariado 100%</p>
          <h1>Generando cambios con amor y solidaridad</h1>
          <p>
            Ayudamos a niños, jóvenes y animalitos, uniendo voluntades para crear
            esperanza y oportunidades.
          </p>

          <div className="heroButtons">
            <button className="btnPrimary">Quiero ayudar</button>
            <button className="btnSecondary">Ser voluntario</button>
          </div>
        </div>

        <div className="heroCard">
          <h3>Fundación Saynara</h3>
          <p>Únete al cambio 💙</p>
          <img src={misionImg} alt="Somos Fundación Saynara" />
        </div>
      </section>

      <section className="mision" id="nosotros">
        <div className="misionContent">
          <h2>Nuestra Misión</h2>
          <p>
            Contribuir al desarrollo integral y al bienestar de la población,
            mediante el diseño e implementación de programas sostenibles en
            educación, salud, medio ambiente y protección animal, orientados a
            generar impacto social positivo en comunidades vulnerables.
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;