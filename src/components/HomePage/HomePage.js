import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Homepage_image from "../HomePage/Img/homepage.png";
import "../HomePage/Home.css";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import Level from "../SettingPage/img/level.png";
import userPic from "../HomePage/Img/user.png";
import img1 from "../HomePage/Img/1.png";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Modal } from "react-bootstrap";
import TakeABreak from "../HomePage/Img/Group 421.png";
import { FaSearch } from "react-icons/fa";
import { FormControl } from "react-bootstrap";
import { FaRegBell } from "react-icons/fa6";
import { backEndURL } from "../../server";
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
import axios from "axios";

const HomePage = () => {
  // const user = userDetails.user; //google login
  const [firstName, setFirstName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  // const [show, setShow] = useState(true);
  // const handleShow = () => setShow(true);
  // const handleClose = () =>  setShow(false);

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    setFirstName(storedFirstName);
  });

  useEffect(() => {
    const getUserImage = () => {
      axios
        .get(`${backEndURL}/api/getUserImage`, {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.profilePicture) {
            const profilePicture =  `${backEndURL}/${response.data.profilePicture}`;
            setProfilePic(profilePicture);
          }
        })
        .catch((error) => {
          console.error("Error fetching user image:", error);
        });
    };
    getUserImage();
  });

  const handleLogout = () => {
    // if (user) {
    //   logout();   //google login
    // }
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    handleClose();
    window.location.href = "/login";
  };

  // const logout = () => {
  //   window.open(`${process.env.BACKEND_API_URL}/auth/logout`, "_self");
  // }; //google login related code

  /*LogOut Model*/
  const [show, setShow] = useState(false);
  /*LogOut Model*/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

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
                  {" "}
                  &times;
                </button>
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
                        window.location.href = "/home";
                        close_sidebar_on_click();
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
                />
                &nbsp;&nbsp;
                <div className="ml-auto d-flex align-items-center">
                  <FaRegBell className="bell-nav" />
                  &nbsp;&nbsp;
                  <img
                    src={
                      !profilePic
                        ? userPic
                        : profilePic
                    }
                    roundedCircle
                    width="45"
                    height="45"
                    style={{
                      borderRadius: "100000px",
                    }}
                    className="d-inline-block"
                    alt="React Bootstrap logo"
                    onClick={() => {
                      window.location.href = "/userProfileEmptyView";
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
            <div className="custom-Point">
              <div className="home-bx-one">
                <h4 className="custom-S-text1 mt-3">Hi {firstName}!!</h4>
                {/* {user ? <h4>Hi {firstName}!!</h4> : <h4>Hi {firstName}!!</h4>} */}{" "}
                {/*google login*/}
                <h4 className="custom-S-text2">
                  Congratulations on earning points, <br />
                  Let's keep stepping forward!
                </h4>
                <div className="btn my-1 my-sm-3">
                  <img
                    src={Level}
                    width="100"
                    height="60"
                    style={{margin:"0 0 0 30px"}}
                    className="d-inline-block "
                    alt="React Bootstrap logo"
                  />
                </div>
              </div>
              <div className="home-bx-2">
                <img
                  src={Homepage_image}
                  alt="YourImage"
                  className="img-fluid mt-2 img-brdr"
                  style={{ objectFit: "cover", width: "100%", height: "96%" }}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <h4>Recommended Mentors</h4>
              <div>
                <h6
                  className="View-more"
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => {
                    window.location.href = "/underConstructionMentors";
                  }}
                >
                  <u>View More</u>
                </h6>
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
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
