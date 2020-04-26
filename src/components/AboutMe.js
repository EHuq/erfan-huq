import React from "react";

import MediaQuery from "react-responsive";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          backgroundColor: "#28023D",
          paddingBottom: "1px",
        }}
      >
        <div style={styles.container}>
          <div
            style={{
              ...styles.box,
              height: "30px",
            }}
          ></div>
          <div style={{ ...styles.block }}></div>
          <MediaQuery minDeviceWidth={1945}>
            <div
              style={{
                ...styles.title,
                fontSize: "48px",
                width: "150px",
              }}
            >
              About
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1944}>
            <div
              style={{
                ...styles.title,
                width: "150px",
              }}
            >
              About
            </div>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={425}>
            <div
              style={{
                ...styles.description,
                margin: "25px 0 50px 0",
              }}
            >
              <p>
                Hey, I'm Erfan Huq, in case you couldn’t tell by the massive
                bold name staring at you above. I have a passion for{" "}
                <b>software development</b>, both
                <b> front-end</b> and <b>back-end</b>. One of my life goals,
                however, is to work on projects involving
                <b> Artificial Intelligence</b> and <b>autonomous vehicles</b>.
                I am also a team player with a strong aptitude for technology, a
                hunger for solving problems, and always seeking new challenges.
                I am currently seeking new co-op roles starting{" "}
                <b>April 2021</b>. Please feel free to reach out if you are
                looking to collaborate or know of any opportunities aligning
                with my interests!
              </p>
            </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={426}>
            <div style={styles.description}>
              <section>
                <div
                  style={{
                    ...styles.description,
                    margin: "-50px 0 50px 0",
                    padding: "0 10px",
                  }}
                >
                  <p>
                    Hey, I'm Erfan Huq, in case you couldn’t tell by the massive
                    bold name staring at you above. I have a passion for{" "}
                    <b>software development</b>, both
                    <b> front-end</b> and <b>back-end</b>. One of my life goals,
                    however, is to work on projects involving
                    <b> Artificial Intelligence</b> and{" "}
                    <b>autonomous vehicles</b>. I am also a team player with a
                    strong aptitude for technology, a hunger for solving
                    problems, and always seeking new challenges. I am currently
                    seeking new co-op roles starting <b>April 2021</b>. Please
                    feel free to reach out if you are looking to collaborate or
                    know of any opportunities aligning with my interests!
                  </p>
                </div>
              </section>
            </div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: "0 0 0 0",
    paddingTop: "10px",
    fontSize: "32px",
    color: "#EEEEEE",
    textAlign: "left",
    fontWeight: "550",
  },

  container: {
    justifyContent: "center",
    width: "60%",
    margin: "0 auto",
  },

  description: {
    margin: "0 -100px 0 20%",
    textAlign: "left",
    color: "#EEEEEE",
    fontSize: "24px",
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
    position: "relative", //change to sticky once I figurre out
    //how to change the circles to sticky too
    top: "0px",
  },
};

export default AboutMe;
