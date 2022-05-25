import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { MainContent } from "@components";

const Home: NextPage = () => {
  return (
    <MainContent title="Weather App">
      <Head>
        <title>Weather Test App</title>
        <meta name="description" content="See weather data" />
      </Head>
      hello world
    </MainContent>
  );
};

export default Home;
