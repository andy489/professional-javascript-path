// Database setup — open the file and define the schema if it doesn't exist
import Database from "better-sqlite3";

const database = new Database("employee-directory.db");

export function initializeDatabase() {
  database.exec(`
    CREATE TABLE IF NOT EXISTS employees (
      id TEXT PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      department TEXT NOT NULL,
      is_active INTEGER NOT NULL
    )
  `);
}

// Parameterized INSERT — `?` placeholders kept separate from user data
export function insertEmployee(employee) {
  const statement = database.prepare(`
    INSERT INTO employees (id, first_name, last_name, department, is_active)
    VALUES (?, ?, ?, ?, ?)
  `);

  statement.run(
    employee.id,
    employee.firstName,
    employee.lastName,
    employee.department,
    employee.isActive ? 1 : 0
  );
}

// SELECT + map — translate snake_case columns into camelCase JavaScript objects
export function getEmployees() {
  const statement = database.prepare(`
    SELECT id, first_name, last_name, department, is_active
    FROM employees
    ORDER BY last_name, first_name
  `);

  const rows = statement.all();

  return rows.map((row) => ({
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    department: row.department,
    isActive: Boolean(row.is_active)
  }));
}

// UNSAFE — concatenating user input into the SQL is a SQL-injection vector
// const unsafeDepartment = "Engineering";
// const sql = `SELECT * FROM employees WHERE department = '${unsafeDepartment}'`;

// SAFE — parameterized query, driver passes the value as data, not SQL
export function getEmployeesByDepartment(department) {
  const statement = database.prepare(`
    SELECT id, first_name, last_name, department, is_active
    FROM employees
    WHERE department = ?
  `);

  return statement.all(department);
}