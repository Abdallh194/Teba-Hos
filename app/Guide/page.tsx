"use client";
import React from "react";

// framer motion
import { motion } from "framer-motion";

// link
import Link from "next/link";

//bootstrap component
import { Col, Container, Row } from "react-bootstrap";

//icons
import { FaUserDoctor, FaStethoscope } from "react-icons/fa6";
import { BiSolidAmbulance } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";

//components
import GuideServices from "@/components/Sections/GuideServices";
import AddressInfo from "@/components/Sections/AddressInfo";

const Guide = () => {
  return (
    <>
      <div className="Guide">
        <div className="overlay">
          <Container>
            <motion.div
              className="content"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="subHead">
                <span>Browse the Guide</span> Teba Hospital
              </div>
              <div className="head">
                <span>Healthy Care</span> Solutions
              </div>
              <div className="info">
                Teba Card offers extensive healthcare access, partnering with
                leading hospitals, medical centers, clinics, and pharmacies
                throughout Cairo, providing our valued customers with a
                comprehensive and convenient healthcare experience
              </div>
              <Link href="/Appointment" className="bookBtn">
                Appointment now
              </Link>
            </motion.div>
            <Row>
              <Col xs={6} md={6} lg={3} className="GuideCard bg_Green">
                <FaUserDoctor className="icon" />
                <div className="header">Medical Counseling</div>
                <div className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                </div>
              </Col>

              <Col xs={6} md={6} lg={3} className="GuideCard bg_Blue">
                <FaStethoscope className="icon" />
                <div className="header">Qualified Doctors</div>
                <div className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                </div>
              </Col>
              <Col xs={6} md={6} lg={3} className="GuideCard bg_Green">
                <BiSolidAmbulance className="icon" />
                <div className="header">Emergency Services</div>
                <div className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                </div>
              </Col>
              <Col xs={6} md={6} lg={3} className="GuideCard bg_Blue">
                <GiMedicines className="icon" />
                <div className="header">Pharmaceutical Services</div>
                <div className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <GuideServices />
      <AddressInfo />
    </>
  );
};

export default Guide;
