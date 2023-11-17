import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const cateList = [
  "ALL",
  "WOMEN",
  "CURVE",
  "HOME",
  "KIDS",
  "MEN",
  "BEAUTY",
  "EXCHANGE"
];
export default function CateTabScreen() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 330, sm: 480 }, bgcolor: "#f1f1f1" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {cateList.map((cate, i) => (
          <Tab key={i} label={cate} />
        ))}
      </Tabs>
    </Box>
  );
}
