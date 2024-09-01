import React, { Suspense } from "react";

import HomePage from "./HomePage";
import Services from "../Sections/Services";
import Doctors from "../Sections/Doctors";

import Footer from "../common/Footer";

import Loading from "@/app/loading";
import Contact from "../Sections/Contact";

const Index = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
      <Services />
      <Doctors />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
