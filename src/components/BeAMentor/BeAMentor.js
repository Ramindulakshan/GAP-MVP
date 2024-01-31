import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Homepage_image from "../HomePage/Img/homepage.png";
import "../BeAMentor/BeAMentor.css";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import Student_Image from "../HomePage/Img/Student.png";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Select from "react-dropdown-select";

function BeAMentor() {
  const handleClose = () => {
    setShow(false);
  };
  const [text, setText] = useState("");
  const maxCharacters = 250;

  const handleTextChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxCharacters) {
      setText(inputValue);
    }
  };
  const options1 = [
    { id: "Time Management", name: 1 },
    { id: "Content Writing", name: 2 },
    { id: "Data Science", name: 3 },
    { id: "Design", name: 4 },
    { id: "Marketing", name: 5 },
  ];

  const options2 = [
    { id: "Adobe Photoshop", name: 1 },
    { id: "Figma", name: 2 },
  ];

  const options3 = [
    { id: "Adobe Photoshop", name: 1 },
    { id: "Figma", name: 2 },
  ];

  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue);
  };

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show, setShow] = useState(true);

  return (
    <section>
      <div className="d-flex">
        <div className="col-lg-3 vh-100">
          <div className="text-center">
            <img
              src={GAP_Image}
              alt="YourImage"
              className="img-fluid custom-image-Gap"
            />
          </div>

          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <ListGroup>
                <ListGroup.Item
                  action
                  variant="light"
                  className="list-group-item-custom"
                  href="#link1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    fill="currentColor"
                    class="bi bi-house-door mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                  </svg>
                  Home
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  action
                  variant="light"
                  className="list-group-item-custom"
                  href="#link2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    fill="currentColor"
                    class="bi bi-people mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                  Mentoring Session
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  action
                  variant="light"
                  className="list-group-item-custom"
                  href="#link3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    fill="currentColor"
                    class="bi bi-briefcase mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  Jobs & Volunteering
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  action
                  variant="light"
                  className="list-group-item-custom"
                  href="#link4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    fill="currentColor"
                    class="bi bi-display mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                  </svg>
                  Webinars
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  action
                  variant="light"
                  className="list-group-item-custom"
                  href="#link5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    fill="currentColor"
                    class="bi bi-journal-bookmark mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8"
                    />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                  </svg>
                  Programs For You
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  action
                  variant="light"
                  className="list-group-item-custom"
                  href="#link6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    fill="currentColor"
                    class="bi bi-box-arrow-in-down-left mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0z"
                    />
                  </svg>
                  Applied Events
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  action
                  variant="light"
                  className="list-group-item-custom"
                  href="#link7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    fill="currentColor"
                    class="bi bi-bookmark mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                  </svg>
                  Saved Events
                </ListGroup.Item>
                <br />
                <ListGroup.Item
                  action
                  variant="light"
                  className="list-group-item-custom"
                  href="#link8"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="18"
                    fill="currentColor"
                    class="bi bi-gear mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                  Settings
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Tab.Container>
        </div>
        <br />

        <div className="col-lg-9 vh-100 overflow-auto ">
          <Navbar className="mt-3 justify-content-between">
            <Form inline>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Find a Mentor"
                  className="mr-sm-3 custom-form-control"
                />
              </Col>
            </Form>
            <Navbar.Brand href="#home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                fill="currentColor"
                class="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>

              <img
                src={Student_Image}
                width="45"
                height="45"
                className="d-inline-block "
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Navbar>
          <div className="custom-container2 mt-3">
            <div className="d-flex justify-content-between  ">
              <h4 className="m-3">Start Earning By Being A Mentor</h4>
            </div>
            <div className="col-lg-12 custom-Point2 d-flex mt-4 m-3">
              <dic className="col-lg-3 mt-5">
                <button
                  className="btn custom-button-Total2 my-1 my-sm-3"
                  type="submit"
                >
                  30 Minutes
                </button>
                <h4 className="custom-text-price">x.00 /=</h4>
              </dic>
              <dic className="col-lg-3 mt-5">
                <button
                  className="btn custom-button-Total2 my-1 my-sm-3"
                  type="submit"
                >
                  45 Minutes
                </button>
                <h4 className="custom-text-price">Y.00 /=</h4>
              </dic>
              <dic className="col-lg-3 mt-5">
                <button
                  className="btn custom-button-Total2 my-1 my-sm-3"
                  type="submit"
                >
                  {" "}
                  1 Hour{" "}
                </button>
                <h4 className="custom-text-price2">Z.00 /=</h4>
              </dic>
              <div className="col-lg-3">
                <img
                  src={Homepage_image}
                  alt="YourImage"
                  className="img-fluid mt-2"
                  style={{ objectFit: "cover", width: "100%", height: "96%" }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5 m-1">
              <h4 className="custom-text5">
                When You Become A Mentor, You'll Begin At Level 5 With A Bronze
                Badge. Your Starting Payment Will Be As Above. As You Progress
                And Achieve Higher Badges And Levels, Your Payment Will Increase
                Accordingly.
              </h4>
            </div>
            <div className="d-flex justify-content-between mt-5 m-3 custom-container">
              <h4 className="custom-text">Be a mentor</h4>
              <div>
                <form>
                  <div
                    className="custom-switch-container d-flex align-items-center"
                    style={{ marginRight: "10px" }}
                  >
                    <input
                      type="checkbox"
                      id="custom-switch"
                      className="custom-switch-input"
                      checked={switchValue}
                      onChange={handleSwitchChange}
                    />
                    <label
                      htmlFor="custom-switch"
                      className="custom-switch-label"
                    ></label>
                  </div>
                </form>

                {switchValue && (
                  <div>
                    <p>New Model Content</p>
                  </div>
                )}
              </div>
            </div>

            <div className="custom-container2 m-3">
              <div className="mb-1">
                <h4 className="custom-text">
                  Add Your Preferred Mentoring Fields*
                </h4>
              </div>
              <br />
              <br />

              <div className="mb-3">
                <Form>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Preferred mentoring fields"
                      className="mr-sm-3 custom-form-control"
                      style={{ width: "95%" }}
                    />
                  </Col>
                </Form>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4 m-3 custom-container">
              <h4 className="custom-text">Set Your Weekly Schedule</h4>
              <button className="btn custom-button-slot " onClick={handleShow}>
                Time Slot
              </button>
            </div>

            {/* Be A Mentor Page | Take a break pop up message */}
            {/* <Modal
                            size="m"
                            show={show}
                            onHide={handleClose}
                            aria-labelledby="example-custom-modal-styling-title"
                            centered
                        >
                            <Modal.Body className="text-center mt-4">

                                <img
                                    src={TakeABreak}
                                    alt="Tickimg"
                                    className="img-fluid mb-4"
                                    style={{ width: "100px", height: "100px" }}
                                />

                                <p className="mt-4 mb-4 p-2">
                                    Are you sure you want to take a Break from being a mentor ?
                                </p>

                                <button className='btn custom-button-slot p-2 m-2' onClick={handleClose}>NO</button>
                                <button className='btn custom-button-slot p-2 ' onClick={handleClose}>YES</button>
                            </Modal.Body>
                            
                        </Modal> */}

            {/* Be A Mentor Page |  error message                     */}
            {/* <Modal
                            size="m"
                            show={show}
                            onHide={handleClose}
                            aria-labelledby="example-custom-modal-styling-title"
                            centered
                        >
                            

                            <Modal.Body  className="text-center mt-4">
                        
                                <img
                                  src={Error}
                                    alt="Tickimg"
                                    className="img-fluid mb-4"
                                    style={{ width: "100px", height: "100px" }}
                                /> 
                               
                                <h4 className="mb-2 p-2">An Error Occurred</h4>
                             
                                <p className="mt-4 mb-4 p-2">
                                Since you have already scheduled weekly time slots, we can't let you take a break
                                </p>

                               
                            </Modal.Body>
                        </Modal> */}

            {/* Be a mentor Page | admin approval waiting popup */}
            {/* <Modal
                            size="m"
                            show={show}
                            onHide={handleClose}
                            aria-labelledby="example-custom-modal-styling-title"
                            centered
                        >
                            <Modal.Header closeButton></Modal.Header>

                            <Modal.Body  className="text-center">
                                <img
                                  src={ReqSuccess}
                                    alt="Tickimg"
                                    className="img-fluid mb-4"
                                    style={{ width: "100px", height: "100px" }}
                                /> 
                            
                                <h4 className="mb-2 p-2">Your request has been successfully sent. Please wait for approval from the admin.</h4>
                       
                                <p className="mt-4 mb-4 p-2">
                                We will notify you once it is done
                                </p>
                              
                            </Modal.Body>
                        </Modal> */}

            {/* submit your mentorship application */}
            <Modal
              size="lg"
              show={show}
              onHide={handleClose}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Body className="m-4 d-flex justify-content-center align-items-center">
                <div>
                  <h1 className="text-center mt-3 mb-4">
                    Submit Your Mentorship Application
                  </h1>

                  <Form>
                    <div class="row">
                      <div class="col-md-6">
                        <Form.Label>Years Of Experience *</Form.Label>
                        <Form.Select>
                          <option>Years</option>
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Select>
                      </div>

                      <div class="col-md-6">
                        <Form.Label>.</Form.Label>
                        <Form.Select>
                          <option>Months</option>
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Select>
                      </div>
                    </div>

                    <Form.Label htmlFor="basic-url">LinkedIn URL *</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon3">
                        linkedin.com/in/
                      </InputGroup.Text>

                      <Form.Control
                        id="basic-url"
                        aria-describedby="basic-addon3"
                        placeholder="Username"
                      />
                    </InputGroup>
                    <Form.Label>Select Major Expertise *</Form.Label>
                    <Select
                      name="select"
                      options={options1}
                      labelField="id"
                      valueField="name"
                      multi
                    ></Select>

                    <Form.Label className="mt-3">
                      Select Tools Which You Are Expert *
                    </Form.Label>
                    <Select
                      name="Select"
                      options={options2}
                      labelField="id"
                      valueField="name"
                      multi
                    ></Select>

                    <Form.Label className="mt-3">
                      Select Skill Which You Have Gathered *
                    </Form.Label>
                    <Select
                      name="Select"
                      options={options3}
                      labelField="id"
                      valueField="name"
                      multi
                    ></Select>

                    <Form.Group
                      className="mt-3 mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={text}
                        onChange={handleTextChange}
                      />
                      <div
                        className="text-muted"
                        style={{ position: "absolute", right: 50 }}
                      >
                        {`${text.length}/${maxCharacters}`}
                      </div>
                    </Form.Group>
                  </Form>

                  <div className="text-center">
                    <button
                      className="btn custom-button-reset my-1 my-sm-3"
                      type="submit"
                    >
                      Send a request
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>

            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}

export default BeAMentor;
