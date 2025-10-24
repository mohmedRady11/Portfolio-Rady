import NavbarAdmin from "./Admin/NavbarAdmin";
import "./Admin/Admin.css";
import { Container } from "react-bootstrap";
import imageOne from "./image/2.png";

function Admin() {
  return (
    <>
      <NavbarAdmin />

      <div className="Admin-Landing">
        <p>
          <span>Welcome!</span> Can Be Change any thing in the page from har
        </p>
        <div className="Contaniner-img">
          <img src={imageOne} />
        </div>
      </div>
    </>
  );
}

export default Admin;
