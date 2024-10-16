"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
const Inquirer_1 = require("./helpers/Inquirer");
const tasks_1 = require("./models/tasks");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let opt = 0;
    const tasks = new tasks_1.Tasks();
    do {
        const option = yield (0, Inquirer_1.inquirerMenu)();
        opt = option;
        switch (opt) {
            case 1:
                const description = yield (0, Inquirer_1.readInput)("Task Description: ");
                tasks.createTask(description);
                break;
            case 2:
                console.log("task._list ", tasks._list);
            default:
                break;
        }
        if (opt !== 0)
            yield (0, Inquirer_1.inquirerPause)();
    } while (opt !== 0);
});
main();
//# sourceMappingURL=app.js.map