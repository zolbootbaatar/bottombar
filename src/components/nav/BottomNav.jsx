import React from "react";
import BottomNavigation from "reactjs-bottom-navigation";
import "reactjs-bottom-navigation/dist/index.css";
import { IconButton } from "@mui/material";
import {
  Home,
  HomeOutlined,
  SearchOutlined,
  NotificationsOutlined,
  MenuOutlined,
  MoreHorizOutlined
} from "@mui/icons-material";
export default function BottomNav() {
  const bottomNavItems = [
    {
      title: "Home",

      icon: <HomeOutlined style={{ fontSize: "28px" }} />,

      activeIcon: <HomeOutlined style={{ fontSize: "28px", color: "#fff" }} />
    },

    {
      title: "Search",

      icon: <SearchOutlined style={{ fontSize: "28px" }} />,

      activeIcon: <SearchOutlined style={{ fontSize: "28px", color: "#fff" }} />
    },

    {
      title: "Notifications",

      icon: <NotificationsOutlined style={{ fontSize: "28px" }} />,

      activeIcon: (
        <NotificationsOutlined style={{ fontSize: "28px", color: "#fff" }} />
      )
    },

    {
      title: "Menu",

      icon: <MenuOutlined style={{ fontSize: "28px" }} />,

      activeIcon: <MenuOutlined style={{ fontSize: "28px", color: "#fff" }} />,

      onClick: () => alert("menu clicked")
    }
  ];
  return (
    <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
        activeBgColor={"gray"}
        activeTextColor={"yellow"}
      />
    </div>
  );
}
