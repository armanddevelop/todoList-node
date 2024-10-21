import "colors";
import { inquirerMenu, inquirerPause, readInput } from "./helpers/Inquirer";
import { Tasks } from "./models/tasks";
import { saveDB, readDB } from "./helpers/saveFile";

const main = async () => {
  let opt = 0;
  const tasks = new Tasks();
  const tasksDB = readDB();
  if (tasksDB) {
    tasks.loadTasks(tasksDB);
  }

  do {
    const option = await inquirerMenu();
    opt = option;
    switch (opt) {
      case 1:
        const description = await readInput("Task Description: ");
        tasks.createTask(description);
        break;
      case 2:
        tasks.allTasks(tasks.tasksList);

        break;
      default:
        break;
    }
    await saveDB(tasks.tasksList);
    if (opt !== 0) await inquirerPause();
  } while (opt !== 0);
};

main();
