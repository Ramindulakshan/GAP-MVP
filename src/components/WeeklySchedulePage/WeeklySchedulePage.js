import React, { useState } from "react";
import "./WeeklySchedulePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

function WeeklySchedulePage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div>
              <div
                style={{
                  borderRadius: "10px",
                  background: "#FFF",
                  border: "2px solid gray",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <h5
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "30px 0 0 30px",
                  }}
                >
                  Weekly Schedule
                </h5>
                <h5
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontWeight: "bold",
                    padding: "30px 0 0 30px",
                  }}
                >
                  Please fill your weekly schedule
                </h5>

                <div className="calen">
                  <div
                    className="container mt-0 "
                    style={{
                      width: "80vw",
                    }}
                  >
                    <div className="calbox ">
                      <div className="yerm">September 2023</div>
                      <div className="borf">
                        <div className="row ">
                          <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                            <p className="pbtn2wwnew">Mon</p>
                            <p className="mb-0">11</p>
                          </div>
                          <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                            <p className="pbtn2wwnew">Thu</p>
                            <p
                              className="mb-0"
                              style={{
                                backgroundColor: "#2A2A72",
                                color: "white",
                                padding: "5px",
                                borderRadius: "5px",
                              }}
                            >
                              12
                            </p>
                          </div>
                          <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                            <p className="pbtn2wwnew">Wed</p>
                            <p className="mb-0">13</p>
                          </div>
                          <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                            <p className="pbtn2wwnew">Thu</p>
                            <p className="mb-0">14</p>
                          </div>
                          <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                            <p className="pbtn2wwnew">Fri</p>
                            <p className="mb-0">15</p>
                          </div>
                          <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                            <p className="pbtn2wwnew">Sat</p>
                            <p className="mb-0">16</p>
                          </div>
                          <div className="col-12 col-md-1 text-center">
                            <p className="pbtn2wwnew">Sun</p>
                            <p className="mb-0">17</p>
                          </div>
                        </div>

                        <div className="addslot">
                          <div className="row ">
                            <div className="col-12 col-md-11 text-start mb-2 mb-md-0">
                              <h1 className="slottopic">Add Time Slot</h1>
                            </div>
                            <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                              <span className="slot">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  viewBox="0 0 30 30"
                                  fill="none"
                                  cursor="pointer"
                                  onChange={handleShow}
                                  onClick={handleShow}
                                >
                                  <rect
                                    width="30"
                                    height="30"
                                    rx="2"
                                    fill="#2A2A72"
                                  />
                                  <path
                                    d="M21.3138 15.4375H14.7593V22H12.8865V15.4375H6.33203V13.5625H12.8865V7H14.7593V13.5625H21.3138V15.4375Z"
                                    fill="white"
                                  />
                                </svg>
                                <Modal
                                  size="lg"
                                  show={show}
                                  onHide={handleClose}
                                  aria-labelledby="example-custom-modal-styling-title"
                                >
                                  <Modal.Header closeButton></Modal.Header>

                                  <Modal.Body>
                                    <Modal.Title
                                      id="example-custom-modal-styling-title"
                                      className="text-center"
                                    >
                                      <h1 className="mb-1">Add time slot</h1>
                                      <h5 className="mb-1">
                                        Select your preferred time slot
                                      </h5>
                                    </Modal.Title>
                                    <div className="p-4"></div>
                                    <div className="text-center">
                                      <h2 className="sele-h">
                                        Select a Meeting Duration
                                      </h2>

                                      <div className="container mt-2 btnsettim">
                                        <div className="row">
                                          <div className="col-sm-4 col-md-4 col-lg-2 text-center mb-2">
                                            <button className="pbtn2">
                                              30&nbsp;Minutes
                                            </button>
                                          </div>
                                          <div className="col-sm-4 col-md-4 col-lg-2 text-center mb-2">
                                            <button
                                              className="pbtn2"
                                              style={{
                                                backgroundColor: "#2A2A72",
                                                color: "white",
                                              }}
                                            >
                                              45&nbsp;Minutes
                                            </button>
                                          </div>
                                          <div className="col-sm-4 col-md-4 col-lg-2 text-center mb-2">
                                            <button className="pbtn2">
                                              1&nbsp;Hour
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <br></br>
                                      <h2 className="sele-h">
                                        Select a start time
                                      </h2>
                                      <input
                                        type="time"
                                        className="timinpt"
                                      ></input>
                                      <br></br>
                                      <button
                                        className="custom-buttoncansl custom-button-reset my-1 my-sm-3 t"
                                        type="submit"
                                        onClick={handleClose}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="custom-buttonadd custom-button-reset my-1 my-sm-3 t"
                                        type="submit"
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </Modal.Body>
                                </Modal>
                              </span>
                            </div>
                          </div>
                          <div className="container mt-3">
                            <div className="d-inline-block">
                              <button className="aelectbtnset">
                                06 00 PM - 7 00 PM&nbsp;&nbsp;{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                >
                                  <path
                                    d="M0.27955 0.27955C0.458599 0.100554 0.701411 0 0.954587 0C1.20776 0 1.45057 0.100554 1.62962 0.27955L5.00576 3.65569L8.3819 0.27955C8.56198 0.105627 8.80316 0.00938937 9.05351 0.0115648C9.30385 0.0137402 9.54332 0.114155 9.72035 0.291181C9.89737 0.468206 9.99779 0.70768 9.99996 0.958023C10.0021 1.20837 9.9059 1.44955 9.73198 1.62962L6.35584 5.00576L9.73198 8.3819C9.9059 8.56198 10.0021 8.80316 9.99996 9.05351C9.99779 9.30385 9.89737 9.54332 9.72035 9.72035C9.54332 9.89737 9.30385 9.99779 9.05351 9.99996C8.80316 10.0021 8.56198 9.9059 8.3819 9.73198L5.00576 6.35584L1.62962 9.73198C1.44955 9.9059 1.20837 10.0021 0.958023 9.99996C0.70768 9.99779 0.468206 9.89737 0.291181 9.72035C0.114155 9.54332 0.0137402 9.30385 0.0115648 9.05351C0.00938937 8.80316 0.105627 8.56198 0.27955 8.3819L3.65569 5.00576L0.27955 1.62962C0.100554 1.45057 0 1.20776 0 0.954587C0 0.701411 0.100554 0.458599 0.27955 0.27955Z"
                                    fill="#2A2A72"
                                  />
                                </svg>
                              </button>
                              &nbsp;&nbsp;
                              <button className="aelectbtnset">
                                08 00 PM - 9 00 PM &nbsp;&nbsp;
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                >
                                  <path
                                    d="M0.27955 0.27955C0.458599 0.100554 0.701411 0 0.954587 0C1.20776 0 1.45057 0.100554 1.62962 0.27955L5.00576 3.65569L8.3819 0.27955C8.56198 0.105627 8.80316 0.00938937 9.05351 0.0115648C9.30385 0.0137402 9.54332 0.114155 9.72035 0.291181C9.89737 0.468206 9.99779 0.70768 9.99996 0.958023C10.0021 1.20837 9.9059 1.44955 9.73198 1.62962L6.35584 5.00576L9.73198 8.3819C9.9059 8.56198 10.0021 8.80316 9.99996 9.05351C9.99779 9.30385 9.89737 9.54332 9.72035 9.72035C9.54332 9.89737 9.30385 9.99779 9.05351 9.99996C8.80316 10.0021 8.56198 9.9059 8.3819 9.73198L5.00576 6.35584L1.62962 9.73198C1.44955 9.9059 1.20837 10.0021 0.958023 9.99996C0.70768 9.99779 0.468206 9.89737 0.291181 9.72035C0.114155 9.54332 0.0137402 9.30385 0.0115648 9.05351C0.00938937 8.80316 0.105627 8.56198 0.27955 8.3819L3.65569 5.00576L0.27955 1.62962C0.100554 1.45057 0 1.20776 0 0.954587C0 0.701411 0.100554 0.458599 0.27955 0.27955Z"
                                    fill="#2A2A72"
                                  />
                                </svg>
                              </button>
                              &nbsp;&nbsp;
                              <button className="aelectbtnset">
                                10 00 PM - 11 00 PM &nbsp;&nbsp;{" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                >
                                  <path
                                    d="M0.27955 0.27955C0.458599 0.100554 0.701411 0 0.954587 0C1.20776 0 1.45057 0.100554 1.62962 0.27955L5.00576 3.65569L8.3819 0.27955C8.56198 0.105627 8.80316 0.00938937 9.05351 0.0115648C9.30385 0.0137402 9.54332 0.114155 9.72035 0.291181C9.89737 0.468206 9.99779 0.70768 9.99996 0.958023C10.0021 1.20837 9.9059 1.44955 9.73198 1.62962L6.35584 5.00576L9.73198 8.3819C9.9059 8.56198 10.0021 8.80316 9.99996 9.05351C9.99779 9.30385 9.89737 9.54332 9.72035 9.72035C9.54332 9.89737 9.30385 9.99779 9.05351 9.99996C8.80316 10.0021 8.56198 9.9059 8.3819 9.73198L5.00576 6.35584L1.62962 9.73198C1.44955 9.9059 1.20837 10.0021 0.958023 9.99996C0.70768 9.99779 0.468206 9.89737 0.291181 9.72035C0.114155 9.54332 0.0137402 9.30385 0.0115648 9.05351C0.00938937 8.80316 0.105627 8.56198 0.27955 8.3819L3.65569 5.00576L0.27955 1.62962C0.100554 1.45057 0 1.20776 0 0.954587C0 0.701411 0.100554 0.458599 0.27955 0.27955Z"
                                    fill="#2A2A72"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklySchedulePage;
