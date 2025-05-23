// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import styled from "styled-components";

// Equally distribute nav buttons
const NavBox = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

const NavButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-weight: 600;
    text-transform: none;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: scale(1.05);
    }
  }
`;

export default function Header() {
  const sections = [
    "about",
    "education",
    "experience",
    "skills",
    "portfolio",
    "contact",
  ];
  return (
    <AppBar position="fixed" elevation={2}>
      <Toolbar sx={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <NavBox>
          {sections.map((sec) => (
            <NavButton key={sec} href={`#${sec}`}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </NavButton>
          ))}
        </NavBox>
      </Toolbar>
    </AppBar>
  );
}
