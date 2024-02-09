import { React, useState, useEffect } from "react";
import "./UserProfile.css";
import Navbar from "react-bootstrap/Navbar";
import GAP_Image from "./img/GAP_BG.png";
import Student_Image from "./img/Student.png";
import Level from "./img/level.png";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import prolog from "./img/Student.png";
import Image from "react-bootstrap/Image";
import pen from "./img/pen.png";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import moment from "moment/moment";
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
import { IoSaveSharp } from "react-icons/io5";
import userPic from "../HomePage/Img/user.png";

function UserProfileEmptyView() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    academicDetails: [],
    professionalDetails: [],
    profilePicture: [],
  });

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    setDisplayFirstName(storedFirstName);
  }, []);

  useEffect(() => {
    const storedLastName = localStorage.getItem("lastName");
    setDisplayLastName(storedLastName);
  }, []);

  useEffect(() => {
    getUserDetails(); // Fetch user details on component mount
  }, []);

  const [displayFirstName, setDisplayFirstName] = useState("");
  const [displayLastName, setDisplayLastName] = useState("");

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [institute, setInstitute] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grade, setGrade] = useState("");
  const [position, setPosition] = useState("");
  const [empType, setEmpType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [locationType, setLocationType] = useState("");
  const [skills, setSkills] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  /*Photo Change Model*/
  const [show, setShow] = useState(false);

  /*Social Media Model Start*/
  const [show2, setShow2] = useState(false);

  /*Edit personal details Model*/
  const [show3, setShow3] = useState(false);

  /*Academic qualification Model*/
  const [show4, setShow4] = useState(false);

  /*Delete Model */
  const [show5, setShow5] = useState(false);

  /*Fields Model */
  const [showadd, setShowadd] = useState(false);

  /*License Model */

  /*professional experience Model */
  const [show7, setShow7] = useState(false);

  /*Photo Change Model*/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*Social Media Model Start*/
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  /*Edit personal details Model*/
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  /*Academic qualification Model*/
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  /*Delete Model */
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  /*professional experience Model */
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  /*Fields experience Model */
  const handleCloseadd = () => setShowadd(false);
  const handleShowadd = () => setShowadd(true);

  const [selectedImage, setSelectedImage] = useState(null);

  //calling to endpoint for get user details which already in the database
  const getUserDetails = (e) => {
    axios
      .get("http://localhost:3001/api/getUser", {
        headers: {
          authorization: `${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const {
            firstName,
            lastName,
            email,
            academicDetails,
            professionalDetails,
            profilePicture,
          } = response.data;

          if (
            (academicDetails && academicDetails.length > 0) ||
            (professionalDetails && professionalDetails.length > 0)
          ) {
            setUserData({
              firstName,
              lastName,
              email,
              academicDetails,
              professionalDetails,
              profilePicture,
            });
          } else {
            setUserData({
              firstName,
              lastName,
              email,
              academicDetails: [],
              professionalDetails: [],
              profilePicture,
            });
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleGetUserDetails = (e) => {
    e.preventDefault();
    handleShow3();
    getUserDetails();
  };

  //calling to endpoint for saving personal details of the user
  const handleSaveUserData = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/personalDetails",
        {
          title,
          address,
          telephone,
          gender,
          birthday,
          description,
          portfolioLink,
        },
        {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setTitle("");
          setAddress("");
          setTelephone("");
          setGender("");
          setBirthday("");
          setDescription("");
          setPortfolioLink("");
          handleClose3();
          alert("Personal details saved successfully");
        } else {
          alert("Personal details not saved");
        }
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

  //calling to endpoint for saving academic details of the user
  const SaveAcademicData = () => {
    axios
      .post(
        "http://localhost:3001/api/academicDetails",
        {
          institute,
          degree,
          startDate,
          endDate,
          grade,
        },
        {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setInstitute("");
          setDegree("");
          setStartDate("");
          setEndDate("");
          setGrade("");
          handleClose4();
          alert("Academic details saved successfully");
          getUserDetails();
        } else {
          alert("Academic details not saved");
        }
      })
      .catch((error) => {
        console.error("Error updating academic data:", error);
      });
  };

  const handleAcademicData = (e) => {
    e.preventDefault();
    SaveAcademicData();
  };

  const SaveProfessionalData = () => {
    axios
      .post(
        "http://localhost:3001/api/professionalDetails",
        {
          position,
          empType,
          companyName,
          locationType,
          startDate,
          endDate,
          skills,
        },
        {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setPosition("");
          setEmpType("");
          setCompanyName("");
          setLocationType("");
          setStartDate("");
          setEndDate("");
          setSkills("");
          handleClose7();
          alert("Professional details saved successfully");

          getUserDetails();
        } else {
          alert("Professional details not saved");
        }
      })
      .catch((error) => {
        console.error("Error updating Professional data:", error);
      });
  };

  const handleProfessionalData = (e) => {
    e.preventDefault();
    SaveProfessionalData();
  };

  const handlePhotoUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    axios
      .post("http://localhost:3001/api/photoUpload", data, {
        headers: {
          authorization: `${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          handleClose();
          alert("Photo uploaded successfully");

          getUserDetails();
        } else {
          alert("Photo not uploaded");
        }
      })
      .catch((error) => {
        console.error("Error uploading photo:", error);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 vh-100">
            <div className="d-flex align-items-center justify-content-center">
              <div className="vh-100  ">
                <div className="">
                  <img
                    src={GAP_Image}
                    alt="logo"
                    className="img-fluid custom-image-Gap"
                  />
                </div>

                <Tab.Container
                  id="list-group-tabs-example"
                  defaultActiveKey="#link1"
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
                          window.location.href =
                            "/underConstructionHistoryPage";
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
              </div>
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
            <div>
              <div class="carduprofl card">
                <Col xs={5} md={3} className="mx-auto position-relative">
                  <img src={prolog} rounded alt="propick" className="imgr" />
                  <Image
                    src={pen}
                    rounded
                    className="position-absolute m-2 cursor-pointer penclzee"
                    onClick={handleShow}
                  />
                </Col>
                {/*Photo Change Model Start*/}
                <Modal
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
                      <h1>Profile Picture</h1>
                      <p>Change Profile Picture</p>
                    </Modal.Title>
                    <div className="p-7">
                      <Container className="mt-2">
                        <Row className="justify-content-center">
                          <Col
                            xs={12}
                            md={6}
                            lg={4}
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="text-center"></div>
                            <br />
                            <div className="text-center">
                              {file ? (
                                <Image
                                  src={URL.createObjectURL(file)}
                                  alt="profile picture"
                                  roundedCircle
                                  style={{
                                    width: "150px",
                                    height: "150px",
                                    objectFit: "cover",
                                  }}
                                />
                              ) : (
                                <Image
                                  src={userPic}
                                  roundedCircle
                                  style={{
                                    width: "150px",
                                    height: "150px",
                                    objectFit: "cover",
                                  }}
                                />
                              )}
                            </div>
                            <br />
                            <hr />
                            <Row>
                              <Col
                                xs={2}
                                className="text-left"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <label htmlFor="fileInput">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="27"
                                    viewBox="0 0 29 27"
                                    fill="none"
                                    cursor="pointer"
                                  >
                                    <path
                                      d="M24.4748 8.76935L21.6105 0.762355C21.3991 0.171244 20.7775 -0.142783 20.2259 0.0632531L1.1889 7.11538C0.637307 7.31999 0.358711 7.96368 0.571508 8.55479L3.58987 16.9966V12.4737C3.58987 10.4304 5.19705 8.76935 7.17383 8.76935H12.204L18.2029 4.49516L21.6734 8.76935H24.4748ZM27.433 11.3697H7.17383C7.0319 11.3694 6.89135 11.398 6.76045 11.4537C6.62954 11.5094 6.51092 11.591 6.41154 11.6939C6.31216 11.7967 6.23404 11.9187 6.18175 12.0526C6.12946 12.1865 6.10406 12.3297 6.10704 12.4737V25.859C6.10844 26.4899 6.58723 27 7.17383 27H27.433C28.021 27 28.4998 26.4899 28.4998 25.859V12.4737C28.5028 12.3297 28.4774 12.1865 28.4251 12.0526C28.3728 11.9187 28.2946 11.7967 28.1953 11.6939C28.0959 11.591 27.9773 11.5094 27.8464 11.4537C27.7155 11.398 27.5749 11.3694 27.433 11.3697ZM25.6998 24.1581H8.90001V21.3162L11.6776 15.6069L15.5527 20.4893L19.1899 16.7067L23.863 14.9945L25.6998 19.8953V24.1581Z"
                                      fill="black"
                                      fill-opacity="0.5"
                                    />

                                    {/* Gallery icon path */}
                                  </svg>
                                  <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                  />
                                  <p>Upload</p>
                                </label>
                              </Col>
                              <Col
                                xs={8}
                                className="text-center"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <IoSaveSharp
                                  className="svbtn"
                                  onClick={handlePhotoUpload}
                                />

                                <p>Save</p>
                              </Col>
                              <Col
                                xs={2}
                                className="text-right"
                                style={{
                                  cursor: "pointer",
                                }}
                                onClick={handleShow5}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="27"
                                  viewBox="0 0 24 27"
                                  fill="none"
                                >
                                  <path
                                    d="M4.5 27C3.675 27 2.9685 26.706 2.3805 26.118C1.7925 25.53 1.499 24.824 1.5 24V4.5H0V1.5H7.5V0H16.5V1.5H24V4.5H22.5V24C22.5 24.825 22.206 25.5315 21.618 26.1195C21.03 26.7075 20.324 27.001 19.5 27H4.5ZM19.5 4.5H4.5V24H19.5V4.5ZM7.5 21H10.5V7.5H7.5V21ZM13.5 21H16.5V7.5H13.5V21Z"
                                    fill="black"
                                    fill-opacity="0.5"
                                  />
                                </svg>
                                <p>Delete</p>
                              </Col>
                              {/*Delete Model Start*/}
                              <Modal
                                show={show5}
                                onHide={handleClose5}
                                aria-labelledby="example-custom-modal-styling-title"
                              >
                                <Modal.Header closeButton></Modal.Header>

                                <Modal.Body>
                                  <div className="p-7">
                                    <Container className="mt-2">
                                      <Row className="justify-content-center">
                                        <Col
                                          xs={12}
                                          md={6}
                                          lg={4}
                                          style={{
                                            width: "100%",
                                          }}
                                        >
                                          <div className="text-center"></div>
                                          <br />
                                          <div className="text-center">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="123"
                                              height="123"
                                              viewBox="0 0 123 123"
                                              fill="none"
                                            >
                                              <circle
                                                cx="61.5"
                                                cy="61.5"
                                                r="61.5"
                                                fill="white"
                                              />
                                              <circle
                                                cx="61.5"
                                                cy="61.5"
                                                r="60"
                                                stroke="#CF1010"
                                                stroke-opacity="0.8"
                                                stroke-width="3"
                                              />
                                              <path
                                                d="M45.7622 88.9257C44.0767 88.9257 42.6332 88.3284 41.4319 87.1339C40.2306 85.9393 39.6309 84.5051 39.633 82.8311V43.2162H36.5684V37.1216H51.8914V34.0743H70.2791V37.1216H85.6021V43.2162H82.5375V82.8311C82.5375 84.5071 81.9369 85.9424 80.7355 87.1369C79.5342 88.3315 78.0918 88.9277 76.4083 88.9257H45.7622ZM76.4083 43.2162H45.7622V82.8311H76.4083V43.2162ZM51.8914 76.7365H58.0206V49.3108H51.8914V76.7365ZM64.1499 76.7365H70.2791V49.3108H64.1499V76.7365Z"
                                                fill="#CF1010"
                                                fill-opacity="0.8"
                                              />
                                            </svg>
                                            <br></br>
                                            <Modal.Title
                                              id="example-custom-modal-styling-title"
                                              className="text-center"
                                            >
                                              <h1>Are you sure ?</h1>
                                              <p>
                                                do you really want to delete
                                                this record? this process cannot
                                                be undone
                                              </p>
                                            </Modal.Title>
                                          </div>
                                          <br />

                                          <Row className="justify-content-center">
                                            <Col
                                              xs={5}
                                              className="text-left"
                                              style={{
                                                cursor: "pointer",
                                              }}
                                            >
                                              <button
                                                style={{
                                                  cursor: "pointer",
                                                  borderRadius: "5px",
                                                  border:
                                                    "2px solid rgba(0, 0, 0, 0.50)",
                                                  background: "#FFF",
                                                  width: "120px",
                                                  padding: "12px 12px",

                                                  gap: "10px",
                                                }}
                                              >
                                                Cancel
                                              </button>
                                            </Col>
                                            <Col
                                              xs={5}
                                              className="text-center"
                                              style={{
                                                cursor: "pointer",
                                              }}
                                            >
                                              <button
                                                style={{
                                                  cursor: "pointer",
                                                  borderRadius: "5px",
                                                  border: "2px solid #CF1010CC",
                                                  background: "#FFF",
                                                  width: "120px",
                                                  padding: "12px 12px",
                                                  color: "#CF1010CC",
                                                  gap: "10px",
                                                  textAlign: "center",
                                                }}
                                              >
                                                Delete
                                              </button>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Container>
                                  </div>
                                </Modal.Body>
                              </Modal>
                              {/*Delete Model End*/}
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Modal.Body>
                </Modal>
                {/*Photo Change Model End*/}
                <div class="card-body">
                  <div class="text-section">
                    <h5 class="card-title fw-bold">
                      {displayFirstName} {displayLastName}
                    </h5>
                    {userData.professionalDetails &&
                    userData.professionalDetails.length > 0 ? (
                      <p className="card-para">
                        {userData.professionalDetails[0].position}
                      </p>
                    ) : (
                      <p>No professional details available</p>
                      
                    )}
                 
                    <div class="row mt-4">
                      <div class="col-4">
                        <div onClick={handleShow2}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            cursor="pointer"
                          >
                            <rect
                              width="30"
                              height="30"
                              rx="5"
                              fill="#E6F6FF"
                            />
                            <path
                              d="M10.8393 12.1759H7.28711V22.664H10.8393V12.1759Z"
                              fill="#2A2A72"
                            />
                            <path
                              d="M20.447 11.9486C20.3161 11.9335 20.1769 11.9259 20.0378 11.9183C18.0489 11.8425 16.9275 12.9338 16.5347 13.4036C16.4283 13.5324 16.3791 13.6082 16.3791 13.6082V12.2063H12.9824V22.6944H16.3791H16.5347C16.5347 21.6259 16.5347 20.5649 16.5347 19.4964C16.5347 18.9205 16.5347 18.3446 16.5347 17.7686C16.5347 17.0563 16.4774 16.2985 16.8621 15.6467C17.1894 15.1011 17.7788 14.8283 18.4417 14.8283C20.4061 14.8283 20.447 16.4728 20.447 16.6243C20.447 16.6319 20.447 16.6395 20.447 16.6395V22.7399H23.9993V15.8968C23.9993 13.5552 22.7142 12.176 20.447 11.9486Z"
                              fill="#2A2A72"
                            />
                            <path
                              d="M9.06258 10.8194C10.2017 10.8194 11.1252 9.96438 11.1252 8.90969C11.1252 7.855 10.2017 7 9.06258 7C7.92345 7 7 7.855 7 8.90969C7 9.96438 7.92345 10.8194 9.06258 10.8194Z"
                              fill="#2A2A72"
                            />
                          </svg>{" "}
                          &nbsp;&nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            cursor="pointer"
                          >
                            <rect
                              width="30"
                              height="30"
                              rx="5"
                              fill="#E6F6FF"
                            />
                            <path
                              d="M24 9.75C24 8.7875 23.19 8 22.2 8H7.8C6.81 8 6 8.7875 6 9.75V20.25C6 21.2125 6.81 22 7.8 22H22.2C23.19 22 24 21.2125 24 20.25V9.75ZM22.2 9.75L15 14.125L7.8 9.75H22.2ZM22.2 20.25H7.8V11.5L15 15.875L22.2 11.5V20.25Z"
                              fill="#2A2A72"
                            />
                          </svg>
                          &nbsp;&nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            cursor="pointer"
                          >
                            <rect
                              width="30"
                              height="30"
                              rx="5"
                              fill="#E6F6FF"
                            />
                            <path
                              d="M15.7545 20.3545C15.8552 20.4548 15.9351 20.574 15.9896 20.7052C16.0441 20.8365 16.0721 20.9772 16.0721 21.1193C16.0721 21.2614 16.0441 21.4021 15.9896 21.5333C15.9351 21.6645 15.8552 21.7837 15.7545 21.884L15.22 22.4184C14.2071 23.4311 12.8334 24 11.4009 24C9.96852 24 8.59477 23.4311 7.5819 22.4184C6.56903 21.4057 6 20.0323 6 18.6001C6 17.168 6.56903 15.7945 7.5819 14.7819L9.75238 12.6127C10.7256 11.6373 12.035 11.0708 13.4124 11.0294C14.7897 10.9879 16.1309 11.4745 17.161 12.3896C17.2674 12.4841 17.3541 12.5986 17.4161 12.7267C17.4782 12.8547 17.5145 12.9937 17.5228 13.1357C17.5312 13.2777 17.5115 13.42 17.4648 13.5544C17.4182 13.6888 17.3455 13.8127 17.251 13.9191C17.1565 14.0254 17.0419 14.1121 16.9138 14.1741C16.7858 14.2362 16.6468 14.2725 16.5047 14.2808C16.3627 14.2892 16.2204 14.2695 16.0859 14.2228C15.9515 14.1762 15.8276 14.1035 15.7212 14.009C15.1035 13.4605 14.2995 13.1687 13.4736 13.1933C12.6478 13.2179 11.8626 13.557 11.2786 14.1413L9.10988 16.3077C8.50225 16.9152 8.16089 17.7392 8.16089 18.5983C8.16089 19.4575 8.50225 20.2814 9.10988 20.8889C9.71751 21.4965 10.5416 21.8377 11.4009 21.8377C12.2603 21.8377 13.0844 21.4965 13.692 20.8889L14.2265 20.3545C14.3268 20.2542 14.4459 20.1745 14.577 20.1202C14.7081 20.0659 14.8486 20.0379 14.9905 20.0379C15.1324 20.0379 15.2729 20.0659 15.404 20.1202C15.5351 20.1745 15.6542 20.2542 15.7545 20.3545ZM22.4207 7.57895C21.407 6.56784 20.0336 6 18.6017 6C17.1698 6 15.7963 6.56784 14.7826 7.57895L14.2481 8.11337C14.0453 8.31619 13.9313 8.59127 13.9313 8.8781C13.9313 9.16493 14.0453 9.44002 14.2481 9.64284C14.451 9.84566 14.7261 9.9596 15.013 9.9596C15.2999 9.9596 15.575 9.84566 15.7779 9.64284L16.3124 9.10842C16.9201 8.50091 17.7442 8.15962 18.6035 8.15962C19.4628 8.15962 20.2869 8.50091 20.8946 9.10842C21.5022 9.71593 21.8435 10.5399 21.8435 11.399C21.8435 12.2582 21.5022 13.0821 20.8946 13.6896L18.725 15.8597C18.1405 16.4437 17.3548 16.7824 16.5288 16.8063C15.7027 16.8302 14.8988 16.5376 14.2814 15.9883C14.1751 15.8938 14.0511 15.8212 13.9167 15.7745C13.7823 15.7279 13.64 15.7082 13.4979 15.7166C13.3558 15.7249 13.2168 15.7612 13.0888 15.8232C12.9607 15.8853 12.8462 15.972 12.7516 16.0783C12.6571 16.1846 12.5844 16.3086 12.5378 16.443C12.4912 16.5774 12.4715 16.7197 12.4798 16.8617C12.4882 17.0037 12.5244 17.1427 12.5865 17.2707C12.6486 17.3987 12.7353 17.5133 12.8416 17.6078C13.8711 18.5226 15.2113 19.0096 16.588 18.9689C17.9648 18.9283 19.2739 18.3632 20.2476 17.3892L22.418 15.22C23.4305 14.2068 23.9995 12.8332 24 11.4009C24.0005 9.96866 23.4325 8.59471 22.4207 7.58075V7.57895Z"
                              fill="#2A2A72"
                            />
                          </svg>
                          &nbsp;&nbsp;
                          <button className="btn-add-new">button</button>
                        </div>

                        <div class="position-absolute bottom-0 end-0 p-3">
                          <div
                            class="box d-flex align-items-center"
                            onClick={handleGetUserDetails}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              cursor="pointer"
                            >
                              <path
                                d="M7 17.0134L11.413 16.9984L21.045 7.45839C21.423 7.08039 21.631 6.57839 21.631 6.04439C21.631 5.51039 21.423 5.00839 21.045 4.63039L19.459 3.04439C18.703 2.28839 17.384 2.29239 16.634 3.04139L7 12.5834V17.0134ZM18.045 4.45839L19.634 6.04139L18.037 7.62339L16.451 6.03839L18.045 4.45839ZM9 13.4174L15.03 7.44439L16.616 9.03039L10.587 15.0014L9 15.0064V13.4174Z"
                                fill="#2A2A72"
                              />
                              <path
                                d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z"
                                fill="#2A2A72"
                              />
                            </svg>
                            <p
                              className="ptnpara ms-2 mb-0"
                              style={{ cursor: "pointer" }}
                            >
                              Edit Profile
                            </p>
                          </div>
                          {/*Edit personal details Model Start*/}
                          <Modal
                            show={show3}
                            onHide={handleClose3}
                            aria-labelledby="example-custom-modal-styling-title"
                          >
                            <Modal.Header closeButton></Modal.Header>

                            <Modal.Body>
                              <Modal.Title
                                id="example-custom-modal-styling-title"
                                className="text-center"
                              >
                                <h1>Edit personal details</h1>
                                <br></br>
                              </Modal.Title>
                              <div className="p-7">
                                <Container className="mt-2">
                                  <Row className="mb-3">
                                    <Form.Group
                                      as={Col}
                                      controlId="formGridState"
                                    >
                                      <Form.Label>Title*</Form.Label>
                                      <Form.Select
                                        value={title}
                                        onChange={(e) =>
                                          setTitle(e.target.value)
                                        }
                                        placeholder="Choose..."
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                          textTransform: "none",
                                        }}
                                      >
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                        <option>Miss</option>
                                      </Form.Select>
                                    </Form.Group>

                                    <Form.Group
                                      as={Col}
                                      controlId="formGridCity"
                                    >
                                      <Form.Label>First name</Form.Label>
                                      <Form.Control
                                        disabled
                                        value={userData.firstName}
                                        placeholder="First Name"
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                          textTransform: "none",
                                        }}
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      as={Col}
                                      controlId="formGridZip"
                                    >
                                      <Form.Label>Last name</Form.Label>
                                      <Form.Control
                                        disabled
                                        value={userData.lastName}
                                        placeholder="Last Name"
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                          textTransform: "none",
                                        }}
                                      />
                                    </Form.Group>
                                  </Row>

                                  <Form.Label>Email </Form.Label>
                                  <Form.Control
                                    disabled
                                    value={userData.email}
                                    placeholder="Email"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                      textTransform: "none",
                                    }}
                                  />
                                  <br></br>
                                  <Form.Label>Address </Form.Label>
                                  <Form.Control
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter Your Address"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                      textTransform: "none",
                                    }}
                                  />
                                  <br></br>
                                  <Form.Label>Telephone Number </Form.Label>
                                  <Form.Control
                                    value={telephone}
                                    onChange={(e) =>
                                      setTelephone(e.target.value)
                                    }
                                    placeholder="Enter Your Phone Number"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                      textTransform: "none",
                                    }}
                                  />
                                  <br></br>
                                  <Row className="mb-3">
                                    <Form.Group
                                      as={Col}
                                      controlId="formGridState"
                                    >
                                      <Form.Label>Gender</Form.Label>
                                      <Form.Select
                                        value={gender}
                                        onChange={(e) =>
                                          setGender(e.target.value)
                                        }
                                        placeholder="Choose..."
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                          textTransform: "none",
                                        }}
                                      >
                                        <option>Male</option>
                                        <option>Female</option>
                                      </Form.Select>
                                    </Form.Group>

                                    <Form.Group
                                      as={Col}
                                      controlId="formGridZip"
                                    >
                                      <Form.Label>Birthday</Form.Label>
                                      <Form.Control
                                        onChange={(e) =>
                                          setBirthday(e.target.value)
                                        }
                                        placeholder="Enter Your Birthday"
                                        value={birthday}
                                        type="date"
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                        }}
                                      />
                                    </Form.Group>
                                  </Row>

                                  <Form.Label>Description*</Form.Label>
                                  <Form.Control
                                    value={description}
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                    placeholder="write a small description about yourself"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                      textTransform: "none",
                                    }}
                                  />
                                  <br></br>
                                  <Form.Label>Project Portfolio </Form.Label>
                                  <Form.Control
                                    value={portfolioLink}
                                    onChange={(e) =>
                                      setPortfolioLink(e.target.value)
                                    }
                                    placeholder="google drive link"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                      textTransform: "none",
                                    }}
                                  />
                                </Container>
                              </div>
                              <div className="text-center">
                                <button
                                  className="btn  custom-button-reset my-1 my-sm-3 t"
                                  type="submit"
                                  onClick={handleSaveUserData}
                                >
                                  Save
                                </button>
                              </div>
                            </Modal.Body>
                          </Modal>
                          {/*Edit personal details Model End*/}
                        </div>
                      </div>
                    </div>
                    {/*Social Media Model Start*/}
                    <Modal
                      show={show2}
                      onHide={handleClose2}
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton></Modal.Header>

                      <Modal.Body>
                        <Modal.Title
                          id="example-custom-modal-styling-title"
                          className="text-center"
                        >
                          <h1>Social Media</h1>
                          <p>add social media links</p>
                        </Modal.Title>
                        <div className="p-7">
                          <Container className="mt-2">
                            <label>Email</label>

                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="18"
                                  viewBox="0 0 22 18"
                                  fill="none"
                                >
                                  <path
                                    d="M22 2.25C22 1.0125 21.01 0 19.8 0H2.2C0.99 0 0 1.0125 0 2.25V15.75C0 16.9875 0.99 18 2.2 18H19.8C21.01 18 22 16.9875 22 15.75V2.25ZM19.8 2.25L11 7.875L2.2 2.25H19.8ZM19.8 15.75H2.2V4.5L11 10.125L19.8 4.5V15.75Z"
                                    fill="black"
                                    fill-opacity="0.5"
                                  />
                                </svg>
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="juliusaguirre@gmail.com"
                                aria-label="juliusaguirre@gmail.com"
                                aria-describedby="basic-addon1"
                                className="flex-grow-1" // Use Bootstrap's utility class for flexible width
                              />
                            </InputGroup>
                            <br></br>
                            <label style={{ color: "#2A2A72" }}>
                              LinkedIn Link
                            </label>

                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="21"
                                  viewBox="0 0 22 21"
                                  fill="none"
                                >
                                  <path
                                    d="M4.96998 6.69824H0.373047V20.2709H4.96998V6.69824Z"
                                    fill="#2A2A72"
                                  />
                                  <path
                                    d="M17.4041 6.40395C17.2346 6.38434 17.0545 6.37453 16.8745 6.36472C14.3006 6.26665 12.8495 7.67884 12.3411 8.28686C12.2034 8.45358 12.1398 8.55164 12.1398 8.55164V6.73738H7.74414V20.31H12.1398H12.3411C12.3411 18.9273 12.3411 17.5543 12.3411 16.1715C12.3411 15.4262 12.3411 14.6809 12.3411 13.9356C12.3411 13.0138 12.2669 12.0331 12.7648 11.1897C13.1884 10.4836 13.9511 10.1305 14.809 10.1305C17.3511 10.1305 17.4041 12.2586 17.4041 12.4548C17.4041 12.4646 17.4041 12.4744 17.4041 12.4744V20.3689H22.001V11.5133C22.001 8.483 20.338 6.69815 17.4041 6.40395Z"
                                    fill="#2A2A72"
                                  />
                                  <path
                                    d="M2.66918 4.94264C4.14334 4.94264 5.33838 3.83619 5.33838 2.47132C5.33838 1.10645 4.14334 0 2.66918 0C1.19503 0 0 1.10645 0 2.47132C0 3.83619 1.19503 4.94264 2.66918 4.94264Z"
                                    fill="#2A2A72"
                                  />
                                </svg>
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="/in/juliusaguirre"
                                aria-label="/in/juliusaguirre"
                                aria-describedby="basic-addon1"
                                className="flex-grow-1" // Use Bootstrap's utility class for flexible width
                              />
                            </InputGroup>
                            <br></br>
                            <label style={{ color: "#2A2A72" }}>
                              LinkedIn Link
                            </label>

                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                >
                                  <path
                                    d="M11.9222 17.5444C12.0452 17.667 12.1428 17.8127 12.2095 17.9731C12.2761 18.1335 12.3104 18.3054 12.3104 18.4791C12.3104 18.6528 12.2761 18.8247 12.2095 18.9851C12.1428 19.1455 12.0452 19.2912 11.9222 19.4138L11.2689 20.067C10.0309 21.3047 8.35189 22 6.60115 22C4.85042 22 3.17139 21.3047 1.93343 20.067C0.695477 18.8292 0 17.1506 0 15.4002C0 13.6498 0.695477 11.9711 1.93343 10.7334L4.58625 8.0822C5.7757 6.89004 7.37607 6.1977 9.05954 6.147C10.743 6.0963 12.3822 6.69107 13.6412 7.80949C13.7712 7.92502 13.8772 8.06501 13.9531 8.22147C14.0289 8.37794 14.0732 8.54781 14.0835 8.7214C14.0937 8.89498 14.0696 9.06888 14.0126 9.23316C13.9556 9.39744 13.8668 9.54888 13.7512 9.67885C13.6357 9.80881 13.4956 9.91475 13.3391 9.99061C13.1827 10.0665 13.0127 10.1108 12.8391 10.121C12.6655 10.1312 12.4916 10.1071 12.3273 10.0501C12.1629 9.99313 12.0115 9.90433 11.8815 9.78881C11.1265 9.1184 10.1438 8.76174 9.13443 8.79179C8.12508 8.82184 7.16536 9.23632 6.45157 9.95045L3.80096 12.5983C3.0583 13.3408 2.64108 14.3479 2.64108 15.398C2.64108 16.448 3.0583 17.4551 3.80096 18.1976C4.54362 18.9401 5.55088 19.3572 6.60115 19.3572C7.65143 19.3572 8.65869 18.9401 9.40134 18.1976L10.0546 17.5444C10.1772 17.4217 10.3228 17.3244 10.483 17.258C10.6432 17.1916 10.815 17.1574 10.9884 17.1574C11.1619 17.1574 11.3336 17.1916 11.4938 17.258C11.654 17.3244 11.7996 17.4217 11.9222 17.5444ZM20.0698 1.92983C18.8308 0.694024 17.1522 0 15.4021 0C13.652 0 11.9733 0.694024 10.7344 1.92983L10.081 2.583C9.8331 2.83089 9.69381 3.16711 9.69381 3.51768C9.69381 3.86825 9.8331 4.20446 10.081 4.45236C10.329 4.70025 10.6653 4.83951 11.0159 4.83951C11.3666 4.83951 11.7028 4.70025 11.9508 4.45236L12.6041 3.79918C13.3467 3.05667 14.354 2.63954 15.4043 2.63954C16.4545 2.63954 17.4618 3.05667 18.2045 3.79918C18.9471 4.54169 19.3643 5.54875 19.3643 6.59881C19.3643 7.64888 18.9471 8.65594 18.2045 9.39845L15.5527 12.0507C14.8383 12.7646 13.8781 13.1784 12.8685 13.2077C11.8589 13.2369 10.8763 12.8793 10.1217 12.208C9.99175 12.0925 9.84027 12.0037 9.67596 11.9467C9.51165 11.8897 9.33772 11.8656 9.1641 11.8758C8.99048 11.886 8.82057 11.9303 8.66407 12.0062C8.50758 12.082 8.36756 12.188 8.25201 12.3179C8.13647 12.4479 8.04765 12.5993 7.99065 12.7636C7.93364 12.9279 7.90956 13.1018 7.91977 13.2754C7.92998 13.449 7.97429 13.6188 8.05017 13.7753C8.12605 13.9318 8.23201 14.0718 8.36199 14.1873C9.62019 15.3055 11.2582 15.9006 12.9409 15.8509C14.6236 15.8013 16.2237 15.1105 17.4137 13.9201L20.0665 11.2689C21.304 10.0305 21.9994 8.35171 22 6.60115C22.0006 4.85058 21.3064 3.17132 20.0698 1.93203V1.92983Z"
                                    fill="#2A2A72"
                                  />
                                </svg>
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="/juliusaguirre.com"
                                aria-label="/juliusaguirre.com"
                                aria-describedby="basic-addon1"
                                className="flex-grow-1" // Use Bootstrap's utility class for flexible width
                              />
                            </InputGroup>
                          </Container>
                        </div>
                        <div className="text-center">
                          <button
                            className="btn  custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </Modal.Body>
                    </Modal>
                    {/*Social Media Model End*/}
                  </div>
                </div>
              </div>

              <div class="cardfu">
                <div className="d-flex justify-content-between mt-4">
                  <h4>Fields of interest</h4>

                  <h6 className="View-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      cursor="pointer"
                      onClick={handleShowadd}
                    >
                      <path
                        d="M15 8.4375H8.4375V15H6.5625V8.4375H0V6.5625H6.5625V0H8.4375V6.5625H15V8.4375Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </h6>
                  {/* <Modal
                    show={show4}
                    onHide={handleClose4}
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body>
                      <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="text-center"
                      >
                        <h1>Academic Qualification</h1>
                        <p>Add New Academic Qualification</p>
                      </Modal.Title>
                      <div className="p-7">
                        <Container className="mt-2">
                          <Form.Label>Institute* </Form.Label>
                          <Form.Control
                          value={institute}
                          onChange={(e) => setInstitute(e.target.value)}
                            placeholder="add institute name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>
                          <Form.Label>Degree / Course* </Form.Label>
                          <Form.Control
                          value={degree}
                          onChange={(e) => setDegree(e.target.value)}
                            placeholder="add degree / course name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>

                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Start date*</Form.Label>
                            <Form.Control
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>End date (or expected)*</Form.Label>
                            <Form.Control
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Label>Grade</Form.Label>
                          <Form.Control
                          value={grade}
                          onChange={(e) => setGrade(e.target.value)}
                            placeholder="add grade"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>
                        </Container>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn  custom-button-reset my-1 my-sm-3 t"
                          type="submit"
                          onClick={handleSaveAcademicData}
                        >
                          Save
                        </button>
                      </div>
                    </Modal.Body>
                  </Modal> */}
                  {/*Academic qualification Model Start*/}
                  <Modal
                    size="lg"
                    show={showadd}
                    onHide={handleCloseadd}
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body>
                      <div class="cardm">
                        <div className="container mt-3">
                          <div className="d-inline-block">
                            <button className="pbtn289">
                              Time Management&nbsp;&nbsp;{" "}
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
                              Team Work &nbsp;&nbsp;
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
                              Work Balance &nbsp;&nbsp;{" "}
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
                          <div className="box d-flex align-items-end">
                            <p className="ptnparak ms-2 mb-0 align-items-end">
                              <button
                                className="custom-button218 custom-button-reset my-1 my-sm-3 t"
                                type="submit"
                              >
                                Cancel
                              </button>
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              <button
                                className="custom-button2136o custom-button-reset my-1 my-sm-3 t"
                                type="submit"
                              >
                                Add
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/*Academic qualification Model End*/}
                </div>
                <br></br>
                <hr></hr>
                <div className="d-flex justify-content-between mt-4">
                  <h4>Academic Qualification</h4>

                  <h6 className="View-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      cursor="pointer"
                      onClick={handleShow4}
                    >
                      <path
                        d="M15 8.4375H8.4375V15H6.5625V8.4375H0V6.5625H6.5625V0H8.4375V6.5625H15V8.4375Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </h6>
                  {/*Academic qualification Model Start*/}
                  <Modal
                    show={show4}
                    onHide={handleClose4}
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body>
                      <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="text-center"
                      >
                        <h1>Academic Qualification</h1>
                        <p>Add New Academic Qualification</p>
                      </Modal.Title>
                      <div className="p-7">
                        <Container className="mt-2">
                          <Form.Label>Institute* </Form.Label>
                          <Form.Control
                            value={institute}
                            onChange={(e) => setInstitute(e.target.value)}
                            placeholder="add institute name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>
                          <Form.Label>Degree / Course* </Form.Label>
                          <Form.Control
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                            placeholder="add degree / course name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>

                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Start date*</Form.Label>
                            <Form.Control
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>End date (or expected)*</Form.Label>
                            <Form.Control
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Label>Grade</Form.Label>
                          <Form.Control
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            placeholder="add grade"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>
                        </Container>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn  custom-button-reset my-1 my-sm-3 t"
                          type="submit"
                          onClick={handleAcademicData}
                        >
                          Save
                        </button>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/*Academic qualification Model End*/}
                </div>

                <div class="carduprofl cardnew card" style={{ border: "0" }}>
                  <div class="card-body">
                    <div class="text-section">
                      <div>
                        {userData.academicDetails &&
                        userData.academicDetails.length > 0 ? (
                          <>
                            <h5 class="card-title2 fw-bold">
                              {userData.academicDetails[0].institute}
                            </h5>
                            <p className="card-para2">
                              {userData.academicDetails[0].degree}
                            </p>
                            <p className="card-para2">
                              {moment(
                                userData.academicDetails[0].startDate
                              ).format("YYYY/MM/DD")}{" "}
                              -{" "}
                              {moment(
                                userData.academicDetails[0].endDate
                              ).format("YYYY/MM/DD")}
                            </p>
                          </>
                        ) : (
                          <p className="card-para2">
                            No academic details available
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <br></br>
                <hr></hr>
                <div className="d-flex justify-content-between mt-4">
                  <h4>Professional experience</h4>

                  <h6 className="View-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      cursor="pointer"
                      onClick={handleShow7}
                    >
                      <path
                        d="M15 8.4375H8.4375V15H6.5625V8.4375H0V6.5625H6.5625V0H8.4375V6.5625H15V8.4375Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </h6>
                  {/*Professional Experience  Model Start*/}
                  <Modal
                    show={show7}
                    onHide={handleClose7}
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body>
                      <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="text-center"
                      >
                        <h1>Professional Experience </h1>

                        <p>Add New Professional Experience </p>
                      </Modal.Title>
                      <div className="p-7">
                        <Container className="mt-2">
                          <Form.Label>position* </Form.Label>
                          <Form.Control
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            placeholder="add position"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>

                          <Form.Label>Employment type*</Form.Label>
                          <Form.Select
                            value={empType}
                            onChange={(e) => setEmpType(e.target.value)}
                            placeholder="Select employment type"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          >
                            <option>Select employment type</option>
                            <option>Full time</option>
                            <option>Part time</option>
                            <option>Internship</option>
                            <option>Freelance</option>
                            <option>Contract</option>
                          </Form.Select>

                          <br></br>
                          <Form.Label>Company name* </Form.Label>
                          <Form.Control
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="add Company name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>
                          <Form.Label>Location type* </Form.Label>
                          <Form.Select
                            value={locationType}
                            onChange={(e) => setLocationType(e.target.value)}
                            placeholder="select location type"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          >
                            <option>select location type</option>
                            <option>Onsite</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                          </Form.Select>

                          <br></br>
                          <Form.Label>Start date*</Form.Label>
                          <Form.Control
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="Start date of degree"
                            type="date"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>
                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>End date(or expected)*</Form.Label>
                            <Form.Control
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Label>Skills</Form.Label>
                          <Form.Control
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            placeholder="describe about skills gathered"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>
                        </Container>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn  custom-button-reset my-1 my-sm-3 t"
                          type="submit"
                          onClick={handleProfessionalData}
                        >
                          Save
                        </button>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/*Professional Experience  Model End*/}
                </div>
                <div class="carduprofl cardnew card" style={{ border: "0" }}>
                  <div class="card-body">
                    <div class="text-section">
                      <div>
                        {userData.professionalDetails &&
                        userData.professionalDetails.length > 0 ? (
                          <>
                            <h5 class="card-title2 fw-bold">
                              {userData.professionalDetails[0].companyName}
                            </h5>
                            <p className="card-para2">
                              {userData.professionalDetails[0].empType}
                            </p>
                            <p className="card-para2">
                              {moment(
                                userData.professionalDetails[0].startDate
                              ).format("MM/YYYY")}{" "}
                              -{" "}
                              {moment(
                                userData.professionalDetails[0].endDate
                              ).format("MM/YYYY")}
                            </p>
                            <p className="card-para2">
                              {userData.professionalDetails[0].position}
                            </p>
                          </>
                        ) : (
                          <p className="card-para2">
                            No professional details available
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileEmptyView;
