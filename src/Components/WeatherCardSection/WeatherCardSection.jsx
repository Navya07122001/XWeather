import React from 'react';
import './WeatherCardSection.css'

const WeatherCardSection = ({ xdata, xdata1 }) => {
  return (
    <div className="weather-cards">  {/* Removed the leading dot */}
      <div className="weather-card">{xdata1}</div>  
      <div style={{ fontSize: '1.5rem' }}>{xdata}</div>
    </div>
  );
}

export default WeatherCardSection;