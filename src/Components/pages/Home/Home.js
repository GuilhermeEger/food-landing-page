import React, { useRef, useState } from "react";
import "./Home.css";
import Image from "../../atoms/Image/Image";
import TextImageSquare from "../../atoms/TextImageSquare/TextImageSquare";
import videoMap from "../../../utils/videoMap";
import imageMap from "../../../utils/imageMap";
import VideoImage from "../../atoms/VideoImage/VideoImage";

function Home(props) {

  const [showVideos, setShowVideos] = useState(false);
  const fishPreparationRef = useRef(null);
  
  return (
    <div>
      <Image className="backgroundImage" src={imageMap["sushiBackground"]} />
      <h1 className="Intro">A site about japanese food</h1>

      <div className="divider">
        <div className="imagesBox">
          <TextImageSquare
            goToRef={() => {
              
              const { offsetTop } = fishPreparationRef.current
              console.log(offsetTop);

              window.scrollTo({top: offsetTop, behavior: "smooth"})}}
            title={"Fish Preparation"}
            text={"The Art of Cutting Tuna."}
            img={imageMap["atumWithKnife"]}
          />
          <TextImageSquare
            title={"Sushi Preparation"}
            text={"Sublime Simplicity: The Ritual of Sushi."}
            img={imageMap["puttingSalmonSquare"]}
          />
          <TextImageSquare
            title={"Examples of Finished Dishes"}
            text={"Culinary Masterpieces: The Aesthetics of Japanese Dishes."}
            img={imageMap["showinPlate"]}
          />
        </div>

        <div className="infoBox">
          <h1>The Sublime Art of Japanese Cuisine</h1>
          <p>
            Japanese cuisine is a symphony of elegance and precision, where each
            dish is a masterpiece celebrating the harmony between flavor and
            aesthetics. The fish is cut with graceful movements, revealing its
            delicate texture like a gentle dance. Sushi, carefully crafted,
            transforms simplicity into the sublime. Each dish is an expression
            of tradition and innovation, a testament to the deep connection with
            nature. With every bite, a story of centuries of mastery and respect
            for the ingredient unfolds, enchanting the senses and elevating the
            gastronomic experience to a level of pure art.
          </p>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Image className="backgroundImage" src={imageMap["shrimp"]} />

        <div className="textImageWrap2">
          <div className="gridImagesText">
            <div className="textFloating2">
              <h2>
                The Art of the Cut: Precision and Elegance in Handling Tuna
              </h2>
            </div>
            <Image className="leftImage" src={imageMap["atum"]} />
            <Image className="middleImage" src={imageMap["cuttinAtum1"]} />
            <Image className="rightImage" src={imageMap["cuttinAtum2"]} />
          </div>
        </div>
        <div ref={fishPreparationRef} className="infoBox2">
          <h1>The Art of the Cut: Precision and Elegance in Handling Tuna</h1>
          <p>
            Fish preparation is where the true mastery of Japanese cuisine is
            unveiled. Every slice is a meticulous dance, a choreography of
            precision and elegance. The knife glides smoothly, almost as an
            extension of the chef's hand, revealing the beauty and texture of
            the tuna with each movement. This process is not just a technique;
            it is an art refined over centuries, where respect for the
            ingredient is as important as the chef's skill.
          </p>
        </div>
      </div>

      <div className="divider">
        <div className="infoBox">
          <h1>Turning Simplicity into the Sublime: The Ritual of Sushi</h1>
          <p>
            Creating sushi is a ritual that turns simplicity into something
            sublime. The rice is moulded with delicacy, each grain cared for
            with the same attention as a work of art. The fish is positioned
            with precision, every detail harmoniously arranged to delight not
            just the palate but also the eyes. The act of rolling sushi is
            almost meditative, a demonstration of patience and perfection. Each
            piece tells a story of tradition and innovation.
          </p>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <Image
          className="backgroundImage"
          src={imageMap["sushiTableBackground"]}
        />

        <div className="textImageWrap2">
          <button onClick={() => setShowVideos(!showVideos)} style={{position:"absolute", top:0}}>Show me!</button>
          <VideoImage
            showVideo={showVideos}
            src={imageMap["puttingRice"]}
            video={videoMap["puttingRice"]}
          />
          <VideoImage
            showVideo={showVideos}
            src={imageMap["makingSushi"]}
            video={videoMap["rollingSushi"]}
          />
          <VideoImage
            showVideo={showVideos}
            src={imageMap["puttingSalmon"]}
            video={videoMap["puttingSalmon"]}
          />
        </div>
      </div>

      <div style={{ height: 500, width: "100%", background: "white" }}>
        <div>
          <video src={"gettinSushi"} loop autoPlay={true} />
        </div>
      </div>

      <div style={{ height: 100, width: "100%", background: "#222021" }}></div>
    </div>
  );
}

export default Home;
