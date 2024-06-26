import React, { useState, useEffect } from "react";
import "./SettingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

function ContactUs() {

  //count calculate
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const inputText = e.target.value;
    // Limit the input to 300 characters
    if (inputText.length <= 300) {
      setText(inputText);
    }
  };
  //Contact Us
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ujbarye", "template_vdnepgd", form.current, {
        publicKey: "A7gPSfsx2Sr9vN779",
      })
      .then(
        (result) => {
          alert("Message Send Success!");
        },
        (error) => {
          alert("Not Send");
        }
      );
  };
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
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="nav-colum" id="mySidebar">
            <SideBar />
          </div>
          <div className="col-lg-9 vh-100 overflow-auto">
            <NavBar />
            <br></br>
            <br></br>
            <div className="SettingPage-MainBox fadeInUp">
              <div id="nav" className="nave">
                <div>
                  <h5>
                    <a
                      href="#About"
                      className="navtpic333 nvtpicnew"
                      onClick={() => {
                        window.location.href = "/settings";
                      }}
                    >
                      About Us
                    </a>
                    <a
                      href="#d"
                      className="navtpic333 nvtpicnew"
                      onClick={() => {
                        window.location.href = "/changePass";
                      }}
                    >
                      Change Password
                    </a>
                    <a
                      href="#DeleteAccount"
                      className="navtpic333 nvtpicnew"
                      onClick={() => {
                        window.location.href = "/settingDeleteAccount";
                      }}
                    >
                      Delete Account
                    </a>
                    <a
                      href="#ContactUs"
                      className="navtpic333 nvtpicnew nvtpicnewabout"
                      onClick={() => {
                        window.location.href = "/settingContactUs";
                      }}
                    >
                      Contact Us
                    </a>
                  </h5>
                </div>
              </div>
              <div>
                <div className="col-lg-12 vh-100 overflow-auto">
                  <div>
                    <div className="fullcon">
                      {/*Contact Us Section Start*/}
                      <div id="ContactUs">
                        <div class="Cardsection">
                          <br></br>
                          <h5 className="card-title fw-bold titleneww">
                            Contact Us
                          </h5>
                          <div className="card ">
                            <div className="container mt-2 ">
                              <div className="row pdinf">
                                <div className="col-sm-5 col-md-5 col-lg-5 text-center">
                                  <div className="pbtn2oo">
                                    <div className="clbtn">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <path
                                          d="M13.3342 14.2139L15.0564 12.491C15.2883 12.2618 15.5818 12.1049 15.9012 12.0394C16.2205 11.9739 16.552 12.0025 16.8555 12.1218L18.9544 12.9602C19.261 13.0847 19.5239 13.2972 19.71 13.5709C19.8961 13.8447 19.997 14.1674 20 14.4985V18.3442C19.9982 18.5694 19.9509 18.7919 19.8609 18.9983C19.7709 19.2047 19.6401 19.3908 19.4763 19.5453C19.3125 19.6998 19.1192 19.8195 18.9079 19.8973C18.6967 19.9751 18.4719 20.0093 18.2471 19.9979C3.5392 19.0826 0.57149 6.62239 0.010239 1.85368C-0.0158147 1.6195 0.00798984 1.38246 0.0800864 1.15814C0.152183 0.933831 0.270938 0.727331 0.428538 0.55223C0.586138 0.377128 0.779012 0.237394 0.994471 0.142219C1.20993 0.0470438 1.44309 -0.00141458 1.67862 3.14343e-05H5.3921C5.72347 0.0010127 6.04698 0.101149 6.321 0.287561C6.59503 0.473973 6.80704 0.738135 6.92977 1.04607L7.7678 3.14584C7.89101 3.44817 7.92245 3.78011 7.85818 4.10021C7.79391 4.4203 7.63679 4.71436 7.40645 4.94565L5.68426 6.66854C5.68426 6.66854 6.67606 13.3832 13.3342 14.2139Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </div>
                                    <p className="desbtn">Phone</p>
                                    <p className="desbtn">
                                      <a href="tel:0767090757">076 7090757</a>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-sm-4 col-md-2 col-lg-5 text-center">
                                  <div className="pbtn2oo">
                                    <div className="clbtnnwe">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                      >
                                        <rect
                                          width="40"
                                          height="40"
                                          rx="2"
                                          fill="#E86F00"
                                        />
                                        <path
                                          d="M28 12H12C10.9 12 10.01 12.9 10.01 14L10 26C10 27.1 10.9 28 12 28H28C29.1 28 30 27.1 30 26V14C30 12.9 29.1 12 28 12ZM28 16L20 21L12 16V14L20 19L28 14V16Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </div>
                                    <p className="desbtn2">Email</p>
                                    <a
                                      href="mailto:generationalpha2025@gmail.com"
                                      class="desbtn2"
                                    >
                                      generationalpha2025@gmail.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h5 className="card-title fw-bold titleneww">
                            Support & Help
                          </h5>
                          <div className="confull-setting">
                            <div className="card">
                              <div className="container mt-3">
                                <Form ref={form} onSubmit={sendEmail}>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label className="lblcous">
                                      Name
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      placeholder="your name"
                                      required={"required"}
                                      name="user_name"
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label className="lblcous">
                                      Phone Number
                                    </Form.Label>
                                    <Form.Control
                                      type="text"
                                      placeholder="+94 000000000"
                                      required={"required"}
                                      name="phoneNumber"
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label className="lblcous">
                                      Email (Optional)
                                    </Form.Label>
                                    <Form.Control
                                      type="email"
                                      placeholder="example@gmail.com "
                                      required={"required"}
                                      name="user_email"
                                    />
                                    <Form.Label className="lblcous">
                                      Reason
                                    </Form.Label>
                                    <Form.Control
                                      type="Text"
                                      placeholder="Enter Reason"
                                      required={"required"}
                                      name="reason"
                                    />
                                  </Form.Group>
                                  <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="lblcous">
                                      Message
                                    </Form.Label>
                                    <Form.Control
                                      as="textarea"
                                      rows={5}
                                      className="form-control"
                                      style={{ resize: "none" }}
                                      value={text}
                                      onChange={handleChange}
                                      required={"required"}
                                      name="message"
                                    />
                                  </Form.Group>

                                  <div className="text-right">
                                    <p>{text.length}/300</p>
                                  </div>
                                  <button className="subbtnconus">
                                    Submit
                                  </button>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Contact Us Section End */}
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

export default ContactUs;
