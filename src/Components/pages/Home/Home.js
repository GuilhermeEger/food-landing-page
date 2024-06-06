import React from "react";
import "./Home.css";
import Image from "../../atoms/Image/Image";
import TextImageSquare from "../../atoms/TextImageSquare/TextImageSquare";
import videoMap from "../../../utils/videoMap"

import background from "../../../assets/background3.jpg";
import bowl from "../../../assets/bowl.jpg";
import shrimp from "../../../assets/sushiTable.jpg";
import sushiTableBackground from "../../../assets/sushiTableBackground.jpg";
import makingSushi from "../../../assets/makingSushi.jpg";
import atum1 from "../../../assets/atum1.jpg";
import cuttinAtum1 from "../../../assets/cuttinAtum1.jpg";
import cuttinAtum2 from "../../../assets/cuttinAtum2.jpg";
import puttingSalmon from "../../../assets/puttingSalmon.jpg";
import puttingRice from "../../../assets/puttingRice.jpg";
import VideoImage from "../../atoms/VideoImage/VideoImage";



function Home(props) {
  return (
    <div>
      <Image className="backgroundImage" src={background} />
      <h1 className="Intro">A site about japanese food</h1>

      <div className="divider">
        <div className="imagesBox">
          <TextImageSquare img={bowl} />
          <TextImageSquare img={bowl} />
          <TextImageSquare img={bowl} />
        </div>

        <div className="infoBox">
          <h1>adsa asdasd asdasd asd</h1>
        </div>
      </div>

      <img className="backgroundImage" src={bowl} />

      <div className="divider">
        <div className="infoBox">
          <h1>adsa asdasd asdasd asd</h1>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Image className="backgroundImage" src={shrimp} />

        <div className="textImageWrap2">
          <div className="gridImagesText">
            <div className="textFloating2">
              <h2>O shushi é feito assim</h2>
            </div>
            <Image className="leftImage" src={atum1} />
            <Image className="middleImage" src={cuttinAtum1} />
            <Image className="rightImage" src={cuttinAtum2} />
          </div>
        </div>
      </div>

      <div className="divider">
        <div className="infoBox">
          <h1>adsa asdasd asdasd asd</h1>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Image className="backgroundImage" src={sushiTableBackground} />

        <div className="textImageWrap2">
          <VideoImage src={puttingRice} video={videoMap["puttingRice"]} />
          <VideoImage src={makingSushi} video={videoMap["rollingSushi"]} />
          <VideoImage src={puttingSalmon} video={videoMap["puttingSalmon"]} />
        </div>
      </div>

      <div style={{height:500, width:"100%", background:"white"}}>
        <div>
          <video src={"gettinSushi"} loop autoPlay={true}/>
        </div>
      </div>

      <div style={{height:100, width:"100%", background:"#222021"}}> 
        
      </div>

    </div>
  );
}

export default Home;
