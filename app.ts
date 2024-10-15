import { showMenu, pause } from "./helpers/messages";
import "colors";

console.clear();
const main = async () => {
  let option = "";
  do {
    option = await showMenu();
    if (option !== "0") await pause();
  } while (option !== "0");
};

main();
