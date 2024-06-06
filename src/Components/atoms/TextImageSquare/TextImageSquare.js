import React from "react";
import "./TextImageSquare.css";

function TextImageSquare(props) {
  return (
    <div className="squareWrap">
      <div className="littleContentBox">
        <div>
          <img className="image" src={props.img} />
        </div>
        <div>
          <h3>Comida</h3>
          <p>testesteste teste</p>
        </div>
      </div>
    </div>
  );
}

export default TextImageSquare;
