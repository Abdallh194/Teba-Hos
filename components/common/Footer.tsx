import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Socials from "../Sections/Socials";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3} className="foot-box">
            <Socials />
          </Col>
          <Col sm={12} md={6} lg={3} className="foot-box">
            <div className="head">Services</div>
            <ul>
              <li>Pulmonary</li>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Laboratory</li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} className="foot-box">
            <div className="head">Quick Links</div>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Services</li>
              <li>Terms &amp; Condition</li>
              <li>Support</li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} className="foot-box">
            <div className="head">Newsletter</div>
            <div className="desc">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </div>
            <div className="inputs">
              <input
                type="email"
                className="form-control "
                placeholder="Enter Your Email"
              />
              <button className="btn ">Sign Up</button>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="copy">
          <div className="">
            © Teba Hos {new Date().getFullYear()}, All Right Reserved.
          </div>
          <div className="">
            Designed By{" "}
            <a
              target="_blank"
              href="https://abdallh-rakha.vercel.app/"
              style={{ color: "white", fontWeight: "700" }}
            >
              Abdallh Sabry
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
