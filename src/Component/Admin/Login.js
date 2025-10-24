import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Admin/login.css";
function Login() {
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let GetDataUser = await axios.get(`http://localhost:8000/login`);

      let userData = GetDataUser.data.find(
        (user) => user.username === userName && user.password === password
      );
      console.log(userData.username);

      if (userData) navigator("/login/admin");
      else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      setError("Server error, please try again");
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4 rounded shadow">
        <h3 className="text-center mb-4">Admin Login</h3>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">UserName</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your UserName"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primaryy w-100" type="submit">
            Login
          </button>
        </form>

        <p className="mt-3 text-center">
          Don’t have an account?{" "}
          <a href="https://www.linkedin.com/in/mohamed-rady-508848269">
            Admin Only
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
