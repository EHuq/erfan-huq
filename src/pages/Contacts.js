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

  // handleChange = event => {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();

  //   this.setState({
  //     disable: true
  //   });

  //   Axios.post("http://localhost:3030/api/email", this.state)
  //     .then(res => {
  //       if (res.data.success) {
  //         this.setState({
  //           disabled: false,
  //           emailSent: true
  //         });
  //       } else {
  //         this.setState({
  //           disabled: false,
  //           emailSent: false
  //         });
  //       }
  //     })

  //     .catch(err => {
  //       this.setState({
  //         disabled: false,
  //         emailSent: false
  //       });
  //     });
  // };

  render() {
    return (
      <div className="contacts">
        <Summary title={this.props.title} />

        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Name <input id="full-name" type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email <input id="email" type="email" name="email" />
            </label>
          </p>

          <p>
            <label>
              Message{" "}
              <input id="message" name="message" as="textarea" rows="3" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Contacts;
