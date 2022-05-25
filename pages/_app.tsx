import "../assets/css/weather-icons.min.css";
import "../assets/css/weather-icons-wind.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WeatherProvider } from "@contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  );
}

export default MyApp;
