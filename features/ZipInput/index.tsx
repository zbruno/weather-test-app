import * as React from "react";

import { useWeather } from "@contexts";
import { Button } from "@components";

import styles from "./styles.module.css";

export const ZipInput = () => {
  const { zipInput, setZipInput, weatherData, setWeatherData } = useWeather();
  const [localZip, setLocalZip] = React.useState(zipInput);

  // const currentWeather = weatherData.weather[0];
  // const weatherId = currentWeather.id as keyof typeof ICON_MAP;
  // const className = ICON_MAP[`${weatherId}`];
  // const temp = convertTemp(weatherData.main.temp);

  const handleChange = React.useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      setLocalZip(e.currentTarget.value);
    },
    []
  );

  const handleTryZip = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setZipInput!(() => localZip as string);
  };

  return (
    <form className={styles.container} onSubmit={handleTryZip}>
      <div className={styles.inputContainer}>
        <label htmlFor="zip" className={styles.label}>
          Find weather from Zip
        </label>
        <div className="mt-1">
          <input
            value={localZip}
            onChange={handleChange}
            type="text"
            name="zip"
            id="zip"
            className={styles.input}
            pattern="^[0-9]{5}(?:-[0-9]{4})?$"
          />
        </div>
      </div>
      <Button text="Go" type="submit" />
    </form>
  );
};
