import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Homepage_image from "../HomePage/Img/homepage.png";
import "../HomePage/Home.css";
import Level from "../SettingPage/img/level.png";
import img1 from "../HomePage/Img/1.png";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  // const user = userDetails.user; //google login
  const [firstName, setFirstName] = useState("");

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
                    window.location.href = "/underConstructionMentors";
                  }}
                >
                  <u>View More</u>
                </h6>
              </div>
            </div>

            <div className="fadeInUp">
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
