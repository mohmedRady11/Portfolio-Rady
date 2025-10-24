import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link as RouterLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Admin.css";

function NavbarAdmin() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary Navbar-Style-Admin">
        <Container>
          <Navbar.Brand href="#home" className="Text-Style">
            Admin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars color="white" size={22} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="Text-Style"
                as={RouterLink}
                to="ContactMessages"
              >
                Contact Massage
              </Nav.Link>
              {/* <Nav.Link className="Text-Style" as={RouterLink} to="MyServices">
                Add Services
              </Nav.Link> */}
              <Nav.Link className="Text-Style" as={RouterLink} to="addProject">
                Add Project
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarAdmin;
