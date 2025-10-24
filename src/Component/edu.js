import "../Component/css/App.css";
import "../Component/css/AppMobile.css";
import "../Component/css/AppTab.css";
import "../Component/css/AppTapsmall.css";
import image1 from "../Component/image/1157494.png";
import image2 from "../Component/image/pen2.png";
import MyServices from "./Data/MyServiscs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Edu() {
  return (
    <div id="Services" className="Services">
      <div className="text-service">
        <p className="about-me hostService">My Services</p>
        <p className="WhatCan">What Can i Do</p>
      </div>
      <div className="contaniner-service">
        {MyServices.map((service, index) => {
          return (
            <div key={index} className="WhatServiceContainer">
              <FontAwesomeIcon
                icon={service.image}
                size="2x"
                color="#c53834"
                className="imageService"
              />

              <p className="title">{service.title}</p>
              <p className="discribtion">{service.describtion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Edu;
