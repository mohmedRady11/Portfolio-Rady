import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Component/css/App.css";
import { FaBars } from "react-icons/fa";
import image3 from "../Component/image/Logo 2.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
function MyNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary Navbar-style position-sticky top-0 z-1"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-style pointer ">
            {" "}
            <img src={image3} className="logo" />
          </Navbar.Brand>
          {/* <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-style-btn"
          /> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars color="white" size={22} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto ">
              <Nav.Link
                as={Link}
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-style pointer"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="project"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-style pointer"
              >
                PROJECT
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-style pointer"
              >
                ABOUT ME
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="Services"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-style pointer"
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-style pointer"
              >
                CONTACT
              </Nav.Link>
              <Nav.Link
                as={RouterLink}
                to="login"
                className="text-style pointer"
              >
                ADMIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
