import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  CloseOutlined,
  FavoriteBorderOutlined,
  FavoriteRounded
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

import IconButton from "@mui/material/IconButton";
import products from "../data/strd.json";
import ProductItem from "../components/product/ProductItem";
import Sheet from "react-modal-sheet";

import {
  Menu,
  MailOutlined,
  SearchOutlined,
  ShoppingBagOutlined
} from "@mui/icons-material";

import ModalContent from "../components/ModalContent";
import CateTabScreen from "../components/CateTabScreen";
import CategoryScreen from "../components/CategoryScreen";
export default function HomeTwo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setSelected] = useState(null);
  const [selcate, setSelCate] = useState("ALL");
  function handleSetSelectdProduct(item) {
    setSelected(item);
    setIsOpen(true);
  }
  function handleSetcate(cate) {
    setSelCate(cate);
  }
  function handleClose() {
    setSelected(null);
    setIsOpen(false);
  }
  return (
    <div className="parent">
      <div className="child1">
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

        <CategoryScreen cate={selcate} onSelectCate={handleSetcate} />
      </div>
      <div className="box2">
        <>
          <AnimatePresence exitBeforeEnter>
            <motion.h1
              key={selcate ? selcate : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selcate ? selcate : ""}
            </motion.h1>
          </AnimatePresence>
        </>
        <Grid container spacing={1}>
          {products.map((item) => (
            <Grid item xs={6} sm={4} key={item.productName}>
              <ProductItem item={item} onSelectItem={handleSetSelectdProduct} />
            </Grid>
          ))}
        </Grid>
      </div>

      <Sheet isOpen={isOpen} onClose={handleClose}>
        <Sheet.Container>
          <Sheet.Header>
            <IconButton onClick={handleClose}>
              <CloseOutlined />
            </IconButton>
          </Sheet.Header>
          <Sheet.Content>
            <ModalContent onClose={handleClose} item={isSelected} />
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onClick={handleClose} />
      </Sheet>
    </div>
  );
}
