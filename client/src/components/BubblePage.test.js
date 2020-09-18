import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import ColorList from "./ColorList";
import { fetchColors as mockFetchColors } from "../api/fetchColors"; 

const colorsData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
];

jest.mock("../api/fetchColors");
// console.log(mockFetchColors)

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValue(colorsData);
  // console.log(colorsData)
  render(<BubblePage />)

  const colors = screen.findByTestId(/color/i);
  expect(colors).toHaveLength(3)
});
