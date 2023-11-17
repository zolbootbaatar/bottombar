import React from "react";
import BottomNav from "./components/nav/BottomNav";
import HomeScreen from "./screens/HomeScreen";
import HomeTwo from "./screens/HomeTwo";
import "./styles.css";

function App() {
  return (
    <div>
      <HomeTwo />
      <BottomNav />
    </div>
  );
}

export default App;
