import React, { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./HomePage"));
import Services from "../Sections/Services";
import Doctors from "../Sections/Doctors";
import Loading from "../Loading/Loading";

const Index = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
      <Services />
      <Doctors />
    </>
  );
};

export default Index;
