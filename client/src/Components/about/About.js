import "./about.css";
import Info from "./Info";
import "./about.jpg";
import about from "./about.jpg";
import Skills from "../skills/Skills";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
const About = () => {
  return (
    <>
      <Header></Header>
      <section className="about__section" id="about">
        <div className="name">
          <h1>AYMAN SHAWKY</h1>
        </div>

        <div className="information">
          <img src={about} alt="" className="about__img" />
          <div className="about__data">
            <Info />
            <p className="about__description">
              <li>
                Frontend developer , i have create web pages with UI/UX user
                interface,
                <br />i have years of experience and many clients are happy with
                the projects carried out{" "}
              </li>
            </p>
          </div>
        </div>

        <Skills />
        {/* <Footer></Footer> */}
      </section>
      <Footer></Footer>
    </>
  );
};
export default About;
