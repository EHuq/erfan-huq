import React from 'react';

import MediaQuery from 'react-responsive';

// import visible from '../assets/images/visible.png';
// import notvisible from '../assets/images/not-visible.png';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 9,
          title: 'Clay',
          // imgSrc: sortingVisualizer,
          link: 'https://github.com/EHuq/Clay',
          github: 'https://github.com/EHuq/Clay',
          visible: true,
          demo: false,
          selected: false,
          resume: [
            <li className='pointsProjects'>
              Built and designed an open-source 3D graphics engine with movement
              capabilities from scratch using <b>C++</b> implementing
              <b>Object-Oriented Programming</b> principles and linear algebra
              to simulate movement within a 3D space
            </li>,
            <li className='pointsProjects'>
              Created <b>client-facing API</b> to handle user-inputted objects
              in order to project them to 2D rasterizations
            </li>,
            <li className='pointsProjects'>
              Used <b>Git</b> for version control with adherence to best source
              control principles in a concentrated group of developers
            </li>,
          ],
          skills: [
            <div className='skillPoints-projects'>C++</div>,
            <div className='skillPoints-projects'>OOP</div>,
          ],
        },
        {
          id: 8,
          title: 'frauddit - A reddit Clone',
          // imgSrc: sortingVisualizer,
          link: 'https://frauddit.netlify.app/',
          github: 'https://github.com/EHuq/reddit-clone',
          visible: true,
          demo: true,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Developed a working clone of reddit with <b>Vue</b> and{' '}
              <b>Firebase</b> in <b>VS Code</b> in coordination with{' '}
              <b>Firebase Cloud Functions</b>
            </li>,
            <li className='pointsProjects'>
              Utilized <b>Firebase</b> to authorize users, and create required{' '}
              schemas
            </li>,
            <li className='pointsProjects'>
              Used <b>Git</b> to version control and practiced proper source
              control principles
            </li>,
          ],
          skills: [
            <div className='skillPoints-projects'>Vue</div>,
            <div className='skillPoints-projects'>Firebase</div>,
          ],
        },
        {
          id: 7,
          title: 'Chattarama',
          // imgSrc: sortingVisualizer,
          link: 'https://chattarama.herokuapp.com/',
          github: 'https://github.com/EHuq/talkwithme',
          visible: true,
          demo: true,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Developed a responsive messaging application with{' '}
              <b>CSS, HTML,</b> and <b>Vanilla JavaScript</b> in <b>VS Code</b>{' '}
              in coordination with <b>Express</b>, <b>Socket.io</b>, and{' '}
              <b>NodeJs</b>
            </li>,
            <li className='pointsProjects'>
              Used <b>Git</b> to version control and practiced proper source
              control principles
            </li>,
            <li className='pointsProjects'>Updates in real-time for multiple users</li>,
          ],
          skills: [
            <div className='skillPoints-projects'>HTML5</div>,
            <div className='skillPoints-projects'>CSS3</div>,
            <div className='skillPoints-projects'>JavaScript</div>,
            <div className='skillPoints-projects'>Express</div>,
          ],
        },
        {
          id: 6,
          title: 'No Losses - An Expense Tracker',
          // imgSrc: sortingVisualizer,
          link: 'https://nolosses.netlify.com/',
          github: 'https://github.com/EHuq/nolosses',
          visible: true,
          demo: true,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Developed a responsive app with <b>Vue, Firebase, Vuex</b> and{' '}
              <b>NodeJs</b>
            </li>,
            <li className='pointsProjects'>
              Integrated backend built with <b>NodeJs</b> and <b>Firebase </b>
              with frontend built using <b>Vue</b>, while managing state using{' '}
              <b>Vuex</b>
            </li>,
          ],
          skills: [
            <div className='skillPoints-projects'>Vue</div>,
            <div className='skillPoints-projects'>Vuex</div>,
            <div className='skillPoints-projects'>Firebase</div>,
            <div className='skillPoints-projects'>NodeJs</div>,
          ],
        },
        {
          id: 5,
          title: 'Weather App React Clone',
          // imgSrc: sortingVisualizer,
          link: 'https://weatherinreact.netlify.app/',
          github: 'https://github.com/EHuq/weather-app-react',
          visible: true,
          demo: true,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Developed a responsive site using <b>React</b> in <b>VS Code</b>{' '}
              to fetch weather data from across the world in real-time using the
              Open Weather API
            </li>,
            <li className='pointsProjects'>
              Cloned previous project from <b>Vue</b> to <b>React</b>
            </li>,
          ],
          skills: [<div className='skillPoints-projects'>React</div>],
        },
        {
          id: 5,
          title: 'Weather App',
          // imgSrc: sortingVisualizer,
          link: 'https://weatherinvue.netlify.app/',
          github: 'https://github.com/EHuq/weather-app-vue',
          visible: true,
          demo: true,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Developed a responsive site using <b>Vue</b> in <b>VS Code</b> to
              fetch weather data from across the world in real-time using the
              Open Weather API
            </li>,
            <li className='pointsProjects'>
              Created a mobile-first design using <b>Canva</b> and ensured
              accuracy of data by thorough testing
            </li>,
          ],
          skills: [<div className='skillPoints-projects'>Vue</div>],
        },

        {
          id: 4,
          title: 'COVID-19 Tracker',
          // imgSrc: sortingVisualizer,
          link: 'https://erfans-covid-tracker.netlify.app',
          github: 'https://github.com/EHuq/corona_tracker',
          visible: true,
          demo: true,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Built site using <b>React</b> to track the statistics related to
              the Coronavirus epidemic
            </li>,
            <li className='pointsProjects'>
              Utilized an API to fetch coronavirus data, and Material-UI to
              create visualizations of said data
            </li>,
          ],
          skills: [<div className='skillPoints-projects'>React</div>],
        },
        {
          id: 3,
          title: 'Sorting Algorithms Visualizer',
          // imgSrc: sortingVisualizer,
          link: 'https://github.com/EHuq/SortingAlgorithmVisualizer',
          github: 'https://github.com/EHuq/SortingAlgorithmVisualizer',
          visible: true,
          demo: false,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Developed visualizations using <b>Python</b> with <b>PyGame </b>
              for a variety of sorting algorithms
            </li>,
          ],
          skills: [<div className='skillPoints-projects'>Python</div>],
        },
        {
          id: 2,
          title: 'Maze Solver',
          // imgSrc: mazeSolver,
          link: 'https://github.com/EHuq/MazeSolver',
          github: 'https://github.com/EHuq/MazeSolver',
          visible: true,
          demo: false,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Utilized <b>Python</b> in <b>PyCharm</b>, implementing a
              breadth-first algorithm to solve a given maze
            </li>,
          ],
          skills: [<div className='skillPoints-projects'>Python</div>],
        },
        {
          id: 1,
          title: 'Snake Game',
          // imgSrc: snakeGame,
          link: 'https://github.com/EHuq/Snake-Game',
          github: 'https://github.com/EHuq/Snake-Game',
          visible: true,
          demo: false,

          selected: false,
          resume: [
            <li className='pointsProjects'>
              Created a single player snake game in <b>Java</b> using
              <b> Object Oriented Programming</b> principles
            </li>,
            <li className='pointsProjects'>
              Built user interface using <b>Java Swing</b> in
              <b> Netbeans</b> development environment
            </li>,
          ],
          skills: [
            <div className='skillPoints-projects'>Java</div>,
            <div className='skillPoints-projects'>Java Swing</div>,
          ],
        },
        {
          id: 0,
          title: 'Drink Mixer',
          //imgSrc: visualizer,
          link: 'https://github.com/EHuq/Gene-Project',
          github: 'https://github.com/EHuq/Gene-Project',
          visible: true,
          demo: false,
          selected: false,
          resume: [
            <li className='pointsProjects'>
              Designed an event driven embedded system to mix multiple drinks{' '}
            </li>,
            <li className='pointsProjects'>
              Implemented code to update drink levels in each container stored
              in a file
            </li>,
            <li className='pointsProjects'>
              Tested program using <b>unit testing</b> and{' '}
              <b>integration testing</b>
            </li>,
            <li className='pointsProjects'>
              Documented methods and designed system flow diagrams using{' '}
              <b>UML</b>
            </li>,
          ],
          skills: [<div className='skillPoints-projects'>RobotC</div>],
        },
      ],
    };
  }

  render() {
    return (
      <div
        id='projects'
        style={{
          fontFamily: 'Poppins-Medium',
          textAlign: 'center',
          backgroundColor: 'white',
          paddingBottom: '1px',
          paddingTop: '1px',
        }}
      >
        <div style={styles.container}>
          <div style={{ ...styles.block, marginTop: '30px' }}></div>
          <MediaQuery minDeviceWidth={1945}>
            <div
              style={{
                ...styles.title,
                fontSize: '3rem',
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
                  <div className='title-container'>
                    <a
                      className='card-title-projects'
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        fontSize: '2rem',
                      }}
                    >
                      {item.title}
                    </a>
                    <div className='iconContainer'>
                      {item.visible ? (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={item.github}
                          className='fa fa-github fa-2x visible'
                        ></a>
                      ) : (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/EHuq'
                          className='fa fa-github-slash fa-lg visible disabled'
                        ></a>
                      )}
                      {item.demo ? (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={item.link}
                          className='fa fa-desktop fa-2x visible'
                        ></a>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  {item.resume.map((point) => (
                    <section>
                      <div
                        style={{
                          ...styles.description,
                          margin: '0 -100px 0 0',
                          padding: '0 10px',
                        }}
                      >
                        {' '}
                        {point}
                        <br />
                      </div>
                    </section>
                  ))}
                  <div
                    style={{
                      // ...styles.description,
                      display: 'flex',
                      color: 'red',
                      margin: '0 -100px 0 0',
                      padding: '0 10px',
                    }}
                  >
                    {item.skills.map((skill) => (
                      <div>{skill}</div>
                    ))}
                  </div>
                </div>
              </MediaQuery>

              <MediaQuery maxDeviceWidth={700}>
                <div
                  style={{
                    margin: '0 0 0 0',
                    textAlign: 'left',
                    paddingBottom: '2rem',
                    paddingTop: '2rem',
                  }}
                >
                  <div className='title-container'>
                    <a
                      className='card-title-projects'
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        fontSize: '2rem',
                      }}
                    >
                      {item.title}
                    </a>
                    <div className='iconContainer'>
                      {item.visible ? (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={item.github}
                          className='fa fa-github fa-2x visible'
                        ></a>
                      ) : (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/EHuq'
                          className='fa fa-github-slash fa-lg visible disabled'
                        ></a>
                      )}
                      {item.demo ? (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={item.link}
                          className='fa fa-desktop fa-2x visible'
                        ></a>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  {item.resume.map((point) => (
                    <section>
                      <div
                        style={{
                          ...styles.description,
                          margin: '0 -30px 0 0',
                          padding: '0 15px',
                        }}
                      >
                        {' '}
                        {point}
                        <br />
                      </div>
                    </section>
                  ))}
                  <div
                    style={{
                      // ...styles.description,
                      display: 'flex',
                      color: 'red',
                      margin: '0 -100px 0 0',
                      padding: '0 10px',
                    }}
                  >
                    {item.skills.map((skill) => (
                      <div>{skill}</div>
                    ))}
                  </div>
                </div>
              </MediaQuery>

              <MediaQuery minDeviceWidth={1945}>
                <div
                  style={{
                    ...styles.box,
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    flexDirection: 'inline-block',
                  }}
                ></div>
                <div
                  style={{
                    ...styles.description,
                    marginTop: '-10px',
                  }}
                >
                  <div className='title-container'>
                    <a
                      className='card-title-projects'
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        fontSize: '2rem',
                      }}
                    >
                      {item.title}
                    </a>
                    <div className='iconContainer'>
                      {item.visible ? (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={item.github}
                          className='fa fa-github fa-2x visible'
                        ></a>
                      ) : (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://github.com/EHuq'
                          className='fa fa-github-slash fa-lg visible disabled'
                        ></a>
                      )}
                      {item.demo ? (
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={item.link}
                          className='fa fa-desktop fa-2x visible'
                        ></a>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>

                  {item.resume.map((point) => (
                    <section>
                      <div
                        style={{
                          ...styles.description,
                          margin: '0 -10px 0 0',
                          padding: '0 10px',
                          fontSize: '1.5remgi',
                        }}
                      >
                        {' '}
                        {point}
                        <br />
                      </div>
                    </section>
                  ))}
                  <div
                    style={{
                      // ...styles.description,
                      display: 'flex',
                      color: 'red',
                      margin: '0 -100px 0 0',
                      padding: '0 10px',
                    }}
                  >
                    {item.skills.map((skill) => (
                      <div>{skill}</div>
                    ))}
                  </div>
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
    margin: '30px 0 0 0',
    paddingTop: '10px',
    fontSize: '2rem',
    color: 'black',
    textAlign: 'left',
    fontWeight: '550',
  },

  container: {
    justifyContent: 'center',
    width: '75%',
    margin: '0 auto',
  },

  box: {
    borderRadius: '100%',
    margin: '0 0 0 1%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '45px',
    backgroundColor: '#28023D',
  },
  description: {
    margin: '0 0 5% 10%',
    textAlign: 'left',
    padding: '1rem',
    color: 'black',
  },
  block: {
    backgroundColor: '#28023D',
    borderRadius: '15px 15px',
    margin: '0 0 0 0',
    width: '75px',
    height: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', //change to sticky once I figurre out
    //how to change the circles to sticky too
    top: '30px',
  },
};

export default Projects;
