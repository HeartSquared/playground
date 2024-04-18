import { describe, expect, test } from "vitest"
import { checkHasWinner } from "./tic-tac-toe"

describe("checkHasWinner()", () => {
  test("rows", () => {
    expect(checkHasWinner([
      ["x", "x", "x"],
      [null, null, null],
      [null, null, null],
    ])).toBe("x")
    expect(checkHasWinner([
      [null, null, null],
      ["x", "x", "x"],
      [null, null, null],
    ])).toBe("x")
    expect(checkHasWinner([
      ["x", "o", "x"],
      [null, null, null],
      [null, null, null],
    ])).toBe(undefined)
  })

  test("columns", () => {
    expect(checkHasWinner([
      ["x", "o", null],
      ["x", null, "o"],
      ["x", null, null],
    ])).toBe("x")
    expect(checkHasWinner([
      ["x", "o", null],
      [null, "o", "o"],
      ["x", "o", null],
    ])).toBe("o")
  })

  test("diagonal", () => {
    expect(checkHasWinner([
      ["x", "o", "x"],
      ["o", "x", "o"],
      ["o", "o", "x"],
    ])).toBe("x")
    expect(checkHasWinner([
      ["x", null, "o"],
      [null, "o", null],
      ["o", "x", "x"],
    ])).toBe("o")
  })
})
