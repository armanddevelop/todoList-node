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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInput = exports.inquirerPause = exports.inquirerMenu = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
require("colors");
const inquirerMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    //console.clear();
    console.log("===================".green);
    console.log("SELECT A OPTION".white);
    console.log("===================\n".green);
    const { option } = yield inquirer_1.default.prompt([
        {
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: [
                {
                    value: 1,
                    name: `${"1.-".green} Create Task`,
                },
                {
                    value: 2,
                    name: `${"2.-".green} List of Task`,
                },
                {
                    value: 3,
                    name: `${"3.-".green} Completed Task`,
                },
                {
                    value: 4,
                    name: `${"4.-".green} Pending Tasks`,
                },
                {
                    value: 5,
                    name: `${"5.-".green} Completed Task`,
                },
                {
                    value: 6,
                    name: `${"6.-".red} Delete Task`,
                },
                {
                    value: 0,
                    name: `${"0.-".green} Exit`,
                },
            ],
        },
    ]);
    return option;
});
exports.inquirerMenu = inquirerMenu;
const inquirerPause = () => __awaiter(void 0, void 0, void 0, function* () {
    yield inquirer_1.default.prompt([
        {
            type: "input",
            name: "option",
            message: `Press ${"ENTER".green} to continue`,
        },
    ]);
    console.log("\n");
});
exports.inquirerPause = inquirerPause;
const readInput = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const { description } = yield inquirer_1.default.prompt([
        {
            type: "input",
            name: "description",
            message,
            validate(value) {
                if (value.length === 0)
                    return "Please write a description";
                return true;
            },
        },
    ]);
    return description;
});
exports.readInput = readInput;
//# sourceMappingURL=Inquirer.js.map