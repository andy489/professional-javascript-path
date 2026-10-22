// Round-trip — read, push, write
import { readJsonFile, writeJsonFile } from "./files.js";
// path.join() — build cross-platform paths from segments
import path from "node:path";

const employeeFilePath = path.join("data", "employees.json");


const employees = await readJsonFile(employeeFilePath);

employees.push({
  id: "E-1003",
  firstName: "Mina",
  lastName: "Patel",
  department: "Engineering",
  isActive: true
});

await writeJsonFile("./data/employees.json", employees);

console.log("Employee saved.");

// import.meta.url — get a path relative to the current module file
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moduleRelativePath = path.join(__dirname, "..", "data", "employees.json");