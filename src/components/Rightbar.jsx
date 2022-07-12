import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import itemData from "./images.json";

export default function Rightbar() {
  console.log(itemData);
  return (
    <Box
      // bgcolor="lightseagreen"
      flex={1}
      // p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed",margin:"5px" }}>
        <Typography variant="h6" fontWeight={200}>
          Members Online
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200}>
          Other posts
        </Typography>
        {/* <Stack direction="col" spacing={2} justifyContent="space-between"> */}
          <ImageList rowHeight={100} gap={5}>
            {itemData.images.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={Math.random()}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        {/* </Stack> */}
      </Box>
    </Box>
  );
}
