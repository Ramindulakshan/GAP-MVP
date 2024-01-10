import React from "react";
import Login_image from "../LoginPage/Img/login.png";
import "../LandingPage/Landing.css";
// import Google_image from '../LoginPage/Img/google.png';
import CountUp from "react-countup";
import { Card, Row, Col } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

const LoginPage = () => {
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="col-lg-12 vh-100 ">
            <h1 className="custom-text-LA text-center mb-5 mt-5 ">
              Explore The World And Discover Your Potential
            </h1>
            <h1 className="custom-text-LA2 text-center mb-5 mt-5 ">
              Connect with industry pros, discover opportunities, showcase your
              skills.Join a thriving community, and empower your future. Your
              journey starts here!
            </h1>
            <CardGroup className="d-flex justify-content-center flex-wrap">
              <Card
                className="m-5"
                style={{ backgroundColor: "#DCDDF9", width: "5rem" }}
              >
                <Card.Body className="text-center">
                  <Card.Text>
                    <h1>
                      <CountUp start={0} end={623} duration={4} delay={0} />
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
                      <CountUp start={0} end={892} duration={4} delay={0} />
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
                      <CountUp start={0} end={970} duration={4} delay={0} />+
                    </h1>
                  </Card.Text>
                  <Card.Title style={{ color: "#2A2A72", fontSize: "28px" }}>
                    Sessions
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>

            <div className="text-center mt-5">
              <button
                className="btn custom-button-reset my-1 my-sm-3"
                type="submit"
                onClick={() => {
                    window.location.href = "/login";
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

export default LoginPage;
