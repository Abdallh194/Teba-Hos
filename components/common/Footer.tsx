import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaPhone, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12} md={3} className="foot-box">
            <div className="head">Address</div>
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
          </Col>
          <Col sm={12} md={3} className="foot-box">
            <div className="head">Services</div>
            <ul>
              <li>Pulmonary</li>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Laboratory</li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="foot-box">
            <div className="head">Quick Links</div>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Services</li>
              <li>Terms &amp; Condition</li>
              <li>Support</li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="foot-box">
            <div className="head">Newsletter</div>
            <div className="desc">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </div>
            <div className="inputs">
              <input
                type="email"
                className="form-control "
                placeholder="Enter Your Email"
              />
              <button className="btn ">Sign Up</button>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="copy">
          <div className="">
            © Teba Hos {new Date().getFullYear()}, All Right Reserved.
          </div>
          <div className="">
            Designed By{" "}
            <a
              target="_blank"
              href="https://abdallh-rakha.vercel.app/"
              style={{ color: "white", fontWeight: "700" }}
            >
              Abdallh Sabry
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
