import React from "react";
import { Box } from "@mui/material";
import Posts from "./Posts.jsx";

export default function Feed() {
  return (
    <Box bgcolor="lightgray" flex={4} p={2}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
}
