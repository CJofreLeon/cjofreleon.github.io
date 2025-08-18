import './Sections.css';
import logo from '../assets/logo.svg'; // ajusta la ruta

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="section-container"> {/* Added this div */}
        <div className="hero__container">
          <img
            src={logo}
            alt="Logo Catalina"
            className="hero__logo"
          />
          <div className="hero__content">
            <h1 className="cata">Catalina</h1>
            <h1 className="jl">Jofré León</h1>
            <p>✨Usando la tecnología en el presente para cambiar el futuro✨</p>
          </div>
        </div>
      </div> {/* Closed this div */}
    </section>
  );
}