import "colors";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const showMenu = async (): Promise<string> => {
  console.clear();
  console.log("===================".green);
  console.log("SELECT A OPTION".green);
  console.log("===================\n".green);

  console.log(`${"1.-".green} Create task`);
  console.log(`${"2.-".green} Tasks`);
  console.log(`${"3.-".green} Pending Tasks`);
  console.log(`${"4.-".green} Completed Tasks`);
  console.log(`${"5.-".green} Complete Task`);
  console.log(`${"6.-".green} Delete Task`);
  console.log(`${"0.-".green} Exit\n`);

  const rl = readline.createInterface({ input, output });

  const option = await rl.question("Select an options: ");
  rl.close();
  return option;
};
export const pause = async () => {
  const rl = readline.createInterface({ input, output });

  await rl.question(`Press ${"ENTER".green} to continue`);
  rl.close();
};
