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
        <p>I'd love to hear from you!!</p>

        <form onSubmit={onSubmit} className="contactForm">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="E-Mail" required />
          <textarea
            name="message"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message..."
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>

        {result ? (
          <p className="form-result-fulfel">{result}</p>
        ) : (
          <p className="form-result-reject">{result}</p>
        )}
        <div className="secNextProject">
          <div className="textNext">
            <h3>Let's work together on your next project</h3>
            <p>
              Collaboration is key! Join forces and combine our skills to tackle
              your next project with powerful synergy that guarantees success.
            </p>
          </div>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
