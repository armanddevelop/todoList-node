import "colors";
import {
  inquirerMenu,
  inquirerPause,
  readInput,
  listTasksToDelete,
  confirm,
  checkListTask,
} from "./helpers/Inquirer";
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
        tasks.allTasks();
        break;
      case 3:
        tasks.manageTasksCompleted();
        break;
      case 4:
        tasks.manageTasksCompleted(false);
        break;
      case 5:
        const ids = await checkListTask(tasks.tasksList);
        tasks.toogleCompleteTasks(ids);
        break;
      case 6:
        const id = await listTasksToDelete(tasks.tasksList);
        const ok = await confirm("Are you sure to Delete the task?");
        if (id !== "0" && ok) {
          tasks.deleteTask(id);
          console.log("task delete successfully".green);
        }
        break;
      default:
        break;
    }
    await saveDB(tasks.tasksList);
    if (opt !== 0) await inquirerPause();
  } while (opt !== 0);
};

main();
