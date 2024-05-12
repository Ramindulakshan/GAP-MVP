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

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() !== "") {
      const filteredMentors = originalMentorsList.filter(
        (mentor) =>
          mentor.firstName.toLowerCase().includes(query) ||
          mentor.lastName.toLowerCase().includes(query)
      );
      setHighlightedName(query);
      setMentorsList(filteredMentors);
      setShowDropdown(true);
    } else {
      setHighlightedName("");
      setMentorsList(originalMentorsList);
      setShowDropdown(false);
    }
  };

  const handleSelectMentor = (mentorName) => {
    setSearchQuery(mentorName);
    setShowDropdown(false);
  };

  return (
    <div>
      <Navbar className="mt-3">
        <div className="">
        <div className="serchbox_brode ">
          <div className="search_box">
            <input
              className="serchbarnew"
              type="text"
              placeholder="Find A Mentor... "
              value={searchQuery}
              onChange={handleSearch}
            />

            <IoMdSearch className="serchio" onClick={handleSearch} />
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
        </Navbar.Brand>
      </Navbar>
      <div className="">
      {showDropdown && (
        <div className="box_drop fadeInUp">
          {mentorsList.map((mentor, index) => (
            <p
            className="itm_deop"
              key={index}
              onClick={() =>
                handleSelectMentor(`${mentor.firstName} ${mentor.lastName}`)
              }
            >
              {mentor.firstName} {mentor.lastName}
            </p>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default NavBar;
