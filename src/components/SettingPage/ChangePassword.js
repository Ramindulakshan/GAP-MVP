import React, { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa6";
import "./SettingPage.css";
import Navbar from "react-bootstrap/Navbar";
import GAP_Image from "./img/GAP_BG.png";
import Level from "./img/level.png";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import * as formik from "formik";
import * as yup from "yup";
import err from "./img/err.png";
import userPic from "../HomePage/Img/user.png";
import { backEndURL } from "../../server";
import axios from "axios";

import {
  IoHomeOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import TakeABreak from "../HomePage/Img/Group 421.png";

function ChangePassword() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    password: yup.string().required(),
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordToDelete, setPasswordToDelete] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  /*LogOut Model*/
  const [show, setShow] = useState(false);
  /*LogOut Model*/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const togglePasswordVisibility3 = () => {
    setShowPassword3(!showPassword3);
  };
  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const confirmPasswordMatch = () => {
    return newPassword === confirmPassword;
  };
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    // Limit the input to 300 characters
    if (inputText.length <= 300) {
      setText(inputText);
    }
  };

  const handleLogout = () => {
    // if (user) {
    //   logout();   //google login
    // }
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    handleCloseLogout();
    window.location.href = "/login";
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${backEndURL}/api/changePassword`,
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "ok") {
          alert("Password changed successfully");
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("firstName");
          localStorage.removeItem("lastName");
          window.location.href = "/login";
        } else if (response.data.status === 401) {
          alert("Current password is incorrect");
        } else {
          alert("Password change failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${backEndURL}/api/deleteAccount`,
        {
          password: passwordToDelete,
        },
        {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "error") {
          alert("Incorrect password");
          handleClose4();
        } else if (response.data.status === "ok") {
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("firstName");
          localStorage.removeItem("lastName");
          window.location.href = "/";
        } else {
          alert("Account deletion failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [activePage, setActivePage] = useState("#About"); // Set the default active page

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  //Contact Us
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ujbarye", "template_vdnepgd", form.current, {
        publicKey: "A7gPSfsx2Sr9vN779",
      })
      .then(
        (result) => {
          alert("Message Send Success!");
        },
        (error) => {
          alert("Not Send");
        }
      );
  };

  useEffect(() => {
    const getUserImage = () => {
      axios
        .get(`${backEndURL}/api/getUserImage`, {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        })
        .then((response) => {
          if (response.data.profilePicture) {
            const profilePicture = `${backEndURL}/${response.data.profilePicture}`;
            setSelectedImage(profilePicture);
          }
        })
        .catch((error) => {
          console.error("Error fetching user image:", error);
        });
    };
    getUserImage();
  });
  function nav_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function nav_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  function close_sidebar_on_click() {
    if (window.innerWidth <= 768) {
      // Check if the window width is less than or equal to 768 (adjust this value based on your design)
      nav_close();
    }
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="nav-colum" id="mySidebar">
            <div className="vh-100 navbk-res">
              <div className="">
                <img
                  src={GAP_Image}
                  alt="logo"
                  className="img-fluid custom-image-Gap"
                />
                <button onClick={nav_close} class="resclose">
                  {" "}
                  &times;
                </button>
              </div>
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="/home"
              >
                <Row>
                  <ListGroup>
                    <ListGroup.Item
                      action
                      variant="light"
                      className="list-group-item-custom"
                      onClick={() => {
                        window.location.href = "/home";
                        close_sidebar_on_click();
                      }}
                    >
                      <IoHomeOutline
                        style={{ fontSize: "18px", marginRight: "20px" }}
                      />
                      Home
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      action
                      variant="light"
                      className="list-group-item-custom"
                      // href="#link2"
                      onClick={() => {
                        window.location.href = "/underConstructionMentors";
                      }}
                    >
                      <IoPeopleOutline
                        style={{ fontSize: "18px", marginRight: "20px" }}
                      />
                      Mentors
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      action
                      variant="light"
                      className="list-group-item-custom"
                      onClick={() => {
                        window.location.href =
                          "/underConstructionMentorSession";
                      }}
                    >
                      <TfiBookmarkAlt
                        style={{ fontSize: "18px", marginRight: "20px" }}
                      />
                      Mentoring Session
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      action
                      variant="light"
                      className="list-group-item-custom"
                      onClick={() => {
                        window.location.href = "/underConstructionBeAMentor";
                      }}
                    >
                      <MdOutlinePeopleAlt
                        style={{ fontSize: "18px", marginRight: "20px" }}
                      />
                      Be A Mentor
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      action
                      variant="light"
                      className="list-group-item-custom"
                      onClick={() => {
                        window.location.href =
                          "/underConstructionWeeklySchedulePage";
                      }}
                    >
                      <IoCalendarOutline
                        style={{ fontSize: "18px", marginRight: "20px" }}
                      />
                      Weekly Schedule
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      action
                      variant="light"
                      className="list-group-item-custom"
                      onClick={() => {
                        window.location.href = "/underConstructionHistoryPage";
                      }}
                    >
                      <RxCountdownTimer
                        style={{ fontSize: "18px", marginRight: "20px" }}
                      />
                      Mentoring History
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item
                      action
                      variant="light"
                      className="list-group-item-custom"
                      style={{ backgroundColor: "#DDDDFE", border: "0" }}
                      onClick={() => {
                        window.location.href = "/settings";
                      }}
                    >
                      <IoSettingsOutline
                        style={{ fontSize: "18px", marginRight: "20px" }}
                      />
                      Settings
                    </ListGroup.Item>
                    <br />
                    <br />
                    <br />
                    <ListGroup.Item
                      onClick={handleShowLogout}
                      action
                      variant="light"
                      className="list-group-item-custom"
                    >
                      <IoIosLogOut
                        style={{ fontSize: "18px", marginRight: "20px" }}
                      />
                      Logout
                    </ListGroup.Item>
                    <br />
                  </ListGroup>
                </Row>
              </Tab.Container>
              <Modal
                size="m"
                show={showLogout}
                onHide={handleCloseLogout}
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

                  <p className="pre ">Are You sure you want to logout?</p>

                  <button
                    className="btnlgouy1 custom-button-slot "
                    onClick={handleLogout}
                  >
                    Yes
                  </button>
                  <button
                    className="btnlgouy2 custom-button-slot "
                    onClick={handleCloseLogout}
                  >
                    No
                  </button>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="col-lg-9 vh-100 overflow-auto">
            <Navbar className="mt-3 justify-content-between">
              <Form className="mx-auto search-res-hide">
                <div className="position-relative">
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
              <Navbar.Brand
                href="#"
                className="d-flex align-items-center"
                style={{ marginLeft: "auto" }}
              >
                <img
                  src={Level}
                  width="60"
                  height="40"
                  className="d-inline-block "
                  alt="React Bootstrap logo"
                />{" "}
                &nbsp;&nbsp;
                <div className="ml-auto d-flex align-items-center">
                  <FaRegBell className="bell-nav" />
                  &nbsp;&nbsp;
                  <img
                    src={!selectedImage ? userPic : selectedImage}
                    roundedCircle
                    style={{
                      borderRadius: "100px",
                    }}
                    width="45"
                    height="45"
                    className="d-inline-block"
                    alt=" Profile Pic"
                    onClick={() => {
                      window.location.href = "/userProfile";
                    }}
                  />
                  {/* Toggle Button for Mobile View */}
                  <button
                    className="mobile-toggle-btn togelbtn"
                    onClick={nav_open}
                  >
                    ☰
                  </button>
                </div>
              </Navbar.Brand>
            </Navbar>
            <Form className="mx-auto search-res-dis">
              <div className="position-relative">
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
            <br></br>
            <div className="SettingPage-MainBox fadeInUp">
              <div id="nav" className="nave">
                <div>
                  <h5>
                    <a
                      href="#About"
                      className="navtpic333 nvtpicnew"
                      onClick={() => {
                        window.location.href = "/settings";
                      }}
                    >
                      About Us
                    </a>
                    <a
                      href="#d"
                      className="navtpic333 nvtpicnew nvtpicnewabout"
                      onClick={() => {
                        window.location.href = "/changePass";
                      }}
                    >
                      Change Password
                    </a>
                    <a
                      href="#DeleteAccount"
                      className="navtpic333 nvtpicnew"
                      onClick={() => {
                        window.location.href = "/settingDeleteAccount";
                      }}
                    >
                      Delete Account
                    </a>
                    <a
                      href="#ContactUs"
                      className="navtpic333 nvtpicnew"
                      onClick={() => {
                        window.location.href = "/settingContactUs";
                      }}
                    >
                      Contact Us
                    </a>
                  </h5>
                </div>
              </div>
              <div>
                <div className="col-lg-12 vh-100 overflow-auto">
                  <div>
                    <div className="fullcon">
                     
                      {/*Change Password Section Start*/}
                      <div className="main-box" id="ChangePassword">
                        <div class="Cardsection">
                          <div className="card">
                            <h3 className="card-title fw-bold title-setting">
                              Change your password
                            </h3>
                            <p className="para1-setting">
                              You Should Enter at Least 6 Characters
                            </p>
                            <br></br>
                            <div className="passbox">
                              <InputGroup className="mb-3">
                                <Form.Control
                                  size="medium"
                                  value={currentPassword}
                                  type={showPassword3 ? "text" : "password"}
                                  id="inputPassword"
                                  style={{ textTransform: "none" }}
                                  aria-describedby="passwordHelpBlock1"
                                  placeholder="Current password"
                                  onChange={handleCurrentPasswordChange}
                                />
                                <InputGroup.Text
                                  id="passwordHelpBlock1"
                                  onClick={togglePasswordVisibility3}
                                >
                                  {showPassword3 ? (
                                    <HiOutlineEyeOff />
                                  ) : (
                                    <HiOutlineEye />
                                  )}
                                </InputGroup.Text>
                              </InputGroup>
                              <InputGroup className="mb-3">
                                <Form.Control
                                  size="medium"
                                  value={newPassword}
                                  type={showPassword ? "text" : "password"}
                                  id="inputPassword"
                                  aria-describedby="passwordHelpBlock2"
                                  placeholder="New Password"
                                  style={{ textTransform: "none" }}
                                  onChange={handleNewPasswordChange}
                                />
                                <InputGroup.Text
                                  id="passwordHelpBlock2"
                                  onClick={togglePasswordVisibility}
                                >
                                  {showPassword ? (
                                    <HiOutlineEyeOff />
                                  ) : (
                                    <HiOutlineEye />
                                  )}
                                </InputGroup.Text>
                              </InputGroup>

                              <InputGroup className="mb-3">
                                <Form.Control
                                  size="medium"
                                  value={confirmPassword}
                                  type={showPassword2 ? "text" : "password"}
                                  id="inputConfirmPassword"
                                  aria-describedby="passwordHelpBlock3"
                                  placeholder="Confirm New Password"
                                  style={{ textTransform: "none" }}
                                  onChange={handleConfirmPasswordChange}
                                />
                                <InputGroup.Text
                                  id="passwordHelpBlock3"
                                  onClick={togglePasswordVisibility2}
                                >
                                  {showPassword2 ? (
                                    <HiOutlineEyeOff />
                                  ) : (
                                    <HiOutlineEye />
                                  )}
                                </InputGroup.Text>
                              </InputGroup>
                              {confirmPasswordMatch() ? (
                                <p></p>
                              ) : (
                                <p>Passwords do not match.</p>
                              )}

                              <a
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  window.location.href = "/forgotPassword";
                                }}
                                className="fogotpss"
                              >
                                Forgot password?
                              </a>
                              <button
                                className="changpasss"
                                onClick={handleChangePassword}
                              >
                                Change Password
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Change Password Section End */}
                     
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

export default ChangePassword;
