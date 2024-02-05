import React, { useState, useEffect } from "react";
import "../MentorsPage/Mentors.css";
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
import TakeABreak from "../HomePage/Img/Group 421.png";

function UnderConstructionWeeklySchedulePage() {
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
                    <h5 className="m-3 fnbltunde">Weekly Schedule</h5>
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

export default UnderConstructionWeeklySchedulePage;
