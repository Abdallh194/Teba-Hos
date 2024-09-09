// pages/blog/[id].js
"use client";
import { memo, useEffect, useMemo, useState } from "react";
//get constants
import { DonctorsName, GeneralInof, Majors } from "@/constants/constants";

//user action (Redux)
import {
  AddAppointment,
  CancelAppointment,
  SetUserMajor,
  SwitchLoginPass,
} from "@/Redux/features/User/UserSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";

//Next Link
import Link from "next/link";

//Router
import { useRouter } from "next/navigation";

//Bootstrap
import { Container, Row, Modal, Button, Spinner, Nav } from "react-bootstrap";

//icons
import { FaCheckCircle, FaPhone } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";

import Image from "next/image";
import { Alert, Rating } from "@mui/material";
import AvailableDates from "@/components/Sections/AvailableDates";

const Details = ({ params }: { params: { id: string } }) => {
  //dispatch
  const dispatch = useAppDispatch();

  //button loading effect
  const [isDisabled, setisDisabled] = useState(false);
  const [EnaleModal, setEnaleModal] = useState(false);

  useEffect(() => {
    if (!isDisabled) {
      return;
    }
    setisDisabled(true);
    const debounce = setInterval(() => {
      setisDisabled(false);
      setEnaleModal(true);
    }, 700);
    return () => clearTimeout(debounce);
  }, [isDisabled]);

  //selector
  const { isLoggin } = useAppSelector((s) => s.User);

  //router
  const router = useRouter();

  //modal state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //book date
  const [AVDate, setAVDate] = useState("");
  const [DateUnSelected, setDateUnSelected] = useState(false);

  const specializationDetailHandlerr = useMemo(() => {
    const specializationDetailFillter = GeneralInof.filter(
      (e) => e.prefixId === params.id
    );
    return specializationDetailFillter;
  }, [params.id]);

  const MajorFiltierHandler = useMemo(() => {
    const majourFilter = Majors.filter((e) => e.id === params.id);
    return majourFilter;
  }, [params.id]);

  return (
    <div className="Specialization">
      {MajorFiltierHandler.map((e) => {
        return (
          <div className="header" key={e.id}>
            <div className="content">
              <e.Icons className="icon" />
              <div>{e.text}</div>
            </div>
          </div>
        );
      })}
      <Container>
        <div className="head">
          Doctors Available for Booking an Appointment 15 Doctor
        </div>
        {DateUnSelected && (
          <Alert
            style={{
              position: "fixed",
              bottom: "30px",
              width: "14%",
              right: "1%",
              zIndex: "3",
            }}
            className="errorAlert"
            severity="error"
            variant="filled"
          >
            Please select a booking date.
          </Alert>
        )}
        {DonctorsName.map((e) => {
          return (
            <Row className=" specializationCard" key={Math.random() * 10}>
              {specializationDetailHandlerr.map((sp) => {
                return (
                  <div className="info" key={sp.prefixId}>
                    <div className="img-container">
                      <Image
                        src={sp.imgsrc}
                        alt={e}
                        width={200}
                        height={200}
                        className="img-fluid"
                      />
                    </div>
                    <div className="docDetails">
                      <div className="name">
                        Dr : <span>{e}</span>
                      </div>
                      <div className="dep">
                        Specialization : <span> {sp.Dep}</span>
                      </div>
                      <div className="d-flex align-items-center rateSec">
                        <Rating
                          name="simple"
                          value={5}
                          style={{ direction: "ltr" }}
                          className="rate"
                        />
                        <span style={{ marginTop: "8px", fontSize: "14px" }}>
                          These ratings are based on customer reviews.
                        </span>
                      </div>
                      <hr />
                      <ul className="menu">
                        <li className="item">
                          <BsFillGeoAltFill style={{ marginRight: "8px" }} />
                          His clinic is located inside the hospital.
                        </li>
                        <li className="item">
                          <GiMoneyStack style={{ marginRight: "8px" }} />
                          Examination price : <span>450 EGP</span>
                        </li>
                        <li className="item">
                          <FaClock style={{ marginRight: "8px" }} />
                          Waiting time : <span>15 Minute</span>
                        </li>
                        <li className="item">
                          <FaPhone style={{ marginRight: "8px" }} />
                          For Inquiries : <span>+01091415560</span>
                        </li>
                        <li className="item"></li>
                      </ul>
                      {isLoggin ? (
                        <Button
                          className="BookBtn"
                          onClick={() => {
                            if (AVDate.length === 0) {
                              setDateUnSelected(true);
                            } else {
                              setisDisabled(true);
                              handleShow();
                              setDateUnSelected(false);
                              let Data = {
                                DonctorName: e,
                                dep: sp.Dep,
                                id: sp.prefixId,
                                date: AVDate,
                              };
                              dispatch(AddAppointment(Data));
                            }
                          }}
                          disabled={isDisabled}
                        >
                          {" "}
                          {isDisabled ? (
                            <>
                              <Spinner animation="border" size="sm" /> Loading
                              ...
                            </>
                          ) : (
                            <>Book Now</>
                          )}
                        </Button>
                      ) : (
                        <Link
                          className="loginBtn"
                          href="/Login"
                          onClick={() => {
                            dispatch(SetUserMajor(params.id));
                            dispatch(SwitchLoginPass());
                          }}
                        >
                          Please Login To Book
                        </Link>
                      )}
                    </div>
                    <AvailableDates setAVDate={setAVDate} />
                  </div>
                );
              })}
            </Row>
          );
        })}
      </Container>
      {EnaleModal && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "green" }}>
              Confirm Appointment{" "}
              <FaCheckCircle style={{ display: "inline-block" }} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your reservation will be confirmed and payment will be made later
            upon inspection.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                setEnaleModal(false);
                dispatch(CancelAppointment());
              }}
            >
              Cancel Appointment
            </Button>
            <Button
              variant="success"
              onClick={() => {
                router.push("/UserProfile");
              }}
            >
              Confirm Appointment
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default memo(Details);
