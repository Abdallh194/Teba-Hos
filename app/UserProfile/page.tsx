"use client";

import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideBar from "@/components/Sections/LeftSideBar";
import RightSideBar from "@/components/Sections/RightSideBar";
const UserProfile = () => {
  //selector
  const { isLoggin, newuser } = useAppSelector((s) => s.User);

  //router
  const router = useRouter();

  const [UserSelect, setUserSelect] = useState(true);

  return (
    <>
      {isLoggin ? (
        <div className="UserProfile">
          <Container fluid>
            <Row>
              <Col lg={3} md={12} className="Left-SideBar">
                <LeftSideBar setUserSelect={setUserSelect} />
              </Col>
              <Col lg={9} md={12} className="Right-SideBar">
                <RightSideBar newuser={newuser} UserSelect={UserSelect} />
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        router.push("/")
      )}
    </>
  );
};

export default UserProfile;
