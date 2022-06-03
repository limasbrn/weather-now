import React from "react";
import { render } from "@testing-library/react";
import App from "../app";

test(`renders city name Nuuk`, () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Nuuk/i);
  expect(linkElement).toBeInTheDocument();
});

test(`renders city name Urubici`, () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Urubici/i);
  expect(linkElement).toBeInTheDocument();
});

test(`renders city name Nairobi`, () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Nairobi/i);
  expect(linkElement).toBeInTheDocument();
});
