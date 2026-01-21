import { useEffect, useState } from "react";
import "../Component/css/App.css";
import "../Component/css/AppMobile.css";
import "../Component/css/AppTab.css";
import "../Component/css/AppTapsmall.css";
import imageButton from "../Component/image/sahm.png";
import ProjectsData from "./Data/ProjectsData";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  // const [data, setData] = useState([]);

  // const FetchDataProject = () => {
  //   fetch("http://localhost:7000/Project")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // };
  // useEffect(() => {
  //   FetchDataProject();
  // }, []);
  const visibleCards = showAll ? ProjectsData : ProjectsData.slice(0, 3);

  return (
    <>
      <div id="project" className="Mywork">
        <div data-aos="fade-down-right" className="TitleWork">
          <p>My Projects</p>
        </div>
        <div data-aos="fade-up" className="projectsMe">
          {visibleCards.map((work, index) => {
            return (
              <div className="ProjectStyle" key={index}>
                <img src={work.image} />
                <p className="titleProject">{work.title}</p>
                <a href={work.describtion} className=" describtionProject">
                  GitHup Link
                </a>
              </div>
            );
          })}
        </div>
        <div className="showMore">
          <button
            data-aos="flip-down"
            onClick={() => {
              setShowAll(true);
            }}
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
}

export default Projects;
