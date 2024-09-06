import React, { memo } from "react";
import { Button, Container } from "react-bootstrap";
import { Avatar } from "@mui/material";

//icon
import { HiOutlineLogout } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { SwithLoggin } from "@/Redux/features/User/UserSlice";
import Appointments from "./Appointments";

type TUserType = {
  newuser: {
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Password: string;
    Address: string;
    NiD: string;
    Gender: string;
    confirmPassword: string;
  };
  UserSelect: boolean;
};
const RightSideBar = ({ newuser, UserSelect }: TUserType) => {
  //dispatch
  const dispatch = useAppDispatch();

  //selector
  const { AppointmentDetails } = useAppSelector((s) => s.User);

  return (
    <>
      <div className="name">
        <div className="overlay">
          <div className="username">
            {newuser.FirstName} {newuser.LastName}
          </div>
          <Avatar className="avatar" />
        </div>
      </div>
      <Container style={{ position: "relative" }}>
        {UserSelect ? (
          <div className="personalInfo">
            <div className="InformationDetails">
              <div className="infoHeader">Personal Information</div>
              <Button
                onClick={() => {
                  dispatch(SwithLoggin());
                }}
                variant="danger"
                className="LogoutBtn"
              >
                Log Out <HiOutlineLogout style={{ display: "inline-block" }} />
              </Button>
            </div>

            <div className="InformationDetails">
              <div className="col">
                <div className="head">First Name</div>
                <div className="info">{newuser.FirstName}</div>
              </div>
              <div className="col">
                <div className="head">Last Name</div>
                <div className="info">{newuser.LastName}</div>
              </div>
              <div className="col">
                <div className="head">National Id</div>
                <div className="info">{newuser.NiD}</div>
              </div>
            </div>
            <hr />
            <div className="InformationDetails">
              <div className="col">
                <div className="head">Email Address</div>
                <div className="info">{newuser.Email}</div>
              </div>
              <div className="col">
                <div className="head">Phone Number</div>
                <div className="info">{newuser.Phone}</div>
              </div>
            </div>
            <hr />
            <div className="InformationDetails">
              <div className="col">
                <div className="head">Home Address</div>
                <div className="info">{newuser.Address}</div>
              </div>
              <div className="col">
                <div className="head">Gender</div>
                <div className="info">{newuser.Gender}</div>
              </div>
            </div>
          </div>
        ) : (
          <Appointments AppointmentDetails={AppointmentDetails} />
        )}
      </Container>
    </>
  );
};

export default memo(RightSideBar);
