import { Task } from "./task";
import "colors";
interface ITask {
  [key: string]: {
    id: string;
    description: string;
    completedAt: null | Date;
  };
}
export class Tasks {
  private _list: ITask = {};
  constructor() {
    this._list = {};
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
  allTasks(data = []) {
    data.forEach(({ description, completedAt }, idx) => {
      console.log(
        `${idx + 1}.`.green,
        `::`,
        description,
        `${completedAt !== null ? "Completed".green : "Pending".red}`
      );
    });
  }
}
