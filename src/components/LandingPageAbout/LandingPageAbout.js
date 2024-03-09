import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../LandingPage/Landing.css";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import pro1 from "./img/KanishkaWeeramunda.jpg";
import pro2 from "./img/MiuliKalubovila.jpg";
import pro3 from "./img/ChathushkeeAmuwatta.jpeg";
import pro4 from "./img/IsuruUdana.jpeg";
import pro5 from "./img/TharushiJayawardana.jpg";
import pro6 from "./img/Anjana.jpg";
import pro7 from "./img/RaminduLakshan.jpg";
import pro8 from "./img/DilshanPriyawansha.jpg";
import pro9 from "./img/YasinduSanjeewa.jpg";
import pro10 from "./img/GaurawaBandara.jpg";
import pro11 from "./img/UshmikaKavishan.jpg";
function LandingPageAbout() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <section className="">
        <div className="vh-100">
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
          <div className="text-center cenclz mt-4 ">
            <h5 className="card-title fw-bold titlabt mb-4">About Us </h5>
            <p className="paraabty ">
              Generation ALPHA is a company dedicated to providing a unique
              space for young adults to discover their passions, enhance their
              skills, and shape their futures. Our students receive a
              membership, offering them a project-based learning experience.
              Engaged in various projects, such as sharing entrepreneurial
              knowledge in schools and universities and collaborating on
              corporate partnerships, our members actively participate and gain
              industry exposure. Therefore we also act as an entity which
              connects the cooperate world with the student community.
            </p>
          </div>
          <div className="dtabx " >
              
            <h5 className="card-title fw-bold titlabt2 mb-4">Meet the team </h5>
            <div className="cardsdn">
              <div className="container">
                <div className="row">
                  <div className="col-sm-2 col-md-2 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo ">
                      <img
                        src={pro1}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          animationDelay: "0.5s" ,
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Kanishka Weeramunda</p>
                    <p className="mb-0 ">(Director/Advisor)</p>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro2}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Miuli Kalubovila</p>
                    <p className="mb-0 ">(Founder)</p>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro3}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Chathushkee Amuwatta</p>
                    <p className="mb-0 ">(Senior Project Manager)</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro4}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Isuru Udana</p>
                    <p className="mb-0 ">(Project Manager)</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro5}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Tharushi Jayawardana</p>
                    <p className="mb-0 ">(UI/UX Designer)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dtabx">
            <div className="">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro6}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Irani Aanjana</p>
                    <p className="">(UI/UX Designer)</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro7}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Ramindu Lakshan</p>
                    <p className="mb-0 ">(Frontend Developer)</p>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro8}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Dilshan Priyawansha</p>
                    <p className="mb-0 ">(Frontend Developer)</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro9}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Yasindu Sanjeewa</p>
                    <p className="mb-0 ">(Backend Developer)</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro10}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Gaurawa Bandara</p>
                    <p className="mb-0 ">(Backend Developer)</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center fadeInUp">
                    <div className="pbtn2oo">
                      <img
                        src={pro11}
                        alt="logo"
                        className="img-fluid custom-image-Gap rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p className="mb-0 pintflnme">Ushmika Kavishan</p>
                    <p className="mb-0 ">(Quality Assurance)</p>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPageAbout;
