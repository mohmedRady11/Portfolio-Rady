import "../Component/css/App.css";
import "../Component/css/AppMobile.css";
import "../Component/css/AppTab.css";
import "../Component/css/AppTapsmall.css";
import image_one from "../Component/image/2.png";
import media1 from "../Component/image/1a.png";
import media2 from "../Component/image/2a.png";
import media3 from "../Component/image/3a.png";
import media4 from "../Component/image/4a.png";
import media5 from "../Component/image/6a.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-page">
        <div className="image-about">
          <div className="image-about-contaniner Block-image">
            {" "}
            <img src={image_one} alt="Landing" className="landing-image " />
          </div>
        </div>
        <div className="text-about">
          <div className="container-text-about">
            <p className="about-me">About Me</p>
            <h1 className="title-about">Who Am i</h1>
            <p className="describtion-about">
              My name is Mohamed Rady, a graduate of Faculty of Computers and
              Information – Information Technology Department, Kafr El-Sheikh
              University. I’m passionate about Front-End Development and have
              hands-on experience with HTML, CSS, JavaScript, and React.js. I’ve
              also worked with tools like Bootstrap, Redux, and API integration.
              I enjoy learning new technologies and applying them in real
              projects — for example, I developed a Prayer Timing Website using
              React and CSS. As a fresh graduate, I’m currently looking for an
              opportunity to start my career as a Front-End Developer in a
              collaborative environment where I can learn, grow, and contribute
              to building great user experiences.
            </p>
            <div className="info-about">
              <div className="infoMe">
                <img className="media-image-about" src={media1} />
                <p className="text-image-about">Html5</p>
              </div>
              <div className="infoMe">
                <img className="media-image-about" src={media2} />
                <p className="text-image-about">Css3</p>
              </div>
              <div className="infoMe">
                <img className="media-image-about" src={media3} />
                <p className="text-image-about">JavaScript</p>
              </div>
              <div className="infoMe">
                <img className="media-image-about" src={media5} />
                <p className="text-image-about">Bootstrap</p>
              </div>
              <div className="infoMe">
                <img className="media-image-about" src={media4} />
                <p className="text-image-about">React</p>
              </div>
            </div>
            <a href="/CV Main.pdf" download>
              <button className="btn-ContactMe hostBtn">Download Cv</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
