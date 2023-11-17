import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function BottomSheet() {
  return (
    <div className="modal_wrapper">
      <div className="modal_overlay_content">
        <div className="modal_close_overlay">
          <div className="modal_content">
            <h1>Hello Modal</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
function usePrevious(value) {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
}
