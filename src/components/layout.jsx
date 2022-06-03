import { styled } from "@stitches/react";

import { Header } from "./header";

const Base = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",

  minHeight: "100vh",

  backgroundColor: "#F1F1F1",
  justifyContent: "center",
  alignItems: "center",

  "@media (min-width: 1023px)": {
    flexDirection: "column",
  },
});

const WrapContent = styled("div", {
  display: "flex",
  flexDirection: "row",

  flex: "1",
  gap: "45px",
  alignItems: "center",
  paddingBottom:"45px", 

  "@media (max-width: 1023px)": {
    flexDirection: "column",

    "& > :nth-child(1)": { order: "1" },
  },
});

export const Layout = (props) => (
  <Base>
    <Header />
    <WrapContent>{props.children}</WrapContent>
  </Base>
);
