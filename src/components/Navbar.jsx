import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Icon,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "lightblue",
  padding: "0 10px",
  borderRadius: "5px",
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "lightblue",
  display: "flex",
  justifyContent: "space-between",
  // width: "90px",
  gap: "15px",
  alignItems: "center",
}));

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          COIN STATS (Mui-React)
        </Typography>
        <CurrencyBitcoinIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Write something...">Search</InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={12}>
            <Mail />
          </Badge>
          <Badge badgeContent={7}>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://avatars.githubusercontent.com/u/73600438?v=4"
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
}
