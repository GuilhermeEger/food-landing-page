import React from "react";
import icons from "../../../utils/IconMap";
import "./Icon.css";

function Icon(props) {
  return (
    <div className="centerIcon">
      {icons[props.icon]}
    </div>
  );
}

export default Icon;
