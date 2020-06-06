import React from "react";

import MediaQuery from "react-responsive";


// import visible from '../assets/images/visible.png';
// import notvisible from '../assets/images/not-visible.png';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 7,
          title: "Chattarama",
          // imgSrc: sortingVisualizer,
          link: "https://chattarama.herokuapp.com/",
          github: "https://github.com/EHuq/talkwithme",
          visible: true,

          selected: false,
          resume: [
            <li className="points">
              Developed a responsive messaging application with <b>CSS, HTML,</b> and <b>Vanilla JavaScript</b> in <b>VS Code</b> in coordination with <b>Express</b>, <b>Socket.io</b>, and <b>NodeJs</b>
            </li>,
            <li className="points">
              Used <b>Git</b> to version control and practiced proper source control principles
            </li>,
            <li className="points">
              Updates in real-time for multiple users
            </li>,

          ],
        },
        {
          id: 6,
          title: "No Losses - An Expense Tracker",
          // imgSrc: sortingVisualizer,
          link: "https://nolosses.herokuapp.com/",
          github: "https://github.com/EHuq/expense-tracker",
          visible: true,
          selected: false,
          resume: [
            <li className="points">
              Developed a responsive <b>MERN</b> app with <b>MongoDB, Express, React,</b> and <b>NodeJs</b>
            </li>,
            <li className="points">
              Integrated backend built with <b>NodeJs</b> and <b>Express </b>
              with frontend built using <b>React</b>
            </li>,
            <li className="points">
              Utilized <b>Canva</b> to design a mobile-first design
            </li>,

          ],
        },
        {
          id: 5,
          title: "Weather App React Clone",
          // imgSrc: sortingVisualizer,
          link: "https://weatherinreact.netlify.app/",
          github: "https://github.com/EHuq/weather-app-react",
          visible: true,
          selected: false,
          resume: [
            <li className="points">
              Developed a responsive site using <b>React</b> in <b>VS Code</b> to fetch weather data from across the world in real-time using the Open Weather API
            </li>,
            <li className="points">
              Cloned previous project from <b>Vue</b> to <b>React</b>
            </li>,

          ],
        },
        {
          id: 5,
          title: "Weather App",
          // imgSrc: sortingVisualizer,
          link: "https://weatherinvue.netlify.app/",
          github: "https://github.com/EHuq/weather-app-vue",
          visible: true,
          selected: false,
          resume: [
            <li className="points">
              Developed a responsive site using <b>Vue</b> in <b>VS Code</b> to fetch weather data from across the world in real-time using the Open Weather API
            </li>,
            <li className="points">
              Created a mobile-first design using <b>Canva</b> and ensured accuracy of data by thorough testing
            </li>,

          ],
        },

        {
          id: 4,
          title: "COVID-19 Tracker",
          // imgSrc: sortingVisualizer,
          link: "https://erfans-covid-tracker.netlify.app",
          github: "https://github.com/EHuq/corona_tracker",
          visible: true,
          selected: false,
          resume: [
            <li className="points">
              Built site using <b>React</b> to track the statistics related
                to the Coronavirus epidemic
            </li>,
            <li className="points">
              Utilized an API to fetch coronavirus data, and
              Material-UI to create visualizations of said data
            </li>,
          ],
        },
        {
          id: 3,
          title: "Sorting Algorithms Visualizer",
          // imgSrc: sortingVisualizer,
          link: "https://github.com/EHuq/SortingAlgorithmVisualizer",
          github: "https://github.com/EHuq/SortingAlgorithmVisualizer",
          visible: true,
          selected: false,
          resume: [
            <li className="points">
              Developed visualizations using <b>Python</b> with <b>PyGame </b>
              for a variety of sorting algorithms
            </li>,
          ],
        },
        {
          id: 2,
          title: "Maze Solver",
          // imgSrc: mazeSolver,
          link: "https://github.com/EHuq/MazeSolver",
          github: "https://github.com/EHuq/MazeSolver",
          visible: true,
          selected: false,
          resume: [
            <li className="points">
              Utilized <b>Python</b> in <b>PyCharm</b>, implementing a
              breadth-first algorithm to solve a given maze
            </li>,
          ],
        },
        {
          id: 1,
          title: "Snake Game",
          // imgSrc: snakeGame,
          link: "https://github.com/EHuq/Snake-Game",
          github: "https://github.com/EHuq/Snake-Game",
          visible: true,
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
          id: 0,
          title: "Drink Mixer",
          //imgSrc: visualizer,
          link: "https://github.com/EHuq/Gene-Project",
          github: "https://github.com/EHuq/Gene-Project",
          visible: true,
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
        id="projects"
        style={{
          fontFamily: "Poppins-Medium",
          textAlign: "center",
          backgroundColor: "#28023D",
          paddingBottom: "1px",
          paddingTop: "1px"
        }}
      >
        <div style={styles.container}>
          <div style={{ ...styles.block, marginTop: "30px" }}></div>
          <MediaQuery minDeviceWidth={1945}>
            <div
              style={{
                ...styles.title,
                fontSize: "3rem",
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
                  <div className="title-container">
                    <a
                      className="card-title"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {item.title}

                    </a>
                    {(item.visible ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.github}
                        className="fa fa-eye fa-lg visible"
                      ></a>
                    ) : (

                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/EHuq"
                          className="fa fa-eye-slash fa-lg visible disabled"
                        ></a>


                      ))}
                  </div>
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
                        <br />
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
                  <div className="title-container">
                    <a
                      className="card-title"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {item.title}

                    </a>
                    {(item.visible ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.github}
                        className="fa fa-eye fa-lg visible"
                      ></a>
                    ) : (

                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/EHuq"
                          className="fa fa-eye-slash fa-lg visible disabled"
                        ></a>


                      ))}
                  </div>
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
                        <br />
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
                    display: 'flex',
                    flexDirection: "inline-block"
                  }}
                ></div>
                <div
                  style={{
                    ...styles.description,
                    marginTop: "-10px",
                  }}
                >
                  <div className="title-container">
                    <a
                      className="card-title"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      {item.title}

                    </a>
                    {(item.visible ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.github}
                        className="fa fa-eye fa-lg visible"
                      ></a>
                    ) : (

                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/EHuq"
                          className="fa fa-eye-slash fa-lg visible disabled"
                        ></a>


                      ))}
                  </div>

                  {item.resume.map((point) => (
                    <section>
                      <div
                        style={{
                          ...styles.description,
                          margin: "0 -10px 0 0",
                          padding: "0 10px",
                          fontSize: "1.5remgi",
                        }}
                      >
                        {" "}
                        {point}
                        <br />
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
    margin: "30px 0 0 0",
    paddingTop: "10px",
    fontSize: "2rem",
    color: "#EEEEEE",
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
    backgroundColor: "#FFA600",
  },
  description: {
    margin: "0 0 5% 20%",
    textAlign: "left",
    padding: "1rem",
    color: "#EEEEEE",
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
    top: "30px"
  },
};

export default Projects;
