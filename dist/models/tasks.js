"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const tasksHelper_1 = require("../helpers/tasksHelper");
const task_1 = require("./task");
require("colors");
class Tasks {
    constructor() {
        this._list = {};
        this.toogleCompleteTasks = (ids = []) => {
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
        this._list = {};
    }
    deleteTask(id = "") {
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
    createTask(description = "") {
        const task = new task_1.Task(description);
        this._list[task.id] = task;
    }
    allTasks() {
        this.tasksList.forEach(({ description, completedAt }, idx) => {
            console.log(`${idx + 1}.`.green, `::`, description, `${completedAt ? "Completed".green : "Pending".red}`);
        });
    }
    manageTasksCompleted(completed = true) {
        let idxCompletd = 0;
        let idxPending = 0;
        const message = (0, tasksHelper_1.generateMessage)(this.tasksList, completed);
        if (message !== "")
            return console.log(message);
        this.tasksList.forEach(({ description, completedAt }) => {
            if (completed && completedAt) {
                console.log(`${(idxCompletd += 1)}.`.green, `::`, description, `${completedAt.toString()}`.green);
            }
            else if (!completed && !completedAt) {
                console.log(`${(idxPending += 1)}.`.green, `::`, description, `PENDING`.red);
            }
        });
    }
}
exports.Tasks = Tasks;
//# sourceMappingURL=tasks.js.map