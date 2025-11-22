import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <span className="tooltiptext">{text}</span>}
    </span>
  );
}
