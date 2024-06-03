import React from "react";
import "./carousel.scss";
import cbImage from "../../assets/portfolio/cb.png";
import gdrvImage from "../../assets/portfolio/gdrv.png";
import ihgImage from "../../assets/portfolio/ihg.png";
import mdImage from "../../assets/portfolio/md.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
    };
  }

  plusSlides = (n) => {
    this.showSlides(this.state.slideIndex + n);
  };

  showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
    this.setState({ slideIndex: n });
  };

  componentDidMount() {
    this.showSlides(1); // Show the first slide when the component mounts
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Slideshow 2</h2>

        <div className="slideshow-container">
          <div className="mySlides">
            <img src={cbImage} alt="CB" style={{ width: "100%" }} />
            <div className="text">Character Booking</div>
            <a href="http://www.characterbooking.com" className="slide-link">
              characterbooking.com
            </a>
          </div>

          <div className="mySlides">
            <img src={gdrvImage} alt="GDRV" style={{ width: "100%" }} />
            <div className="text">Grand Design RV</div>
            <a href="http://www.granddesignrv.com" className="slide-link">
              granddesignrv.com
            </a>
          </div>

          <div className="mySlides">
            <img src={ihgImage} alt="IHG" style={{ width: "100%" }} />
            <div className="text">IHG</div>
            <a href="http://www.ihg.com" className="slide-link">
              ihg.com
            </a>
          </div>

          <div className="mySlides">
            <img src={mdImage} alt="MD" style={{ width: "100%" }} />
            <div className="text">Meadows MD</div>
            <a href="http://www.meadowsmd.com" className="slide-link">
              meadowsmd.com
            </a>
          </div>

          <button className="prev" onClick={() => this.plusSlides(-1)}>
            &#10094;
          </button>
          <button className="next" onClick={() => this.plusSlides(1)}>
            &#10095;
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
