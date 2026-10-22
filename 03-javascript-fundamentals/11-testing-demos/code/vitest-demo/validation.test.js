// First Vitest test — describe() groups, it() defines a case, expect() asserts
import { describe, expect, it } from "vitest";
import { isRequired } from "./validation.js";

describe("isRequired", () => {
  it("returns true when a string has a value", () => {
    expect(isRequired("Andrey")).toBe(true);
  });
});

// Full describe block — one it() per scenario, including 0 (truthy/falsy trap)
describe("isRequired", () => {
  it("returns true when a string has a value", () => {
    expect(isRequired("Andrey")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isRequired("")).toBe(false);
  });

  it("returns false for null", () => {
    expect(isRequired(null)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isRequired(undefined)).toBe(false);
  });

  it("returns true for zero because zero is a real value", () => {
    expect(isRequired(0)).toBe(true);
  });
});