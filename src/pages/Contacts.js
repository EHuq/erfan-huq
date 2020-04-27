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

  // handleChange = (event) => {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   this.setState({
  //     disable: true,
  //   });

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

            {/* <p>
              <label>
                Name <input type="text" name="name" />
              </label>
            </p> */}

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" />
            </Form.Group>

            {/* <p>
              <label>
                Email <input type="email" name="email" />
              </label>
            </p> */}

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                // value={this.state.message}
                // onChange={this.handleChange}
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

            {/* <p>
              <label>
                Message <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p> */}
          </form>
        </Content>
      </div>
    );
  }
}

export default Contacts;
