import logo from "./logo.svg";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import MyNavbar from "./Component/Navbar";
import Landing from "./Component/Landing";
import About from "./Component/About";
import Edu from "./Component/edu";
import Resume from "./Component/resume";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Projects from "./Component/project";
import Admin from "./Component/Admin";
import ContactMassage from "./Component/Admin/ContactMassage";
import Services from "./Component/Admin/MyServices";
import Login from "./Component/Admin/Login";
import AddProject from "./Component/Admin/addProject";
import NavbarAdmin from "./Component/Admin/NavbarAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route
            index
            element={
              <>
                <MyNavbar />
                <Landing />
                <About />
                <Edu />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="login"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route path="" element={<Login />} />
            <Route
              path="admin"
              element={
                <>
                  <Outlet />
                </>
              }
            >
              <Route
                path=""
                element={
                  <>
                    <Admin />
                  </>
                }
              />
              <Route path="ContactMessages" element={<ContactMassage />} />
              <Route path="MyServices" element={<Services />} />
              <Route
                path="addProject"
                element={
                  <>
                    <AddProject />
                  </>
                }
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
