import { useState } from "react";
import "../Component/css/App.css";
import "../Component/css/AppMobile.css";
import "../Component/css/AppTab.css";
import "../Component/css/AppTapsmall.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  const [sendAllData, setSendAllData] = useState("");
  const FormData = (e) => {
    e.preventDefault();
    const sendData = fetch("http://localhost:9000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fristName,
        lastName,
        email,
        massage,
      }),
    }).then((res) => {
      res.json();
    });
    if (sendData) {
      setSendAllData("✅ Data sent successfully!");
    } else {
      setSendAllData("Rejected Data Send");
    }
  };

  return (
    <>
      <div id="contact" className="contact">
        <p>i'd love to hear from you!!</p>
        <form onSubmit={FormData} className="contactForm">
          <div>
            <input
              onChange={(e) => {
                setFristName(e.target.value);
              }}
              type="text"
              placeholder="Frist Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="E-Mail"
            />
          </div>
          <textarea
            onChange={(e) => {
              setMassage(e.target.value);
            }}
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Massage..."
          ></textarea>

          <button>Submit</button>
          {sendAllData ? (
            <div className="success-message">{sendAllData}</div>
          ) : (
            <div className="nullSended"></div>
          )}
          {sendAllData === false ? (
            <div className="field-message">{sendAllData}</div>
          ) : (
            <div className="null"></div>
          )}
        </form>
        <div className="secNextProject">
          <div className="textNext">
            <h3>Lets Work together on your next project</h3>
            <p>
              conllaboration is key! join forces and conbine our skills to
              tackle your next project with a powerful synergy that guarantees
              success.
            </p>
          </div>
          <button type="submit">Contact</button>
        </div>
      </div>
    </>
  );
}
export default Contact;
