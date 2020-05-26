import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import resume from "../assets/Resume/Resume.pdf";

function Summary(props) {
  return (
    <Jumbotron
      className="bg-transparent jumbotron-fluid"
      id="home"
      style={{ width: "100%", fontFamily: "Poppins-Medium" }}
    >
      <Container fluid={true}>
        <Row className="justify-content-center" style={{ width: "100%" }}>
          <Col style={{ textAlign: "center", width: "90%", margin: "4rem", marginTop: "7rem" }}>
            {props.title && (
              <h1 className="display-1 font-weight-bolder" >{props.title}</h1>
            )}
            {props.subTitle && (
              <h3 className="display-4 font-weight-light">{props.subTitle}</h3>
            )}
            {props.text && (
              <h3 className="lead font-weight-light">{props.text}</h3>
            )}
            {props.links && (
              <div
                style={{
                  marginTop: "25px",
                }}
              >
                <Col>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/EHuq"
                    className="fa fa-github fa-2x linkedCircles"
                  ></a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/ErfanHuq"
                    className="fa fa-linkedin fa-2x linkedCircles"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="../Contacts"
                    className="fa fa-comment fa-2x linkedCircles"
                  ></a>
                </Col>
                <Col>
                  <button className="button">
                    <a className="link" href={resume} download>
                      Download Resume
                    </a>
                  </button>
                </Col>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Summary;
