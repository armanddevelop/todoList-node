"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
class Task {
    constructor(description) {
        this.description = description;
        this.id = "";
        this.completedAt = null;
        this.description = description;
        this.id = (0, uuid_1.v4)();
    }
}
exports.Task = Task;
//# sourceMappingURL=task.js.map