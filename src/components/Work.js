import React from 'react';

import MediaQuery from 'react-responsive';

// import visible from '../assets/images/visible.png';
// import notvisible from '../assets/images/not-visible.png';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 5,
          title: 'Software Developer @ Aurora Solar',
          duration: 'Jan 2023 - August 2023',
          resume: [
            <li className='points'>
               Contributed to the whole migration of the Aurora CAD 3D Design Software spanning 2 quarters in the <b>React, Typescript</b>, and <b>Ruby on Rails</b> tech stack  
            </li>,
            <li className='points'>
                	Led test coverage migration, transitioning <b>50+</b> tests in <b>two sprints</b>, fortifying software quality and robustness
            </li>,
            <li className='points'>
              Directed end-to-end development of feature, orchestrating multi-developer collaboration and expanding <b>MobX</b> state management capabilities
            </li>,
            <li className='points'>
              Collaborated with product managers, and designers to launch user-centric features, consistently receiving <b>positive customer engagement</b> over two quarters
            </li>,
            <li className='points'>
              Developed an interactive system within the CAD application using <b>GraphQL</b>, enhancing user control over AI Roof tasks
            </li>,
          ],
          skills: [
            <div className='skillPoints'>React</div>,
            <div className='skillPoints'>TypeScript</div>,
            <div className='skillPoints'>NodeJS</div>,
            <div className='skillPoints'>GraphQL</div>,
          ],
        },
        {
          id: 4,
          title: 'Software Developer @ Miovision',
          duration: 'May 2022 - August 2022',
          resume: [
            <li className='points'>
              Developed a next-generation portable video recorder and vehicle detection system with <b>TypeScript</b>
            </li>,
            <li className='points'>
              Independently implemented a front-facing queue-based recorder scheduler in <b>Angular</b>, with backend <b>REST API</b> calls with <b>NodeJs</b>
            </li>,
            <li className='points'>
              Used <b>UNIX Shell Scripting</b> to automate the collection of all internal debug logs, speeding up QA testing and debugging
            </li>,
            <li className='points'>
              Utilized <b>GStreamer</b> with <b>nvoverlaysink</b> to stream lossless video directly from camera to device
            </li>,
          ],
          skills: [
            <div className='skillPoints'>Angular</div>,
            <div className='skillPoints'>NodeJs</div>,
            <div className='skillPoints'>TypeScript</div>,
            <div className='skillPoints'>Jest</div>,
            <div className='skillPoints'>GStreamer</div>,
            <div className='skillPoints'>UNIX</div>,
          ],
        },
        {
          id: 3,
          title: 'Software Developer @ Ford',
          duration: 'September 2021 - January 2022',
          resume: [
            <li className='points'>
              Developed various UI components in <b>React</b> and internal features in <b>JavaScript</b> to increase efficiency
            </li>,
            <li className='points'>
              Developed <b>React</b> Profiler to pinpoint and resolve unwanted re-renders, driving a <b>15%</b> increase in UI responsiveness and enhancing the user experience
            </li>,
            <li className='points'>
              Configured <b>MQTT</b> broker to send commands and receive events from infotainment device
            </li>,
            <li className='points'>
              Boosted test coverage by <b>20%</b> through extensive Jest testing for feature team
            </li>,
            <li className='points'>
              Consistenly met deadlines while working with a distributed team under <b>AGILE</b> principles and
              {' '}utilized appropriate version control protocols with <b>Git</b>
            </li>,
          ],
          skills: [
            <div className='skillPoints'>React</div>,
            <div className='skillPoints'>NodeJS</div>,
            <div className='skillPoints'>Javascript</div>,
            <div className='skillPoints'>Jest</div>,
            <div className='skillPoints'>MQTT</div>,
            <div className='skillPoints'>OOP</div>,
          ],
        },
        {
          id: 2,
          title: 'Full Stack Developer @ University of Waterloo',
          duration: 'January 2021 - August 2021',
          resume: [
            <li className='points'>
              Spearheaded the end-to-end development of two web applications using <b>Vue, NodeJS and MySQL</b> with a custom <b>PHP API</b> for real-time data integration
            </li>,
            <li className='points'>
              Built visualizations using <b>LeafletJS </b>and <b>MapBox</b> to show the streamflow in Idaho, Waterloo, and other cities
            </li>,
          ],
          skills: [
            <div className='skillPoints'>Vue</div>,
            <div className='skillPoints'>NodeJS</div>,
            <div className='skillPoints'>MySQL</div>,
            <div className='skillPoints'>PHP</div>,
          ],
        },
        {
          id: 1,
          title: 'Full Stack Developer @ BGPC (STEALTH)',
          duration: 'July 2020 - August 2020',
          resume: [
            <li className='points'>
              Built custom user authentification functions using the <b>AWS Lambda</b> functionality
            </li>,
            <li className='points'>
              Collaborated with team members to implement new
              features and functionalities for internal
              development using <b>Typescript</b>
            </li>,
            <li className='points'>
              Implemented web pages using <b>Vue </b>
              with <b>Tailwind CSS</b> from
              concept through to deployment
            </li>,
            <li className='points'>
              Worked with a distributed team and utilized appropriate
              version control protocols with <b>Git</b>
            </li>,
          ],
          skills: [
            <div className='skillPoints'>Vue</div>,
            <div className='skillPoints'>AWS</div>,
            <div className='skillPoints'>Typescript</div>,
            <div className='skillPoints'>TailwindCSS</div>,
            <div className='skillPoints'>OOP</div>,
          ],
        },

      ],
    };
  }

  render() {
    return (
      <div
        id='Work'
        style={{
          fontFamily: 'Poppins-Medium',
          textAlign: 'center',
          backgroundColor: '#ffb4b2',
          paddingBottom: '1px',
          paddingTop: '1px',
        }}
      >
        <div style={styles.container}>
          <div style={{ ...styles.block }}></div>
          <MediaQuery minDeviceWidth={1945}>
            <div
              style={{
                ...styles.title,
                fontSize: '3rem',
              }}
            >
              Work Experience
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1944}>
            <div
              style={{
                ...styles.title,
              }}
            >
              Work Experience
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
                  <div className='title-container-work'>
                    <div
                      className='card-title'
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        fontSize: '2rem',
                      }}
                    >
                      {item.title}
                    </div>
                    <div className='dates'>
                      {item.duration}
                    </div>
                  </div>
                  {item.resume.map((point) => (
                    <section>
                      <div
                        style={{
                          ...styles.description,
                          margin: '0 -100px 0 0',
                          padding: '0 10px',
                          color: 'blue'
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
                  <div className='title-container-work'>
                    <div
                      className='card-title'
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        fontSize: '2rem',
                      }}
                    >
                      {item.title}
                    </div>
                    <div className='dates'>
                      {item.duration}
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
                      display: 'flex',
                      color: 'red',
                      margin: '0 -100px 0 0',
                      padding: '0 10px',
                      ...styles.description,
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
                  <div className='title-container-work'>
                    <div
                      className='card-title'
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        fontSize: '2rem',
                      }}
                    >
                      {item.title}
                    </div>
                    <div className='dates'>
                      {item.duration}
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
    color: '#691917',
    textAlign: 'left',
    fontWeight: '550',
  },

  container: {
    justifyContent: 'center',
    width: '75%',
    margin: '0 auto',
    paddingTop: '30px'
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
    backgroundColor: '#bd5954',
  },
  description: {
    margin: '0 0 5% 10%',
    textAlign: 'left',
    padding: '1rem',
    color: '#691917',
  }, 
  block: {
    backgroundColor: '#bd5954',
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

export default Work;
