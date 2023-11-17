import React from "react";
import "./headerItem.css";
import {
  Menu,
  MailOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingBagOutlined
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function HeaderTwo() {
  return (
    <div className="top_h">
      <div className="top_h_content">
        <div className="left_header">
          <IconButton sx={{ marginRight: "5px" }}>
            <Menu />
          </IconButton>

          <IconButton>
            <MailOutlined sx={{}} />
          </IconButton>
        </div>
        <div className="logo_text">shein</div>
        <div className="right_header">
          <IconButton sx={{}}>
            <SearchOutlined sx={{}} />
          </IconButton>
          <div className="fev_item">
            <IconButton sx={{}}>
              <FavoriteBorderOutlined />
            </IconButton>
          </div>
          <div className="cart_item">
            <IconButton sx={{}}>
              <ShoppingBagOutlined sx={{}} />
            </IconButton>

            <div className="cart_badge">
              <span className="cart_count">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
