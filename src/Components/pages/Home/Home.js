import React, { useRef, useState } from "react";
import "./Home.css";
import Image from "../../atoms/Image/Image";
import TextImageSquare from "../../atoms/TextImageSquare/TextImageSquare";
import videoMap from "../../../utils/videoMap";
import imageMap from "../../../utils/imageMap";
import VideoImage from "../../atoms/VideoImage/VideoImage";
import gettingSushi from "../../../assets/GettinSushi3.mp4";

function Home(props) {
  const [showVideos, setShowVideos] = useState(false);

  return (
    <div>
      <div>
        <Image className="backgroundImage" src={imageMap["sushiBackground"]} />
        <h1 className="Intro">A site about japanese food</h1>

        <div className="divider">
          <div className="imagesBox">
            <TextImageSquare
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
              Japanese cuisine is a symphony of elegance and precision, where
              each dish is a masterpiece celebrating the harmony between flavor
              and aesthetics. The fish is cut with graceful movements, revealing
              its delicate texture like a gentle dance.
            </p>
            <p>
              Sushi, carefully crafted, transforms simplicity into the sublime.
              Each dish is an expression of tradition and innovation, a
              testament to the deep connection with nature. With every bite, a
              story of centuries of mastery and respect for the ingredient
              unfolds, enchanting the senses and elevating the gastronomic
              experience to a level of pure art.
            </p>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <Image className="backgroundImage" src={imageMap["shrimp"]} />

          <div className="textImageWrap2">
            <div className="gridImagesText">
              <div className="textFloating2">
                <h2 className="infoBoxTitle">
                  The Art of the Cut: Precision and Elegance in Handling Tuna
                </h2>
                <p>
                  Fish preparation is where the true mastery of Japanese cuisine
                  is unveiled. Every slice is a meticulous dance, a choreography
                  of precision and elegance. The knife glides smoothly, almost
                  as an extension of the chef's hand, revealing the beauty and
                  texture of the tuna with each movement.
                </p>
                <p>
                  This process is not just a technique; it is an art refined
                  over centuries, where respect for the ingredient is as
                  important as the chef's skill.
                </p>
              </div>
              <Image className="leftImage" src={imageMap["atum"]} />
              <Image className="middleImage" src={imageMap["cuttinAtum1"]} />
              <Image className="rightImage" src={imageMap["cuttinAtum2"]} />
            </div>
          </div>
        </div>

        <div className="divider lowHeight">
          <div className="infoBox">
            <h1>Turning Simplicity into the Sublime: The Ritual of Sushi</h1>
            <p>
              Creating sushi is a ritual that turns simplicity into something
              sublime. The rice is moulded with delicacy, each grain cared for
              with the same attention as a work of art. The fish is positioned
              with precision, every detail harmoniously arranged to delight not
              just the palate but also the eyes.
            </p>
            <p>
              The act of rolling sushi is almost meditative, a demonstration of
              patience and perfection. Each piece tells a story of tradition and
              innovation.
            </p>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <Image
            className="backgroundImage"
            src={imageMap["sushiTableBackground"]}
          />

          <div className="textImageWrap2">
            <div className="leftTextContent">
              <h1>Sublime Simplicity: The Ritual of Sushi.</h1>
              <p>
                <strong>Rice and Fillings:</strong> Spread rice and fillings,
                creating a symphony of flavors that complement each other
                perfectly.
              </p>
              <p>
                <strong>Rolling:</strong> Roll tightly, breathing life into each
                sushi with the precision of an artist and the passion of a
                master.
              </p>
              <p>
                <strong>Salmon on Top:</strong> Add salmon, crowning your
                creation with the refinement and sophistication of an impeccable
                finishing touch.
              </p>
              <p>
                Click <span
                  onClick={() => setShowVideos(!showVideos)}
                  className="spanUnderline"
                >
                  here
                </span> to see all the magic!
              </p>
            </div>
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
      </div>

      <div className="endContent">
        <div className="leftContent">
          <div className="endContentText">
            Discover Local Japanese Restaurants
          </div>
          <p>
            Explore the authentic flavors of Japanese cuisine at our local
            restaurants. Each venue offers a unique experience, blending
            traditional techniques with modern touches to create unforgettable
            dishes.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.8758589738!2d150.60232187025562!3d-33.84780525627431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20Nova%20Gales%20do%20Sul!5e0!3m2!1spt-BR!2sau!4v1717742072603!5m2!1spt-BR!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="endVideoWrap">
          <video
            className="endVideoContent"
            src={gettingSushi}
            loop
            autoPlay
            muted
          />
          <p>
            Whether you're craving the freshest sushi or a beautifully crafted
            sashimi, our nearby restaurants are ready to delight your palate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
