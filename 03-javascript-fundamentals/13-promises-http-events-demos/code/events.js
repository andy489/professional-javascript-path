// EventEmitter — Node.js's built-in pub/sub primitive
import { EventEmitter } from "node:events";

const employeeEvents = new EventEmitter();

// on() — register a handler for a named event
employeeEvents.on("employee-added", () => {
  console.log("An employee was added.");
});

// emit() — fire the event, all matching handlers run
employeeEvents.emit("employee-added");

// Pass data with the event — the emit() arguments become handler arguments
employeeEvents.on("employee-created", (employee) => {
  console.log(`Created employee: ${employee.firstName}`);
});

employeeEvents.emit("employee-created", {
  id: "E-1001",
  firstName: "Andrey",
  department: "Engineering"
});

// Multiple handlers — every handler for the event runs in registration order
employeeEvents.on("employee-created", (employee) => {
  console.log(`Audit log: ${employee.id} created.`);
});

employeeEvents.emit("employee-created", {
  id: "E-1002",
  firstName: "Sarah",
  department: "Product"
});

// Project pattern — addEmployee() emits, handlers decide what to do
function addEmployee(employee) {
  // Save employee somewhere.
  employeeEvents.emit("employee-created", employee);
}

addEmployee({
  id: "E-1003",
  firstName: "Mina",
  department: "Engineering"
});