import React from "react";
import Content from "../components/Content";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  render() {
    return (
      <div className="contacts" id="contacts">
        <Jumbotron
          className="bg-transparent jumbotron-fluid"
          style={{ width: "100%", fontFamily: "Poppins-Medium" }}
        >
          <Container fluid={true}>
            <Row className="justify-content-center" style={{ width: "100%" }}>
              <Col style={{ textAlign: "center", width: "90%" }}>

                <h1 className="display-1 font-weight-bolder">Let's Talk</h1>

              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <input type="hidden" name="form-name" value="contact" />
        <Content className="contacts">
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />

            <Form.Group>
              <Form.Label htmlFor="full-name">Full name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
              />
            </Form.Group>

            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disable={this.state.disabled}
            >
              Send
            </Button>
          </form>
        </Content>
      </div>
    );
  }
}

export default Contacts;
