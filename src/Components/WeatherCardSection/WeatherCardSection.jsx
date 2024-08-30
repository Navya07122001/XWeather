import React from 'react';
import styles from './WeatherCardSection.module.css';

const WeatherCardSection = ({ xdata, xdata1 }) => {
  return (
    <div className={styles['weather-cards']}>  
      <div className={styles['weather-card']}>{xdata1}</div> 
      <div style={{ fontSize: '1.5rem' }}>{xdata}</div>
    </div>
  );
}

export default WeatherCardSection;