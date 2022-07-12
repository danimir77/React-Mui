import React from "react";
import { Box } from "@mui/material";
import Posts from "./Posts.jsx";

export default function Feed() {
  return (
    <Box bgcolor="lightgray" flex={4} p={2}>
      {/* //La idea es que haya un array de posts*/}
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
}
