import { Box } from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box
      bgcolor="lightseagreen"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed" }}>Rightbar</Box>
    </Box>
  );
}
