// Create a variable named firstName and assign it the string Andrey.
let firstName = "Andrey";

// Temporary default until employee data is loaded from storage.
let department = "Engineering";

/*
  This file contains small examples for learning comments.
  These comments are ignored when the JavaScript file runs.
*/

/**
 * Calculates the employee's display name.
 * @param {string} firstName - The employee's first name.
 * @param {string} lastName - The employee's last name.
 * @returns {string} The formatted display name.
 */
function getDisplayName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// eslint-disable-next-line no-console
console.log("This line is allowed by the linting configuration.");

// Employee is inactive.
let isActive = true;