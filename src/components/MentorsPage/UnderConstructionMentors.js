import React, { useState, useEffect } from "react";
import "./Mentors.css";
import Navbar from "react-bootstrap/Navbar";
import GAP_Image from "./img/GAP_BG.png";
import { FaRegBell } from "react-icons/fa6";
import Level from "./img/level.png";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import img1 from "../HomePage/Img/1.png";
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
import { Modal } from "react-bootstrap";
import userPic from "../HomePage/Img/user.png";
import TakeABreak from "../HomePage/Img/Group 421.png";
import { backEndURL } from "../../server";
import axios from "axios";
function UnderConstructionMentors() {
  /*LogOut Model*/
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  /*LogOut Model*/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    handleClose();
    window.location.href = "/login";
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
            const profilePicture =  `${backEndURL}/${response.data.profilePicture}`;
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

  return (
    <div className="d-flex">
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
                      style={{ backgroundColor: "#DDDDFE", border: "0" }}
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
                    <br />
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
                    onClick={handleLogout}
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
            <div>
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
                      src={
                        !selectedImage
                          ? userPic
                          : selectedImage
                      }
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
              <div
                className="main-box fadeInUp"
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
                    <h5 className="m-3 fnbltunde">Mentors</h5>
                  </div>
                </div>

                <div className="">
                  <Card style={{ marginRight: "20px", borderRadius: "10px" }}>
                    <div className="text-center">
                      <div>
                        <img src={img1} alt="YourImage" className="conimg" />
                      </div>
                      <div>
                        <h2 className="contpik"> Page Under construction</h2>
                        <p className="conpret">
                          To make things perfect we need some time to build.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderConstructionMentors;
