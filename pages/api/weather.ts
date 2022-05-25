// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

import { WeatherResource, LocationResource } from "@resources";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherResource>
) {
  const { API_KEY } = process.env;
  const { zip } = req.body;

  const locationResponse = await axios.get<LocationResource>(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${API_KEY}`
  );

  const { lat, lon } = locationResponse.data;

  const weatherResponse = await axios.get<WeatherResource>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const weatherData = weatherResponse.data;
  res.status(200).json(weatherData);
}
