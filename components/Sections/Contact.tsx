import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="Cus_Margin_Padding Contact" id="Contact">
      <Container>
        <div className="head">Contact Information</div>
        <div className="info">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </div>
        <div className="line"></div>
        <Row>
          <Col sm={12} lg={6} className=" img-card"></Col>
          <Col sm={12} lg={6} className="ContactCard">
            <div className="text-feild">
              <input
                type="text"
                className="form-control wid-Haf"
                placeholder="Your Name"
              />

              <input
                type="email"
                className="form-control wid-Haf"
                placeholder="Your Email"
              />
            </div>

            <input
              type="text"
              className="form-control wid-ful"
              placeholder="Message subject "
            />
            <textarea
              name="msg"
              id="msg"
              placeholder="Message"
              className="form-control"
            ></textarea>
            <input
              type="submit"
              id="submit"
              className="form-control"
              value="Submit"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
