// Import from a third-party package — no relative path, no .js extension
import { nanoid } from "nanoid";

const employee = {
  id: nanoid(),
  firstName: "Andrey",
  department: "Engineering"
};

console.log(employee);