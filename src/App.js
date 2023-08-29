import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as LinkScroll } from 'react-scroll';

import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Erfan Huq',

      home: {
        title: 'Erfan Huq',
        subTitle: 'UW, 4A Mechatronics',
        text: 'Checkout my projects below',
      },
      contacts: {
        title: "Let's Talk",
      },
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    this.setState({
      scrolled: scrolled,
    });
  };

  render() {
    const progressContainer = {
      background: 'transparent',
      height: '3px',
      border: 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 99,
    };

    const progressBar = {
      opacity: 1,
      border: 'none',
      height: '3px',
      background: '#ffa600',
      width: this.state.scrolled,
    };

    return (
      <Router>
        <div style={progressContainer}>
          <div style={progressBar}> </div>
        </div>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom navbar' fixed='top' expand='lg'>
            <Navbar.Brand>
              <a href='/' className='home-alt'>
                <b>Erfan Huq</b>
              </a>
            </Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />

            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <LinkScroll
                  className='nav-link'
                  to='home'
                  activeClass='active border-bottom'
                  spy={true}
                  smooth={true}
                  offset={-57}
                  duration={400}
                >
                  Home
                </LinkScroll>
                <LinkScroll
                  className='nav-link'
                  to='about'
                  activeClass='active border-bottom'
                  spy={true}
                  smooth={true}
                  offset={-57}
                  duration={400}
                >
                  About
                </LinkScroll>
                <LinkScroll
                  className='nav-link'
                  to='skills'
                  activeClass='active border-bottom'
                  spy={true}
                  smooth={true}
                  offset={-57}
                  duration={400}
                >
                  Skills
                </LinkScroll>
                <LinkScroll
                  className='nav-link'
                  to='Work'
                  activeClass='active border-bottom'
                  spy={true}
                  smooth={true}
                  offset={-57}
                  duration={400}
                >
                  Work
                </LinkScroll>
                <LinkScroll
                  className='nav-link'
                  to='projects'
                  activeClass='active border-bottom'
                  spy={true}
                  smooth={true}
                  offset={-57}
                  duration={400}
                >
                  Projects
                </LinkScroll>
                <LinkScroll
                  className='nav-link'
                  to='contacts'
                  activeClass='active border-bottom'
                  spy={true}
                  smooth={true}
                  offset={-57}
                  duration={400}
                >
                  Contacts
                </LinkScroll>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path='/'
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />

          <Route
            path='/contacts'
            exact
            render={() => <Contacts title={this.state.contacts.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
