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
        setUserCount(response.data.members);
      } catch (error) {
        console.error("Error fetching user count: ", error);
      }
    };
    fetchUserCount();
  }, []);

  return (
    <>
      <section className="new-background">
        <div className="container-fluid vh-100">
        <div className="container">
            <nav className="navbar navbar-light">
              <a className="navbar-brand" href="/">
                <img src={GAP_Image} height="90" alt="" />
              </a>

              <nav class=" navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="">
                      <a class="nav-link custom-nav-link  " href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link custom-nav-link " href="/landingPageAbout">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link custom-nav-link " href="/landingPageContact">Contact</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link custom-nav-link " href="/login">Login</a>
                    </li>
                  </ul>
                  <button
                    className="btn custom-button1 my-2 my-sm-3"
                    type="submit"
                    onClick={() => {
                      window.location.href = "/register";
                    }}
                  >
                    Register
                  </button>
                </div>
              </nav>

            </nav>
          </div>
          <div>
            <div>
              <h1 className="custom-text-LA text-center mb-4 mt-3">
                Explore The World And Discover <br /> Your Potential
              </h1>
              <h1 className="custom-text-LA2 text-center mb-1 mt-1">
                Connect with industry pros, discover opportunities, showcase your
                skills. Join a thriving community, and empower <br /> your future.
                Your journey starts here!
              </h1>
            </div>
            <CardGroup className="d-flex justify-content-center flex-wrap">
              <Card className="m-3 text-center" style={{ backgroundColor: "#DCDDF9" }}>
                <Card.Body>
                  <Card.Text>
                    <h1>
                      <CountUp start={0} end={0} duration={4} delay={0} />
                    </h1>
                  </Card.Text>
                  <Card.Title style={{ color: "#2A2A72", fontSize: "24px" }}>
                    Mentors
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="m-3 text-center" style={{ backgroundColor: "#DCDDF9" }}>
                <Card.Body>
                  <Card.Text>
                    <h1>
                      <CountUp start={0} end={userCount} duration={2} delay={0} />
                    </h1>
                  </Card.Text>
                  <Card.Title style={{ color: "#2A2A72", fontSize: "24px" }}>
                    Members
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="m-3 text-center" style={{ backgroundColor: "#DCDDF9" }}>
                <Card.Body>
                  <Card.Text>
                    <h1>
                      <CountUp start={0} end={0} duration={4} delay={0} />
                    </h1>
                  </Card.Text>
                  <Card.Title style={{ color: "#2A2A72", fontSize: "24px" }}>
                    Sessions
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
            <div className="text-center mt-3">
              <button
                className="btn custom-button-reset2"
                type="button"
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
