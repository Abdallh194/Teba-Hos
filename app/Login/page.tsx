"use client";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import LoginLottie from "@/Assests/LottieFiles/LoginLottie.json";
import Lottie from "lottie-react";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginType } from "@/Validation/LoginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SwithLoggin } from "@/Redux/features/User/UserSlice";
import { Alert } from "@mui/material";
import Link from "next/link";
const Login = () => {
  //dispath
  const dispatch = useAppDispatch();

  //navigate
  const router = useRouter();

  //selector
  const {
    GlobalPassword,
    GlobalUserName,
    newuser,
    isLoggin,
    IsComeFromAppointment,
    UserMajor,
  } = useAppSelector((state) => state.User);
  //states
  const [isLoginError, setisLoginError] = useState(false);

  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  //handleSubmit
  const SubmitForm: SubmitHandler<LoginType> = (data) => {
    console.log(data);
    if (
      (data.email === GlobalUserName && data.password === GlobalPassword) ||
      (data.email === newuser.Email && data.password === newuser.Password)
    ) {
      if (IsComeFromAppointment === true) {
        dispatch(SwithLoggin());
        setisLoginError(false);
        router.push(`/Appointment/${UserMajor}`);
      } else {
        dispatch(SwithLoggin());
        setisLoginError(false);
        router.push("/UserProfile");
      }
    } else {
      setisLoginError(true);
      console.log("eror");
    }
  };
  return (
    <>
      {isLoggin && IsComeFromAppointment === false ? (
        router.push("/UserProfile")
      ) : (
        <div className="Login">
          <div className="overlay">
            <Container>
              <Row>
                <Col md={12} lg={6} className="formCard">
                  <div className="header">Subscribe To US</div>
                  <div className="subHeader">To Get the Latest Offers</div>
                  <div className="info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum blanditiis incidunt voluptates quod corporis aliquid
                    iure nihil ea enim magni.
                  </div>
                  <Form onSubmit={handleSubmit(SubmitForm)}>
                    <Form.Group className="mb-3">
                      <Form.Label className="Lable">Email address</Form.Label>
                      <Form.Control
                        type="text"
                        className="formInput"
                        {...register("email")}
                        isInvalid={!!errors.email?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="Lable">Password</Form.Label>
                      <Form.Control
                        type="password"
                        className="formInput"
                        {...register("password")}
                        isInvalid={!!errors.password?.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" id="submit">
                      Submit
                    </Button>
                    <Link href="/Register" className="registerBtn">
                      Dont have an account? Register with us now
                    </Link>
                  </Form>
                  {isLoginError && (
                    <Alert
                      style={{
                        position: "absolute",
                        top: "43px",
                        width: "30%",
                      }}
                      severity="error"
                      variant="filled"
                    >
                      You have entered an invalid username or password
                    </Alert>
                  )}
                </Col>
                <Col md={12} lg={6} className="lottieCard">
                  <Lottie animationData={LoginLottie} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
