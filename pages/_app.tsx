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
