import { describe, expect, it } from "vitest";
import { getBadgeColor, isEligibleForAward } from "./badges.js";

describe("getBadgeColor", () => {
  it("returns blue for fewer than 5 years", () => {
    expect(getBadgeColor(2)).toBe("blue");
  });

  it("returns yellow for 5 to 9 years", () => {
    expect(getBadgeColor(7)).toBe("yellow");
  });

  // Strong test — asserts the specific return value so a wrong output fails the test
it("returns silver for 15 or more years", () => {
  expect(getBadgeColor(20)).toBe("silver");
});

});

describe("isEligibleForAward", () => {
  it("returns false when the employee is inactive", () => {
    expect(isEligibleForAward({ isActive: false, years: 20 })).toBe(false);
  });
});
