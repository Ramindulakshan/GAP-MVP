import React, { useState, useEffect } from "react";
import "../MentorsPage/Mentors.css";
import Navbar from "react-bootstrap/Navbar";
import { FaRegBell } from "react-icons/fa6";
import GAP_Image from "./img/GAP_BG.png";
import Student_Image from "./img/Student.png";
import Level from "./img/level.png";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import img1 from "../HomePage/Img/1.png";
import { IoHomeOutline, IoPeopleOutline, IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { Modal } from "react-bootstrap";
import TakeABreak from "../HomePage/Img/Group 421.png";

function UnderConstructionHistoryPage() {
  /*LogOut Model*/
  const [show, setShow] = useState(false);
  /*LogOut Model*/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex">
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
                      style={{ backgroundColor: "#DDDDFE", border: "0" }}
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
            <div>
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
                  <FaRegBell className="bell-nav" />
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
                    <h5 className="m-3 fnbltunde">Mentoring History</h5>
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

export default UnderConstructionHistoryPage;
