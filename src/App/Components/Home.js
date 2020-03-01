import React, { PureComponent } from "react";
import "../CSS/Home.scss";

class Banner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="HomeSection">
        <div className="HomeWrapper">
          <div className="container">
            <div className="homeBanner">
              <div className="bannerFrontParticles">
                <img
                  src={require("../Images/banner-FrontParticles.png")}
                  alt="Banner Player"
                  className="img-responsive bannerfrontPart"
                />
              </div>
              <div className="bannerPlayer animation-slide-in-left">
                <img
                  src={require("../Images/banner-player.png")}
                  alt="Banner Player"
                  className="img-responsive bannerPlayerImg"
                />
              </div>
              <div className="bannerBall">
                <img
                  src={require("../Images/banner-ball.png")}
                  alt="Banner Player"
                  className="img-responsive bannerBallImg"
                />
              </div>
              {/* <div className="bannerFrontParticles">
                <img
                  src={require("../Images/banner-backParticles.png")}
                  alt="Banner Player"
                  className="img-responsive bannerbackPart"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
