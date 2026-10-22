// JSON module import — the `with { type: "json" }` attribute parses on import
import employees from "./employees.json" with { type: "json" };

console.log(employees);

// Runtime file read — useful when the path is dynamic or error handling matters
import { readFile } from "node:fs/promises";

const contents = await readFile("./employees.json", "utf8");
const runtimeEmployees = JSON.parse(contents);

console.log(runtimeEmployees);

// API response — data loaded over the network at runtime
const response = await fetch("https://example.com/employees");
const apiEmployees = await response.json();

console.log(apiEmployees);