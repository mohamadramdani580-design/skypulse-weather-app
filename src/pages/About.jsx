import "./About.css";

const stack = [
  { icon: "⚛️", name: "React 18", desc: "Bibliothèque UI" },
  { icon: "⚡", name: "Vite", desc: "Build tool" },
  { icon: "🌐", name: "React Router", desc: "Navigation SPA" },
  { icon: "🌦", name: "OpenWeatherMap", desc: "API Météo" },
];

function About() {
  return (
    <div className="about">
      {/* Hero */}
      <div className="about__hero">
        <h1 className="about__title">
          À <span className="gradient-text">Propos</span>
        </h1>
        <p className="about__subtitle">
          SkyPulse est une application météo moderne développée dans le cadre d'un TP React.
          Elle exploite l'API OpenWeatherMap pour fournir des données en temps réel.
        </p>
      </div>

      {/* Developer Card */}
      <div className="about__dev-card glass-card">
        <div className="about__dev-avatar">MR</div>
        <div className="about__dev-info">
          <h2 className="about__dev-name">Mohammed Ramdani</h2>
          <p className="about__dev-role">Développeur Web · Étudiant</p>
          <p className="about__dev-desc">
            Passionné par le développement front-end et les interfaces modernes.
            Ce projet a été réalisé pour apprendre React, les APIs REST et le routing côté client.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="about__stack-section">
        <h2 className="about__stack-title">Stack Technique</h2>
        <div className="about__stack-grid">
          {stack.map((item) => (
            <div key={item.name} className="about__stack-item glass-card">
              <span className="about__stack-icon">{item.icon}</span>
              <span className="about__stack-name">{item.name}</span>
              <span className="about__stack-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
