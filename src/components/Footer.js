import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5 footer">
      <Container fluid={true}>
        <Row className="border-top justify-content-begin p-3">
          <Col className="p-0">Erfan Huq</Col>
          <Col className="p-0 d-flex justify-content-end">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/EHuq"
              className="fa fa-github fa-lg linkedCircles"
            ></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ErfanHuq"
              className="fa fa-linkedin fa-lg linkedCircles"
            ></a>
            <a
              rel="noopener noreferrer"
              href="../Contacts"
              className="fa fa-comment fa-lg linkedCircles"
            ></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
