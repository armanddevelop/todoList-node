"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
const task_1 = require("./task");
class Tasks {
    constructor() {
        this._list = {};
        this._list = {};
    }
    createTask(description = "") {
        const task = new task_1.Task(description);
        this._list[task.id] = task;
    }
}
exports.Tasks = Tasks;
//# sourceMappingURL=tasks.js.map