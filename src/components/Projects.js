import React from "react";

import MediaQuery from "react-responsive";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Sorting Algorithms Visualizer",
          // imgSrc: sortingVisualizer,
          link: "https://github.com/EHuq/SortingAlgorithmVisualizer",
          selected: false,
          resume: [
            <li className="points">
              Developed visualizations using <b>Python</b> with <b>PyGame </b>
              for a variety of sorting algorithms
            </li>,
          ],
        },
        {
          id: 1,
          title: "Maze Solver",
          // imgSrc: mazeSolver,
          link: "https://github.com/EHuq/MazeSolver",
          selected: false,
          resume: [
            <li className="points">
              Utilized <b>Python</b> in <b>PyCharm</b>, implementing a
              breadth-first algorithm to solve a given maze
            </li>,
          ],
        },
        {
          id: 2,
          title: "Snake Game",
          // imgSrc: snakeGame,
          link: "https://github.com/EHuq/Snake-Game",
          selected: false,
          resume: [
            <li className="points">
              Created a single player snake game in <b>Java</b> using
              <b> Object Oriented Programming</b> principles
            </li>,
            <li className="points">
              Built user interface using <b>Java Swing</b> in
              <b> Netbeans</b> development environment
            </li>,
          ],
        },
        {
          id: 3,
          title: "Drink Mixer",
          //imgSrc: visualizer,
          link: "https://github.com/EHuq/Gene-Project",
          selected: false,
          resume: [
            <li className="points">
              Designed an event driven embedded system to mix multiple drinks{" "}
            </li>,
            <li className="points">
              Implemented code to update drink levels in each container stored
              in a file
            </li>,
            <li className="points">
              Tested program using <b>unit testing</b> and{" "}
              <b>integration testing</b>
            </li>,
            <li className="points">
              Documented methods and designed system flow diagrams using{" "}
              <b>UML</b>
            </li>,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <div style={styles.container}>
          <div style={{ ...styles.block, marginTop: "30px" }}></div>
          <MediaQuery minDeviceWidth={1945}>
            <div
              style={{
                ...styles.title,
                fontSize: "48px",
              }}
            >
              Projects
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1944}>
            <div
              style={{
                ...styles.title,
              }}
            >
              Projects
            </div>
          </MediaQuery>

          {this.state.items.map((item) => (
            <section>
              <MediaQuery minDeviceWidth={701} maxDeviceWidth={1944}>
                <div
                  style={{
                    ...styles.box,
                  }}
                ></div>
                <div style={styles.description}>
                  <a
                    className="e-card-title"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                  {item.resume.map((point) => (
                    <section>
                      <div
                        style={{
                          ...styles.description,
                          margin: "0 -100px 0 0",
                          padding: "0 10px",
                        }}
                      >
                        {" "}
                        {point}
                      </div>
                    </section>
                  ))}
                </div>
              </MediaQuery>

              <MediaQuery maxDeviceWidth={700}>
                <div
                  style={{
                    margin: "0 0 0 0",
                    textAlign: "left",
                    paddingBottom: "1rem",
                    paddingTop: "2rem",
                  }}
                >
                  <a
                    className="e-card-title"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                  {item.resume.map((point) => (
                    <section>
                      <div
                        style={{
                          ...styles.description,
                          margin: "0 -30px 0 0",
                          padding: "0 15px",
                        }}
                      >
                        {" "}
                        {point}
                      </div>
                    </section>
                  ))}
                </div>
              </MediaQuery>

              <MediaQuery minDeviceWidth={1945}>
                <div
                  style={{
                    ...styles.box,
                    width: "30px",
                    height: "30px",
                  }}
                ></div>
                <div
                  style={{
                    ...styles.description,
                    marginTop: "-10px",
                  }}
                >
                  <a
                    className="e-card-title"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "32px",
                    }}
                  >
                    {item.title}
                  </a>
                  {item.resume.map((point) => (
                    <section>
                      <div
                        style={{
                          ...styles.description,
                          margin: "0 -10px 0 0",
                          padding: "0 10px",
                          fontSize: "24px",
                        }}
                      >
                        {" "}
                        {point}
                      </div>
                    </section>
                  ))}
                </div>
              </MediaQuery>
            </section>
          ))}
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
    color: "#777777",
    textAlign: "left",
    fontWeight: "550",
  },

  container: {
    justifyContent: "center",
    width: "60%",
    margin: "0 auto",
  },

  box: {
    borderRadius: "100%",
    margin: "0 0 0 1%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "45px",
    backgroundColor: "#777777",
  },
  description: {
    margin: "0 0 5% 20%",
    textAlign: "left",
    padding: "1rem",
    color: "#777777",
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

export default Projects;
