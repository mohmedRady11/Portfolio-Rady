import "../Component/css/App.css";
import "../Component/css/AppMobile.css";
import "../Component/css/AppTab.css";
import "../Component/css/AppTapsmall.css";
import image1 from "../Component/image/Logo 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="logo">
          <img src={image1} />
        </div>
        <div className="Media">
          <a href="https://www.facebook.com/mohmed.rady.406777/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/mohmedrady">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/mohmedRady11">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
