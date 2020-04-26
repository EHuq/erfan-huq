import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Page, Text, View, Document, StyleSheet, Image } from "react-pdf";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Erfan Huq",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About Me", path: "/aboutMe" },
        { title: "Contacts", path: "/contacts" },
      ],
      home: {
        title: "Erfan Huq",
        subTitle: "UWaterloo, Mechatronics",
        text: "Checkout my projects below",
      },
      contacts: {
        title: "Let's Talk",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <a href="/" className="home-alt">
                <b>Erfan Huq</b>
              </a>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/contacts">
                  Contacts
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
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
            path="/contacts"
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
