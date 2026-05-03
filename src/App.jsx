
import { useState, useEffect, useRef } from "react";
import "./App.css";

const programs = [
  {
    icon: "🧒",
    title: "Niños",
    desc: "Programas educativos y recreativos para niños en situación vulnerable.",
    tag: "Educación & Bienestar",
    pw: "pw-sky",
  },
  {
    icon: "🌱",
    title: "Jóvenes",
    desc: "Talleres, mentorías y oportunidades para jóvenes.",
    tag: "Formación & Liderazgo",
    pw: "pw-mint",
  },
  {
    icon: "🐾",
    title: "Animalitos",
    desc: "Rescate, cuidado y adopción responsable.",
    tag: "Bienestar Animal",
    pw: "pw-peach",
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">
          🤝 <span>Fundación Saynara</span>
        </div>

        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#programas">Programas</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="https://www.instagram.com/saynara.pe/" target="_blank">Instagram</a></li>
          <li><a href="https://wa.me/51999999999" target="_blank">WhatsApp</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <div>
            <h1>
              Ayuda social con <span>amor</span>
            </h1>
            <p>
              Ayudamos a niños, jóvenes y animalitos, generando impacto positivo
              en comunidades vulnerables.
            </p>

            <div className="hero-btns">
              <button onClick={() => scrollTo("programas")}>
                Ver programas
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/saynara.pe/",
                    "_blank"
                  )
                }
              >
                Instagram
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section className="about fade-in" id="nosotros">
        <h2>Nuestra Misión</h2>
        <p>
          Contribuir al desarrollo integral y al bienestar de la población,
          mediante programas sostenibles en educación, salud, medio ambiente y
          protección animal.
        </p>
      </section>

      {/* PROGRAMAS */}
      <section className="programs" id="programas">
        <h2 className="fade-in">Nuestros Programas</h2>

        <div className="programs-grid">
          {programs.map((p, i) => (
            <div className="card fade-in" key={i}>
              <div className="icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span>{p.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contact" id="contacto">
        <h2>Contáctanos</h2>

        <div className="contact-links">
          <a href="https://www.instagram.com/saynara.pe/" target="_blank">
            Instagram
          </a>
          <a href="https://wa.me/51999999999" target="_blank">
            WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Fundación Saynara</p>
      </footer>
    </div>
  );
}