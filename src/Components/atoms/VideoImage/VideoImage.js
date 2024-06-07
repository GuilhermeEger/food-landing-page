import React, { useEffect, useState } from "react";
import "./VideoImage.css";
import ButtonIcon from "../../molecules/ButtonIcon/ButtonIcon";

function VideoImage(props) {
  const [showVideo, setShowVideo] = useState(false);

  function changeView() {
    setShowVideo(!showVideo);
  }

  useEffect(() => {
    setShowVideo(props.showVideo);
    console.log("props.showVideo",props.showVideo);
  }, [props.showVideo]);

  return (
    <div className="mainContent">
      {showVideo ? (
        <video
          style={{ width: "100%" }}
          src={props.video}
          autoPlay={true}
          loop
        />
      ) : (
        <img className="imageWithVideo" src={props.src} />
      )}
      <ButtonIcon
        icon={showVideo ? "pause" : "play"}
        className="button"
        onClick={() => changeView()}
      />
    </div>
  );
}

export default VideoImage;
