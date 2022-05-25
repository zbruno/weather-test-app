import * as React from "react";
import Link from "next/link";

import { Card, ContentLoader } from "@components";
import { useWeather } from "@contexts";
import { ICON_MAP } from "@iconMap";
import { convertTemp, convertToDirection } from "@utils";

import styles from "./styles.module.css";

const WeatherCardFallback = () => (
  <Card
    title={
      <div className={styles.headerContainer}>
        <div className={styles.iconContainer}></div>
        <div className={styles.location}></div>
        <div className={styles.temp}></div>
      </div>
    }
  >
    <ContentLoader width="100%" height={58} />
  </Card>
);

export const WeatherCard = ({ children }: { children: React.ReactNode }) => {
  const { weatherData } = useWeather();

  if (!weatherData) {
    return <WeatherCardFallback />;
  }

  const currentWeather = weatherData.weather[0];
  const weatherId = currentWeather.id as keyof typeof ICON_MAP;
  const className = ICON_MAP[`${weatherId}`];
  const temp = convertTemp(weatherData.main.temp);
  const feelsLike = convertTemp(weatherData.main.feels_like);
  const windDirection = convertToDirection(weatherData.wind.deg);

  return (
    <Card
      title={
        <div className={styles.headerContainer}>
          <div className={styles.iconContainer}>
            <i className={`wi wi-${className} ${styles.icon}`}></i>
          </div>
          <div className={styles.location}>{weatherData.name}</div>
          <div className={styles.temp}>{temp}&#730;</div>
        </div>
      }
    >
      <div className={styles.weatherGrid}>
        <div className={styles.gridItem}>
          <i
            className={`wi wi-wind towards-${weatherData.wind.deg}-deg ${styles.subIcon}`}
          ></i>
          <p className={styles.weatherText}>{windDirection} Winds</p>
          <p className={styles.weatherDescription}>
            {weatherData.wind.speed} mph
          </p>
        </div>
        <div className={styles.gridItem}>
          <i className={`wi wi-${className} ${styles.subIcon}`}></i>
          <p className={styles.weatherText}>{currentWeather.main}</p>
          <p className={styles.weatherDescription}>
            {currentWeather.description}
          </p>
        </div>
        <div className={styles.gridItem}>
          <i className={`wi wi-thermometer ${styles.subIcon}`}></i>
          <p className={styles.weatherText}>{temp}&#730;</p>
          <p className={styles.weatherDescription}>
            feels like: {feelsLike}&#730;
          </p>
        </div>
      </div>
      {children}
    </Card>
  );
};
