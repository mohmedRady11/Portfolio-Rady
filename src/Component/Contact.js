import { useState } from "react";
import "../Component/css/App.css";
import "../Component/css/AppMobile.css";
import "../Component/css/AppTab.css";
import "../Component/css/AppTapsmall.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "952b8b04-77ae-440a-b947-8724a141e4df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset(); // تصفير الفورم بعد الإرسال
    } else {
      setResult("Please try again.");
    }
  };

  return (
    <>
      <div id="contact" className="contact">
        <p data-aos="zoom-out-up">I'd love to hear from you!!</p>

        <form onSubmit={onSubmit} className="contactForm">
          <input
            data-aos="zoom-in-down"
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input
            data-aos="zoom-in-left"
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <input
            data-aos="zoom-in-right"
            type="email"
            name="email"
            placeholder="E-Mail"
            required
          />
          <textarea
            data-aos="zoom-out"
            name="message"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message..."
            required
          ></textarea>

          <button data-aos="zoom-in" type="submit">
            Submit
          </button>
        </form>

        {result ? (
          <p data-aos="zoom-in-up" className="form-result-fulfel">
            {result}
          </p>
        ) : (
          <p data-aos="zoom-in-up" className="form-result-reject">
            {result}
          </p>
        )}
        <div className="secNextProject">
          <div data-aos="fade-right" className="textNext">
            <h3>Let's work together on your next project</h3>
            <p>
              Collaboration is key! Join forces and combine our skills to tackle
              your next project with powerful synergy that guarantees success.
            </p>
          </div>
          <a href="#contact">
            <button data-aos="flip-left">Contact</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
