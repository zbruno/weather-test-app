import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { MainContent } from "@components";
import { WeatherCard, WeatherLink } from "@features";

const Home: NextPage = () => {
  return (
    <MainContent title="Weather App">
      <Head>
        <title>Weather Test App</title>
        <meta name="description" content="See weather data" />
      </Head>
      <WeatherCard>
        <WeatherLink href="/details" text="See details" />
      </WeatherCard>
    </MainContent>
  );
};

export default Home;
