import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Services = () => {
  return (
    <div id="Services" className="Cus_Margin_Padding Services">
      <Container style={{ maxWidth: "1550px" }}>
        <Row>
          <Col md={12} lg={6} className="TextCard">
            <div className="head">services provided by Taiba Hospital</div>
            <div className="info">
              In our desire to reduce the burden of healthcare costs for the
              individual, we established Taiba Company to contribute to
              improving and developing the services needed by medical
              institutions.
            </div>
            <div className="service-Numbers">
              <div className="details">
                <div className="num">23</div>
                <div className="name">Hospitals</div>
              </div>
              <div className="details">
                <div className="num">117</div>
                <div className="name">Specialized centers</div>
              </div>
              <div className="details">
                <div className="num">126</div>
                <div className="name">Clinics</div>
              </div>
              <div className="details">
                <div className="num">160</div>
                <div className="name">Pharmacies</div>
              </div>
            </div>
            <Link href="/Guide" className="browse">
              Browse The Guide{" "}
              <FaArrowUpRightFromSquare
                style={{ display: "inline-block", marginLeft: "5px" }}
              />
            </Link>
          </Col>
          <Col md={12} lg={6} className="ImageCard">
            <Image
              src="/service.jpg"
              alt="service"
              width={900}
              height={700}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
