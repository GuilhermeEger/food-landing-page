import React from "react";
import Image from "../Image/Image";
import "./TextImageSquare.css";

function TextImageSquare(props) {

  function scrollTo(){


    props.goToRef()

  }

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
        <button onClick={() => scrollTo()}>Go to</button>
      </div>
    </div>
  );
}

export default TextImageSquare;
