import React from "react";
import "./Home.css";
import background from "../../../assets/background3.jpg";
import TextImageSquare from "../../atoms/TextImageSquare/TextImageSquare";
import bowl from "../../../assets/bowl.jpg";
import shrimp from "../../../assets/sushiTable.jpg";
import sushiTableBackground from "../../../assets/sushiTableBackground.jpg";
import makingSushi from "../../../assets/makingSushi.jpg";
import cuttinSalmon from "../../../assets/cuttinSalmon.jpg";
import cuttinAtum1 from "../../../assets/cuttinAtum1.jpg";
import cuttinAtum2 from "../../../assets/cuttinAtum2.jpg";
import puttingSalmon from "../../../assets/puttingSalmon.jpg";
import puttingSalmon2 from "../../../assets/puttinSalmon.mp4";
import puttingRice from "../../../assets/puttingRice.jpg";
import cuttingSalmon from "../../../assets/cuttingSalmon.mp4";
import rollingSushi2 from "../../../assets/rollingSushi2.mp4";
import rollingSushi3 from "../../../assets/rollingSushi.mp4";
import VideoImage from "../../atoms/VideoImage/VideoImage";
import gettinSushi from "../../../assets/gettingSushi.mp4"

function Home(props) {
  return (
    <div>
      <img className="backgroundImage" src={background} />
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
        <img className="backgroundImage" src={shrimp} />

        {/*<div className="textImageWrap">
          <div className="textFloating">
            <h2>O shushi é feito assim</h2>
          </div>
          <VideoImage video={rollingSushi} src={makingSushi} />
        </div>*/}

        <div className="textImageWrap2">
          <VideoImage src={cuttinSalmon} video={cuttingSalmon} />
          <div className="gridImagesText">
            <div className="textFloating2">
              <h2>O shushi é feito assim</h2>
            </div>
            <img className="leftImage" src={cuttinAtum1} />
            <img className="rightImage" src={cuttinAtum2} />
          </div>
        </div>
      </div>

      <div className="divider">
        <div className="infoBox">
          <h1>adsa asdasd asdasd asd</h1>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <img className="backgroundImage" src={sushiTableBackground} />

        <div className="textImageWrap2">
          <VideoImage src={puttingRice} video={rollingSushi3} />
          <VideoImage src={makingSushi} video={rollingSushi2} />
          <VideoImage src={puttingSalmon} video={puttingSalmon2} />
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
