"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const task_1 = require("./task");
require("colors");
class Tasks {
    constructor() {
        this._list = {};
        this._list = {};
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
    allTasks(data = []) {
        data.forEach(({ description, completedAt }, idx) => {
            console.log(`${idx + 1}`.green, `::`, description, `${completedAt !== null ? "Completed".green : "Pending".red}`);
        });
    }
}
exports.Tasks = Tasks;
//# sourceMappingURL=tasks.js.map