import { CancelAppointment } from "@/Redux/features/User/UserSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

import { RiDeleteBin2Fill } from "react-icons/ri";
type TAppointmentDet = {
  AppointmentDetails: {
    DonctorName: string;
    dep: string;
    id: string;
    date: string;
  };
};
const Appointments = ({ AppointmentDetails }: TAppointmentDet) => {
  // //get date
  // const date = new Date();

  // let day = date.getDate() + 2;
  // let month = date.getMonth() + 1;
  // let year = date.getFullYear();

  // let currentDate = `${day}-${month}-${year}`;

  //dispatch
  const dispatch = useAppDispatch();

  //button loading effect
  const [isDisabled, setisDisabled] = useState(false);
  useEffect(() => {
    if (!isDisabled) {
      return;
    }
    setisDisabled(true);
    const debounce = setInterval(() => {
      setisDisabled(false);
      dispatch(CancelAppointment());
    }, 700);
    return () => clearTimeout(debounce);
  }, [isDisabled, dispatch]);
  return (
    <div className="AppoientmentDetails">
      <div className="Header">Appoientments</div>
      {AppointmentDetails.id !== "0" ? (
        <div className="Appoientments">
          <div className="co">
            <div className="Name">Doctor Name</div>
            <div className="doc">{AppointmentDetails.DonctorName}</div>
          </div>
          <div className="co">
            <div className="Name">Doctor specialty</div>
            <div className="doc">{AppointmentDetails.dep}</div>
          </div>
          <div className="co">
            <div className="Name">The Date You Attend Is</div>
            <div className="doc">{AppointmentDetails.date} </div>
          </div>
          <div className="co">
            <div className="Name">Cancel</div>
            <div className="doc">
              <Button
                className="dlticon"
                disabled={isDisabled}
                onClick={() => {
                  setisDisabled(true);
                }}
              >
                {isDisabled ? (
                  <>
                    <Spinner animation="border" size="sm" /> Loading ...
                  </>
                ) : (
                  <>
                    <RiDeleteBin2Fill />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ color: "red" }} className="mt-3">
          {" "}
          No previous Appoientments{" "}
          <Link
            style={{ color: "blue", fontWeight: "bold" }}
            href="/Appointment"
          >
            Book Now
          </Link>
        </p>
      )}
    </div>
  );
};

export default Appointments;
