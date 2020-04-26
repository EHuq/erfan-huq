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

        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>Contact</title>
            <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
          </head>
          <body>
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>

            <div id="root"></div>
            <script type="text/babel">
              ReactDOM.render(
              <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label>
                    Your Name: <input type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    Your Email: <input type="email" name="email" />
                  </label>
                </p>
                <p>
                  <label>
                    Message: <textarea name="message"></textarea>
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
              , document.getElementById("root") );
            </script>
          </body>
        </html>
      </div>
    );
  }
}

export default Contacts;
