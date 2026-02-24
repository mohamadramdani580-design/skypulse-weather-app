import { Link } from "react-router-dom";
import "./Home.css";

const features = [
  { icon: "⚡", title: "Temps réel", desc: "Données météo actualisées en direct via OpenWeatherMap." },
  { icon: "🌍", title: "Monde entier", desc: "Cherchez n'importe quelle ville sur la planète." },
  { icon: "📊", title: "Données riches", desc: "Température, humidité, vent, ressenti et plus encore." },
];

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero">
        <div className="home__hero-badge">🌤 Météo Professionnelle</div>
        <h1 className="home__hero-title">
          Votre météo,<br />
          <span className="gradient-text">partout dans le monde</span>
        </h1>
        <p className="home__hero-subtitle">
          Consultez les conditions météorologiques de n'importe quelle ville en quelques secondes.
          Températures, vents, humidité — tout en un coup d'œil.
        </p>
        <Link to="/meteo" className="btn-primary">
          🔍 Chercher une ville
        </Link>
      </section>

      {/* Features */}
      <section className="home__features">
        {features.map((f) => (
          <div key={f.title} className="home__feature-card glass-card">
            <div className="home__feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
