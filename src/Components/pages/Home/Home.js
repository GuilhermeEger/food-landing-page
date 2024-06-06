import React from "react";
import "./Home.css";
import background from "../../../assets/background3.jpg";
import TextImageSquare from "../../atoms/TextImageSquare/TextImageSquare";
import bowl from "../../../assets/bowl.jpg";
import shrimp from "../../../assets/sushiTable.jpg";
import makingSushi from "../../../assets/makingSushi.jpg";
import cuttinSalmon from "../../../assets/cuttinSalmon.jpg";
import cuttinAtum1 from "../../../assets/cuttinAtum1.jpg";
import cuttinAtum2 from "../../../assets/cuttinAtum2.jpg";


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

        <div className="textImageWrap">
          <div className="textFloating">
            <h2>O shushi é feito assim</h2>
          </div>
          <img className="imageRightText" src={makingSushi} />
        </div>

        <div className="textImageWrap2">
          <img className="imageRightText" src={cuttinSalmon} />
          <div className="gridImagesText">
            <div className="textFloating2">
              <h2>O shushi é feito assim</h2>
            </div>
            <img className="leftImage" src={cuttinAtum1} />
            <img className="rightImage" src={cuttinAtum2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
