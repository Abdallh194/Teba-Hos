import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Socials from "./Socials";

//icons
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const AddressInfo = () => {
  return (
    <div className="Cus_Margin_Padding AddressInfo">
      <Container>
        <Row>
          <Col md={12} lg={4} className="AddressCard">
            <Socials />
          </Col>
          <Col md={12} lg={4} className="AddressCard">
            <Image
              src="/address.png"
              alt="address png"
              width={500}
              height={500}
              className="img-fluid"
            />
          </Col>
          <Col md={12} lg={4} className="AddressCard">
            <div className="head">DownLoad Our App Now..!</div>
            <div className="downBtns">
              <div className="playstore">
                DownLoad On <IoLogoGooglePlaystore className="icon" />
              </div>
              <div className="playstore">
                DownLoad On <FaApple className="icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddressInfo;
