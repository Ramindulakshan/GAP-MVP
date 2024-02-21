import React, { useEffect, useState } from "react";
import "../LandingPage/Landing.css";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import axios from "axios";
import { Navbar, Nav, Button } from "react-bootstrap";
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
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <section className="new-background">
        <div className="container-fluid vh-100">
          <div className="container">
            <Navbar expand="lg">
              <Navbar.Brand href="/">
                <img src={GAP_Image} height="90" alt="" />
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls="navbarSupportedContent"
                onClick={() => setShowNav(!showNav)}
              />

              <Navbar.Collapse
                id="navbarSupportedContent"
                className={`${showNav ? "show" : ""} navbar-class-left`}
              >
                <Nav className="ml-auto">
                  <Nav.Link href="/" className="nav-link custom-nav-link">
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/landingPageAbout"
                    className="nav-link custom-nav-link"
                  >
                    About
                  </Nav.Link>
                  <Nav.Link
                    href="/landingPageContact"
                    className="nav-link custom-nav-link"
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link href="/login" className="nav-link custom-nav-link">
                    Login
                  </Nav.Link>
                </Nav>

                <Button
                  className="btn custom-button1 my-2 my-sm-3"
                  onClick={() => {
                    window.location.href = "/register";
                  }}
                >
                  Register
                </Button>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="landing-set-res">
            <div>
              <h1 className="custom-text-LA text-center mb-4 mt-3">
                Explore The World And Discover <br /> Your Potential
              </h1>
              <h1 className="custom-text-LA2 text-center mb-1 mt-1">
                Connect with industry pros, discover opportunities, showcase
                your skills. Join a thriving community, and empower <br /> your
                future. Your journey starts here!
              </h1>
            </div>
            <CardGroup className="d-flex justify-content-center flex-wrap">
              <Card
                className="m-3 text-center"
                style={{ backgroundColor: "#DCDDF9" }}
              >
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
              <Card
                className="m-3 text-center"
                style={{ backgroundColor: "#DCDDF9" }}
              >
                <Card.Body>
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
                  <Card.Title style={{ color: "#2A2A72", fontSize: "24px" }}>
                    Members
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card
                className="m-3 text-center"
                style={{ backgroundColor: "#DCDDF9" }}
              >
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
                className="btn btn-lan-btn custom-button-reset2"
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
