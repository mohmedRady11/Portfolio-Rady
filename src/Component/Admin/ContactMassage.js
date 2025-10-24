import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import "./Admin.css";

function ContactMassage() {
  const [contactMessages, setContactMessages] = useState([]);

  const GetData = () => {
    fetch("http://localhost:9000/contact")
      .then((res) => res.json())
      .then((data) => {
        setContactMessages(data);
      });
  };
  let DeleteDataUser = (productID) => {
    Swal.fire({
      title: `hello in my store`,
      showCancelButton: true,
    }).then((data) => {
      data.isConfirmed &&
        fetch(`http://localhost:9000/contact/${productID}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => GetData());
    });
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <Container>
        <p className="Massage_text">The Massage Page!!</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-Mail</th>
              <th>Massage</th>
              <th>Buttons</th>
            </tr>
          </thead>
          <tbody>
            {contactMessages.map((DataMassage, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{DataMassage.fristName}</td>
                  <td>{DataMassage.lastName}</td>
                  <td>{DataMassage.email}</td>
                  <td>{DataMassage.massage}</td>
                  <td>
                    <button className="btn btn-primary me-2">View</button>
                    <button
                      onClick={() => {
                        DeleteDataUser(DataMassage.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
export default ContactMassage;
