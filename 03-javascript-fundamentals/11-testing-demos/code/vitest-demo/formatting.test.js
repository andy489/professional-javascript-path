// Failing test — captures the bug so we know when the fix works
import { describe, expect, it } from "vitest";
import { formatYearsOfService } from "./formatting.js";

describe("formatYearsOfService", () => {
  it("formats employees with zero years of service", () => {
    const employee = { firstName: "New Employee", years: 0 };

    expect(formatYearsOfService(employee)).toBe("New Employee: 0 years");
  });
});

// Edge-case tests — protect missing, null, and normal cases
it("uses Unknown when years is missing", () => {
  const employee = { firstName: "Missing Years" };

  expect(formatYearsOfService(employee)).toBe("Missing Years: Unknown years");
});

it("uses Unknown when years is null", () => {
  const employee = { firstName: "Null Years", years: null };

  expect(formatYearsOfService(employee)).toBe("Null Years: Unknown years");
});

it("formats positive years of service", () => {
  const employee = { firstName: "Andrey", years: 7 };

  expect(formatYearsOfService(employee)).toBe("Andrey: 7 years");
});