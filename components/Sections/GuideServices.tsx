"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const GuideService = [
  {
    id: 1,
    imgsrc: "/guide-01.jpg",
    name: "Development Services",
    info: "TEBA Company develops and equips medical facilities (hospitals - specialized centers - clinics) with the highest specifications and international quality .",
    className: "GuideService_Card bg_Green",
  },
  {
    id: 2,
    imgsrc: "/guide-02.jpg",
    name: "Medical Discount Card",
    info: "TEBA aims to reduce the burden of healthcare costs through a discount card and a medical guide that includes all the medical services an individual needs.",
    className: "GuideService_Card bg_Blue",
  },
  {
    id: 3,
    imgsrc: "/guide-03.jpg",
    name: "Technology Services",
    info: "TEBA Company provides specialized medical software services suitable for hospitals and laboratories to raise efficiency and improve the level of performance ",
    className: "GuideService_Card bg_Green",
  },
  {
    id: 4,
    imgsrc: "/guide-04.jpg",
    name: "Administrative services",
    info: "TEBA Company develops and equips medical facilities (hospitals - specialized centers - clinics) with the highest specifications and international quality.",
    className: "GuideService_Card bg_Blue",
  },
  {
    id: 5,
    imgsrc: "/guide-05.jpg",
    name: "Marketing Services",
    info: "TEBA Company provides marketing services that suit every medical entity, whether it is a hospital, clinic or medical center, with the aim of promoting the medical institution ",
    className: "GuideService_Card bg_Green",
  },
];

const GuideServices = () => {
  return (
    <div className="Cus_Margin_Padding GuideServices">
      <div className="header">Services Guide</div>
      <Container fluid>
        <Row>
          {GuideService.map((e) => {
            return (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                key={e.id}
                className={e.className}
              >
                <Image
                  src={e.imgsrc}
                  alt={e.name}
                  width={550}
                  height={300}
                  className="img-fluid"
                />
                <div className="name">{e.name}</div>
                <div className="info">{e.info}</div>
              </motion.div>
            );
          })}
          <Col md={12} lg={6} className="About_Card ">
            <div className="content">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="head">Our Message</div>
                <div className="msg">
                  Recognizing the need to reduce healthcare costs for
                  individuals, TEBA was established to empower medical
                  institutions of all types. We achieve this through advanced
                  marketing services, expert consultations, specialized training
                  for staff, efficient contract mediation, and cutting-edge IT
                  solutions. This comprehensive approach enables medical
                  institutions to deliver high-quality, cost-effective services
                  to a wider audience.
                </div>
                <hr />
                <div className="head">Our Goal</div>
                <div className="msg">
                  Our medical network provides convenient access to affordable
                  and quality healthcare services.
                </div>
              </motion.div>
            </div>
          </Col>
          <Col md={12} lg={6} className="About_Card ImgCard"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default GuideServices;
