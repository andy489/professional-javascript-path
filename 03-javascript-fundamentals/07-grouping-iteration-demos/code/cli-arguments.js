// parseArgs() from node:util — structured named options instead of positional
import { parseArgs } from "node:util";

const options = {
  name: {
    type: "string",
    short: "n"
  },
  department: {
    type: "string",
    short: "d"
  },
  active: {
    type: "boolean",
    short: "a"
  }
};

const { values } = parseArgs({ options });

console.log(values);

// Turn parsed CLI values into a domain object, then validate it
const employee = {
  name: values.name,
  department: values.department,
  isActive: values.active ?? false
};

if (!employee.name || !employee.department) {
  console.error("Name and department are required.");
  process.exit(1);
}

console.log(employee);