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
exports.readDB = exports.saveDB = void 0;
const fs_1 = require("fs");
const path = "./db/data.json";
const saveDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, fs_1.writeFileSync)(path, JSON.stringify(data));
    }
    catch (error) {
        console.error("[saveDBError:]", error);
        return;
    }
});
exports.saveDB = saveDB;
const readDB = () => {
    try {
        if (!(0, fs_1.existsSync)(path)) {
            return null;
        }
        const data = (0, fs_1.readFileSync)(path, { encoding: "utf-8" });
        const info = JSON.parse(data);
        return info;
    }
    catch (error) {
        console.error("[readDBError]: ", error);
    }
};
exports.readDB = readDB;
//# sourceMappingURL=saveFile.js.map