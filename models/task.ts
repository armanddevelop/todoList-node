import { v4 as uuidv4 } from "uuid";

export class Task {
  id = "";
  description = "";
  completedAt = null;
  constructor(description: string) {
    this.description = description;
    this.id = uuidv4();
  }
}
