import "../Component/css/App.css";
import "../Component/css/AppMobile.css";
import "../Component/css/AppTab.css";
import "../Component/css/AppTapsmall.css";
import image_one from "../Component/image/in.png";
import media1 from "../Component/image/ccna.png";
import media2 from "../Component/image/MCSA.jpg";
import media3 from "../Component/image/linux.jpg";
import media4 from "../Component/image/Microsoft-Certified-Azure-AdministratorAssociate.jpg";
import media5 from "../Component/image/6a.png";

function About() {
  return (
    <div id="about" className="about">
      <div className="about-page">
        <div data-aos="fade-down" className="image-about">
          <div className="image-about-contaniner Block-image">
            {" "}
            <img src={image_one} alt="Landing" className="landing-image " />
          </div>
        </div>
        <div data-aos="fade-up" className="text-about">
          <div className="container-text-about">
            <p className="about-me">About Me</p>
            <h1 className="title-about">Who Am i</h1>
            <p className="describtion-about">
              I’m Mohamed Rady, a Microsoft Azure Administrator and Cloud
              Engineer. I specialize in managing and optimizing Azure cloud
              environments, ensuring secure, scalable, and cost-effective
              solutions. With expertise in Azure resource management,
              automation, I help businesses streamline their cloud
              infrastructure. Recently, I improved system uptime by 20% through
              optimized Azure configurations. I’m always open to connecting with
              others in the cloud space. Let’s connect and explore how I can
              assist with your cloud engineering needs!
            </p>
            <div className="info-about">
              <div className="infoMe">
                <img className="media-image-about" src={media1} />
                <p className="text-image-about">CCNA</p>
              </div>
              <div className="infoMe">
                <img className="media-image-about" src={media2} />
                <p className="text-image-about">MCSA</p>
              </div>
              <div className="infoMe">
                <img className="media-image-about" src={media3} />
                <p className="text-image-about">Linux</p>
              </div>
              <div className="infoMe">
                <img className="media-image-about" src={media4} />
                <p className="text-image-about">MZA</p>
              </div>
              {/* <div className="infoMe">
                <img className="media-image-about" src={media5} />
                <p className="text-image-about">React</p>
              </div> */}
            </div>
            <a href="/cv2.pdf" download="Mohamed_Rady_CV.pdf">
              <button type="button" className="btn-ContactMe hostBtn">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
