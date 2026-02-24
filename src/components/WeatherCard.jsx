import React from "react";
import "./WeatherCard.css";

function WeatherCard({ city, country, temp, feelsLike, humidity, windSpeed, icon, description }) {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const stats = [
    { icon: "🌡", label: "Ressenti", value: `${Math.round(feelsLike)}°C` },
    { icon: "💧", label: "Humidité", value: `${humidity}%` },
    { icon: "💨", label: "Vent", value: `${Math.round(windSpeed * 3.6)} km/h` },
    { icon: "🌤", label: "Condition", value: description },
  ];

  return (
    <div className="weather-card glass-card">
      {/* City & Country */}
      <div className="weather-card__location">
        <h2 className="weather-card__city">{city}</h2>
        {country && <span className="weather-card__country">{country}</span>}
      </div>

      {/* Icon + Main Temp */}
      <div className="weather-card__main">
        <img src={iconUrl} alt={description} className="weather-card__icon" />
        <p className="weather-card__temp">{Math.round(temp)}°C</p>
      </div>

      {/* Stats Grid */}
      <div className="weather-card__stats">
        {stats.map((s) => (
          <div key={s.label} className="weather-card__stat">
            <span className="weather-card__stat-icon">{s.icon}</span>
            <span className="weather-card__stat-value">{s.value}</span>
            <span className="weather-card__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherCard;
