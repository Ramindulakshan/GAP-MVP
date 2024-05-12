import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Homepage_image from "../HomePage/Img/homepage.png";
import "../HomePage/Home.css";
import Level from "../SettingPage/img/level.png";
import userPic from "../HomePage/Img/user.png";
import img1 from "../HomePage/Img/1.png";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { backEndURL, imageURL } from "../../backendUrl";
import axios from "axios";
import { CardGroup } from "react-bootstrap";

const HomePage = () => {
  // const user = userDetails.user; //google login
  const [firstName, setFirstName] = useState("");
  const [recentMentors, setRecentMentor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    setFirstName(storedFirstName);
    const navbar = document.getElementById("mySidebar");
    const screenWidth = window.innerWidth;

    // Check if the screen width is less than 1250px (responsive view)
    if (screenWidth < 1250) {
      navbar.style.display = "none"; // Hide navbar in responsive view
    } else {
      navbar.style.display = "block"; // Show navbar in desktop view
    }
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get(`${backEndURL}/recentMentors`);
        setRecentMentor(response.data.mentors);
        console.log(response.data.mentors);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="d-flex">
      <div className="container-fluid">
        <div className="row">
          <div className="nav-colum" id="mySidebar">
            <SideBar />
          </div>
          <div className="col-lg-9 vh-100 overflow-auto">
            <NavBar />
            <div className="custom-Point fadeInUp">
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
                    style={{ margin: "0 0 0 30px" }}
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
            <div className="d-flex justify-content-between mt-4 fadeInUp">
              <h4>Recommended Mentors</h4>
              <div>
                <h6
                  className="View-more"
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => {
                    window.location.href = "/mentors";
                  }}
                >
                  <u>View More</u>
                </h6>
              </div>
            </div>
            <div className="card_list_home_metro">
              {recentMentors && recentMentors.length > 0 ? (
                recentMentors.map((mentor) => (
                  <div className="mentro_card_home fadeInUp">
                    <div>
                      <div>
                        <img
                          alt="imguser"
                          className="img_home_bk"
                          variant="top"
                          src={
                            mentor.profilePicture
                              ? `${imageURL}/${mentor.profilePicture}`
                              : userPic
                          }
                        />
                        <div className="div_data_full_home">
                          <div className="name_lble">
                            {mentor.firstName} {mentor.lastName}
                          </div>
                          <div className="position_lble">
                            jj{mentor.professionalDetails?.position}
                           
                            <div>
                              <button className="req_btn_crd" type="submit">Request</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="fadeInUp">
                  <p> No Mentors </p>
                </div>
              )}
            </div>

            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
