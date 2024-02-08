import React from "react";
import "../LandingPage/Landing.css";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import pro1 from "./img/Ellipse 62 (1).png";
import pro2 from "./img/Ellipse 63.png";
import pro3 from "./img/Ellipse 64.png";
import pro4 from "./img/Ellipse 65.png";
import pro5 from "./img/Ellipse 66.png";
function LandingPageAbout() {
  return (
    <div>
      <section className="">
        <div className="vh-100">
          <div className="container">
            <nav className="navbar navbar-light">
              <a className="navbar-brand" href="#c">
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
                  href="landingPageAbout"
                  onClick={() => {
                    window.location.href = "/landingPageAbout";
                  }}
                >
                  About
                </a>
                <a
                  className="nav-link custom-nav-link"
                  href="landingPageContact"
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
          <div className="dtabx">
            <h5 className="card-title fw-bold titlabt2">Meet the team </h5>
            <div className="cardsdn">
              <div className="container mt-2">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center">
                    <div className="pbtn2oo">
                      <img
                        src={pro1}
                        alt="logo"
                        className="img-fluid custom-image-Gap"
                      />
                    </div>
                    <p className="mb-0 pintflnme">Full Name</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center">
                    <div className="pbtn2oo">
                      <img
                        src={pro2}
                        alt="logo"
                        className="img-fluid custom-image-Gap"
                      />
                    </div>
                    <p className="mb-0 pintflnme">Full Name</p>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-2 text-center">
                    <div className="pbtn2oo">
                      <img
                        src={pro3}
                        alt="logo"
                        className="img-fluid custom-image-Gap"
                      />
                    </div>
                    <p className="mb-0 pintflnme">Full Name</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center">
                    <div className="pbtn2oo">
                      <img
                        src={pro4}
                        alt="logo"
                        className="img-fluid custom-image-Gap"
                      />
                    </div>
                    <p className="mb-0 pintflnme">Full Name</p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-2 text-center">
                    <div className="pbtn2oo">
                      <img
                        src={pro5}
                        alt="logo"
                        className="img-fluid custom-image-Gap"
                      />
                    </div>
                    <p className="mb-0 pintflnme">Full Name</p>
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
