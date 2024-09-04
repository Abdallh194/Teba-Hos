"use client";
import React from "react";
import { Container, Row } from "react-bootstrap";

import Link from "next/link";
import { Majors } from "@/constants/constants";

const Appointment = () => {
  return (
    <div className="Appointment">
      <div className="header">Clinics</div>
      <div className="chooseHeader">Choose a Major</div>
      <Container>
        <Row>
          {Majors.map((e) => {
            return (
              <Link
                href={`Appointment/${e.id}`}
                key={e.id}
                className="MajorCard"
              >
                <e.Icons className="icon" />
                <div className="majorName">{e.text}</div>
              </Link>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;
