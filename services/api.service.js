import axios from "axios";
import { DICTIONARY } from "../helpers/dictionary.js";
import { getKey } from "./storage.service.js";

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? (await getKey(DICTIONARY.token));
  if (!token) {
    throw new Error("No token given, assign it with command -t [APP_KEY]");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );

  return data;
};

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "🌞";
    case "02":
      return "🌤";
    case "03":
      return "⛅";
    case "04":
      return "🌥";
    case "09":
      return "🌧";
    case "10":
      return "🌦";
    case "11":
      return "🌩";
    case "13":
      return "🌨";
    case "50":
      return "🌪";
  }
};

export { getWeather, getIcon };
