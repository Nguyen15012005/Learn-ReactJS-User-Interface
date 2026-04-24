import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import ShowProduct from "./components/ShowProduct";

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: "Iphone 15", price: 1200, category: "phone" }
      ])
  })
);

test("render Iphone 15", async () => {
  render(<ShowProduct />);
  const item = await screen.findByText(/Iphone 15/i);
  expect(item).toBeInTheDocument();
});