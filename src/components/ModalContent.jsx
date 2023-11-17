import {
  CloseOutlined,
  FavoriteBorderOutlined,
  FavoriteRounded
} from "@mui/icons-material";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import React, { useState } from "react";

export default function ModalContent({ onClose, item }) {
  const [selSize, setSelSize] = useState(null);
  const [selCol, setSelColor] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShow(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={show}
        autoHideDuration={6000}
        onClose={handleClose}
        message="select size !!"
        action={action}
      />

      <h1>{item.productName}</h1>
    </div>
  );
}
