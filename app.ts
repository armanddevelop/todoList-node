import "colors";
import { inquirerMenu, inquirerPause, readInput } from "./helpers/Inquirer";
import { Tasks } from "./models/tasks";

const main = async () => {
  let opt = 0;
  const tasks = new Tasks();
  do {
    const option = await inquirerMenu();
    opt = option;
    switch (opt) {
      case 1:
        const description = await readInput("Task Description: ");
        tasks.createTask(description);
        break;
      case 2:
        console.log("task._list ", tasks._list);
      default:
        break;
    }
    if (opt !== 0) await inquirerPause();
  } while (opt !== 0);
};

main();
