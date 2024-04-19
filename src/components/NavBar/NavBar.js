import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "../HomePage/Home.css";
import Level from "../SettingPage/img/level.png";
import userPic from "../HomePage/Img/user.png";
import { FaSearch } from "react-icons/fa";
import { FormControl } from "react-bootstrap";
import { FaRegBell } from "react-icons/fa6";
import { backEndURL } from "../../backendUrl";
import axios from "axios";
function NavBar() {
  const [firstName, setFirstName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    setFirstName(storedFirstName);
  });

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
            const profilePicture = `http://89.116.34.229:3001/${response.data.profilePicture}`;
      
            setProfilePic(profilePicture);
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
          />
          &nbsp;&nbsp;
          <div className="ml-auto d-flex align-items-center">
            <FaRegBell className="bell-nav" />
            &nbsp;&nbsp;
            <img
              src={!profilePic ? userPic : profilePic}
              roundedCircle
              width="45"
              height="45"
              style={{
                borderRadius: "100000px",
              }}
              className="d-inline-block"
              alt="React Bootstrap logo"
              onClick={() => {
                window.location.href = "/userProfile";
              }}
            />
            {/* Toggle Button for Mobile View */}
            <button className="mobile-toggle-btn togelbtn" onClick={nav_open}>
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
    </div>
  );
}

export default NavBar;
