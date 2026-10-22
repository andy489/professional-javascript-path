// Function under test — rejects null, undefined, and empty string
export function isRequired(value) {
  return value !== null && value !== undefined && value !== "";
}