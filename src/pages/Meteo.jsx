import React, { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import "./Meteo.css";

const apiKey = import.meta.env.VITE_API_KEY;

function Meteo() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
      );
      if (!res.ok) throw new Error("Ville introuvable");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("❌ Ville introuvable ou clé API invalide. Vérifiez le nom de la ville.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="meteo">
      <div className="meteo__header">
        <h1 className="meteo__title">
          Recherche <span className="gradient-text">Météo</span>
        </h1>
        <p className="meteo__subtitle">
          Entrez le nom d'une ville pour obtenir les conditions météo en temps réel.
        </p>
      </div>

      {/* Search Bar */}
      <div className="meteo__search-wrapper glass-card">
        <span className="meteo__search-icon">🔍</span>
        <input
          id="city-input"
          className="meteo__search-input"
          type="text"
          placeholder="Ex: Paris, Tokyo, New York..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <button
          id="search-btn"
          className="meteo__search-btn"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "..." : "Chercher"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="meteo__error glass-card">
          <p>{error}</p>
        </div>
      )}

      {/* Loader */}
      {loading && <div className="spinner" />}

      {/* Weather Result */}
      {weather && weather.main && (
        <WeatherCard
          city={weather.name}
          country={weather.sys.country}
          temp={weather.main.temp}
          feelsLike={weather.main.feels_like}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
          icon={weather.weather[0].icon}
          description={weather.weather[0].description}
        />
      )}
    </div>
  );
}

export default Meteo;
