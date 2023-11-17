import React from "react";
import "./headerItem.css";
import {
  Menu,
  MailOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingBagOutlined
} from "@mui/icons-material";
import logo from "./logo.png";
import { CssBaseline, IconButton, Typography } from "@mui/material";
export default function HeaderScreen() {
  return (
    <div className="top_header">
      <CssBaseline />
      <div className="left_header">
        <IconButton>
          <Menu sx={{ fontSize: "30px" }} />
        </IconButton>

        <IconButton sx={{ fontSize: "30px" }}>
          <MailOutlined />
        </IconButton>
      </div>
      {/* <div className="logo_text">shein</div> */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,

          fontFamily: "Inter",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#000000",
          textDecoration: "none"
        }}
      >
        SHEIN
      </Typography>
      <div className="right_header">
        <IconButton>
          <SearchOutlined sx={{ fontSize: "30px" }} />
        </IconButton>
        <div className="fev_item">
          <IconButton>
            <FavoriteBorderOutlined sx={{ fontSize: "30px" }} />
          </IconButton>
          <div className="fev_badge" />
        </div>

        <div className="cart_item">
          <IconButton sx={{ padding: "5px" }}>
            <ShoppingBagOutlined sx={{ fontSize: "30px" }} />
          </IconButton>
          <div className="cart_badge">
            <span className="cart_count">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
