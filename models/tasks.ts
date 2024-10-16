import { Task } from "./task";

interface ITask {
  [key: string]: {
    id: string;
    description: string;
    completedAt: null | Date;
  };
}
export class Tasks {
  _list: ITask = {};
  constructor() {
    this._list = {};
  }

  createTask(description: string = "") {
    const task = new Task(description);
    this._list[task.id] = task;
  }
}
