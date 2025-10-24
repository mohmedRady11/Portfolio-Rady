import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin/AddProject.css";

function AddProject() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [describtion, setDescribtion] = useState("");

  const [sendProject, setSendProject] = useState("");
  const AddProject = (e) => {
    e.preventDefault();
    const sendDataProject = fetch("http://localhost:7000/Project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image,
        title,
        describtion,
      }),
    }).then((res) => {
      res.json();
    });
    if (sendDataProject) {
      setSendProject("✅ Data sent successfully!");
    } else {
      setSendProject("Rejected Data Send");
    }
  };
  return (
    <>
      <div className="AddProject">
        <p>Add New Project Now!!</p>
        <form onSubmit={AddProject} className="AddProjectForm">
          <div>
            <input
              onChange={(e) => {
                setImage(e.target.value);
              }}
              type="text"
              placeholder="Source img or video"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Title Project"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setDescribtion(e.target.value);
              }}
              type="text"
              placeholder="Describtion Project"
            />
          </div>
          <button>Add Now</button>
          {/* {sendProject} */}
        </form>
      </div>
    </>
  );
}
export default AddProject;
