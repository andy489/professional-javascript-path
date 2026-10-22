// Promise-based file system APIs from Node.js
import { readFile, writeFile } from "node:fs/promises";

// Sample employee data used by every file example below
const employee = {
  id: "E-1001",
  firstName: "Andrey",
  department: "Engineering"
};

// writeFile() — serialize and write JSON to disk
const json = JSON.stringify(employee, null, 2);

await writeFile("employee.json", json, "utf8");

console.log("Employee file written.");

// readFile() — read file contents as a UTF-8 string
const fileContents = await readFile("employee.json", "utf8");

console.log(fileContents);

// JSON.parse() — turn the string back into a JavaScript object
const parsedEmployee = JSON.parse(fileContents);

console.log(parsedEmployee.firstName);

// Handle missing files — readFile() rejects when the file doesn't exist
try {
  const missingContents = await readFile("missing.json", "utf8");
  console.log(missingContents);
} catch (error) {
  console.error("Could not read file:", error.message);
}

// Single try/catch covers both file-read failures and JSON parse failures
try {
  const contents = await readFile("employee.json", "utf8");
  const data = JSON.parse(contents);

  console.log(data);
} catch (error) {
  console.error("Could not load employee data:", error.message);
}

// Reusable loader — wraps the original error with Error.cause for context
async function loadJsonFile(filePath) {
  try {
    const contents = await readFile(filePath, "utf8");
    return JSON.parse(contents);
  } catch (error) {
    throw new Error(`Failed to load JSON file: ${filePath}`, { cause: error });
  }
}

try {
  const data = await loadJsonFile("employee.json");
  console.log(data);
} catch (error) {
  console.error(error.message);
}