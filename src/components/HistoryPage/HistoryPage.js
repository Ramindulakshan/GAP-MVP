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

function HistoryPage() {
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
                  <h5>
                    <a href="#Attended" className="mb-0 navtpic">
                      Attended
                    </a>
                    <a href="#Conducted" className="mb-0 navtpic">
                      Conducted
                    </a>
                  </h5>
                </div>
              </div>
              <div>
                <div className="col-lg-12 vh-100 overflow-auto">
                  <div>
                    <div className="fullcon">
                      {/*Requested Section Start */}
                      <div id="Attended">
                        <div className="d-flex">
                          <div className="flex-grow-1 ms-5">
                            <h5 className="mt-5">
                              Number of Sessions Attended
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
                                  src={prolog}
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
                                    <div className="d-inline-block">
                                      <BsStarFill className="text-warning" />
                                      <BsStarFill className="text-warning" />
                                      <BsStarFill className="text-warning" />
                                      <BsStarFill className="text-warning" />
                                      <BsStar className="text-warning" />
                                    </div>
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
                                          d="M3.92382 0C4.03521 0 4.14204 0.0442499 4.2208 0.123015C4.29957 0.20178 4.34382 0.308609 4.34382 0.42V1.2054H8.85402V0.4254C8.85402 0.314009 8.89827 0.20718 8.97703 0.128415C9.0558 0.0496499 9.16263 0.0054 9.27402 0.0054C9.38541 0.0054 9.49224 0.0496499 9.571 0.128415C9.64977 0.20718 9.69402 0.314009 9.69402 0.4254V1.2054H11.32C11.6382 1.2054 11.9433 1.33175 12.1683 1.55666C12.3934 1.78157 12.5199 2.08664 12.52 2.4048V10.8006C12.5199 11.1188 12.3934 11.4238 12.1683 11.6487C11.9433 11.8737 11.6382 12 11.32 12H1.72002C1.40186 12 1.09673 11.8737 0.871703 11.6487C0.646677 11.4238 0.520179 11.1188 0.52002 10.8006V2.4048C0.520179 2.08664 0.646677 1.78157 0.871703 1.55666C1.09673 1.33175 1.40186 1.2054 1.72002 1.2054H3.50382V0.4194C3.50398 0.308113 3.5483 0.201438 3.62705 0.122803C3.70579 0.0441674 3.81253 -1.13558e-07 3.92382 0ZM1.36002 4.6452V10.8006C1.36002 10.8479 1.36933 10.8947 1.38742 10.9384C1.40551 10.982 1.43203 11.0217 1.46546 11.0552C1.49889 11.0886 1.53858 11.1151 1.58225 11.1332C1.62593 11.1513 1.67274 11.1606 1.72002 11.1606H11.32C11.3673 11.1606 11.4141 11.1513 11.4578 11.1332C11.5015 11.1151 11.5411 11.0886 11.5746 11.0552C11.608 11.0217 11.6345 10.982 11.6526 10.9384C11.6707 10.8947 11.68 10.8479 11.68 10.8006V4.6536L1.36002 4.6452ZM4.52022 8.7714V9.771H3.52002V8.7714H4.52022ZM7.01982 8.7714V9.771H6.02022V8.7714H7.01982ZM9.52002 8.7714V9.771H8.51982V8.7714H9.52002ZM4.52022 6.3852V7.3848H3.52002V6.3852H4.52022ZM7.01982 6.3852V7.3848H6.02022V6.3852H7.01982ZM9.52002 6.3852V7.3848H8.51982V6.3852H9.52002ZM3.50382 2.0448H1.72002C1.67274 2.0448 1.62593 2.05411 1.58225 2.0722C1.53858 2.09029 1.49889 2.11681 1.46546 2.15024C1.43203 2.18367 1.40551 2.22336 1.38742 2.26703C1.36933 2.31071 1.36002 2.35752 1.36002 2.4048V3.8058L11.68 3.8142V2.4048C11.68 2.35752 11.6707 2.31071 11.6526 2.26703C11.6345 2.22336 11.608 2.18367 11.5746 2.15024C11.5411 2.11681 11.5015 2.09029 11.4578 2.0722C11.4141 2.05411 11.3673 2.0448 11.32 2.0448H9.69402V2.6022C9.69402 2.71359 9.64977 2.82042 9.571 2.89918C9.49224 2.97795 9.38541 3.0222 9.27402 3.0222C9.16263 3.0222 9.0558 2.97795 8.97703 2.89918C8.89827 2.82042 8.85402 2.71359 8.85402 2.6022V2.0448H4.34382V2.5968C4.34382 2.70819 4.29957 2.81502 4.2208 2.89378C4.14204 2.97255 4.03521 3.0168 3.92382 3.0168C3.81243 3.0168 3.7056 2.97255 3.62683 2.89378C3.54807 2.81502 3.50382 2.70819 3.50382 2.5968V2.0448Z"
                                          fill="black"
                                          fill-opacity="0.8"
                                        />
                                      </svg>{" "}
                                      &nbsp;&nbsp;2023 / 08 / 31 |
                                      Thursday&nbsp;&nbsp;
                                      <p></p>
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
                                  </p>
                                </div>
                                <p className="ptnpara ms-5 mb-0">
                                  <p className="ms-5 ">LKRZ000.00</p>
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
                                          d="M3.92382 0C4.03521 0 4.14204 0.0442499 4.2208 0.123015C4.29957 0.20178 4.34382 0.308609 4.34382 0.42V1.2054H8.85402V0.4254C8.85402 0.314009 8.89827 0.20718 8.97703 0.128415C9.0558 0.0496499 9.16263 0.0054 9.27402 0.0054C9.38541 0.0054 9.49224 0.0496499 9.571 0.128415C9.64977 0.20718 9.69402 0.314009 9.69402 0.4254V1.2054H11.32C11.6382 1.2054 11.9433 1.33175 12.1683 1.55666C12.3934 1.78157 12.5199 2.08664 12.52 2.4048V10.8006C12.5199 11.1188 12.3934 11.4238 12.1683 11.6487C11.9433 11.8737 11.6382 12 11.32 12H1.72002C1.40186 12 1.09673 11.8737 0.871703 11.6487C0.646677 11.4238 0.520179 11.1188 0.52002 10.8006V2.4048C0.520179 2.08664 0.646677 1.78157 0.871703 1.55666C1.09673 1.33175 1.40186 1.2054 1.72002 1.2054H3.50382V0.4194C3.50398 0.308113 3.5483 0.201438 3.62705 0.122803C3.70579 0.0441674 3.81253 -1.13558e-07 3.92382 0ZM1.36002 4.6452V10.8006C1.36002 10.8479 1.36933 10.8947 1.38742 10.9384C1.40551 10.982 1.43203 11.0217 1.46546 11.0552C1.49889 11.0886 1.53858 11.1151 1.58225 11.1332C1.62593 11.1513 1.67274 11.1606 1.72002 11.1606H11.32C11.3673 11.1606 11.4141 11.1513 11.4578 11.1332C11.5015 11.1151 11.5411 11.0886 11.5746 11.0552C11.608 11.0217 11.6345 10.982 11.6526 10.9384C11.6707 10.8947 11.68 10.8479 11.68 10.8006V4.6536L1.36002 4.6452ZM4.52022 8.7714V9.771H3.52002V8.7714H4.52022ZM7.01982 8.7714V9.771H6.02022V8.7714H7.01982ZM9.52002 8.7714V9.771H8.51982V8.7714H9.52002ZM4.52022 6.3852V7.3848H3.52002V6.3852H4.52022ZM7.01982 6.3852V7.3848H6.02022V6.3852H7.01982ZM9.52002 6.3852V7.3848H8.51982V6.3852H9.52002ZM3.50382 2.0448H1.72002C1.67274 2.0448 1.62593 2.05411 1.58225 2.0722C1.53858 2.09029 1.49889 2.11681 1.46546 2.15024C1.43203 2.18367 1.40551 2.22336 1.38742 2.26703C1.36933 2.31071 1.36002 2.35752 1.36002 2.4048V3.8058L11.68 3.8142V2.4048C11.68 2.35752 11.6707 2.31071 11.6526 2.26703C11.6345 2.22336 11.608 2.18367 11.5746 2.15024C11.5411 2.11681 11.5015 2.09029 11.4578 2.0722C11.4141 2.05411 11.3673 2.0448 11.32 2.0448H9.69402V2.6022C9.69402 2.71359 9.64977 2.82042 9.571 2.89918C9.49224 2.97795 9.38541 3.0222 9.27402 3.0222C9.16263 3.0222 9.0558 2.97795 8.97703 2.89918C8.89827 2.82042 8.85402 2.71359 8.85402 2.6022V2.0448H4.34382V2.5968C4.34382 2.70819 4.29957 2.81502 4.2208 2.89378C4.14204 2.97255 4.03521 3.0168 3.92382 3.0168C3.81243 3.0168 3.7056 2.97255 3.62683 2.89378C3.54807 2.81502 3.50382 2.70819 3.50382 2.5968V2.0448Z"
                                          fill="black"
                                          fill-opacity="0.8"
                                        />
                                      </svg>{" "}
                                      &nbsp;&nbsp;2023 / 08 / 31 |
                                      Thursday&nbsp;&nbsp;
                                      <p></p>
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
                                  </p>
                                </div>
                                <p className="ptnpara ms-5 mb-0">
                                  <p className="ms-5 ">LKRZ000.00</p>
                                </p>
                                <div className="ms-md-auto d-md-flex align-items-end">
                                  <div className="box d-flex align-items-center">
                                    <p className="ptnpara ms-2 mb-0">
                                      <button
                                        className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                                        type="submit"
                                        onClick={handleShow}
                                      >
                                        Rate Now
                                      </button>
                                      <Modal
                                        size="m"
                                        show={show}
                                        onHide={handleClose}
                                        aria-labelledby="example-custom-modal-styling-title"
                                        centered
                                      >
                                        <Modal.Body className="text-center">
                                          <h3 className="mb-2 p-2">
                                            Rate Mentor
                                          </h3>
                                          <img
                                            src={pro4}
                                            alt="Tickimg"
                                            className="img-fluid mb-4"
                                            style={{
                                              width: "100px",
                                              height: "100px",
                                            }}
                                          />
                                          <h3 className="">Julius Aguirre</h3>
                                          <p className="mt-1 mb-4">
                                            Senior Software Engineer at
                                            Innovation Lanka
                                          </p>
                                          <div>
                                            {stars.map((_, index) => {
                                              return (
                                                <FaStar
                                                  key={index}
                                                  size={30}
                                                  style={{
                                                    marginRight: 10,
                                                    cursor: "pointer",
                                                  }}
                                                  color={
                                                    (hoverValue ||
                                                      currentValue) > index
                                                      ? colors.orange
                                                      : colors.grey
                                                  }
                                                  onClick={() =>
                                                    handleClick(index + 1)
                                                  }
                                                />
                                              );
                                            })}
                                          </div>
                                          <br></br>
                                          <div className="mb-4">
                                            <button
                                              className="btn  custom-button-NotNow my-1 my-sm-3 "
                                              type="submit"
                                            >
                                              Not Now
                                            </button>
                                            <button
                                              className="btn  custom-button-Rate my-1 my-sm-3"
                                              type="submit"
                                            >
                                              Publish Rate
                                            </button>
                                          </div>
                                        </Modal.Body>
                                      </Modal>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Requested Section End*/}
                      {/*Received Section Start*/}
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
                      {/*Received Section End */}
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

export default HistoryPage;
