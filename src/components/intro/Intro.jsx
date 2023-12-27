import "./intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer" style={{backgroundImage:`url("assets/background.jpg")`}}>
          <img src="assets/vclogo.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome to</h2>
          <h1>VVIT CONNECT</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Welcome to VVIT Alumni Network",
                    "Connect with alumni excellence",
                    "Connecting Alumni",
                  ],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />{" "}
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
