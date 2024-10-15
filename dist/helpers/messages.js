"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.pause = exports.showMenu = void 0;
require("colors");
const readline = __importStar(require("node:readline/promises"));
const node_process_1 = require("node:process");
const showMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log("===================".green);
    console.log("SELECT A OPTION".green);
    console.log("===================\n".green);
    console.log(`${"1.-".green} Create task`);
    console.log(`${"2.-".green} Tasks`);
    console.log(`${"3.-".green} Pending Tasks`);
    console.log(`${"4.-".green} Completed Tasks`);
    console.log(`${"5.-".green} Complete Task`);
    console.log(`${"6.-".green} Delete Task`);
    console.log(`${"0.-".green} Exit\n`);
    const rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    const option = yield rl.question("Select an options: ");
    rl.close();
    return option;
});
exports.showMenu = showMenu;
const pause = () => __awaiter(void 0, void 0, void 0, function* () {
    const rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    yield rl.question(`Press ${"ENTER".green} to continue`);
    rl.close();
});
exports.pause = pause;
//# sourceMappingURL=messages.js.map