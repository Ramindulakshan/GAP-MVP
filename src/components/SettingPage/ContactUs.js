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
import { backEndURL } from "../../backendUrl";
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

function ContactUs() {
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
        `${backEndURL}/changePassword`,
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
        `${backEndURL}/deleteAccount`,
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
        .get(`${backEndURL}/getUserImage`, {
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
                      className="navtpic333 nvtpicnew"
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
                      className="navtpic333 nvtpicnew nvtpicnewabout"
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
                      {/*Contact Us Section Start*/}
                      <div id="ContactUs">
                        <div class="Cardsection">
                          <br></br>
                          <h5 className="card-title fw-bold titleneww">
                            Contact Us
                          </h5>
                          <div className="card ">
                            <div className="container mt-2 ">
                              <div className="row pdinf">
                                <div className="col-sm-5 col-md-5 col-lg-5 text-center">
                                  <div className="pbtn2oo">
                                    <div className="clbtn">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <path
                                          d="M13.3342 14.2139L15.0564 12.491C15.2883 12.2618 15.5818 12.1049 15.9012 12.0394C16.2205 11.9739 16.552 12.0025 16.8555 12.1218L18.9544 12.9602C19.261 13.0847 19.5239 13.2972 19.71 13.5709C19.8961 13.8447 19.997 14.1674 20 14.4985V18.3442C19.9982 18.5694 19.9509 18.7919 19.8609 18.9983C19.7709 19.2047 19.6401 19.3908 19.4763 19.5453C19.3125 19.6998 19.1192 19.8195 18.9079 19.8973C18.6967 19.9751 18.4719 20.0093 18.2471 19.9979C3.5392 19.0826 0.57149 6.62239 0.010239 1.85368C-0.0158147 1.6195 0.00798984 1.38246 0.0800864 1.15814C0.152183 0.933831 0.270938 0.727331 0.428538 0.55223C0.586138 0.377128 0.779012 0.237394 0.994471 0.142219C1.20993 0.0470438 1.44309 -0.00141458 1.67862 3.14343e-05H5.3921C5.72347 0.0010127 6.04698 0.101149 6.321 0.287561C6.59503 0.473973 6.80704 0.738135 6.92977 1.04607L7.7678 3.14584C7.89101 3.44817 7.92245 3.78011 7.85818 4.10021C7.79391 4.4203 7.63679 4.71436 7.40645 4.94565L5.68426 6.66854C5.68426 6.66854 6.67606 13.3832 13.3342 14.2139Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </div>
                                    <p className="desbtn">Phone</p>
                                    <p className="desbtn">
                                      <a href="tel:0767090757">076 7090757</a>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-sm-4 col-md-2 col-lg-5 text-center">
                                  <div className="pbtn2oo">
                                    <div className="clbtnnwe">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                      >
                                        <rect
                                          width="40"
                                          height="40"
                                          rx="2"
                                          fill="#E86F00"
                                        />
                                        <path
                                          d="M28 12H12C10.9 12 10.01 12.9 10.01 14L10 26C10 27.1 10.9 28 12 28H28C29.1 28 30 27.1 30 26V14C30 12.9 29.1 12 28 12ZM28 16L20 21L12 16V14L20 19L28 14V16Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </div>
                                    <p className="desbtn2">Email</p>
                                    <a
                                      href="mailto:generationalpha2025@gmail.com"
                                      class="desbtn2"
                                    >
                                      generationalpha2025@gmail.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="card-title fw-bold titleneww">
                            Support & Help
                          </h5>
                          <div className="confull-setting">
                            <div className="card">
                              <div className="container mt-3">
                                <Form ref={form} onSubmit={sendEmail}>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label className="lblcous">
                                      Name
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      placeholder="your name"
                                      required={"required"}
                                      name="user_name"
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label className="lblcous">
                                      Phone Number
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      placeholder="+94 000000000"
                                      required={"required"}
                                      name="phoneNumber"
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label className="lblcous">
                                      Email (Optional)
                                    </Form.Label>
                                    <Form.Control
                                      type="email"
                                      placeholder="example@gmail.com "
                                      required={"required"}
                                      name="user_email"
                                    />
                                    <Form.Label className="lblcous">
                                      Reason
                                    </Form.Label>
                                    <Form.Control
                                      type="Text"
                                      placeholder="Enter Reason"
                                      required={"required"}
                                      name="reason"
                                    />
                                  </Form.Group>
                                  <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="lblcous">
                                      Message
                                    </Form.Label>
                                    <Form.Control
                                      as="textarea"
                                      rows={5}
                                      className="form-control"
                                      style={{ resize: "none" }}
                                      value={text}
                                      onChange={handleChange}
                                      required={"required"}
                                      name="message"
                                    />
                                  </Form.Group>

                                  <div className="text-right">
                                    <p>{text.length}/300</p>
                                  </div>
                                  <button className="subbtnconus">
                                    Submit
                                  </button>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Contact Us Section End */}
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

export default ContactUs;
