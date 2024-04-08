import { describe, expect, test } from "vitest"
import { sum } from "./sum"

describe("sum()", () => {
  test("adds all supplied numbers correctly", () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 2, 3)).toBe(6)
    expect(sum(1, 0, -3)).toBe(-2)
  })
})
