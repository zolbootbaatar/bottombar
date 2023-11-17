import React from "react";
import HomeLayout from "../components/HomeLayout";
import HeaderScreen from "../components/nav/HeaderScreen";
import HeaderTwo from "../components/nav/HeaderTwo";

export default function HomeScreen() {
  return (
    <div style={{ position: "relative" }}>
      <HeaderTwo />
      <HomeLayout />
    </div>
  );
}
