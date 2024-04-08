import { describe, expect, test } from "vitest"
import { Button } from "./Button"
import { render, screen } from "@testing-library/react"

describe("<Button>", () => {
  test("renders button element", () => {
    render(<Button label="Pancake" />)

    expect(screen.getByRole("button", { name: "Pancake" }))
      .toBeInTheDocument()
  })
})
