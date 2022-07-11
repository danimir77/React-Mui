import { createTheme } from "@mui/material/styles";
import { green, purple, indigo } from "@mui/material/colors";

export const personalTheme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: green[500],
    },
  },
});
