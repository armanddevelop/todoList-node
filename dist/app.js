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
const messages_1 = require("./helpers/messages");
require("colors");
console.clear();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let option = "";
    do {
        option = yield (0, messages_1.showMenu)();
        if (option !== "0")
            yield (0, messages_1.pause)();
    } while (option !== "0");
});
main();
//# sourceMappingURL=app.js.map