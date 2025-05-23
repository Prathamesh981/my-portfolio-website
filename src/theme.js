// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#264653", // deep teal
      contrastText: "#fff",
    },
    secondary: {
      main: "#2a9d8f", // complementary accent
      contrastText: "#fff",
    },
    background: {
      default: "#f1faee", // soft off-white
      paper: "#ffffff",
    },
    text: {
      primary: "#1d3557", // dark navy
      secondary: "#457b9d",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
  },
  spacing: 8,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#264653",
        },
      },
    },
  },
});

export default theme;
