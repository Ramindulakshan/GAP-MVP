import React, { useState, useEffect } from "react";
import "./HistoryPage.css";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import prolog from "./img/pro1.png";
import pro4 from "./img/pro4.png";
import pro5 from "./img/1pro.png";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function ConductedHistory() {
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(false);

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  useEffect(() => {
    const navbar = document.getElementById("mySidebar");
    const screenWidth = window.innerWidth;

    // Check if the screen width is less than 1250px (responsive view)
    if (screenWidth < 1250) {
      navbar.style.display = "none"; // Hide navbar in responsive view
    } else {
      navbar.style.display = "block"; // Show navbar in desktop view
    }
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="nav-colum" id="mySidebar">
            <SideBar />
          </div>
          <div className="col-lg-9 vh-100 overflow-auto">
            <NavBar />
            <br></br>
            <br></br>
            <div
              style={{
                border: "2px solid #63636380",
                width: "95%",
                height: "auto",
                padding: "10px 10px 10px 0px",
                borderRadius: "10px",
                margin: "0 0 50px 20px",
              }}
            >
              <div id="nav" className="nave">
                <div>
                  <div className="navbar_mentor_page">
                    <p
                      onClick={() => {
                        window.location.href = "/historyPage";
                      }}
                      className="mb-0 nav_topic_mentro_page"
                    >
                      Attended
                    </p>
                    <p
                      onClick={() => {
                        window.location.href = "/conducted";
                      }}
                      className="mb-0 nav_topic_mentro_page"
                    >
                      Conducted
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="col-lg-12 vh-100 overflow-auto">
                  <div>
                    <div className="fullcon">
              
                      {/*Conducted Section Start*/}
                      <div className="main-box" id="Conducted">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-5">
                            <h5 className="mt-5">
                              Number of Sessions Conducted
                            </h5>
                          </div>

                          <div className="flex-grow-1 text-end me-5">
                            <h5 className="mt-5">04</h5>
                          </div>
                        </div>
                        <div class="Cardsection">
                          <div className="card">
                            <div className="d-md-flex">
                              <Col xs={12} md={2} className="mx-auto">
                                <img
                                  src={pro5}
                                  rounded
                                  alt="propic"
                                  className="imgr"
                                />
                              </Col>

                              <div className="card-body d-md-flex">
                                <div className="text-section">
                                  <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="card-title fw-bold">
                                      Mr. Julius Aguirre
                                    </h5>
                                  </div>
                                  <p className="card-para">
                                    Senior Software Engineer at Innovation Lanka{" "}
                                    <br />
                                    <br />
                                    <p>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                      >
                                        <path
                                          d="M6.51402 0C3.20202 0 0.52002 2.688 0.52002 6C0.52002 9.312 3.20202 12 6.51402 12C9.83202 12 12.52 9.312 12.52 6C12.52 2.688 9.83202 0 6.51402 0ZM6.52002 10.8C3.86802 10.8 1.72002 8.652 1.72002 6C1.72002 3.348 3.86802 1.2 6.52002 1.2C9.17202 1.2 11.32 3.348 11.32 6C11.32 8.652 9.17202 10.8 6.52002 10.8ZM6.82002 3H5.92002V6.6L9.07002 8.49L9.52002 7.752L6.82002 6.15V3Z"
                                          fill="black"
                                          fill-opacity="0.8"
                                        />
                                      </svg>
                                      &nbsp;&nbsp;07 00PM - 08 00 PM
                                    </p>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Ut condimentum eu arcu
                                      vel tempus. Ut faucibus id velit vel
                                      porttitor. Duis eu porttitor sem. el
                                      tempus. Ut faucibus id velit vel
                                      porttitor. Duis eu porttitor sem.
                                    </p>
                                  </p>
                                </div>
                                <p className="ptnpara ms-1 mb-0">
                                  <p className="ms-5 ">
                                    2023 / 08 / 28 | Thursday
                                  </p>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="d-md-flex">
                              <Col xs={12} md={2} className="mx-auto">
                                <img
                                  src={pro4}
                                  rounded
                                  alt="propic"
                                  className="imgr"
                                />
                              </Col>

                              <div className="card-body d-md-flex">
                                <div className="text-section">
                                  <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="card-title fw-bold">
                                      Mr. Julius Aguirre
                                    </h5>
                                  </div>
                                  <p className="card-para">
                                    Senior Software Engineer at Innovation Lanka{" "}
                                    <br />
                                    <br />
                                    <p>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="12"
                                        viewBox="0 0 13 12"
                                        fill="none"
                                      >
                                        <path
                                          d="M6.51402 0C3.20202 0 0.52002 2.688 0.52002 6C0.52002 9.312 3.20202 12 6.51402 12C9.83202 12 12.52 9.312 12.52 6C12.52 2.688 9.83202 0 6.51402 0ZM6.52002 10.8C3.86802 10.8 1.72002 8.652 1.72002 6C1.72002 3.348 3.86802 1.2 6.52002 1.2C9.17202 1.2 11.32 3.348 11.32 6C11.32 8.652 9.17202 10.8 6.52002 10.8ZM6.82002 3H5.92002V6.6L9.07002 8.49L9.52002 7.752L6.82002 6.15V3Z"
                                          fill="black"
                                          fill-opacity="0.8"
                                        />
                                      </svg>
                                      &nbsp;&nbsp;07 00PM - 08 00 PM
                                    </p>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Ut condimentum eu arcu
                                      vel tempus. Ut faucibus id velit vel
                                      porttitor. Duis eu porttitor sem. el
                                      tempus. Ut faucibus id velit vel
                                      porttitor. Duis eu porttitor sem.
                                    </p>
                                  </p>
                                </div>
                                <p className="ptnpara ms-1 mb-0">
                                  <p className="ms-5 ">
                                    2023 / 08 / 28 | Thursday
                                  </p>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Conducted Section End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConductedHistory;
