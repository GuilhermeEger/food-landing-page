import React from "react";
import Image from "../Image/Image";
import "./TextImageSquare.css";

function TextImageSquare(props) {

  return (
    <div className="squareWrap">
      <div className="littleContentBox">
        <div>
          <Image className="image" src={props.img} />
        </div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default TextImageSquare;
