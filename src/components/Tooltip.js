import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  return (
    <span
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {/* one time it render as h2  */}
      {visible && <div className="tooltiptext">{text}</div>}
    </span>
  );
}
