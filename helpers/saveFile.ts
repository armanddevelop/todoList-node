import { existsSync, readFileSync, writeFileSync } from "fs";
interface IData {
  description: string;
  id: string;
  completedAt: Date | null;
}
const path = "./db/data.json";
export const saveDB = async (data: Array<IData>) => {
  try {
    writeFileSync(path, JSON.stringify(data));
  } catch (error) {
    console.error("[saveDBError:]", error);
    return;
  }
};

export const readDB = (): Array<IData> => {
  try {
    if (!existsSync(path)) {
      return null;
    }
    const data = readFileSync(path, { encoding: "utf-8" });
    const info = JSON.parse(data);
    return info;
  } catch (error) {
    console.error("[readDBError]: ", error);
  }
};
