"use client";
import Image from "next/image";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" Navbar">
      <Container style={{ maxWidth: "1750px" }}>
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Nav.Link as={Link} href="#features">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="#Services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} href="#Doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={Link} href="/Book">
              Book Appointment
            </Nav.Link>
            <Nav.Link as={Link} href="/Contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
