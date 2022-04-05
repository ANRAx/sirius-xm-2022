import React from "react";
import MoreVert from "@mui/icons-material/MoreVert";
import { Avatar, Stack } from "@mui/material";
import "./Navbar.css";

const Navbar = () => (
  <div className="Navbar">
    <div className="navbar-info">
      <div>SXM Pandora</div>
      <Stack alignItems="center" direction="row" spacing={2}>
        <Avatar alt="user" sx={{ width: 24, height: 24 }} />
        <span>User Name</span>
        <MoreVert color="primary" />
      </Stack>
    </div>
    <span className="navbar-title">Rick and Morty show</span>
  </div>
);

export default Navbar;
