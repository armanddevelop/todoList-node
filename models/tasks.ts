import { generateMessage } from "../helpers/tasksHelper";
import { Task } from "./task";
import "colors";
interface ITask {
  [key: string]: {
    id: string;
    description: string;
    completedAt: null | string;
  };
}
export class Tasks {
  private _list: ITask = {};
  constructor() {
    this._list = {};
  }

  deleteTask(id: string = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  get tasksList() {
    return Object.keys(this._list).map((key) => this._list[key]);
  }

  loadTasks(data = []) {
    data.forEach((data) => (this._list[data.id] = data));
  }
  createTask(description: string = "") {
    const task = new Task(description);
    this._list[task.id] = task;
  }
  allTasks() {
    this.tasksList.forEach(({ description, completedAt }, idx) => {
      console.log(
        `${idx + 1}.`.green,
        `::`,
        description,
        `${completedAt ? "Completed".green : "Pending".red}`
      );
    });
  }
  manageTasksCompleted(completed: boolean = true) {
    let idxCompletd = 0;
    let idxPending = 0;
    const message = generateMessage(this.tasksList, completed);
    if (message !== "") return console.log(message);
    this.tasksList.forEach(({ description, completedAt }) => {
      if (completed && completedAt) {
        console.log(
          `${(idxCompletd += 1)}.`.green,
          `::`,
          description,
          `${completedAt.toString()}`.green
        );
      } else if (!completed && !completedAt) {
        console.log(
          `${(idxPending += 1)}.`.green,
          `::`,
          description,
          `PENDING`.red
        );
      }
    });
  }

  toogleCompleteTasks = (ids = []) => {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completedAt) {
        task.completedAt = new Date().toISOString();
      }
    });
    this.tasksList.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completedAt = null;
      }
    });
  };
}
