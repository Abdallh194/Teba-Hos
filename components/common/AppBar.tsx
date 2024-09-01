"use client";
import Image from "next/image";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Container style={{ maxWidth: "1750px" }}>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Link href="/" className="logo">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={30}
              className="img-fluid"
            />
            <div className="page-name">Teba Hos</div>
          </Link>
        </motion.div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="#Services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} href="#Doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={Link} href="/Appointment">
              Book Appointment
            </Nav.Link>
            <Nav.Link as={Link} href="#Contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="LoginBtns">
            <Link className="loginBtn" href="/Login">
              Login
            </Link>
            <Link className="registerBtn" href="/Register">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
