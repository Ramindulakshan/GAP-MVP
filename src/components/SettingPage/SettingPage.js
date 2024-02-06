import React, { useState } from "react";
import "./SettingPage.css";
import Navbar from "react-bootstrap/Navbar";
import GAP_Image from "./img/GAP_BG.png";
import Student_Image from "./img/Student.png";
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
import TakeABreak from "../HomePage/Img/Group 421.png";
function SettingPage() {
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
    console.log(confirmPassword);
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

  const handleChangePassword = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "http://localhost:3001/api/changePassword",
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
        console.log(response);
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
        "http://localhost:3001/api/deleteAccount",
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
        console.log(response);
        if (response.data.status === "ok") {
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("firstName");
          localStorage.removeItem("lastName");
          window.location.href = "/";
          console.log("Account deleted successfully");
        } else {
          alert("Account deletion failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 vh-100  d-flex align-items-center justify-content-center">
            <div className="vh-100">
              <div className="">
                <img
                  src={GAP_Image}
                  alt="logo"
                  className="img-fluid custom-image-Gap"
                />
              </div>
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="/underConstructionHome"
              >
                <Row>
                  <ListGroup>
                    <ListGroup.Item
                      action
                      variant="light"
                      className="list-group-item-custom"
                      onClick={() => {
                        window.location.href = "/underConstructionHome";
                      }}
                      style={{ backgroundColor: "#DDDDFE", border: "0" }}
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
                    <ListGroup.Item
                      onClick={handleShow}
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

                  <p className="pre ">Are You sure you want to logout?</p>

                  <button
                    className="btnlgouy1 custom-button-slot "
                    onClick={handleClose}
                  >
                    Yes
                  </button>
                  <button
                    className="btnlgouy2 custom-button-slot "
                    onClick={handleClose}
                  >
                    No
                  </button>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="col-lg-9 vh-100 overflow-auto">
            <Navbar className="mt-3 justify-content-between">
              <Form className="mx-auto">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="40"
                    viewBox="0 0 39 40"
                    fill="none"
                  >
                    <path
                      d="M31.6875 20.7142V17.5625H29.25V21.2188C29.2501 21.542 29.3785 21.8519 29.6071 22.0804L32.9062 25.3796V27.3125H6.09375V25.3796L9.39291 22.0804C9.62148 21.8519 9.74993 21.542 9.75 21.2188V16.3438C9.7466 14.6312 10.1952 12.948 11.0505 11.4643C11.9058 9.98053 13.1375 8.74879 14.6212 7.89343C16.1049 7.03808 17.7881 6.58941 19.5007 6.59275C21.2133 6.59609 22.8946 7.05131 24.375 7.91244V5.18853C23.2149 4.67485 21.9809 4.34745 20.7188 4.21841V1.71875H18.2812V4.21719C15.2765 4.52301 12.4919 5.93211 10.4659 8.17201C8.43982 10.4119 7.31628 13.3235 7.3125 16.3438V20.7142L4.01334 24.0133C3.78477 24.2418 3.65632 24.5518 3.65625 24.875V28.5312C3.65625 28.8545 3.78465 29.1645 4.01321 29.393C4.24177 29.6216 4.55177 29.75 4.875 29.75H13.4062V30.9688C13.4062 32.5849 14.0483 34.1349 15.1911 35.2777C16.3339 36.4205 17.8838 37.0625 19.5 37.0625C21.1162 37.0625 22.6661 36.4205 23.8089 35.2777C24.9517 34.1349 25.5938 32.5849 25.5938 30.9688V29.75H34.125C34.4482 29.75 34.7582 29.6216 34.9868 29.393C35.2153 29.1645 35.3438 28.8545 35.3438 28.5312V24.875C35.3437 24.5518 35.2152 24.2418 34.9867 24.0133L31.6875 20.7142ZM23.1562 30.9688C23.1562 31.9384 22.771 32.8684 22.0854 33.5541C21.3997 34.2398 20.4697 34.625 19.5 34.625C18.5303 34.625 17.6003 34.2398 16.9146 33.5541C16.229 32.8684 15.8438 31.9384 15.8438 30.9688V29.75H23.1562V30.9688Z"
                      fill="#2A2A72"
                    />
                    <path
                      d="M31.6875 15.125C34.3799 15.125 36.5625 12.9424 36.5625 10.25C36.5625 7.55761 34.3799 5.375 31.6875 5.375C28.9951 5.375 26.8125 7.55761 26.8125 10.25C26.8125 12.9424 28.9951 15.125 31.6875 15.125Z"
                      fill="#FF0000"
                    />
                  </svg>
                  &nbsp;&nbsp;
                  <img
                    src={Student_Image}
                    width="45"
                    height="45"
                    className="d-inline-block"
                    alt="React Bootstrap logo"
                  />
                </div>
              </Navbar.Brand>
            </Navbar>
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
                    <a href="#About" className="mb-0 navtpic333 nvtpicnew">
                      About Us
                    </a>
                    <a href="#ChangePassword" className="mb-0 navtpic333 nvtpicnew">
                      Change Password
                    </a>
                    <a href="#DeleteAccount" className="mb-0 navtpic333 nvtpicnew">
                      Delete Account
                    </a>
                    <a href="#ContactUs" className="mb-0 navtpic333 nvtpicnew">
                      Contact Us
                    </a>
                  </h5>
                </div>
              </div>
              <div>
                <div className="col-lg-12 vh-100 overflow-auto">
                  <div>
                    <div className="fullcon">
                      {/*About Us Section Start */}
                      <div id="About">
                        <div class="Cardsection">
                          <div className="maintopicset">
                            <h1 className="hedtpic">
                              Generation ALPHA Platform
                            </h1>
                            <p className="hedpar">
                              Generation ALPHA is a company dedicated to
                              providing a unique space for young adults to
                              discover their passions, enhance their skills, and
                              shape their futures. Our students receive a
                              membership, offering them a project-based learning
                              experience. Engaged in various projects, such as
                              sharing entrepreneurial knowledge in schools and
                              universities and collaborating on corporate
                              partnerships, our members actively participate and
                              gain industry exposure. Therefore we also act as
                              an entity which connects the cooperate world with
                              the student community.
                            </p>
                          </div>
                          <h5 className="card-title fw-bold titleneww">
                            Contact Us
                          </h5>
                          <div className="card ">
                            <div className="container mt-2 ">
                              <div className="row pdinf">
                                <div className="col-sm-5 col-md-5 col-lg-4 text-center">
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
                                    <p className="desbtn">076 7090757</p>
                                  </div>
                                </div>
                                <div className="col-sm-4 col-md-8 col-lg-4 text-center">
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
                                    <p className="desbtn2">generationalpha2025@gmail.com</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="card-title fw-bold titleneww">
                            Follow Us
                          </h5>
                          <div className="card">
                            <div className="container mt-2">
                              <div className="row">
                                <div className="col-sm-4 col-md-4 col-lg-3 text-center">
                                  <a href="https://www.facebook.com/generationalpha2025?mibextid=ZbWKwL" target="blanck" className="pintnnmmm">
                                  <div className="pbtn2oo">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="40"
                                      height="40"
                                      viewBox="0 0 40 40"
                                      fill="none"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M40 20C40 8.95517 31.0447 0 20 0C8.95517 0 0 8.95517 0 20C0 29.9817 7.31269 38.2561 16.8753 39.7583V25.7826H11.7958V20H16.8753V15.5927C16.8753 10.5807 19.8622 7.81036 24.4298 7.81036C26.6179 7.81036 28.9072 8.20128 28.9072 8.20128V13.1233H26.3844C23.901 13.1233 23.1247 14.6646 23.1247 16.248V19.9998H28.6708L27.785 25.7825H23.1245V39.7581C32.6872 38.2589 39.9997 29.9844 39.9997 19.9998L40 20Z"
                                        fill="#1977F3"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M27.785 25.7827L28.6711 20H23.1248V16.2482C23.1248 14.6676 23.8982 13.1235 26.3845 13.1235H28.9075V8.20149C28.9075 8.20149 26.6181 7.81055 24.4298 7.81055C19.8623 7.81055 16.8754 10.5782 16.8754 15.5929V20.0002H11.7959V25.7829H16.8754V39.7585C17.8935 39.9185 18.937 40.0002 20.0001 40.0002C21.0633 40.0002 22.1067 39.9158 23.1248 39.7585V25.7829H27.7852L27.785 25.7827Z"
                                        fill="#FEFEFE"
                                      />
                                    </svg>
                                  </div>
                                  <p className="mb-0 pint">Facebook</p>
                                  </a>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-3 text-center">
                                <a href="/" target="blanck" className="pintnnmmm">
                                  <div className="pbtn2oo">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="40"
                                      height="40"
                                      viewBox="0 0 40 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M20.0173 9.80873C19.6656 9.80873 19.3177 9.82668 18.9749 9.86179C18.6321 9.8969 18.2941 9.94893 17.9618 10.0172C17.6295 10.0855 17.3031 10.1701 16.9833 10.2699L16.0445 10.6146L15.1507 11.0462L14.3072 11.5594L13.5191 12.1489L12.7919 12.8095L12.1307 13.5361L11.5406 14.3233L11.0267 15.1659L10.5949 16.0587C10.4651 16.3641 10.3496 16.6771 10.2497 16.9967C10.1497 17.3163 10.0651 17.6426 9.9967 17.9745C9.92828 18.3064 9.87625 18.644 9.841 18.9866C9.80578 19.3291 9.78809 19.6766 9.78809 20.028C9.78809 20.3793 9.80603 20.7269 9.841 21.0694C9.87581 21.4092 9.92775 21.7471 9.9967 22.0816C10.0651 22.4148 10.1497 22.7398 10.2497 23.0594C10.3496 23.379 10.4649 23.6919 10.5949 23.9974L11.0267 24.8902L11.5406 25.7327L12.1307 26.52L12.7919 27.2466L13.5191 27.9073L14.3072 28.4967L15.1507 29.0098L16.0445 29.4415L16.9833 29.7862L17.9618 30.039C18.2966 30.1078 18.6348 30.1598 18.9749 30.1945C19.3213 30.2298 19.6692 30.2476 20.0173 30.2473C20.3691 30.2473 20.717 30.2295 21.0597 30.1945C21.3998 30.1598 21.7379 30.1078 22.0728 30.039L23.0514 29.7862L23.9902 29.4415L24.8839 29.0098L25.7274 28.4967L26.5155 27.9073L27.2429 27.2466L27.9042 26.52L28.4942 25.7327L29.0081 24.8902L29.4401 23.9974L29.7851 23.0594C29.8851 22.7398 29.9698 22.4135 30.0381 22.0816L30.1937 21.0693C30.2289 20.7268 30.2467 20.3792 30.2467 20.0278C30.2467 19.6765 30.2289 19.329 30.1937 18.9864C30.1589 18.6466 30.107 18.3089 30.0381 17.9743C29.9698 17.6412 29.8851 17.3163 29.7851 16.9966L29.4401 16.0586L29.0081 15.1658L28.4942 14.3231L27.9042 13.5359L27.2429 12.8093L26.5155 12.1488L25.7274 11.5593L24.8839 11.0461L23.9902 10.6145L23.0514 10.2698L22.0728 10.0171L21.0597 9.86165C20.7134 9.82629 20.3654 9.80871 20.0173 9.80873ZM20.0173 13.336C20.2499 13.336 20.4794 13.3476 20.7055 13.3704L21.3718 13.4712L22.0155 13.6352L22.6319 13.8591L23.2179 14.1398L23.7689 14.4736L24.284 14.8576L24.7589 15.2884L25.1901 15.7628L25.5746 16.2775L25.9088 16.8292L26.1894 17.4149C26.2737 17.6153 26.3486 17.8207 26.4137 18.0307C26.4788 18.2408 26.5335 18.4554 26.5777 18.674C26.6219 18.8926 26.6546 19.1151 26.6785 19.341L26.7129 20.0286C26.7129 20.261 26.7014 20.4903 26.6785 20.7164C26.6557 20.9424 26.6222 21.1649 26.5777 21.3834C26.5332 21.6018 26.4784 21.8165 26.4137 22.0266L26.1894 22.6425L25.9088 23.2281L25.5746 23.7798L25.1901 24.2945L24.7589 24.7689L24.284 25.1998L23.7689 25.5838L23.2179 25.9176L22.6319 26.1983L22.0155 26.4221L21.3718 26.5861L20.7055 26.6869C20.4768 26.7098 20.2471 26.7213 20.0172 26.7212C19.7873 26.7213 19.5576 26.7098 19.3288 26.6869L18.6625 26.5861C18.4437 26.5418 18.2289 26.487 18.0187 26.4221L17.4023 26.1983L16.8163 25.9176L16.2653 25.5838L15.7501 25.1998L15.2752 24.7689L14.844 24.2945L14.4596 23.7798L14.1254 23.2281L13.8448 22.6425L13.6205 22.0266L13.4565 21.3834L13.3556 20.7164C13.3327 20.4878 13.3212 20.2583 13.3213 20.0286C13.3212 19.799 13.3327 19.5695 13.3556 19.341C13.3783 19.1151 13.412 18.8925 13.4565 18.674C13.5005 18.457 13.5553 18.2424 13.6206 18.0308L13.8449 17.415L14.1255 16.8294L14.4597 16.2776L14.8441 15.763L15.2754 15.2886L15.7503 14.8577L16.2654 14.4737L16.8164 14.1399L17.4024 13.8592C17.6041 13.7745 17.8099 13.6998 18.0189 13.6354L18.6627 13.4713C18.8815 13.427 19.1042 13.3932 19.3291 13.3705C19.5578 13.3476 19.7874 13.336 20.0173 13.336Z"
                                        fill="url(#paint0_radial_476_2425)"
                                      />
                                      <path
                                        d="M30.6619 6.90234C30.5808 6.90234 30.4997 6.90645 30.4189 6.91465C30.338 6.92282 30.2577 6.93504 30.178 6.95129C30.0986 6.96754 30.0197 6.98776 29.9422 7.0119C29.8644 7.03607 29.7883 7.06412 29.7133 7.09596C29.6386 7.12784 29.5655 7.16348 29.4941 7.20271C29.4227 7.24187 29.3536 7.28459 29.2866 7.33073C29.2194 7.3769 29.1547 7.42643 29.0927 7.47912C29.0305 7.53176 28.9711 7.58748 28.9144 7.64609C28.858 7.70473 28.8044 7.76621 28.7539 7.83023C28.7033 7.89429 28.6561 7.96082 28.6122 8.02962C28.5683 8.09837 28.528 8.16929 28.4911 8.24209C28.4544 8.31495 28.4211 8.38962 28.3916 8.46584C28.3622 8.54201 28.3366 8.61965 28.3147 8.6984C28.293 8.77718 28.2752 8.85698 28.2616 8.93754C28.2477 9.01807 28.238 9.09923 28.2322 9.18076C28.228 9.23848 28.2261 9.29637 28.2261 9.35426C28.2261 9.43604 28.23 9.51776 28.2383 9.59915C28.2464 9.68048 28.2586 9.76134 28.2747 9.84146C28.2908 9.92157 28.3108 10.0008 28.3347 10.0789C28.3589 10.157 28.3866 10.2339 28.4183 10.3092C28.45 10.3845 28.4852 10.4582 28.5244 10.53C28.5633 10.6017 28.6058 10.6715 28.6516 10.739C28.6975 10.8064 28.7466 10.8715 28.7989 10.934C28.8514 10.9966 28.9066 11.0565 28.965 11.1134C29.0233 11.1704 29.0841 11.2243 29.148 11.2752C29.2116 11.326 29.2777 11.3736 29.3461 11.4178C29.4144 11.462 29.485 11.5027 29.5572 11.5398C29.6297 11.5769 29.7039 11.6103 29.7794 11.64C29.8552 11.6696 29.9322 11.6954 30.0105 11.7172C30.0889 11.7391 30.168 11.757 30.248 11.7708C30.328 11.7847 30.4089 11.7946 30.4897 11.8004C30.5472 11.8045 30.6047 11.8065 30.6622 11.8066C30.7433 11.8066 30.8247 11.8025 30.9055 11.7944C30.9861 11.7862 31.0666 11.774 31.1461 11.7577C31.2258 11.7415 31.3044 11.7213 31.3822 11.6971C31.4597 11.673 31.5361 11.6449 31.6108 11.6131C31.6855 11.5812 31.7589 11.5456 31.83 11.5064C31.9014 11.4672 31.9705 11.4245 32.0377 11.3783C32.1047 11.3322 32.1694 11.2827 32.2316 11.23C32.2936 11.1773 32.353 11.1216 32.4097 11.0629C32.4664 11.0043 32.52 10.9428 32.5702 10.8788C32.6208 10.8147 32.668 10.7482 32.7119 10.6794C32.7558 10.6106 32.7964 10.5396 32.833 10.4668C32.87 10.3939 32.9033 10.3193 32.9327 10.2431C32.9622 10.1669 32.9877 10.0893 33.0094 10.0105C33.0311 9.93173 33.0489 9.85193 33.0627 9.77137C33.0766 9.69084 33.0864 9.60965 33.0919 9.52815C33.0961 9.4704 33.0983 9.41254 33.0983 9.35465C33.0983 9.2729 33.0941 9.19121 33.0861 9.10987C33.078 9.02854 33.0658 8.94768 33.0497 8.86757C33.0336 8.78746 33.0133 8.7082 32.9894 8.63012C32.9652 8.55201 32.9375 8.47515 32.9058 8.39984C32.8741 8.32451 32.8389 8.25082 32.8 8.17904C32.7611 8.10729 32.7186 8.03754 32.6727 7.97004C32.6266 7.90254 32.5775 7.83743 32.5252 7.77487C32.4727 7.71234 32.4175 7.65246 32.3594 7.59548C32.3011 7.53854 32.24 7.48457 32.1764 7.43376C32.1127 7.38295 32.0466 7.3354 31.9783 7.29126C31.91 7.24707 31.8394 7.20634 31.7669 7.16926C31.6944 7.13215 31.6202 7.09871 31.5447 7.06907C31.4691 7.03943 31.3919 7.01365 31.3136 6.99179C31.2355 6.9699 31.1561 6.95198 31.0761 6.93809C30.9961 6.92423 30.9155 6.91437 30.8344 6.90862C30.7769 6.90451 30.7194 6.90234 30.6619 6.90234Z"
                                        fill="url(#paint1_radial_476_2425)"
                                      />
                                      <path
                                        d="M18.078 0.035529C16.9654 0.0337348 15.9725 0.0383476 15.0806 0.0509056L12.6895 0.114978C11.9811 0.145732 11.3552 0.185839 10.7935 0.237737C10.5126 0.263622 10.2476 0.292583 9.9964 0.324491C9.75737 0.354616 9.51904 0.389694 9.28148 0.429699C9.05529 0.468144 8.84065 0.50966 8.63484 0.554766C8.42907 0.599874 8.23248 0.648569 8.04282 0.700852C7.85743 0.751977 7.67345 0.808213 7.49118 0.869491C7.31254 0.929719 7.13826 0.993535 6.96615 1.06171C6.62196 1.19805 6.28623 1.35105 5.94048 1.52251C5.67446 1.6545 5.42868 1.78815 5.19521 1.92963C4.96173 2.0711 4.74054 2.22052 4.52398 2.38326C4.30096 2.55167 4.08598 2.73051 3.87982 2.91917C3.66426 3.11548 3.44412 3.33139 3.21537 3.5727C2.92795 3.87423 2.67819 4.15537 2.4565 4.43125C2.34566 4.56914 2.24186 4.7055 2.14409 4.84262C2.04739 4.97773 1.95496 5.11587 1.86691 5.25675C1.77977 5.39645 1.69725 5.5387 1.61831 5.68503C1.53814 5.83389 1.46238 5.98509 1.39111 6.13839C1.24528 6.45159 1.10919 6.78887 0.97336 7.16537C0.872591 7.44367 0.782355 7.72573 0.702846 8.01084C0.621733 8.30225 0.549588 8.60712 0.485258 8.93681C0.42093 9.26653 0.364802 9.62112 0.315466 10.0132C0.262303 10.4431 0.219831 10.8741 0.188091 11.3061C0.152211 11.781 0.122482 12.3036 0.0981342 12.8852L0.0404695 14.8192L0.00945834 17.1766L0.000488281 20.0262L0.0267579 24.17L0.10877 27.3095L0.171945 28.5358L0.250883 29.5521C0.276187 29.826 0.307846 30.0991 0.345838 30.3716C0.380435 30.6135 0.417599 30.8252 0.45758 31.0085C0.538705 31.381 0.634633 31.7502 0.745135 32.1152C0.850941 32.4646 0.971938 32.8091 1.10778 33.148C1.24131 33.4799 1.38739 33.7999 1.54629 34.108C1.70519 34.416 1.8769 34.7121 2.06144 34.9966C2.24596 35.2808 2.4433 35.5535 2.65397 35.8146C2.8644 36.0758 3.08823 36.3255 3.32457 36.5635C3.56123 36.8019 3.81087 37.0285 4.07396 37.2441C4.34012 37.4621 4.61684 37.6671 4.90304 37.858C5.16868 38.0355 5.43151 38.1983 5.69626 38.3474C5.96098 38.4969 6.22804 38.6321 6.50254 38.7555C6.77701 38.8785 7.05843 38.9894 7.3524 39.0891C7.64634 39.1888 7.95262 39.2774 8.27632 39.356C8.60001 39.4349 8.94265 39.5038 9.30532 39.5641C9.66796 39.6244 10.0556 39.676 10.4698 39.7205C10.8839 39.7649 11.3258 39.8016 11.8005 39.8324C12.2753 39.8633 12.7828 39.8877 13.328 39.9074C14.1703 39.938 15.4453 39.9558 16.9157 39.9627L21.6756 39.953L26.183 39.8899L27.8968 39.8416L29.0132 39.7844C29.2529 39.7646 29.4874 39.7416 29.7138 39.7146C29.9402 39.6877 30.1632 39.6569 30.3807 39.6216C30.5979 39.5866 30.8104 39.5474 31.019 39.5038C31.2254 39.4608 31.4307 39.4127 31.6346 39.3599C31.8365 39.3085 32.0357 39.2502 32.2329 39.1883C32.4299 39.1266 32.6252 39.0596 32.819 38.9877C33.014 38.9155 33.2071 38.8385 33.3985 38.7571C33.591 38.6749 33.7832 38.5874 33.9763 38.4944C34.2727 38.3516 34.5113 38.2324 34.7207 38.1163C34.9179 38.0083 35.1077 37.8874 35.289 37.7544C35.4679 37.6227 35.6457 37.4727 35.8507 37.2838C36.0557 37.0949 36.2882 36.8674 36.5757 36.5796C36.8288 36.3269 37.0418 36.1071 37.2257 35.9074C37.4096 35.7077 37.5646 35.528 37.7004 35.3546C37.8299 35.1902 37.9504 35.0191 38.0618 34.8419C38.1704 34.6688 38.2704 34.4891 38.3721 34.2899C38.5254 33.9902 38.6618 33.7124 38.7838 33.4444C38.9024 33.1863 39.0107 32.9233 39.1085 32.6566C39.2049 32.3919 39.2885 32.1227 39.3588 31.8499C39.431 31.5694 39.4932 31.273 39.5471 30.948C39.6007 30.623 39.6463 30.2694 39.6857 29.8744C39.7252 29.4796 39.7588 29.043 39.7882 28.5527L39.8665 26.9064L39.9335 24.859L39.9815 22.578L39.9999 20.193L39.9571 15.5087L39.8999 13.4106L39.8218 11.6091L39.7243 10.2047C39.689 9.81384 39.6507 9.50603 39.6104 9.29792C39.5654 9.06798 39.5154 8.83912 39.4602 8.61145C39.4063 8.38995 39.3471 8.16978 39.2827 7.95114C39.2199 7.73812 39.1515 7.52673 39.0779 7.3172C39.0051 7.11026 38.9279 6.90764 38.8471 6.70942C38.7665 6.51117 38.679 6.31756 38.5882 6.12803C38.4971 5.93851 38.4018 5.75359 38.3018 5.57289C38.2015 5.39223 38.0974 5.21603 37.9882 5.04417C37.8793 4.87234 37.7657 4.70484 37.6474 4.54184C37.5299 4.37937 37.4071 4.22062 37.2796 4.06578C37.1526 3.91184 37.021 3.76192 36.8846 3.61625C36.7485 3.47081 36.6077 3.3297 36.4627 3.19314C36.3174 3.05653 36.1679 2.92428 36.0138 2.79639C35.8588 2.66809 35.7001 2.54462 35.5374 2.42619C35.3732 2.30654 35.2054 2.19193 35.034 2.08251C34.8604 1.97153 34.6838 1.86572 34.5038 1.76522C34.321 1.66304 34.1349 1.56612 33.9465 1.47459C33.6335 1.32248 33.344 1.18755 33.0602 1.06786C32.7807 0.949077 32.496 0.84358 32.2068 0.751727C31.916 0.660102 31.6132 0.581552 31.2802 0.513763C30.9468 0.445974 30.5835 0.389463 30.1724 0.341408C29.7613 0.293355 29.3021 0.254528 28.7768 0.222235C28.2518 0.189943 27.6611 0.164568 26.9867 0.144065L24.6947 0.0928084L21.7939 0.058594L18.0792 0.0357831L18.078 0.035529ZM20.0072 3.55975L25.364 3.59026L27.3848 3.6292C27.9413 3.64484 28.366 3.66317 28.6149 3.68431C28.9393 3.71162 29.2479 3.74581 29.5435 3.78684C29.8268 3.82598 30.109 3.87464 30.389 3.93278C30.6582 3.98917 30.9149 4.05323 31.1607 4.1255C31.4063 4.19778 31.641 4.27878 31.866 4.36834C32.0913 4.45792 32.3065 4.55645 32.5138 4.66437C32.7193 4.77145 32.919 4.88928 33.1121 5.01739C33.3043 5.14489 33.4896 5.28228 33.6696 5.43028C33.8493 5.57828 34.0238 5.73692 34.194 5.90659C34.374 6.08562 34.5399 6.26795 34.6926 6.45606C34.8449 6.64303 34.986 6.83898 35.1146 7.04284C35.2449 7.24962 35.3621 7.46426 35.466 7.68548C35.5721 7.91103 35.6674 8.14937 35.7529 8.4027C35.8388 8.65606 35.9149 8.92528 35.9824 9.21298C36.0532 9.51798 36.1124 9.82553 36.1601 10.135C36.2113 10.463 36.2551 10.8129 36.2924 11.1874C36.3293 11.562 36.3601 11.9614 36.3854 12.3888C36.4057 12.7316 36.4235 13.1839 36.4385 13.7181L36.476 15.5397L36.5046 20.0017L36.4721 24.4594L36.4329 26.2758L36.3788 27.5968C36.3415 28.2155 36.3021 28.7355 36.2549 29.188C36.2313 29.4144 36.2054 29.6238 36.1771 29.8202C36.1504 30.0058 36.1188 30.1905 36.0824 30.3744C36.049 30.5421 36.0104 30.7088 35.9663 30.8744C35.9243 31.0319 35.8768 31.1883 35.8243 31.343C35.7713 31.4983 35.7138 31.6519 35.6515 31.8035C35.5857 31.9641 35.5163 32.1227 35.4432 32.2799C35.3782 32.4202 35.3099 32.5569 35.2377 32.6896C35.1663 32.8213 35.0902 32.9502 35.0102 33.0766C34.9307 33.2019 34.8474 33.3235 34.7602 33.4413C34.6735 33.5585 34.5826 33.6727 34.4877 33.7835C34.3932 33.8941 34.2946 34.0008 34.1921 34.1041C34.0896 34.2071 33.9832 34.3066 33.8729 34.4027C33.7629 34.4988 33.6485 34.5913 33.5302 34.6802C33.4121 34.7691 33.2896 34.8544 33.1632 34.936C33.0365 35.018 32.9063 35.0963 32.7715 35.1713C32.6368 35.246 32.4979 35.3174 32.3551 35.3855C32.2096 35.4546 32.0624 35.5194 31.9129 35.5796C31.7588 35.6419 31.6029 35.6996 31.4454 35.7533C31.1249 35.8624 30.7871 35.9583 30.4313 36.0408C30.0607 36.1266 29.6865 36.1966 29.3099 36.2508C29.1649 36.2719 28.8321 36.2919 28.3554 36.3102L26.5389 36.3608L21.3888 36.4277L15.9983 36.436L13.8813 36.4135L12.5067 36.3708L11.4931 36.2994C11.1784 36.273 10.8857 36.2435 10.6115 36.2099C10.3373 36.1766 10.0819 36.1394 9.84159 36.0971C9.6139 36.058 9.38759 36.0108 9.16307 35.9563C8.95834 35.9066 8.7557 35.8485 8.55568 35.7824C8.36282 35.7183 8.1784 35.6477 7.99901 35.5702C7.81959 35.4927 7.64532 35.4077 7.4727 35.3149C7.30009 35.2221 7.12929 35.1216 6.95654 35.0116C6.82623 34.9288 6.70026 34.8449 6.57904 34.7563C6.45782 34.6674 6.34068 34.5788 6.22793 34.486C6.11515 34.3933 6.00687 34.2977 5.90243 34.1994C5.79868 34.1013 5.69851 33.9996 5.60207 33.8946C5.50596 33.7896 5.41407 33.6819 5.3259 33.5702C5.2374 33.458 5.15307 33.3424 5.07309 33.2241C4.9919 33.1038 4.91509 32.9808 4.84282 32.8552C4.76976 32.7283 4.70032 32.5971 4.63432 32.4616C4.5672 32.3238 4.50459 32.1838 4.44659 32.0419C4.38765 31.8971 4.33176 31.748 4.27923 31.5941C4.17415 31.2858 4.0819 30.9577 4.00168 30.608C3.92146 30.2583 3.85301 29.8866 3.79509 29.4905C3.73718 29.0946 3.69054 28.6746 3.65337 28.2285C3.62595 27.8999 3.60418 27.388 3.58751 26.7421L3.55265 24.4451L3.56545 18.5896L3.66632 12.9943L3.74321 11.0229L3.78676 10.3713C3.8019 10.1973 3.81754 10.0683 3.83354 9.99092C3.88634 9.73631 3.93951 9.49937 3.99448 9.27756C4.04584 9.06828 4.10298 8.86051 4.16582 8.65439C4.22554 8.45987 4.28846 8.27764 4.35573 8.10503C4.42059 7.93781 4.4929 7.77359 4.57243 7.61284C4.65007 7.45651 4.73351 7.30681 4.82409 7.16112C4.9147 7.01542 5.01248 6.87409 5.11909 6.73351C5.22571 6.59292 5.34051 6.45414 5.46546 6.31345C5.5904 6.17275 5.72534 6.03064 5.87168 5.88417C6.04223 5.71264 6.21982 5.54826 6.40398 5.39145C6.5779 5.24351 6.75923 5.10453 6.94732 4.97512C7.13223 4.84695 7.3219 4.73292 7.51937 4.62809C7.71684 4.52328 7.92212 4.42856 8.13804 4.34337C8.35396 4.25814 8.58079 4.18189 8.82104 4.1127C9.07348 4.04189 9.3287 3.98148 9.58607 3.93162C9.85671 3.87859 10.1441 3.83231 10.451 3.79195C10.758 3.75159 11.0845 3.71673 11.4335 3.68648C11.677 3.66548 12.0965 3.64675 12.649 3.63101L14.6596 3.59128L20.0081 3.55859L20.0072 3.55975Z"
                                        fill="url(#paint2_radial_476_2425)"
                                      />
                                      <defs>
                                        <radialGradient
                                          id="paint0_radial_476_2425"
                                          cx="0"
                                          cy="0"
                                          r="1"
                                          gradientUnits="userSpaceOnUse"
                                          gradientTransform="translate(6.37265 42.8734) rotate(-9.53101) scale(84.5383 51.3142)"
                                        >
                                          <stop stop-color="#FED576" />
                                          <stop
                                            offset="0.263"
                                            stop-color="#F47133"
                                          />
                                          <stop
                                            offset="0.609"
                                            stop-color="#BC3081"
                                          />
                                          <stop
                                            offset="1"
                                            stop-color="#4C63D2"
                                          />
                                        </radialGradient>
                                        <radialGradient
                                          id="paint1_radial_476_2425"
                                          cx="0"
                                          cy="0"
                                          r="1"
                                          gradientUnits="userSpaceOnUse"
                                          gradientTransform="translate(6.37318 42.8741) rotate(-9.53102) scale(84.5383 51.3142)"
                                        >
                                          <stop stop-color="#FED576" />
                                          <stop
                                            offset="0.263"
                                            stop-color="#F47133"
                                          />
                                          <stop
                                            offset="0.609"
                                            stop-color="#BC3081"
                                          />
                                          <stop
                                            offset="1"
                                            stop-color="#4C63D2"
                                          />
                                        </radialGradient>
                                        <radialGradient
                                          id="paint2_radial_476_2425"
                                          cx="0"
                                          cy="0"
                                          r="1"
                                          gradientUnits="userSpaceOnUse"
                                          gradientTransform="translate(6.3731 42.8733) rotate(-9.53101) scale(84.5383 51.3142)"
                                        >
                                          <stop stop-color="#FED576" />
                                          <stop
                                            offset="0.263"
                                            stop-color="#F47133"
                                          />
                                          <stop
                                            offset="0.609"
                                            stop-color="#BC3081"
                                          />
                                          <stop
                                            offset="1"
                                            stop-color="#4C63D2"
                                          />
                                        </radialGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                  <p className="mb-0 pint">Instagram</p>
                                  </a>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-3 text-center">
                                <a href="/" target="blanck" className="pintnnmmm">
                                  <div className="pbtn2oo">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="41"
                                      height="45"
                                      viewBox="0 0 41 45"
                                      fill="none"
                                    >
                                      <path
                                        d="M16.01 17.7222V15.9686C15.4012 15.8722 14.7864 15.8194 14.1702 15.8106C8.20409 15.7978 2.92217 19.664 1.13055 25.3547C-0.661069 31.0454 1.45373 37.2403 6.35078 40.6475C4.55503 38.7256 3.3539 36.325 2.8924 33.7356C2.4309 31.1461 2.72875 28.4784 3.75 26.0545C4.77125 23.6305 6.47225 21.554 8.64766 20.0755C10.8231 18.597 13.3799 17.7797 16.0096 17.7224L16.01 17.7222Z"
                                        fill="#25F4EE"
                                      />
                                      <path
                                        d="M16.3408 37.5859C19.6765 37.5816 22.4184 34.9538 22.5644 31.6213V1.88296H27.9972C27.8863 1.26156 27.8334 0.631194 27.8392 0H20.4082V29.7095C20.2847 33.0588 17.5362 35.7119 14.1847 35.7175C13.1831 35.7087 12.1978 35.4625 11.3101 34.9987C11.8854 35.7959 12.6411 36.4459 13.5153 36.8953C14.3896 37.345 15.3577 37.5816 16.3408 37.5859ZM38.1448 11.9728V10.3199C36.1454 10.3207 34.1901 9.73066 32.5248 8.62397C33.9848 10.3211 35.9573 11.4966 38.1448 11.9728Z"
                                        fill="#25F4EE"
                                      />
                                      <path
                                        d="M32.5248 8.62467C30.8844 6.75667 29.9801 4.35527 29.9809 1.86914H27.9972C28.2534 3.2437 28.787 4.55161 29.5655 5.71311C30.3439 6.87458 31.3509 7.86527 32.5248 8.62467ZM14.1703 23.2422C12.7791 23.2493 11.4302 23.7212 10.338 24.583C9.24578 25.4449 8.47306 26.647 8.14262 27.9985C7.81218 29.3499 7.943 30.773 8.51428 32.0416C9.08556 33.3101 10.0645 34.3513 11.2955 34.9995C10.6225 34.0701 10.2194 32.9729 10.1309 31.8288C10.0424 30.685 10.2718 29.5388 10.7939 28.517C11.316 27.4952 12.1103 26.6377 13.0892 26.039C14.0681 25.4405 15.1934 25.1241 16.3408 25.125C16.9646 25.1331 17.5841 25.2302 18.1804 25.4133V17.8522C17.5714 17.7609 16.9567 17.7129 16.3408 17.7085H16.0101V23.4577C15.4106 23.2969 14.7908 23.2243 14.1703 23.2422Z"
                                        fill="#FE2C55"
                                      />
                                      <path
                                        d="M38.1447 11.9727V17.722C34.4432 17.7148 30.8377 16.5432 27.8391 14.373V29.4793C27.8232 37.0171 21.708 43.1196 14.1702 43.1196C11.3707 43.1246 8.63864 42.2608 6.35083 40.6474C8.21639 42.6539 10.643 44.0521 13.3145 44.6599C15.9861 45.2677 18.7788 45.0571 21.3288 44.0549C23.8789 43.053 26.0681 41.3064 27.6113 39.0424C29.1545 36.7786 29.9802 34.1024 29.9808 31.3627V16.2992C32.9894 18.455 36.5994 19.6114 40.3007 19.605V12.2021C39.576 12.1999 38.8535 12.1231 38.1447 11.9727Z"
                                        fill="#FE2C55"
                                      />
                                      <path
                                        d="M27.8391 29.4801V14.3739C30.8468 16.5317 34.4572 17.6882 38.1591 17.6797V11.9305C35.9722 11.4687 33.9947 10.3084 32.5247 8.62467C31.3508 7.86527 30.3438 6.87458 29.5654 5.71311C28.7869 4.55161 28.2533 3.2437 27.9971 1.86914H22.5643V31.6223C22.5114 32.9173 22.0564 34.1638 21.2625 35.1882C20.4686 36.2129 19.3753 36.9648 18.1344 37.3395C16.8935 37.7138 15.5668 37.6929 14.3385 37.2785C13.1103 36.8645 12.0416 36.0779 11.2809 35.0285C10.0497 34.3804 9.07052 33.3391 8.49908 32.0707C7.92764 30.802 7.79677 29.3787 8.12721 28.0272C8.45767 26.6756 9.23052 25.4733 10.3229 24.6115C11.4152 23.7497 12.7643 23.2778 14.1557 23.2709C14.7797 23.2765 15.3995 23.3733 15.9955 23.5584V17.809C13.3517 17.8539 10.778 18.667 8.58836 20.1492C6.39867 21.6314 4.68755 23.7187 3.66364 26.1566C2.63975 28.5945 2.34727 31.2776 2.82191 33.8788C3.29653 36.4801 4.51777 38.887 6.33667 40.806C8.64696 42.3663 11.3829 43.1748 14.1702 43.1204C21.708 43.1204 27.8232 37.0179 27.8391 29.4801Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </div>
                                  <p className="mb-0 pint">Tik Tok</p>
                                  </a>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-3 text-center">
                                <a href="https://www.linkedin.com/company/generation-alpha2025/" target="blanck" className="pintnnmmm">
                                  <div className="pbtn2oo">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="41"
                                      height="40"
                                      viewBox="0 0 41 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M31.125 0H9.875C4.69733 0 0.5 4.19733 0.5 9.375V30.625C0.5 35.8027 4.69733 40 9.875 40H31.125C36.3027 40 40.5 35.8027 40.5 30.625V9.375C40.5 4.19733 36.3027 0 31.125 0Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M31.125 0H9.875C4.69733 0 0.5 4.19733 0.5 9.375V30.625C0.5 35.8027 4.69733 40 9.875 40H31.125C36.3027 40 40.5 35.8027 40.5 30.625V9.375C40.5 4.19733 36.3027 0 31.125 0Z"
                                        fill="#0A66C2"
                                      />
                                      <path
                                        d="M29.3617 34.0133H33.9352C34.1009 34.0133 34.2598 33.9475 34.377 33.8303C34.4942 33.7131 34.5601 33.5542 34.5602 33.3884L34.5625 23.7256C34.5625 18.6752 33.4742 14.7931 27.5722 14.7931C25.3286 14.7097 23.2128 15.8663 22.0711 17.7975C22.0655 17.8069 22.057 17.8142 22.0469 17.8183C22.0368 17.8224 22.0256 17.8231 22.0151 17.8202C22.0045 17.8173 21.9952 17.8111 21.9885 17.8025C21.9819 17.7938 21.9782 17.7833 21.9781 17.7723V15.8844C21.9781 15.7186 21.9123 15.5596 21.7951 15.4424C21.6779 15.3252 21.5189 15.2594 21.3531 15.2594H17.013C16.8472 15.2594 16.6882 15.3252 16.571 15.4424C16.4538 15.5596 16.388 15.7186 16.388 15.8844V33.3875C16.388 33.5533 16.4538 33.7122 16.571 33.8294C16.6882 33.9467 16.8472 34.0125 17.013 34.0125H21.5861C21.7519 34.0125 21.9108 33.9467 22.028 33.8294C22.1452 33.7122 22.2111 33.5533 22.2111 33.3875V24.7355C22.2111 22.2891 22.6752 19.9198 25.7081 19.9198C28.698 19.9198 28.7367 22.7192 28.7367 24.8939V33.3883C28.7367 33.554 28.8026 33.713 28.9198 33.8302C29.037 33.9474 29.196 34.0133 29.3617 34.0133ZM6.4375 9.31672C6.4375 11.1706 7.96359 12.6959 9.8175 12.6959C11.6709 12.6958 13.1961 11.1695 13.1961 9.31609C13.1958 7.46266 11.6705 5.9375 9.81687 5.9375C7.96281 5.9375 6.4375 7.46297 6.4375 9.31672ZM7.52484 34.0133H12.1041C12.2698 34.0133 12.4288 33.9474 12.546 33.8302C12.6632 33.713 12.7291 33.554 12.7291 33.3883V15.8844C12.7291 15.7186 12.6632 15.5596 12.546 15.4424C12.4288 15.3252 12.2698 15.2594 12.1041 15.2594H7.52484C7.35908 15.2594 7.20011 15.3252 7.0829 15.4424C6.96569 15.5596 6.89984 15.7186 6.89984 15.8844V33.3883C6.89984 33.554 6.96569 33.713 7.0829 33.8302C7.20011 33.9474 7.35908 34.0133 7.52484 34.0133Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                  <p className="mb-0 pint">Linkedin</p>
                                </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="d-flex justify-content-between mt-4">
                              <h4>Terms & Conditions</h4>

                              <h6 className="View-more">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="8"
                                  height="14"
                                  viewBox="0 0 8 14"
                                  fill="none"
                                >
                                  <path
                                    d="M0.305919 13.6918C0.110039 13.4945 0 13.2268 0 12.9477C0 12.6686 0.110039 12.401 0.305919 12.2036L5.47795 6.99365L0.305919 1.78371C0.115591 1.5852 0.0102754 1.31933 0.0126557 1.04337C0.0150366 0.767402 0.124922 0.503418 0.318647 0.308273C0.512371 0.113129 0.774434 0.00243855 1.04839 4.00543e-05C1.32235 -0.00235748 1.58628 0.103729 1.78334 0.295453L7.69408 6.24952C7.88996 6.44689 8 6.71456 8 6.99365C8 7.27273 7.88996 7.5404 7.69408 7.73777L1.78334 13.6918C1.5874 13.8892 1.32169 14 1.04463 14C0.767573 14 0.501858 13.8892 0.305919 13.6918Z"
                                    fill="black"
                                  />
                                </svg>
                              </h6>
                            </div>
                          </div>
                          <div className="card ">
                            <div className="d-flex justify-content-between mt-4">
                              <h4>Privacy Policy</h4>

                              <h6 className="View-more">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="8"
                                  height="14"
                                  viewBox="0 0 8 14"
                                  fill="none"
                                >
                                  <path
                                    d="M0.305919 13.6918C0.110039 13.4945 0 13.2268 0 12.9477C0 12.6686 0.110039 12.401 0.305919 12.2036L5.47795 6.99365L0.305919 1.78371C0.115591 1.5852 0.0102754 1.31933 0.0126557 1.04337C0.0150366 0.767402 0.124922 0.503418 0.318647 0.308273C0.512371 0.113129 0.774434 0.00243855 1.04839 4.00543e-05C1.32235 -0.00235748 1.58628 0.103729 1.78334 0.295453L7.69408 6.24952C7.88996 6.44689 8 6.71456 8 6.99365C8 7.27273 7.88996 7.5404 7.69408 7.73777L1.78334 13.6918C1.5874 13.8892 1.32169 14 1.04463 14C0.767573 14 0.501858 13.8892 0.305919 13.6918Z"
                                    fill="black"
                                  />
                                </svg>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* About Us Section End*/}
                      {/*Change Password Section Start*/}
                      <div className="main-box" id="ChangePassword">
                        <div class="Cardsection">
                          <div className="card">
                            <h3 className="card-title fw-bold">
                              Change your password
                            </h3>
                            <p className="para1">
                              You Should Enter at Least 6 Characters
                            </p>
                            <br></br>
                            <div className="passbox">
                              <InputGroup className="mb-3">
                                <Form.Control
                                  size="lg"
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
                                  size="lg"
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
                                  size="lg"
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
                      {/*Delete Account Section Start*/}
                      <div className="main-box" id="DeleteAccount">
                        <div class="Cardsection">
                          <div className="card">
                            <h3 className="card-title fw-bold">
                              Are you sure you want to delete your account ?
                            </h3>
                            <p className="para1">
                              By deleting your account you will lose your
                              progress
                            </p>
                            <br></br>
                            <div>
                              <div className="mb-3">
                                <p className="why">
                                  Why do you want to delete your account ?
                                </p>
                                <Form.Check
                                  type={"checkbox"}
                                  id={""}
                                  label={"Privacy Concern"}
                                />
                                <Form.Check
                                  type={"checkbox"}
                                  id={""}
                                  label={"Personal matter"}
                                />
                                <Form.Check
                                  type={"checkbox"}
                                  id={""}
                                  label={"No Longer Need the App"}
                                />
                                <Form.Check
                                  type={"checkbox"}
                                  id={""}
                                  label={"Not satisfied with App Features"}
                                />
                                <Form.Check
                                  type={"checkbox"}
                                  id={""}
                                  label={"Found a Better Alternative"}
                                />
                                <Form.Check
                                  type={"checkbox"}
                                  id={""}
                                  label={"Other (Please Specify):"}
                                />
                              </div>

                              <p href="acb" className="detailssetpack">
                                When you delete your user account, please note
                                that you will lose:
                              </p>
                              <ul>
                                <li>Your progress.</li>
                                <li>All collected coins and rewards.</li>
                                <li>
                                  Any stored data , including your profile
                                  information and activity history.
                                </li>
                              </ul>
                              <div className="btndletacc">
                                {/*Delete Account Model Start */}
                                <Modal
                                  size="lg"
                                  show={show2}
                                  onHide={handleClose2}
                                  aria-labelledby="example-custom-modal-styling-title"
                                  centered
                                >
                                  <Modal.Header closeButton></Modal.Header>
                                  <div
                                    style={{
                                      width: "95%",
                                      height: "auto",
                                      padding: "0px",
                                      borderRadius: "5px",
                                      margin: "0 0 50px 20px",
                                    }}
                                  >
                                    <h5 className="dltactntpic">
                                      Delete Account
                                    </h5>
                                    <p className="dltactntpicpara">
                                      Are you sure you want to delete the
                                      account? You will not be able to undo it.
                                    </p>

                                    <Formik
                                      validationSchema={schema}
                                      onSubmit={console.log}
                                      initialValues={{
                                        city: "",
                                      }}
                                    >
                                      {({
                                        handleSubmit,
                                        handleChange,
                                        values,
                                        errors,
                                      }) => (
                                        <Form
                                          noValidate
                                          onSubmit={handleSubmit}
                                        >
                                          <Row className="mb-3">
                                            <Form.Group
                                              as={Col}
                                              md="6"
                                              controlId="validationFormik03"
                                            >
                                              <Form.Label className="tipparat">
                                                Please type your password to
                                                confirm
                                              </Form.Label>
                                              <td className="tdlnoty1lewen">
                                                {" "}
                                                <Form.Control
                                                  type="text"
                                                  className="pwtinpt"
                                                  name="password"
                                                  value={values.password}
                                                  onChange={handleChange}
                                                  isInvalid={!!errors.password}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                  {errors.password}
                                                </Form.Control.Feedback>
                                              </td>
                                              <td className="tdlnoty1newr">
                                                <Button
                                                  type="submit "
                                                  className="pwtbtncong"
                                                >
                                                  Confirm
                                                </Button>
                                              </td>
                                            </Form.Group>
                                          </Row>
                                        </Form>
                                      )}
                                    </Formik>
                                  </div>
                                </Modal>
                                {/*Delete Account Model End */}
                                {/*Err Occurred Model Start */}
                                <Modal
                                  size="medium"
                                  show={show3}
                                  onHide={handleClose3}
                                  aria-labelledby="contained-modal-title-vcenter"
                                  centered
                                >
                                  <Modal.Body>
                                    <div className="text-center">
                                      <img
                                        src={err}
                                        alt="YourImage"
                                        className="img-fluid img-fluid 
                                        custom-image-ULock mx-auto d-block mb-1"
                                      />
                                      <h1 className="mb-4 errbtnclztpi">
                                        An Error occurred
                                      </h1>
                                      <h3 className="mb-5 errbtnclzpara">
                                        The password you entered is incorrect.
                                        Please try again.
                                      </h3>
                                      <button
                                        className="btn  custom-button-resetmew my-1 my-sm-3"
                                        type="submit"
                                      >
                                        OK
                                      </button>
                                    </div>
                                  </Modal.Body>
                                </Modal>
                                {/*Err Occurred Model End */}
                                {/*Delete Model Start */}
                                <Modal
                                  size="medium"
                                  show={show4}
                                  onHide={handleClose4}
                                  aria-labelledby="contained-modal-title-vcenter"
                                  centered
                                >
                                  <Modal.Body>
                                    <div className="text-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="98"
                                        height="103"
                                        viewBox="0 0 98 103"
                                        fill="none"
                                      >
                                        <ellipse
                                          cx="49"
                                          cy="51.2889"
                                          rx="49"
                                          ry="51.2889"
                                          fill="white"
                                        />
                                        <path
                                          d="M96.5 51.2889C96.5 78.8519 75.1697 101.078 49 101.078C22.8303 101.078 1.5 78.8519 1.5 51.2889C1.5 23.726 22.8303 1.5 49 1.5C75.1697 1.5 96.5 23.726 96.5 51.2889Z"
                                          stroke="#CF1010"
                                          stroke-opacity="0.8"
                                          stroke-width="3"
                                        />
                                        <path
                                          d="M36.4601 74.1621C35.1171 74.1621 33.9671 73.664 33.0099 72.6678C32.0527 71.6716 31.575 70.4755 31.5766 69.0795V36.042H29.1349V30.9593H41.3435V28.418H55.9938V30.9593H68.2025V36.042H65.7607V69.0795C65.7607 70.4772 65.2822 71.6742 64.325 72.6704C63.3678 73.6666 62.2186 74.1638 60.8773 74.1621H36.4601ZM60.8773 36.042H36.4601V69.0795H60.8773V36.042ZM41.3435 63.9968H46.2269V41.1247H41.3435V63.9968ZM51.1104 63.9968H55.9938V41.1247H51.1104V63.9968Z"
                                          fill="#CF1010"
                                          fill-opacity="0.8"
                                        />
                                      </svg>
                                      <h1 className="mb-4 mt-4 errbtnclztpi">
                                        Delete Account
                                      </h1>
                                      <h3 className="mb-5 errbtnclzpara">
                                        The password you entered has been
                                        successfully confirmed, you can delete
                                        your account
                                      </h3>
                                      <button
                                        className="btn custom-button-resetmewdlete my-1 my-sm-3"
                                        type="submit"
                                        onClick={handleDeleteAccount}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </Modal.Body>
                                </Modal>
                                {/*Delete Model End */}
                                <InputGroup
                                  className="mb-3"
                                  style={{ width: "50%" }}
                                >
                                  <Form.Control
                                    size="medium"
                                    type={showPassword3 ? "text" : "password"}
                                    id="inputPassword"
                                    style={{ textTransform: "none" }}
                                    aria-describedby="passwordHelpBlock"
                                    placeholder="Enter your password"
                                    onChange={(e) =>
                                      setPasswordToDelete(e.target.value)
                                    }
                                  />
                                  <InputGroup.Text
                                    id="passwordHelpBlock"
                                    onClick={togglePasswordVisibility3}
                                  >
                                    {showPassword3 ? (
                                      <HiOutlineEyeOff />
                                    ) : (
                                      <HiOutlineEye />
                                    )}
                                  </InputGroup.Text>
                                </InputGroup>
                                <br></br>
                                <button
                                  className="btndlt"
                                  onChange={handleShow4}
                                  onClick={handleShow4}
                                >
                                  Delete Account
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Delete Account Section End */}
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
                                <div className="col-sm-5 col-md-5 col-lg-4 text-center">
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
                                    <p className="desbtn">076 7090757</p>
                                  </div>
                                </div>
                                <div className="col-sm-4 col-md-8 col-lg-4 text-center">
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
                                    <p className="desbtn2">generationalpha2025@gmail.com</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="card-title fw-bold titleneww">
                              Support & Help
                            </h5>
                          <div className="confull">
                         
                            <div className="card">
                              <div className="container mt-3">
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label className="lblcous">
                                      Phone Number
                                    </Form.Label>
                                    <Form.Control
                                      type="email"
                                      placeholder="+94 000000000"
                                      required={"required"}
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
                                    />
                                    <Form.Label className="lblcous">
                                      Reason
                                    </Form.Label>
                                    <Form.Control
                                      type="Text"
                                      placeholder="Eter Reason"
                                      required={"required"}
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

export default SettingPage;
