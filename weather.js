#!/usr/bin/env node
import { getArgvs } from "./helpers/args.js";
import {
  getForecast,
  saveCity,
  saveToken,
} from "./services/forecast.service.js";
import { printHelp } from "./services/log.service.js";

const initCLI = () => {
  const args = getArgvs(process.argv);

  if (args.h) {
    return printHelp();
  }

  if (args.s) {
    return saveCity(args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  return getForecast("Moscow");
};

initCLI();
