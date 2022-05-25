import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { MainContent } from "@components";
import { WeatherCard, WeatherLink } from "@features";

const Details: NextPage = () => {
  return (
    <MainContent title="Weather App">
      <Head>
        <title>Weather Test App - Details</title>
        <meta name="description" content="See weather details" />
      </Head>
      <WeatherCard>
        <WeatherLink href="/" text="Go home" />
      </WeatherCard>
    </MainContent>
  );
};

export default Details;
