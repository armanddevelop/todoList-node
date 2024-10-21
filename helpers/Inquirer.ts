import inquirer from "inquirer";
import "colors";

export const inquirerMenu = async () => {
  //console.clear();
  console.log("===================".green);
  console.log("SELECT A OPTION".white);
  console.log("===================\n".green);
  const { option } = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: [
        {
          value: 1,
          name: `${"1.-".green} Create Task`,
        },
        {
          value: 2,
          name: `${"2.-".green} List of Task`,
        },
        {
          value: 3,
          name: `${"3.-".green} Completed Task`,
        },
        {
          value: 4,
          name: `${"4.-".green} Pending Tasks`,
        },
        {
          value: 5,
          name: `${"5.-".green} Completed Task`,
        },
        {
          value: 6,
          name: `${"6.-".red} Delete Task`,
        },
        {
          value: 0,
          name: `${"0.-".green} Exit`,
        },
      ],
    },
  ]);
  return option;
};

export const inquirerPause = async () => {
  await inquirer.prompt([
    {
      type: "input",
      name: "option",
      message: `Press ${"ENTER".green} to continue`,
    },
  ]);
  console.log("\n");
};

export const readInput = async (message: string): Promise<string> => {
  const { description } = await inquirer.prompt([
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) return "Please write a description";
        return true;
      },
    },
  ]);
  return description;
};
