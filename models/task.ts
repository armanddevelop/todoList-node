import { v4 as uuidv4 } from "uuid";

export class Task {
  id = "";
  completedAt = null;
  constructor(public description: string) {
    this.description = description;
    this.id = uuidv4();
  }
}
