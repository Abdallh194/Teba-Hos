import React from "react";
import Image from "next/image";
import { IoPersonAdd } from "react-icons/io5";
import { BsFillGeoAltFill } from "react-icons/bs";
import { MdOutlineChecklistRtl } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";
import Socials from "./Socials";

type TFun = {
  setUserSelect: (...args: any[]) => void;
};
const LeftSideBar = ({ setUserSelect }: TFun) => {
  const Links = [
    {
      id: "1",
      Icons: IoPersonAdd,
      name: "Personal Details",
    },
    {
      id: "2",
      Icons: BsFillGeoAltFill,
      name: "The Nearest Branch To Your Home",
    },
    {
      id: "3",
      Icons: MdOutlineChecklistRtl,
      name: "My Appointments",
    },
    {
      id: "4",
      Icons: CiShoppingBasket,
      name: "Buying medicines from the pharmacy",
    },
    {
      id: "5",
      Icons: FaInfoCircle,
      name: "Report A Problem",
    },
  ];
  return (
    <>
      <div className="logo">
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={30}
          className="img-fluid"
        />
        <div className="page-name mx-2">Teba Hos</div>
      </div>
      <div className="menu">
        {Links.map((e) => {
          return (
            <div className="Links" key={Math.random() * 10}>
              <div
                className="item"
                onClick={() => {
                  e.name == "Personal Details"
                    ? setUserSelect(true)
                    : e.name == "My Appointments"
                    ? setUserSelect(false)
                    : null;
                }}
              >
                <e.Icons style={{ marginRight: "8px" }} />

                {e.name}
              </div>
            </div>
          );
        })}
        {/* <div className="Links">
          <div
            className="item"
            onClick={() => {
              setUserSelect(true);
            }}
          >
            <IoPersonAdd style={{ marginRight: "8px" }} /> Personal Details
          </div>
          <div className="item">
            <BsFillGeoAltFill style={{ marginRight: "8px" }} /> The Nearest
            Branch To Your Home
          </div>
          <div
            className="item"
            onClick={() => {
              setUserSelect(false);
            }}
          >
            <MdOutlineChecklistRtl style={{ marginRight: "8px" }} />
            My Appointments
          </div>
          <div className="item">
            <CiShoppingBasket style={{ marginRight: "8px" }} /> Buying medicines
            from the pharmacy
          </div>
          <div className="item">
            <FaInfoCircle style={{ marginRight: "8px" }} /> Report A Problem
          </div>
        </div> */}
        <hr />
        <div className="socialHead">Our Information</div>
        <Socials />
      </div>
    </>
  );
};

export default LeftSideBar;
