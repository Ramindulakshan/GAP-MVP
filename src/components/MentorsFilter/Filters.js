import React from "react";
import "./Mentors.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import { BsStarFill, BsStar } from "react-icons/bs";
import prolog from "./img/pro1.png";
import pro2 from "./img/pro2.png";
import pro3 from "./img/pro3.png";
import pro4 from "./img/pro4.png";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
function Mentors() {
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
              className="main-box"
              style={{
                border: "2px solid #63636380",
                width: "100%",
                height: "auto",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1">
                  <h5 className="mb-0">Mentors</h5>
                </div>
                <div>
                  <button
                    style={{
                      border: "2px solid #63636380",

                      padding: "10px 20px",
                      borderRadius: "20px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                    >
                      <path
                        d="M15.2 1.58824H0.8C0.587827 1.58824 0.384344 1.50457 0.234315 1.35564C0.0842855 1.20672 0 1.00473 0 0.794118C0 0.583505 0.0842855 0.381518 0.234315 0.232592C0.384344 0.0836656 0.587827 0 0.8 0H15.2C15.4122 0 15.6157 0.0836656 15.7657 0.232592C15.9157 0.381518 16 0.583505 16 0.794118C16 1.00473 15.9157 1.20672 15.7657 1.35564C15.6157 1.50457 15.4122 1.58824 15.2 1.58824ZM12.5333 5.29412H3.46667C3.25449 5.29412 3.05101 5.21045 2.90098 5.06153C2.75095 4.9126 2.66667 4.71061 2.66667 4.5C2.66667 4.28939 2.75095 4.0874 2.90098 3.93847C3.05101 3.78955 3.25449 3.70588 3.46667 3.70588H12.5333C12.7455 3.70588 12.949 3.78955 13.099 3.93847C13.249 4.0874 13.3333 4.28939 13.3333 4.5C13.3333 4.71061 13.249 4.9126 13.099 5.06153C12.949 5.21045 12.7455 5.29412 12.5333 5.29412ZM9.33333 9H6.66667C6.45449 9 6.25101 8.91633 6.10098 8.76741C5.95095 8.61848 5.86667 8.4165 5.86667 8.20588C5.86667 7.99527 5.95095 7.79328 6.10098 7.64436C6.25101 7.49543 6.45449 7.41177 6.66667 7.41177H9.33333C9.54551 7.41177 9.74899 7.49543 9.89902 7.64436C10.049 7.79328 10.1333 7.99527 10.1333 8.20588C10.1333 8.4165 10.049 8.61848 9.89902 8.76741C9.74899 8.91633 9.54551 9 9.33333 9Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>{" "}
                    &nbsp;&nbsp;Filter
                  </button>
                </div>
              </div>
              <div class="card">
                <h5 className="card-title fw-bold">Mentoring fields</h5>
                <br></br>
                <div className="container mt-3">
                  <div className="d-inline-block">
                    <button className="pbtn289">
                      IT &nbsp;&nbsp;{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      >
                        <path
                          d="M0.77955 0.601815C0.958599 0.42282 1.20141 0.322266 1.45459 0.322266C1.70776 0.322266 1.95057 0.42282 2.12962 0.601815L5.50576 3.97796L8.8819 0.601815C9.06198 0.427893 9.30316 0.331655 9.55351 0.33383C9.80385 0.336006 10.0433 0.43642 10.2203 0.613446C10.3974 0.790472 10.4978 1.02995 10.5 1.28029C10.5021 1.53063 10.4059 1.77181 10.232 1.95189L6.85584 5.32803L10.232 8.70417C10.4059 8.88425 10.5021 9.12543 10.5 9.37577C10.4978 9.62611 10.3974 9.86559 10.2203 10.0426C10.0433 10.2196 9.80385 10.3201 9.55351 10.3222C9.30316 10.3244 9.06198 10.2282 8.8819 10.0542L5.50576 6.6781L2.12962 10.0542C1.94955 10.2282 1.70837 10.3244 1.45802 10.3222C1.20768 10.3201 0.968206 10.2196 0.791181 10.0426C0.614155 9.86559 0.51374 9.62611 0.511565 9.37577C0.509389 9.12543 0.605627 8.88425 0.77955 8.70417L4.15569 5.32803L0.77955 1.95189C0.600554 1.77284 0.5 1.53003 0.5 1.27685C0.5 1.02368 0.600554 0.780865 0.77955 0.601815Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    &nbsp;&nbsp;
                    <button className="pbtn289">
                      Programming &nbsp;&nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      >
                        <path
                          d="M0.77955 0.601815C0.958599 0.42282 1.20141 0.322266 1.45459 0.322266C1.70776 0.322266 1.95057 0.42282 2.12962 0.601815L5.50576 3.97796L8.8819 0.601815C9.06198 0.427893 9.30316 0.331655 9.55351 0.33383C9.80385 0.336006 10.0433 0.43642 10.2203 0.613446C10.3974 0.790472 10.4978 1.02995 10.5 1.28029C10.5021 1.53063 10.4059 1.77181 10.232 1.95189L6.85584 5.32803L10.232 8.70417C10.4059 8.88425 10.5021 9.12543 10.5 9.37577C10.4978 9.62611 10.3974 9.86559 10.2203 10.0426C10.0433 10.2196 9.80385 10.3201 9.55351 10.3222C9.30316 10.3244 9.06198 10.2282 8.8819 10.0542L5.50576 6.6781L2.12962 10.0542C1.94955 10.2282 1.70837 10.3244 1.45802 10.3222C1.20768 10.3201 0.968206 10.2196 0.791181 10.0426C0.614155 9.86559 0.51374 9.62611 0.511565 9.37577C0.509389 9.12543 0.605627 8.88425 0.77955 8.70417L4.15569 5.32803L0.77955 1.95189C0.600554 1.77284 0.5 1.53003 0.5 1.27685C0.5 1.02368 0.600554 0.780865 0.77955 0.601815Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    &nbsp;&nbsp;
                    <button className="pbtn289">
                      Technology &nbsp;&nbsp;{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      >
                        <path
                          d="M0.77955 0.601815C0.958599 0.42282 1.20141 0.322266 1.45459 0.322266C1.70776 0.322266 1.95057 0.42282 2.12962 0.601815L5.50576 3.97796L8.8819 0.601815C9.06198 0.427893 9.30316 0.331655 9.55351 0.33383C9.80385 0.336006 10.0433 0.43642 10.2203 0.613446C10.3974 0.790472 10.4978 1.02995 10.5 1.28029C10.5021 1.53063 10.4059 1.77181 10.232 1.95189L6.85584 5.32803L10.232 8.70417C10.4059 8.88425 10.5021 9.12543 10.5 9.37577C10.4978 9.62611 10.3974 9.86559 10.2203 10.0426C10.0433 10.2196 9.80385 10.3201 9.55351 10.3222C9.30316 10.3244 9.06198 10.2282 8.8819 10.0542L5.50576 6.6781L2.12962 10.0542C1.94955 10.2282 1.70837 10.3244 1.45802 10.3222C1.20768 10.3201 0.968206 10.2196 0.791181 10.0426C0.614155 9.86559 0.51374 9.62611 0.511565 9.37577C0.509389 9.12543 0.605627 8.88425 0.77955 8.70417L4.15569 5.32803L0.77955 1.95189C0.600554 1.77284 0.5 1.53003 0.5 1.27685C0.5 1.02368 0.600554 0.780865 0.77955 0.601815Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <br></br>
                <Form className="mx-auto">
                  <div className="position-relative ser">
                    <FormControl
                      type="text"
                      placeholder="Find A Mentor"
                      className="w-100"
                    />
                    <FaSearch
                      className="position-absolute top-50 translate-middle-y text-muted"
                      style={{ right: "15px" }}
                    />
                  </div>
                </Form>
                <br></br>
                <div className="ms-md-auto d-md-flex align-items-end">
                  <div className="box d-flex align-items-center">
                    <p className="ptnpara ms-2 mb-0">
                      <button
                        className="custom-button218 custom-button-reset my-1 my-sm-3 t"
                        type="submit"
                      >
                        Cancel
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        className="custom-button2136 custom-button-reset my-1 my-sm-3 t"
                        type="submit"
                      >
                        Filter
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="d-md-flex">
                  {/* Left Column for Image */}
                  <Col xs={12} md={2} className="mx-auto">
                    <img src={prolog} rounded alt="propic" className="imgr" />
                  </Col>

                  {/* Right Column for Other Details */}
                  <div className="card-body d-md-flex">
                    <div className="text-section">
                      <h5 className="card-title fw-bold">Mr. Julius Aguirre</h5>
                      <p className="card-para">
                        Senior Software Engineer at Innovation Lanka
                        <br />
                        <div className="d-inline-block">
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStar className="text-warning" />
                        </div>
                      </p>
                      <div className="container mt-3">
                        <div className="d-inline-block">
                          <button className="pbtn">IT</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Programming</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Technology</button>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="ms-md-auto d-md-flex align-items-end">
                      <div className="box d-flex align-items-center">
                        <p className="ptnpara ms-2 mb-0">
                          <button
                            className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Request
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="d-md-flex">
                  {/* Left Column for Image */}
                  <Col xs={12} md={2} className="mx-auto">
                    <img src={pro2} rounded alt="propic" className="imgr" />
                  </Col>

                  {/* Right Column for Other Details */}
                  <div className="card-body d-md-flex">
                    <div className="text-section">
                      <h5 className="card-title fw-bold">Sasha Fernando</h5>
                      <p className="card-para">
                        Senior Software Engineer at Innovation Lanka
                        <br />
                        <div className="d-inline-block">
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStar className="text-warning" />
                        </div>
                      </p>
                      <div className="container mt-3">
                        <div className="d-inline-block">
                          <button className="pbtn">IT</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Programming</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Technology</button>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="ms-md-auto d-md-flex align-items-end">
                      <div className="box d-flex align-items-center">
                        <p className="ptnpara ms-2 mb-0">
                          <button
                            className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Request
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="d-md-flex">
                  {/* Left Column for Image */}
                  <Col xs={12} md={2} className="mx-auto">
                    <img src={pro3} rounded alt="propic" className="imgr" />
                  </Col>

                  {/* Right Column for Other Details */}
                  <div className="card-body d-md-flex">
                    <div className="text-section">
                      <h5 className="card-title fw-bold">Amanda Silva</h5>
                      <p className="card-para">
                        Senior Software Engineer at Innovation Lanka
                        <br />
                        <div className="d-inline-block">
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStar className="text-warning" />
                        </div>
                      </p>
                      <div className="container mt-3">
                        <div className="d-inline-block">
                          <button className="pbtn">IT</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Programming</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Technology</button>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="ms-md-auto d-md-flex align-items-end">
                      <div className="box d-flex align-items-center">
                        <p className="ptnpara ms-2 mb-0">
                          <button
                            className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Request
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="d-md-flex">
                  {/* Left Column for Image */}
                  <Col xs={12} md={2} className="mx-auto">
                    <img src={pro4} rounded alt="propic" className="imgr" />
                  </Col>

                  {/* Right Column for Other Details */}
                  <div className="card-body d-md-flex">
                    <div className="text-section">
                      <h5 className="card-title fw-bold">Jerome Williams</h5>
                      <p className="card-para">
                        Senior Software Engineer at Innovation Lanka
                        <br />
                        <div className="d-inline-block">
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStar className="text-warning" />
                        </div>
                      </p>
                      <div className="container mt-3">
                        <div className="d-inline-block">
                          <button className="pbtn">IT</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Programming</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Technology</button>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="ms-md-auto d-md-flex align-items-end">
                      <div className="box d-flex align-items-center">
                        <p className="ptnpara ms-2 mb-0">
                          <button
                            className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Request
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Mentors;
