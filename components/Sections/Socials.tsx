import React from "react";

//icons
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaPhone, FaFacebook, FaTwitter } from "react-icons/fa";

import { MdAttachEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
const Socials = () => {
  return (
    <div className="Socials">
      <div className="icon">
        <BsFillGeoAltFill />
        <div className="details">Cairo , Egypt</div>
      </div>
      <div className="icon">
        <FaPhone />
        <div className="details">+201091415560</div>
      </div>
      <div className="icon">
        <MdAttachEmail />
        <div className="details">Abdallhsabry194@gmail.com</div>
      </div>
      <div className="socials">
        <a
          href="https://www.facebook.com/profile.php?id=100007172563893"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://www.instagram.com/abdallhrakha/?hl=ar"
          target="_blanck"
          rel="noreferrer"
        >
          <RiInstagramFill className="icon" />
        </a>

        <a
          href="https://wa.me/+201091415560"
          target="_blanck"
          rel="noreferrer"
          data-name="WhatsApp"
        >
          <IoLogoWhatsapp className="icon" />
        </a>
        <a
          href="https://twitter.com/AbdallhSabry9"
          target="_blanck"
          data-name="Twitter"
        >
          <FaTwitter className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
