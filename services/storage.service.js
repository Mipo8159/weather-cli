import { join } from "path";
import { homedir } from "os";
import { writeFile, readFile } from "fs/promises";
import { isExist } from "../helpers/is_exist.js";

const filePath = join(homedir(), "weather-data.json");

const saveKey = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await readFile(filePath, "utf-8");
    data = JSON.parse(file);
  }
  data[key] = value;
  await writeFile(filePath, JSON.stringify(data));
};

const getKey = async (key) => {
  if (await isExist(filePath)) {
    const file = await readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data[key];
  } else {
    return undefined;
  }
};

export { saveKey, getKey };
