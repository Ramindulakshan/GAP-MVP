import React, { useState } from "react";
import "../HomePage/Home.css";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Modal } from "react-bootstrap";
import TakeABreak from "../HomePage/Img/Group 421.png";

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
function SideBar() {
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
  const handleLogout = () => {
    // if (user) {
    //   logout();   //google login
    // }
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    handleClose();
    window.location.href = "/";
  };

  return (
    <div>
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
                  window.location.href = "/underConstructionMentorSession";
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
                  window.location.href = "/underConstructionWeeklySchedulePage";
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
  );
}

export default SideBar;
