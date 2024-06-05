import React from "react";
import "./Home.css";
import background from "../../../assets/background2.jpg";
import bowl from "../../../assets/bowl.jpg";
import noodles from "../../../assets/noodles.jpg";

function Home(props) {
  return (
    <div>
      {/*<video width="750" height="500" autoPlay loop muted>
        <source src={video} />
  </video>*/}
      <img className="backgroundImage" src={background} />
      <h1 className="Intro">A site about japanese food</h1>
      <div className="content">
        <div style={{ background: "white", padding: 20 }}>
          <h1>Hello, this is my japanese site</h1>
          <p>
            Look at this beautifull food, da wadawada wadaw da wadawada
            wadawwada wadawada wadawada wadawada wadawada wadawada wadawada
          </p>
        </div>
        <img style={{ width: "200px" }} src={bowl} />
      </div>

      <div className="content">
        <img style={{ width: "200px" }} src={noodles} />
        <div style={{ background: "white", padding: 20 }}>
          <h1>Hello, this is my japanese site</h1>
          <p>
            Look at this beautifull food, da wadawada wadaw da wadawada
            wadawwada wadawada wadawada wadawada wadawada wadawada wadawada
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
