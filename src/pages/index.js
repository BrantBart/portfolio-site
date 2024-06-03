import React from "react";
import background from "../assets/testslideshow/Pexels-Videos-2795171.gif";
import Logofull from "../assets/svg/logofull";
import PlanImage from "../assets/home_plan.jpg";
import CodeImage from "../assets/home_code.jpg";
import BuildImage from "../assets/home_build.jpeg";
import WelcomeImg from "../assets/excited.jpg";
import SampleCode from "../assets/sample-code.jpg";
import { Container } from "react-bootstrap";
import SignUp from "../components/Signup";

const Home = () => {
  return (
    <div className="page">
      {/* <div
        className="login-section screen-height"
        // style={{
        //   backgroundImage: `url(${background})`,
        // }}
      >
        <Container className="page-section">
          <Row>
            <Col className="col-12 col-lg-8 title-section">
              <Logofull />
            </Col>
            <Col className="col-12 col-lg-4">
              <SignUp />
            </Col>
          </Row>
        </Container>
      </div> */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="page-section">
          <div className="row full rounded">
            <div className="col-text sixty-six">
              <h2>Welcome to Barton Technology Group</h2>
              <p>
                BartonTechGroup was first designed as a pretend business for a
                school project/portfolio. Later, BTG became a website where I
                could showcase my work and direct others to if they wanted me to
                work contract work for their personal or small business website.
                I hope to present my projects well and continue to grow in them
                I can inspire others to grow and learn as well. Check out my portfolio!

                More to come later.
              </p>
            </div>
            <div className="col-image thirty-three justify-content-center">
              <img
                className=""
                src={WelcomeImg}
                loading="lazy"
                alt="Discover"
              />
            </div>
          </div>
          <div className="alert-banner">
            <h5>This site is a Work In Progress.</h5>
          </div>
        </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* <div className="screen-height dark-section">
        <Container className="page-section">
          <div className="">
            <h2 className="text-center">Get Started with Your Own Website</h2>
            <p className="text-white">
              Creating a website may seem daunting, but you can start today! You
              may already understand a lot more than you think, but with these
              three easy categories, you can get there in no time! Here I have
              organized some ideas that helped me get started and understanding
              how to get started and you can see where they will take you.
            </p>
            <hr className="hr"></hr>
            <div className="row">
              <div className="col-md-4 index-hero">
                <a href="#" className="img-link">
                  <img
                    className="mx-auto imghome"
                    src={PlanImage}
                    loading="lazy"
                    alt="Plan"
                  />
                  <div className="imgcontent">
                    <p>Plan</p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 index-hero">
                <a href="#" className="img-link">
                  <img
                    className="mx-auto imghome"
                    src={CodeImage}
                    loading="lazy"
                    alt="Discover"
                  />
                  <div className="imgcontent">
                    <p>Discover</p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 index-hero">
                <a href="#" className="img-link">
                  <img
                    className="mx-auto imghome"
                    src={BuildImage}
                    loading="lazy"
                    alt="Build"
                  />
                  <div className="imgcontent">
                    <p>Build</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div> */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* <div className="screen-height">
        <Container className="page-section">
          <div className="">
            <h2 className="text-center">Knowledge is Power</h2>
            <p>
              You can learn useful tips and tricks today, and web development is
              pretty universal. So skills and knowledge you gain here can be
              used in other forms of programming too. With the internet and
              thousands of resources, the only limit is the time you choose to
              dedicate.
            </p>
            <hr className="hr"></hr>
            <p className="text-center">
              Here are some examples of techlogies used to make the
              BartonTechGroup Website...
            </p>
            <div className="tbl-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ReactJS</td>
                    <td>
                      Front End Development: Organize your code into reusable
                      components and import useful tools from libraries.
                    </td>
                  </tr>
                  <tr>
                    <td>Bootstrap</td>
                    <td>
                      HTML, CSS, and Javascript Library with built in styles and
                      features that can be customized or called by element or
                      class names
                    </td>
                  </tr>
                  <tr>
                    <td>HTML</td>
                    <td>
                      Learn the basic structure of elements, images and links
                      and how each browser works and reads these elements.
                    </td>
                  </tr>
                  <tr>
                    <td>CSS/SCSS</td>
                    <td>
                      Custom styles for components and templates that you
                      create. SCSS allows you to organize styles based on
                      specificity and then creates your CSS file before you
                      deploy.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  );
};

export default Home;
