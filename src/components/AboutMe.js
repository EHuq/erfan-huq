import React from 'react';

import MediaQuery from 'react-responsive';

const AboutMeDescription = ({CoopDate}) => {
  return ( 
    <>
      <p>
        Hey, I'm Erfan Huq! I have a passion for{' '}
        <b>software development</b>, both
        <b> front-end</b> and <b>back-end</b>. I have tons of experience{' '}
        with both, check it out down below. One of my life goals,
        however, is to work on professional projects involving
        <b> artificial intelligence</b> and{' '}
        <b>blockchain</b>. I am also a personable team
        player with a strong aptitude for technology, a hunger for
        solving problems, and always seeking new challenges.
      </p>
      <p>I enjoy combining mathematical, historic, and geographic
        {' '}context to analyze and predict behaviours
        {' '}of large scale systems. I am also a big proponent of helping
        {' '}low income areas, so if that interests you let's talk!  
      </p>
      <p>
        I am currently seeking employment beginning{' '}
        <b>{CoopDate}</b>. Feel free to reach out if you are looking to
        collaborate or know of any cool opportunities!
      </p>
    </>
  )
}
class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const CoopDate = 'May 2024';
    return (
      <div
        id='about'
        style={{
          fontFamily: 'Poppins-Medium',
          textAlign: 'center',
          backgroundColor: '#ffb4b2',
          paddingBottom: '1px',
          paddingTop: '20px',
        }}
      >
        <div style={styles.container}>
          <div
            style={{
              ...styles.box,
              height: '30px',
            }}
          ></div>
          <div style={{ ...styles.block }}></div>
          <MediaQuery minDeviceWidth={1945}>
            <div
              style={{
                ...styles.title,
                fontSize: '3rem',
                width: '150px',
              }}
            >
              About
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1944}>
            <div
              style={{
                ...styles.title,
                width: '150px',
              }}
            >
              About
            </div>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={425}>
            <div style={{
                ...styles.description,
                margin: '25px 0 50px 0',
              }}>
              <AboutMeDescription CoopDate={CoopDate} />
            </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={426}>
            <div style={styles.description}>
              <section>
              
                <div
                  style={{
                    ...styles.description,
                    margin: '-50px 0 50px 0',
                    padding: '0 10px',
                  }}
                >
                  <AboutMeDescription CoopDate={CoopDate} />
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
    margin: '0 0 0 0',
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
  },

  description: {
    margin: '0 -100px 0 20%',
    textAlign: 'left',
    color: '#691917',
    fontSize: '1.25rem',
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
    top: '0px',
  },
};

export default AboutMe;
