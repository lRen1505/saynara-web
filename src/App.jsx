import heroImg from "./assets/Fundacion Saynara.png";
import Escuadron4Patas from "./assets/Escuadron4Patas.jpeg";
import SaynaraMascotas from "./assets/SaynaraMascotas.jpeg";
import SaynaraPeludos from "./assets/SaynaraPeludos.jpeg";
import Voluntariado from "./assets/Voluntariado.jpeg";
import { useState, useEffect, useRef } from "react";
import "./App.css";
const programs = [
  {
    icon: "🧒",
    title: "Niños",
    desc: "Programas educativos y recreativos para niños en situación vulnerable, brindando herramientas para su desarrollo integral.",
    tag: "Educación & Bienestar",
    pw: "pw-sky",
  },
  {
    icon: "🌱",
    title: "Jóvenes",
    desc: "Talleres, mentorías y oportunidades para jóvenes que buscan crecer, aprender y transformar su entorno.",
    tag: "Formación & Liderazgo",
    pw: "pw-mint",
  },
  {
    icon: "🐾",
    title: "Animalitos",
    desc: "Rescate, cuidado y adopción responsable de animales en situación de calle o abandono.",
    tag: "Bienestar Animal",
    pw: "pw-peach",
  },
];
 
const missionItems = [
  ["📚", "Educación para niños vulnerables"],
  ["🎯", "Talleres y mentorías para jóvenes"],
  ["🐕", "Rescate y adopción animal"],
  ["🤝", "Voluntariado comunitario"],
];
 
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ nombre: "", correo: "", ayuda: "" });
  const observerRef = useRef(null);
  const imagenes = [
    heroImg,
    Escuadron4Patas,
    SaynaraMascotas,
    SaynaraPeludos,
    Voluntariado,
  ];
  const [imagenActual, setImagenActual]= useState(0);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) =>
      observerRef.current.observe(el)
    );
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() =>{
    const intervalo = setInterval(() =>{
      setImagenActual((prev) => (prev+1) % imagenes.length);
    }, 3500); 
  },[]);
 
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
 
  const sendWhatsApp = () => {
    const msg = `¡Hola! Me gustaría ser voluntario/a en Fundación Saynara 💙\nNombre: ${form.nombre}\nCorreo: ${form.correo}\nQuiero ayudar: ${form.ayuda}`;
    window.open(`https://wa.me/51920320396?text=${encodeURIComponent(msg)}`, "_blank");
  };
 
  return (
    <div className="app">
 
      {/* ── NAVBAR ── */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#inicio" className="nav-logo">
          <div className="nav-logo-blob">🤝</div>
          <span className="nav-logo-text">Fundación Saynara</span>
        </a>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#programas">Programas</a></li>
          <li><a href="#voluntario">Voluntario</a></li>
          <li><a href="https://www.instagram.com/saynara.pe/" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="#voluntario" className="nav-cta">💙 Donar</a></li>
        </ul>
      </nav>
 
      {/* ── HERO ── */}
      <section className="hero" id="inicio">
        <div className="hero-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
          <div className="shape shape-4" />
        </div>
 
        <div className="hero-content">
          {/* Left */}
          <div>
            <div className="hero-badge">✨ 100% Voluntario · Perú</div>
            <h1 className="hero-title">
              Ayuda social<br />
              con <span className="sky">corazón</span> y<br />
              <span className="green">solidaridad</span>
            </h1>
            <p className="hero-sub">
              Ayudamos a niños, jóvenes y animalitos, uniendo voluntades para
              crear esperanza y oportunidades en comunidades vulnerables.
            </p>
            <div className="hero-btns">
            <button
              className="btn-main"
              onClick={() => {
                  const msg =
                "¡Hola! 💙 Estoy interesado(a) en apoyar a Fundación Saynara. ¿Podrían brindarme más información sobre voluntariado y formas de colaboración?";
      
                window.open(
                `https://wa.me/51920320396?text=${encodeURIComponent(msg)}`,
                "_blank"
                    );
                 }}
              >
                💚 Quiero ayudar
              </button>
              <button className="btn-second" onClick={() => scrollTo("programas")}>
                Ver programas →
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-pill">
                <span className="stat-pill-num">220+</span>
                <span className="stat-pill-label">Seguidores</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-num">3</span>
                <span className="stat-pill-label">Programas</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-num">💙</span>
                <span className="stat-pill-label">Voluntarios</span>
              </div>
            </div>
          </div>
 
          {/* Right card */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hc-top">
                 <img src={imagenes[imagenActual]} alt="Fundación Saynara" className="hc-image" />
                <div className="hc-tagline">Únete al cambio</div>
                <div className="hc-sub">@saynara.pe · Instagram</div>
              </div>
              <div className="hc-chips">
                <span className="hc-chip chip-sky">🧒 Niños</span>
                <span className="hc-chip chip-mint">🌱 Jóvenes</span>
                <span className="hc-chip chip-peach">🐾 Animalitos</span>
              </div>
              <button className="hc-btn" onClick={() => scrollTo("voluntario")}>
                Ser voluntario 💙
              </button>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── STRIP ── */}
      <div className="strip">
        <div className="strip-item">🧒 Niños</div>
        <span className="strip-div">·</span>
        <div className="strip-item">🌱 Jóvenes</div>
        <span className="strip-div">·</span>
        <div className="strip-item">🐾 Animalitos</div>
        <span className="strip-div">·</span>
        <div className="strip-item">💚 100% Voluntario</div>
        <span className="strip-div">·</span>
        <div className="strip-item">🇵🇪 Perú</div>
      </div>
 
      {/* ── ABOUT ── */}
      <section className="about" id="nosotros">
        <div className="fade-in">
          <div className="section-eyebrow">Quiénes somos</div>
          <h2 className="section-title">
            Una fundación que transforma<br />
            <span className="sky">vidas con amor</span>
          </h2>
        </div>
 
        <div className="about-grid">
          <div className="fade-in">
            <p className="about-p">
              Fundación Saynara es una organización 100% voluntaria dedicada al
              bienestar de los niños, jóvenes y animales en situación de
              vulnerabilidad en el Perú.
            </p>
            <p className="about-p">
              Creemos que el cambio real nace del amor y la solidaridad. Cada
              acción está guiada por el compromiso genuino de hacer de nuestro
              entorno un lugar más justo y compasivo.
            </p>
            <div className="about-chips">
              <span className="about-chip ac-sky">💙 100% Voluntario</span>
              <span className="about-chip ac-mint">🤝 Solidaridad</span>
              <span className="about-chip ac-peach">🌍 Impacto Social</span>
              <span className="about-chip ac-lav">❤️ Amor</span>
            </div>
          </div>
 
          <div className="about-visual-stack fade-in">
            <div className="about-card-main">
              <div className="about-card-quote">
                Contribuir al desarrollo integral y bienestar de la población
                mediante programas sostenibles que generen impacto social positivo.
              </div>
              <div className="mission-list">
                {missionItems.map(([emoji, text], i) => (
                  <div className="mission-row" key={i}>
                    <span className="mission-emoji">{emoji}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-float">
              <div className="float-big">💙</div>
              <div className="float-small">Con amor</div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── PROGRAMS ── */}
      <section className="programs" id="programas">
        <div className="programs-header fade-in">
          <div className="section-eyebrow centered">Lo que hacemos</div>
          <h2 className="section-title">
            Nuestros <span className="sky">programas</span>
          </h2>
        </div>
 
        <div className="programs-grid">
          {programs.map((p, i) => (
            <div
              className="prog-card fade-in"
              key={i}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={`prog-icon-wrap ${p.pw}`}>{p.icon}</div>
              <div className="prog-title">{p.title}</div>
              <div className="prog-desc">{p.desc}</div>
              <div className="prog-tag">→ {p.tag}</div>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── VOLUNTEER ── */}
      <section className="volunteer" id="voluntario">
        <div className="vol-deco">💙</div>
 
        <div className="vol-content">
          <div className="fade-in">
            <div className="section-eyebrow">Únete</div>
            <h2 className="vol-title">
              Sé parte del <span className="accent">cambio</span> 🌟
            </h2>
            <p className="vol-desc">
              Tu tiempo, talento o donación puede transformar la vida de un niño,
              un joven o un animalito. ¡Cada pequeña acción suma!
            </p>
            <div className="vol-btns">
              <button
                className="btn-main"
                onClick={() => window.open("https://wa.me/51920320396", "_blank")}
              >
                💬 WhatsApp
              </button>
              <button
                className="btn-second"
                onClick={() => window.open("https://www.instagram.com/saynara.pe/", "_blank")}
              >
                📸 Instagram
              </button>
            </div>
          </div>
 
          <div className="vol-form fade-in">
            <div className="vol-form-title">🙋 Quiero ser voluntario</div>
            <div className="vol-form-sub">Cuéntanos un poco sobre ti</div>
 
            <div className="f-group">
              <label className="f-label">Tu nombre</label>
              <input
                className="f-input"
                type="text"
                placeholder="Ej: María García"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
            </div>
            <div className="f-group">
              <label className="f-label">Correo electrónico</label>
              <input
                className="f-input"
                type="email"
                placeholder="tu@correo.com"
                value={form.correo}
                onChange={(e) => setForm({ ...form, correo: e.target.value })}
              />
            </div>
            <div className="f-group">
              <label className="f-label">¿Cómo quieres ayudar?</label>
              <input
                className="f-input"
                type="text"
                placeholder="Ej: Con niños, con animales..."
                value={form.ayuda}
                onChange={(e) => setForm({ ...form, ayuda: e.target.value })}
              />
            </div>
 
            <button className="f-submit" onClick={sendWhatsApp}>
              Enviar por WhatsApp 🚀
            </button>
          </div>
        </div>
      </section>
 
      {/* ── SOCIAL ── */}
      <section className="social" id="contacto">
        <div className="fade-in">
          <div className="section-eyebrow centered">Encuéntranos</div>
          <h2 className="section-title">
            Síguenos y <span className="sky">únete</span> 🎉
          </h2>
          <p className="social-sub">¡El cambio comienza con un mensaje!</p>
        </div>
        <div className="social-cards">
          <a
            href="https://www.instagram.com/saynara.pe/"
            target="_blank"
            rel="noreferrer"
            className="social-card sc-ig"
          >
            <span className="sc-emoji">📸</span>
            @saynara.pe en Instagram
          </a>
          <a
            href="https://wa.me/51920320396"
            target="_blank"
            rel="noreferrer"
            className="social-card sc-wa"
          >
            <span className="sc-emoji">💬</span>
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
 
      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">🤝 Fundación Saynara</div>
            <p className="footer-brand-desc">
              Ayuda social para los niños, jóvenes y animalitos. 100% voluntario.
              Generando cambios con amor en el Perú.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Navegar</div>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#programas">Programas</a></li>
              <li><a href="#voluntario">Ser Voluntario</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contacto</div>
            <ul>
              <li><a href="https://www.instagram.com/saynara.pe/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://wa.me/51920320396" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="#voluntario">Donar</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Fundación Saynara · Perú 🇵🇪</span>
          <span>Hecho con <span className="footer-love">💙</span> para Saynara</span>
        </div>
      </footer>
 
    </div>
  );
}