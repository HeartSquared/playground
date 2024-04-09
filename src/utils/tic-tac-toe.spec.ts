import { describe, expect, test } from "vitest"
import { checkHasWinner } from "./tic-tac-toe"

describe("checkHasWinner()", () => {
  test("rows", () => {
    expect(checkHasWinner([
      ["x", "x", "x"],
      [],
      [],
    ])).toBe("x")
    expect(checkHasWinner([
      [],
      ["x", "x", "x"],
      [],
    ])).toBe("x")
    expect(checkHasWinner([
      ["x", "o", "x"],
      [],
      [],
    ])).toBe(undefined)
  })

  test("columns", () => {
    expect(checkHasWinner([
      ["x", "o"],
      ["x", undefined, "o"],
      ["x"],
    ])).toBe("x")
    expect(checkHasWinner([
      ["x", "o"],
      [undefined, "o", "o"],
      ["x", "o"],
    ])).toBe("o")
  })

  test("diagonal", () => {
    expect(checkHasWinner([
      ["x", "o", "x"],
      ["o", "x", "o"],
      ["o", "o", "x"],
    ])).toBe("x")
    expect(checkHasWinner([
      ["x", undefined, "o"],
      [undefined, "o", undefined],
      ["o", "x", "x"],
    ])).toBe("o")
  })
})
