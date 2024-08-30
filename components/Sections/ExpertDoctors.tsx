import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const DoctorsDetails = [
  {
    id: 1,
    name: "Doctor Name",
    imgsrc: "/team-1.jpg",
    Dep: "Department",
  },
  { id: 2, name: "Doctor Name", imgsrc: "/team-2.jpg", Dep: "Department" },
  { id: 3, name: "Doctor Name", imgsrc: "/team-3.jpg", Dep: "Department" },
  { id: 4, name: "Doctor Name", imgsrc: "/team-4.jpg", Dep: "Department" },
];

const ExpertDoctors = () => {
  return (
    <div className="Cus_Margin_Padding ExpertDoctors">
      <Container style={{ maxWidth: "1430px" }}>
        <div className="header">Our Experience Doctors</div>
        <Row>
          {DoctorsDetails.map((e) => {
            return (
              <Col lg={3} className="DoctorCard" key={e.id}>
                <Image
                  src={e.imgsrc}
                  alt={e.name}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <div className="doctorDetails">
                  <div className="name">{e.name}</div>
                  <div className="dep">{e.Dep}</div>
                  <div className="socials">
                    <FaFacebook className="mx-2" />
                    <RiInstagramFill className="mx-2" />
                    <FaTwitter className="mx-2" />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ExpertDoctors;
