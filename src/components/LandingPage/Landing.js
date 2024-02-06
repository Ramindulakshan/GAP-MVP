import React, { useEffect, useState } from "react";
import "../LandingPage/Landing.css";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import axios from "axios";

const LandingPage = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/members");
        console.log(response);
        setUserCount(response.data.members);
      } catch (error) {
        console.error("Error fetching user count: ", error);
      }
    };
    fetchUserCount();
  });

  return (
    <>
      <section className="new-background">
        <div className="container-fluid vh-100">
          <div className="container">
            <nav className="navbar navbar-light">

            <a className="navbar-brand"  href="home" onClick={() => {
                  window.location.href = "/";
                }}>

                <img src={GAP_Image} height="90" alt="" />
              </a>
              <a className="navbar-brand"  href="home"></a>

              <a
                className="navbar-brand"
                href="home"
                onClick={() => {

                  window.location.href = "/";
                }}
              >

                <img src={GAP_Image} height="90" alt="" />
              </a>
              <div className="d-flex justify-content-end">
                <a
                  className="nav-link custom-nav-link "
                  href="home"
                  onClick={() => {
                    window.location.href = "/underConstructionHome";
                  }}
                >
                  Home
                </a>
                <a
                  className="nav-link custom-nav-link "
                  href="about"
                  onClick={() => {
                    window.location.href = "/landingPageAbout";
                  }}
                >
                  About
                </a>
                <a
                  className="nav-link custom-nav-link"
                  href="contact"
                  onClick={() => {
                    window.location.href = "/landingPageContact";
                  }}
                >
                  Contact
                </a>
                <a
                  className="nav-link custom-nav-link"
                  href="login"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  Login
                </a>
                <form className="form-inline my-2 my-lg-0">
                  <button
                    className="btn custom-button1 my-2 my-sm-3"
                    type="submit"
                  >
                    Register
                  </button>
                </form>
              </div>
            </nav>
          </div>
          <div>
            <div>
              <h1
                className="custom-text-LA text-center mb-4 mt-3"
                style={{ marginLeft: "150px", marginRight: "150px" }}
              >
                Explore The World And Discover
                <br /> Your Potential
              </h1>
              <h1
                className="custom-text-LA2 text-center mb-1 mt-1"
                style={{ marginLeft: "100px", marginRight: "100px" }}
              >
                Connect with industry pros, discover opportunities, showcase
                your skills. Join a thriving community, and empower
                <br /> your future. Your journey starts here!
              </h1>
            </div>
            <CardGroup className="d-flex justify-content-center flex-wrap">
              <Card
                className="m-5"
                style={{ backgroundColor: "#DCDDF9", width: "5rem" }}
              >
                <Card.Body className="text-center">
                  <Card.Text>
                    <h1>
                      <CountUp start={0} end={0} duration={4} delay={0} />
                    </h1>
                  </Card.Text>
                  <Card.Title style={{ color: "#2A2A72", fontSize: "28px" }}>
                    Mentors
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="m-5"
                style={{ backgroundColor: "#DCDDF9", width: "10rem" }}
              >
                <Card.Body className="text-center">
                  <Card.Text>
                    <h1>
                      <CountUp
                        start={0}
                        end={userCount}
                        duration={2}
                        delay={0}
                      />
                    </h1>
                  </Card.Text>
                  <Card.Title style={{ color: "#2A2A72", fontSize: "28px" }}>
                    Members
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="m-5"
                style={{ backgroundColor: "#DCDDF9", width: "10rem" }}
              >
                <Card.Body className="text-center">
                  <Card.Text>
                    <h1>
                      <CountUp start={0} end={0} duration={4} delay={0} />
                    </h1>
                  </Card.Text>
                  <Card.Title style={{ color: "#2A2A72", fontSize: "28px" }}>
                    Sessions
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <div className="text-center mt-1">
              <button
                className="btn custom-button-reset2 my-1 my-sm-3"
                type="submit"
                onClick={() => {
                  window.location.href = "/register";
                }}
              >
                Register For Free
              </button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default LandingPage;
