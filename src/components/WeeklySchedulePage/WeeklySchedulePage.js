import React, { useState, useEffect } from "react";
import "./WeeklySchedulePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

function WeeklySchedulePage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
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
            <br></br>
            <br></br>
            <div className="weekly_user_box">
              <div>
                <h2 className="topic_week">Weekly Schedule</h2>
                <p className="para_week">Please fill your weekly schedule</p>
                <div className="calanderbox_week">
                  <div className="month_dis_week">
                    <h3>September 2023</h3>
                  </div>
                  <div className="date_box_week">
                    <div>
                      <div>Mon</div>
                      <div className="spe_weekdy">11</div>
                    </div>
                    <div>
                      <div>Tue</div>
                      <div>12</div>
                    </div>
                    <div>
                      <div>Wed</div>
                      <div>13</div>
                    </div>
                    <div>
                      <div>Thu</div>
                      <div>14</div>
                    </div>
                    <div>
                      <div>Fri</div>
                      <div>15</div>
                    </div>
                    <div>
                      <div>Sat</div>
                      <div>16</div>
                    </div>
                    <div>
                      <div>Sun</div>
                      <div>17</div>
                    </div>
                    <div>
                      <div>Mon</div>
                      <div>18</div>
                    </div>
                  </div>
                  <div className="action_week_box">
                    <div className="actin_btn_set">
                      <h4 className="addtime_topic"> Add time slot</h4>
                      <div className="adbtn_week">+</div>
                    </div>
                    <div className="btn_contatiner_week">
                      <button className="btn_week_calentder_add">
                        06 00 PM - 7 00 pM
                      </button>
                      <button className="btn_week_calentder_add">
                        06 00 PM - 7 00 pM
                      </button>
                      <button className="btn_week_calentder_add">
                        06 00 PM - 7 00 pM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklySchedulePage;
