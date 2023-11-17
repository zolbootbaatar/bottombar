import React, { useState } from "react";
import photo from "./productPhoto.png";
import { MoreHorizOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { IconButton, Skeleton } from "@mui/material";
import "../layout.css";

export default function ProductItem({ item, onSelectItem }) {
  const [loaded, setLoaded] = useState(false);

  function handlesel() {
    onSelectItem(item);
  }
  return (
    <div className="item_wrapper">
      {loaded ? null : (
        <Skeleton variant="rectangular" width={170} height={230} />
      )}

      <img
        className="product_image"
        src={item.productImage}
        alt=""
        style={loaded ? { display: "block" } : { display: "none" }}
        onLoad={() => setLoaded(true)}
      />

      <div className="add_bg_icon">
        <IconButton sx={{}} onClick={handlesel}>
          <ShoppingBagOutlined />
        </IconButton>
      </div>
      <div className="product_price_wrapper">
        <div className="price_content">
          <h5>{item.productPrice}</h5>
          <IconButton>
            <MoreHorizOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
