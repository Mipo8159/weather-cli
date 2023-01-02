import { stat } from "fs/promises";

const isExist = async (path) => {
  try {
    await stat(path);
    return true;
  } catch (err) {
    return false;
  }
};

export { isExist };
