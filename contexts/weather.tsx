import React from "react";
import axios from "axios";

import { WeatherResource } from "@resources";
import { URLS } from "@constants";

type ContextType = {
  zipInput?: string;
  setZipInput?: React.Dispatch<React.SetStateAction<string>>;
  weatherData?: WeatherResource;
  setWeatherData?: React.Dispatch<
    React.SetStateAction<WeatherResource | undefined>
  >;
};

export const WeatherContext = React.createContext<ContextType>({});

export const useWeather = () => {
  return React.useContext(WeatherContext);
};

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [zipInput, setZipInput] = React.useState<string>("94129");
  const [weatherData, setWeatherData] = React.useState<
    WeatherResource | undefined
  >();

  React.useEffect(() => {
    const getWeather = async () => {
      const res = await axios.post(URLS.weather, { zip: zipInput });
      setWeatherData(res.data);
    };

    getWeather();
  }, [zipInput]);

  const contextValue = {
    zipInput,
    setZipInput,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
