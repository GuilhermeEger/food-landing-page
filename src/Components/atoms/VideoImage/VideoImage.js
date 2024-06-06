import React, { useState } from "react";
import "./VideoImage.css";

function VideoImage(props) {
  const [showVideo, setShowVideo] = useState(false);

  function changeView() {
    setShowVideo(!showVideo);
  }

  return (
    <div className="mainContent">
      {showVideo ? (
        <video style={{width:"100%"}} src={props.video} autoPlay={true} loop />
      ) : (
        <img className="image" src={props.src} />
      )}
      <button className="button" onClick={() => changeView()}>aaa</button>
    </div>
  );
}

export default VideoImage;
