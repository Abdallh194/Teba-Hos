"use client";
import { useAppSelector } from "@/Redux/hooks";
import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ExpertDoctors from "./ExpertDoctors";

const Doctors = () => {
  const { StaffNum, expNum, TPationNum } = useAppSelector((state) => state.ASR);
  return (
    <>
      <div id="Doctors" className="Cus_Margin_Padding Doctors">
        <Container fluid>
          <Row>
            <Col md={12} lg={6} className="TextCard">
              <div className="content">
                <div className="head">
                  Why You Should Trust Us? Get Know About Us!
                </div>
                <div className="descHead">
                  Good Health Is The Root Of All Heppiness
                </div>
                <div className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  doloribus unde nihil voluptas, aut nostrum quibusdam quidem
                  nesciunt quod adipisci dolore voluptatem ex? At, suscipit
                  veritatis sit quaerat ex Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </div>
                <div className="nums">
                  <div className="col">
                    <div>{TPationNum}</div>
                    <div>Total Patients</div>
                  </div>
                  <div className="col">
                    <div>{expNum}</div>
                    <div>Expert Doctors</div>
                  </div>
                  <div className="col">
                    <div>{StaffNum}</div>
                    <div>Medical Stuff</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6} className="ImgCard">
              <motion.img
                src="/doctor.jpg"
                alt="doctor"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <ExpertDoctors />
    </>
  );
};

export default Doctors;
