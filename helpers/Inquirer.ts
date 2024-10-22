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
          name: `${"3.-".green} List of Completed Task`,
        },
        {
          value: 4,
          name: `${"4.-".green} Pending Tasks`,
        },
        {
          value: 5,
          name: `${"5.-".green} Complete Task(s)`,
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

export const listTasksToDelete = async (tasks = []): Promise<string> => {
  const choices = tasks.map((task, idx) => ({
    value: task.id,
    name: `${(idx + 1 + ".").toString().green} ${task.description}`,
  }));
  choices.unshift({ value: "0", name: "0.".green + " Cancel" });
  const { id } = await inquirer.prompt([
    {
      type: "list",
      name: "id",
      message: "Which taks would you like to delete?",
      choices,
    },
  ]);
  return id;
};

export const checkListTask = async (tasks = []): Promise<Array<string>> => {
  const choices = tasks.map((task) => ({
    value: task.id,
    name: `${task.description}`,
    checked: task.completedAt ? true : false,
  }));
  const { ids } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "ids",
      message: "Select which taks would you like to complete?",
      choices,
    },
  ]);
  return ids;
};

export const confirm = async (message: string) => {
  const { ok } = await inquirer.prompt([
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ]);

  return ok;
};
