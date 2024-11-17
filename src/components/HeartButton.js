import React, { useState } from "react";
import "./HeartButton.css";

const HeartButton = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="heart-button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      ❤️
    </div>
  );
};

export default HeartButton;
