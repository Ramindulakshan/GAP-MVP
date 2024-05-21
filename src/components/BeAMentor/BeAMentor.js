import Form from "react-bootstrap/Form";
import Homepage_image from "../HomePage/Img/homepage.png";
import "../BeAMentor/BeAMentor.css";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Select from "react-dropdown-select";
import axios from "axios";
import { backEndURL } from "../../backendUrl";

function BeAMentor() {
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
  const [isMentor, setIsMentor] = useState(null);

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue);
  };

  /*LogOut Model*/
  const [show2, setShow2] = useState(false);
  /*LogOut Model*/
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    const navbar = document.getElementById("mySidebar");
    const screenWidth = window.innerWidth;

    // Check if the screen width is less than 1250px (responsive view)
    if (screenWidth < 1250) {
      navbar.style.display = "none"; // Hide navbar in responsive view
    } else {
      navbar.style.display = "block"; // Show navbar in desktop view
    }

    // Function to check if the user is a mentor
    const checkIfMentor = async () => {
      try {
        const response = await axios.get(`${backEndURL}/checkMentorStatus`);
        if (response.data.status === "ok") {
          setIsMentor(response.data.isMentor);
        }
      } catch (error) {
        console.error("Error checking mentor status:", error);
        setIsMentor(false);
      }
    };

    checkIfMentor();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="nav-colum" id="mySidebar">
            <SideBar />
          </div>

          <div className="col-lg-9 vh-100 overflow-auto">
            <div>
              <NavBar />
              <br></br>
              <br></br>
              <div className="custom-container2 mt-3">
                <div className="d-flex justify-content-between">
                  <h4 className="m-3">Start Earning By Being A Mentor</h4>
                </div>
                <div className="col-lg-12 custom-Point2 d-flex mt-4 m-3">
                  <div className="col-lg-3 mt-5">
                    <button
                      className="btn custom-button-Total2 my-1 my-sm-3"
                      type="submit"
                    >
                      30 Minutes
                    </button>
                    <h4 className="custom-text-price">x.00 /=</h4>
                  </div>
                  <div className="col-lg-3 mt-5">
                    <button
                      className="btn custom-button-Total2 my-1 my-sm-3"
                      type="submit"
                    >
                      45 Minutes
                    </button>
                    <h4 className="custom-text-price">Y.00 /=</h4>
                  </div>
                  <div className="col-lg-3 mt-5">
                    <button
                      className="btn custom-button-Total2 my-1 my-sm-3"
                      type="submit"
                    >
                      1 Hour
                    </button>
                    <h4 className="custom-text-price2">Z.00 /=</h4>
                  </div>
                  <div className="col-lg-3">
                    <img
                      src={Homepage_image}
                      alt="YourImage"
                      className="img-fluid mt-2"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "96%",
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-5 m-1">
                  <h4 className="custom-text5">
                    When You Become A Mentor, You'll Begin At Level 5 With A
                    Bronze Badge. Your Starting Payment Will Be As Above. As You
                    Progress And Achieve Higher Badges And Levels, Your Payment
                    Will Increase Accordingly.
                  </h4>
                </div>
                {isMentor === true && (
                  <div className="alert alert-info mt-3">
                    You are already a mentor.
                  </div>
                )}
                {isMentor === false && (
                  <div className="alert alert-warning mt-3">
                    You are not a mentor yet. Apply now to become one!
                  </div>
                )}
                {isMentor === null && (
                  <div className="alert alert-info mt-3">
                    Loading mentor status...
                  </div>
                )}

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
                          checked={isMentor ? switchValue : false}
                          onChange={handleSwitchChange}
                          disabled={isMentor === true || isMentor === null}
                        />
                        <label
                          htmlFor="custom-switch"
                          className="custom-switch-label"
                        ></label>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="custom-container2 m-3">
                  <div className="brncon">
                    <button
                      className="btn custom-button-slot withsetbtn"
                      onClick={handleShow2}
                    >
                      Application
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4 m-3 custom-container">
                  <h4 className="custom-text">Set Your Weekly Schedule</h4>
                  <button className="btn custom-button-slot">Time Slot</button>
                </div>

                <Modal
                  size="lg"
                  show={show2}
                  onHide={handleClose2}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Body className="m-4 d-flex justify-content-center align-items-center">
                    <div>
                      <h1 className="text-center mt-3 mb-4">
                        Submit Your Mentorship Application
                      </h1>

                      <Form>
                        <div className="row">
                          <div className="col-md-6">
                            <Form.Label>Years Of Experience *</Form.Label>
                            <Form.Select>
                              <option>Years</option>
                           
                              <option>2020</option>
                              <option>2021</option>
                              <option>2022</option>
                              <option>2023</option>
                              <option>2024</option>
                              <option>2025</option>
                              <option>2026</option>
                              <option>2027</option>
                             
                            </Form.Select>
                          </div>

                          <div className="col-md-6">
                            <Form.Label>.</Form.Label>
                            <Form.Select>
                              <option>Months</option>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </Form.Select>
                          </div>
                        </div>

                        <Form.Label htmlFor="basic-url">
                          LinkedIn URL *
                        </Form.Label>
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
                        <Form.Label>Major Expertise *</Form.Label>
                        <Form.Group controlId="Major Expertise">
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Major Expertise"
                            style={{ textTransform: "none" }}
                            aria-describedby="inputGroupPrepend"
                            required
                            // onChange={(e) => setUserName(e.target.value)}
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                        {/* <Select
                          name="select"
                          options={options1}
                          labelField="id"
                          valueField="name"
                          multi
                        ></Select> */}

                        <Form.Label className="mt-3">
                          Which You Are Expert *
                        </Form.Label>
                        <Form.Group controlId="Expert Are">
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Expert Are"
                            style={{ textTransform: "none" }}
                            aria-describedby="inputGroupPrepend"
                            required
                            // onChange={(e) => setUserName(e.target.value)}
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                        <Form.Label className="mt-3">
                          
                          Skill Which You Have Gathered *
                        </Form.Label>
                        <Form.Group controlId="Skills">
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Skills"
                            style={{ textTransform: "none" }}
                            aria-describedby="inputGroupPrepend"
                            required
                            // onChange={(e) => setUserName(e.target.value)}
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeAMentor;
