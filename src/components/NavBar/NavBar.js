import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import { backEndURL, imageURL } from "../../backendUrl";
import Level from "../SettingPage/img/level.png";
import userPic from "../HomePage/Img/user.png";
import { FaRegBell } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import "../HomePage/Home.css";
import "./nav.css";

function NavBar() {
  const [firstName, setFirstName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [mentorsList, setMentorsList] = useState([]);
  const [originalMentorsList, setOriginalMentorsList] = useState([]);
  const [highlightedName, setHighlightedName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, []);

  useEffect(() => {
    const getUserImage = async () => {
      try {
        const response = await axios.get(`${backEndURL}/getUserImage`, {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        });
        if (response.data.profilePicture) {
          const profilePicture = `${imageURL}/${response.data.profilePicture}`;
          setProfilePic(profilePicture);
        } else {
          setProfilePic(null);
        }
      } catch (error) {
        console.error("Error fetching user image:", error);
      }
    };
    getUserImage();
  }, []);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get(`${backEndURL}/mentorDetails`);
        setMentorsList(response.data.mentors);
        setOriginalMentorsList(response.data.mentors);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };
    fetchMentors();
  }, []);


 
  function nav_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  return (
    <div>
      <Navbar className="mt-3">
        <div className="">
          <div className="serchbox_brode ">
            <div className="search_box">
              <input
                className="serchbarnew"
                type="text"
                required
                placeholder="Find A Mentor... "
              
              />

              <IoMdSearch className="serchio" />
            </div>
          </div>
        </div>

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
          </div>
          <button className="mobile-toggle-btn togelbtn" onClick={nav_open}>
            ☰
          </button>
        </Navbar.Brand>
      </Navbar>
  
      
    </div>
  );
}

export default NavBar;