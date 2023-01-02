import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(chalk.bgRed("ERROR") + " " + err);
};

const printSuccess = (err) => {
  console.log(chalk.bgGreen("SUCCESS") + " " + err);
};

const printHelp = (err) => {
  console.log(
    dedent(`
      ${chalk.bgCyan("HELP")}
      "Without params - weather forecast"
      -h for summoning help console
      -s [CITY] for setting the City
      -t [API_KEY] for saving the Token
    `)
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent(`
      ${chalk.bgYellow("WEATHER")} in the City of ${res.name}
      ${icon} ${res.weather[0].description}
      Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
      Humidity: ${res.main.humidity}%
      Wind: ${res.wind.speed}
    `)
  );
};

export { printError, printSuccess, printHelp, printWeather };
