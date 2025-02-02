import React from 'react';

import MediaQuery from 'react-responsive';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ReactIcon from '../assets/images/ReactIcon.png';
import VueIcon from '../assets/images/VueIcon.png';
import HTML5Icon from '../assets/images/HTML5Icon.png';
import GraphqlIcon from '../assets/images/GraphqlIcon.png';
import JSIcon from '../assets/images/JSIcon.png';
import PythonIcon from '../assets/images/PythonIcon.png';
import MongoIcon from '../assets/images/MongoIcon.png';
import DockerIcon from '../assets/images/DockerIcon.png';
import JavaIcon from '../assets/images/JavaIcon.png';
import CPPIcon from '../assets/images/CPPIcon.png';
import firebaseLogo from '../assets/images/firebaseLogo.png';
import arrowLeft from '../assets/images/leftArrow.png';
import arrowRight from '../assets/images/rightArrow.png';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id='skills'
        className='skills-container'
      >
        <div style={styles.container}>
          <div style={{ ...styles.block }}></div>
          <MediaQuery minDeviceWidth={1945}>
            <div
              style={{
                ...styles.title,
                fontSize: '3rem',
                width: '150px',
              }}
            >
              Skills
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1944}>
            <div
              style={{
                ...styles.title,
                width: '150px',
              }}
            >
              Skills
            </div>
          </MediaQuery>
        </div>
        <div style={{ ...styles.container, margin: 'auto'}}>
          <>
            <section style={{fontSize: '1.25rem', color:'#691917', marginBottom: '30px'}}>Proficient Tools</section>
            <Carousel
              arrows
              infinite
              slidesPerPage={4}
              slidesPerScroll={1}
              breakpoints={{
                500: {
                  slidesPerPage: 1,
                  arrows: false,
                },
                900: {
                  slidesPerPage: 2,
                  arrows: false,
                },
              }}
              arrowLeft={<img className='carouselArrows' src={arrowLeft} />}
              arrowRight={<img className='carouselArrows' src={arrowRight} />}
              addArrowClickHandler
              className='carousel'
            >
              <img style={{ ...styles.images }} src={GraphqlIcon} />
              <img style={{ ...styles.images }} src={ReactIcon} />
              <img style={{ ...styles.images }} src={VueIcon} />
              <img style={{ ...styles.images }} src={DockerIcon} />
              <img style={{ ...styles.images }} src={MongoIcon} />
              <img style={{ ...styles.images }} src={firebaseLogo} />
              <img style={{ ...styles.images }} src={HTML5Icon} />
            </Carousel>
          </>
          <div style={{marginTop: '60px'}}>
            <section style={{fontSize: '1.25rem', color:'#691917', marginBottom: '30px'}}>Profiecient Languages</section>
            <Carousel
              arrows
              infinite
              slidesPerPage={4}
              slidesPerScroll={1}
              breakpoints={{
                500: {
                  slidesPerPage: 1,
                  arrows: false,
                },
                900: {
                  slidesPerPage: 2,
                  arrows: false,
                },
              }}
              arrowLeft={<img className='carouselArrows' src={arrowLeft} />}
              arrowRight={<img className='carouselArrows' src={arrowRight} />}
              addArrowClickHandler
              className='carousel'
            >
              <img style={{ ...styles.images }} src={PythonIcon} />
              <img style={{ ...styles.images }} src={CPPIcon} />
              <img style={{ ...styles.images }} src={JSIcon} />
              <img style={{ ...styles.images }} src={JavaIcon} />
            </Carousel>
          </div>
        </div>
        
        <div
          style={{
            paddingBottom: '50px',
          }}
        ></div>
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
    paddingTop: '30px',
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
  images: {
    height: '100px',
    marginBottom: '20px',
  },
};

export default Skills;
