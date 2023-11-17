import React, { useState } from "react";
import { motion } from "framer-motion";
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
export default function CategoryScreen({ cate, onSelectCate }) {
  const [selectedTab, setSelectedTab] = useState(cate);

  function settabcate(item) {
    setSelectedTab(item);
    onSelectCate(item);
  }
  return (
    <Box
      sx={{
        maxWidth: { xs: 330, sm: 480, overflow: "hidden" },
        bgcolor: "#f1f1f1"
      }}
    >
      <div className="tabs">
        {cateList.map((item, i) => (
          <motion.div
            key={item}
            animate={{
              borderBottom: item === selectedTab ? "2px solid black" : null,
              color: item === selectedTab ? "green" : "gray"
            }}
            transition={{ type: "spring", duration: 0.5 }}
            className="item_tab"
            style={{}}
            onClick={() => settabcate(item)}
          >
            {item}
            {/* {item === selectedTab ? (
              <motion.div className="underline" layoutId="underline" />
            ) : null} */}
          </motion.div>
        ))}
      </div>
    </Box>
  );
}
