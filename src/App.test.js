import React from "react";
import { render } from "@testing-library/react";
import App, { addStrike } from "./App";

test("Does balls render", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/balls/i);
  expect(linkElement).toBeInTheDocument();
});

test("Does strike render", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/strikes/i);
  expect(linkElement).toBeInTheDocument();
});
