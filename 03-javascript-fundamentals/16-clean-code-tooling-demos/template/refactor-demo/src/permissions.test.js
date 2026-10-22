import { expect, it } from "vitest";
import { canAccessReports } from "./permissions.js";

it("allows active employees with reports permission", () => {
  const employee = {
    isActive: true,
    permissions: ["reports"]
  };

  expect(canAccessReports(employee)).toBe(true);
});

it("blocks inactive employees", () => {
  const employee = {
    isActive: false,
    permissions: ["reports"]
  };

  expect(canAccessReports(employee)).toBe(false);
});

it("blocks employees without the reports permission", () => {
  const employee = {
    isActive: true,
    permissions: ["dashboard"]
  };

  expect(canAccessReports(employee)).toBe(false);
});
