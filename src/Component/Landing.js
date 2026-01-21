import React from "react";
import "../Component/css/App.css";
import "../Component/css/AppMobile.css";
import "../Component/css/AppTab.css";
import "../Component/css/AppTapsmall.css";
import { Container } from "react-bootstrap";
import image_one from "../Component/image/in.png";
import { Link } from "react-scroll";

function Landing() {
  return (
    <>
      <div id="home" className="landing-page">
        <div data-aos="fade-down" className="text-section">
          <p className="Hello-name">Hello, My Name Is </p>
          <p className="name">Mohmed Rady</p>
          <p className="describtion">
            I specialize in designing and managing secure, scalable, and
            cost-effective Azure environments. With a focus on automation and
            resource optimization, I recently improved system uptime by 20%. I
            am dedicated to helping businesses streamline their cloud
            infrastructure and achieve peak operational efficiency.
          </p>
          <Link to="contact" className="btn-ContactMe">
            Contact Me
          </Link>
        </div>
        <div data-aos="fade-up" className="image-section">
          <div className="image-container ">
            <img src={image_one} alt="Landing" className="landing-image" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
