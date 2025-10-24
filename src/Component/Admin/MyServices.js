import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faLaptop,
  faCode,
  faBagShopping,
  faCrosshairs,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const icons = {
  faPen,
  faLaptop,
  faCode,
  faBagShopping,
  faCrosshairs,
  faFlag,
};

function Services() {
  const [dataServics, setDataServics] = useState([]);

  useEffect(() => {
    fetch("/addServices.json")
      .then((res) => res.json())
      .then((data) => {
        setDataServics(data.MyServices || []); // ✅ هنا التعديل
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
  return (
    <div className="services d-flex flex-wrap gap-3 justify-content-center">
      {dataServics.map((service) => (
        <div
          key={service.id}
          className="card p-3 text-center"
          style={{ width: "250px" }}
        >
          <FontAwesomeIcon
            icon={icons[service.image] || faFlag}
            size="2x"
            className="mb-3"
          />
          <h5>{service.title}</h5>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
