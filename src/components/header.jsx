import { styled } from "@stitches/react";

import { Logo } from "./icons/logo";

const HeaderBase = styled("header", {
  display: "flex",
  position: "sticky",
  top: "0",
  left: "0",
  height: "55px",
  width: "100%",

  backgroundColor: "#FFFFFF",
  boxShadow: "0 0 5px 0 rgba(0,0,0, 0.10)",

  alignItems: "center",
  justifyContent: "center",
  marginBottom: "45px",
});

const LogoBase = styled("div", {
  display: "flex",
  width: "162px",
  height: "auto",
});

export const Header = () => (
  <HeaderBase>
    <LogoBase>
      <Logo />
    </LogoBase>
  </HeaderBase>
);
