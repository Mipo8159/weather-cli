import { getKey, saveKey } from "./storage.service.js";
import { DICTIONARY } from "../helpers/dictionary.js";
import { getIcon, getWeather } from "./api.service.js";
import { printError, printSuccess, printWeather } from "./log.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Please enter token");
    return;
  }
  try {
    await saveKey(DICTIONARY.token, token);
    printSuccess("Token saved");
  } catch (err) {
    printError(err.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("Please enter city");
    return;
  }
  try {
    await saveKey(DICTIONARY.city, city);
    printSuccess("City saved");
  } catch (err) {
    printError(err.message);
  }
};

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? (await getKey(DICTIONARY.city));
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (err) {
    if (err?.response?.status === 404) {
      printError("Incorrect city");
    } else if (err?.response?.status === 401) {
      printError("Invalid token");
    } else {
      printError(err.message);
    }
  }
};

export { saveToken, getForecast, saveCity };
