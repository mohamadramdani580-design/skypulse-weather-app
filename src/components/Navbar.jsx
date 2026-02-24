import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <span className="navbar__logo-icon">🌤</span>
        <span className="navbar__logo-text">Sky<span>Pulse</span></span>
      </Link>

      <ul className="navbar__links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            🏠 Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/meteo" className={({ isActive }) => isActive ? "active" : ""}>
            🌡 Météo
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            👤 À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
