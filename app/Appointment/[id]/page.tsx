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
import { Container, Row, Modal, Button, Spinner } from "react-bootstrap";

//icons
import { FaCheckCircle } from "react-icons/fa";

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
        <div className="head">Doctors Available for Booking an Appointment</div>
        <Row>
          {DonctorsName.map((e) => {
            return (
              <div className=" specializationCard" key={Math.random() * 10}>
                <div className="name">Dr : {e}</div>
                {specializationDetailHandlerr.map((sp) => {
                  return (
                    <div className="info" key={sp.prefixId}>
                      {sp.Dep}
                      {isLoggin ? (
                        <Button
                          className="BookBtn"
                          onClick={() => {
                            setisDisabled(true);
                            handleShow();
                            let Data = {
                              DonctorName: e,
                              dep: sp.Dep,
                              id: sp.prefixId,
                            };

                            dispatch(AddAppointment(Data));
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
                  );
                })}
              </div>
            );
          })}
        </Row>
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
