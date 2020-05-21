import React from "react";
import Summary from "../components/Summary";
import Content from "../components/Content";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

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
      <div className="contacts">
        <Summary title={this.props.title} />
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
