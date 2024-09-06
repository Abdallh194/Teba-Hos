"use client";
import React, { useState } from "react";
import regitser from "@/Assests/LottieFiles/regitser.json";
import Lottie from "lottie-react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchema,
  RegisterType,
} from "@/Validation/RegistrationValidation";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  SwithLoggin,
  AddNewUser,
  CheckEmailavailable,
} from "@/Redux/features/User/UserSlice";
import { useRouter } from "next/navigation";
import { Alert } from "@mui/material";
import Link from "next/link";

const Register = () => {
  //dispatch
  const dispatch = useAppDispatch();

  //selector
  const { Isthisemailavailable, isLoggin, IsComeFromAppointment, UserMajor } =
    useAppSelector((s) => s.User);

  //router
  const router = useRouter();

  //states
  const [isRegisterError, setisRegisterError] = useState(false);
  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
  });

  //submit form
  const SubmitForm: SubmitHandler<RegisterType> = (data) => {
    if (Isthisemailavailable === true) {
      if (IsComeFromAppointment === true) {
        dispatch(AddNewUser(data));
        dispatch(SwithLoggin());
        router.push(`/Appointment/${UserMajor}`);
      } else {
        dispatch(AddNewUser(data));
        dispatch(SwithLoggin());
        router.push("/UserProfile");
      }
    } else {
      setisRegisterError(true);
    }
  };
  return (
    <>
      {isLoggin && IsComeFromAppointment === false ? (
        router.push("/UserProfile")
      ) : (
        <div className="Register">
          <div className="overlay">
            <Container>
              <Row>
                <Col md={12} lg={6} className="formCard">
                  <div className="header">Join US Now</div>
                  <div className="info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sequi eum animi doloremque necessitatibus
                  </div>
                  <Form onSubmit={handleSubmit(SubmitForm)}>
                    <div className="fulLine">
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("FirstName")}
                          isInvalid={!!errors.FirstName?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.FirstName?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("LastName")}
                          isInvalid={!!errors.LastName?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.LastName?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="fulLine">
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("Phone")}
                          isInvalid={!!errors.Phone?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Phone?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("Address")}
                          isInvalid={!!errors.Address?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Address?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <Form.Group
                      className="mb-3"
                      style={{ width: "98%", margin: "5px auto" }}
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("Email")}
                        onBlur={(e) => {
                          dispatch(CheckEmailavailable(e.target.value));
                        }}
                        isInvalid={!!errors.Email?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.Email?.message}
                      </Form.Control.Feedback>
                      {!Isthisemailavailable ? (
                        <div style={{ color: "red" }}>
                          Sorry This email address is already used by Another
                          User
                        </div>
                      ) : null}
                    </Form.Group>

                    <div className="fulLine">
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>National Id</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("NiD")}
                          isInvalid={!!errors.NiD?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.NiD?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3 widHaf">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                          {...register("Gender")}
                          isInvalid={!!errors.Gender?.message}
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.Gender?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="fulLine">
                      <Form.Group
                        className="mb-3 widHaf"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          {...register("Password")}
                          isInvalid={!!errors.Password?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Password?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 widHaf"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          {...register("confirmPassword")}
                          isInvalid={!!errors.confirmPassword?.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <Button variant="primary" type="submit" id="submit">
                      Submit
                    </Button>
                    <Link href="/Login" className="LoginBtn">
                      Do you already have an account? Log in now
                    </Link>
                  </Form>
                  {isRegisterError && (
                    <Alert
                      style={{
                        position: "absolute",
                        top: "43px",
                        width: "30%",
                      }}
                      severity="error"
                      variant="filled"
                    >
                      There is an error in some of your data. Please re-enter
                      it.
                    </Alert>
                  )}
                </Col>
                <Col md={12} lg={6} className="AnimationCard">
                  <Lottie animationData={regitser} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
