import React from "react";
import "./Image.css";

function Image(props) {
  return <div>
    <img className={props.className} src={props.src}/>
  </div>;
}

export default Image;
