"use client";
import React from "react";
import loading from "@/Assests/LottieFiles/loading.json";
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <Lottie
      animationData={loading}
      style={{ width: "300px", margin: "40px auto" }}
    />
  );
};

export default Loading;
