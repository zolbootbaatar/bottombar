import React from "react";
import "./layout.css";
import { Grid } from "@mui/material";
import ProductItem from "./product/ProductItem";
import products from "../data/strd.json";
export default function HomeLayout() {
  return (
    <div className="home_layout_wrapper">
      <Grid container spacing={1}>
        {products.map((item) => (
          <Grid item xs={6} sm={4} key={item.productName}>
            <ProductItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
