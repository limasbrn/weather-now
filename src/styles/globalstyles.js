import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  html: {
    boxSizing: "border-box",

    fontFamily: "Helvetica, Arial, sans-serif",
  },

  "*": {
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: 0,

    margin: 0,
    padding: 0,
  },
  "*, *:before, *:after": {
    boxSizing: "inherit",
  },

  button: {
    appearance: "none",
    background: "transparent",
  },
});
