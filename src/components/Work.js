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
          id: 2,
          title: 'University of Waterloo, Lead Full Stack Developer',
          duration: 'January 2021 - Present',
          resume: [
            <li className='points'>
              Designed and Implemented multiple
               web pages using <b>Vue</b> and <b>PHP</b>
            </li>,
            <li className='points'>
              Used <b>ReactJS</b> in partnership with <b>Tailwind CSS</b>
               to build a website
            </li>,
            <li className='points'>
              Developed a <b>PHP API</b> to pull data from a <b>MySQL</b> database 
              and build visualizations using <b>LeafletJS </b>and <b>MapBox</b>
            </li>,
          ],
          skills: [
            <div className='skillPoints'>Vue</div>,
            <div className='skillPoints'>React</div>,
            <div className='skillPoints'>TailwindCSS</div>,
            <div className='skillPoints'>PHP</div>,
          ],
        },
        {
          id: 1,
          title: 'BGPC, Full Stack Developer',
          duration: 'July 2020 - September 2020',
          resume: [
            <li className='points'>
              Implemented web pages using <b>Vue </b> 
              with <b>Tailwind CSS</b> from
               concept through to deployment
            </li>,
            <li className='points'>
              Collaborated with team members to implement new 
              features and functionalities for internal
              development using <b>Ajax, Typescript, and JSON</b> 
            </li>,
            <li className='points'>
              Designed backend infrastructure for full stack 
              integration with frontend components
            </li>,
            <li className='points'>
              Worked with a distributed team and utilized appropriate 
              version control protocols with <b>Git</b> 
            </li>,
          ],
          skills: [
            <div className='skillPoints'>Vue</div>,
            <div className='skillPoints'>OOP</div>,
            <div className='skillPoints'>TailwindCSS</div>,
            <div className='skillPoints'>Typescript</div>,
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
          backgroundColor: '#28023D',
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
                  <div className='title-container'>
                    <a
                      className='card-title'
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
                      className='card-title'
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
                      className='card-title'
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
    color: '#EEEEEE',
    textAlign: 'left',
    fontWeight: '550',
  },

  container: {
    justifyContent: 'center',
    width: '60%',
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
    backgroundColor: '#FFA600',
  },
  description: {
    margin: '0 0 5% 20%',
    textAlign: 'left',
    padding: '1rem',
    color: '#EEEEEE',
  },
  block: {
    backgroundColor: '#FFA600',
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
