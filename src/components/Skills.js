import React from "react";

import MediaQuery from "react-responsive";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ReactIcon from "../assets/images/ReactIcon.png";
import VueIcon from "../assets/images/VueIcon.png";
import HTML5Icon from "../assets/images/HTML5Icon.png";
import CSS3Icon from "../assets/images/CSS3Icon.png";
import JSIcon from "../assets/images/JSIcon.png";
import PythonIcon from "../assets/images/PythonIcon.jpg";
import JavaIcon from "../assets/images/JavaIcon.jpg";
import CPPIcon from "../assets/images/CPPIcon.png";
import arrowLeft from "../assets/images/leftArrow.png"
import arrowRight from "../assets/images/rightArrow.png"

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          fontFamily: "Poppins-Medium",
          textAlign: "center",
          marginTop: "30px"
        }}
      >
        <div style={styles.container}>

          <div style={{ ...styles.block }}></div>
          <MediaQuery minDeviceWidth={1945}>
            <div
              style={{
                ...styles.title,
                fontSize: "48px",
                width: "150px",
              }}
            >
              Skills
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1944}>
            <div
              style={{
                ...styles.title,
                width: "150px",
              }}
            >
              Skills
              
            </div>
          </MediaQuery>
        </div>
        <div style={{...styles.container, margin: "auto", marginTop: "30px"}}>
          <Carousel
            arrows
            infinite
            dots
            slidesPerPage={3}
            slidesPerScroll={2}
            breakpoints={{
              500: {
                slidesPerPage: 1,
                slidesPerScroll: 1,
                arrows: false
              },
              900:{
                slidesPerPage: 2,
                arrows: false
              },
            }}
            arrowLeft={<img className="carouselArrows" src={arrowLeft} />}
            arrowRight={<img className="carouselArrows" src={arrowRight}/>}
            addArrowClickHandler
            
          >
            <img style={{...styles.images}} src={ReactIcon} />
            <img style={{...styles.images}} src={VueIcon} />
            <img style={{...styles.images}} src={CPPIcon} />
            <img style={{...styles.images}} src={PythonIcon} />
            <img style={{...styles.images}} src={JavaIcon} />
            <img style={{...styles.images}} src={HTML5Icon} />
            <img style={{...styles.images}} src={CSS3Icon} />
            <img style={{...styles.images}} src={JSIcon} />
            
          </Carousel>
        </div>
        <div style={{
              marginBottom: "50px"
            }}></div>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: "0 0 0 0",
    paddingTop: "10px",
    fontSize: "32px",
    color: "#777777",
    textAlign: "left",
    fontWeight: "550",
  },

  container: {
    justifyContent: "center",
    width: "60%",
    margin: "0 auto",
  },

  block: {
    backgroundColor: "#FFA600",
    borderRadius: "15px 15px",
    margin: "0 0 0 0",
    width: "75px",
    height: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    //how to change the circles to sticky too
    top: "0px",
  },
  images: {
    height: "100px",
    width: "100px",
    marginBottom: "20px",
  }
};

export default Skills;
