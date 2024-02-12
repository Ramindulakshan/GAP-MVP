import React, { useState } from "react";
import "../LandingPage/Landing.css";
// import "./LandingPageContact.css";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import "../SettingPage/SettingPage.css";
import { Form } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function LandingPageContact() {
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
          console.log(result.text);
          alert("Gmail Send Success!");
        },
        (error) => {
          console.log(error.text);
          alert("Not Send");
        }
      );
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ujbarye", "template_vdnepgd", form.current, {
        publicKey: "A7gPSfsx2Sr9vN779",
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("Gmail Send Success!");
        },
        (error) => {
          console.log(error.text);
          alert("Not Send");
        }
      );
  };

  const clearForm = () => {
    form.current.reset();
  }



  return (
    <div>
      <section className="">
        <div className="vh-100">
          <div className="container">
            <nav className="navbar navbar-light">
              <a className="navbar-brand" href="/">
                <img src={GAP_Image} height="90" alt="" />
              </a>

              <nav class=" navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="">
                      <a class="nav-link custom-nav-link  " href="/">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link custom-nav-link " href="/landingPageAbout">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link custom-nav-link " href="/landingPageContact">Contact</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link custom-nav-link " href="/login">Login</a>
                    </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0 mt-4">
                    <button class="btn custom-button1 my-2 my-sm-3" type="button" onclick="window.location.href='/register'">Register</button>
                  </form>
                </div>
              </nav>


              <div className="d-flex justify-content-end">
                <a className="nav-link custom-nav-link " href="/">
                  Home
                </a>
                <a
                  className="nav-link custom-nav-link "
                  href="landingPageAbout"
                  onClick={() => {
                    window.location.href = "/landingPageAbout";
                  }}
                >
                  About
                </a>
                <a
                  className="nav-link custom-nav-link"
                  href="landingPageContact"
                  onClick={() => {
                    window.location.href = "/landingPageContact";
                  }}
                >
                  Contact
                </a>
                <a
                  className="nav-link custom-nav-link"
                  href="login"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  Login
                </a>
                <button
                  className="btn custom-button1 my-2 my-sm-3"
                  type="submit"
                  onClick={() => {
                    window.location.href = "/register";
                  }}
                >
                  Register
                </button>
              </div>

            </nav>
          </div>
          <div className="">
            {/*Contact Us Section Start*/}

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="confull">
                    <h5 className="card-title fw-bold titlenewwrt">Contact Us</h5>
                    <p className="pareconus">
                      Any Questions or Remarks? Just write us a message!
                    </p>
                    <div className="cardll">
                      <div className=" mt-3">
                        <Form ref={form} onSubmit={sendEmail}>
                          <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className="lblcous">Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Your name"
                              required={"required"}
                              name="user_name"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label className="lblcous">Phone Number</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="+94 000000000"
                              required={"required"}
                              name="phoneNumber"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="lblcous">Email (Optional)</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="example@gmail.com "
                              name="user_email"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicReason">
                            <Form.Label className="lblcous">Reason</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Reason"
                              required={"required"}
                              name="reason"
                            />
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="lblcous">Message</Form.Label>
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
                          <div className="text-center mt-5 mb-4">
                            <button className="btn custom-button-reset2" type="button">
                              Submit
                            </button>
                          </div>
                        </Form>
                      </div>

            <div className="d-flex justify-content-center">
              <div className="">
                <div className="confull">
                  <h5 className="card-title fw-bold titlenewwrt">Contact Us</h5>
                  <p className="pareconus">
                    Any Questions or Remarks? Just write us a message!
                  </p>
                  <div className="cardll">
                    <div className=" mt-3">
                      <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="lblcous">Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="your name"
                            required={"required"}
                            name="user_name"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="lblcous">
                            Email (Optional)
                          </Form.Label>
                          <Form.Control
                            type="email"
                            style={{textTransform: "none"}}
                            placeholder="example@gmail.com "
                            required={"required"}
                            name="user_email"
                          />
                          <Form.Label className="lblcous">Reason</Form.Label>
                          <Form.Control
                            type="Text"
                            style={{textTransform: "none"}}
                            placeholder="Enter Reason"
                            required={"required"}
                            name="reason"
                          />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label className="lblcous">Message</Form.Label>
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
                        <button className="subbtnconus" onClick={clearForm}>Submit</button>
                      </Form>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Contact Us Section End */}
          </div>


          <div className="cardkml">
            <div className="container mt-2">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-sm-5 col-md-5 col-lg-4 text-center">
                    <div class="pbtn2oo">
                      <div class="clbtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M13.3342 14.2139L15.0564 12.491C15.2883 12.2618 15.5818 12.1049 15.9012 12.0394C16.2205 11.9739 16.552 12.0025 16.8555 12.1218L18.9544 12.9602C19.261 13.0847 19.5239 13.2972 19.71 13.5709C19.8961 13.8447 19.997 14.1674 20 14.4985V18.3442C19.9982 18.5694 19.9509 18.7919 19.8609 18.9983C19.7709 19.2047 19.6401 19.3908 19.4763 19.5453C19.3125 19.6998 19.1192 19.8195 18.9079 19.8973C18.6967 19.9751 18.4719 20.0093 18.2471 19.9979C3.5392 19.0826 0.57149 6.62239 0.010239 1.85368C-0.0158147 1.6195 0.00798984 1.38246 0.0800864 1.15814C0.152183 0.933831 0.270938 0.727331 0.428538 0.55223C0.586138 0.377128 0.779012 0.237394 0.994471 0.142219C1.20993 0.0470438 1.44309 -0.00141458 1.67862 3.14343e-05H5.3921C5.72347 0.0010127 6.04698 0.101149 6.321 0.287561C6.59503 0.473973 6.80704 0.738135 6.92977 1.04607L7.7678 3.14584C7.89101 3.44817 7.92245 3.78011 7.85818 4.10021C7.79391 4.4203 7.63679 4.71436 7.40645 4.94565L5.68426 6.66854C5.68426 6.66854 6.67606 13.3832 13.3342 14.2139Z" fill="white" />
                        </svg>
                      </div>
                      <p class="desbtn">Phone</p>
                      <p class="desbtn">076 7090757</p>
                    </div>


                    <p className="desbtn2">Email</p>
                    <p className="desbtn2">generationalpha2025@gmail.com</p>

                  </div>
                  <div class="col-sm-4 col-md-4 col-lg-3 ">
                    <div class="pbtn2oo">
                      <div class="clbtnnwe">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <rect width="40" height="40" rx="2" fill="#E86F00" />
                          <path d="M28 12H12C10.9 12 10.01 12.9 10.01 14L10 26C10 27.1 10.9 28 12 28H28C29.1 28 30 27.1 30 26V14C30 12.9 29.1 12 28 12ZM28 16L20 21L12 16V14L20 19L28 14V16Z" fill="white" />
                        </svg>
                      </div>
                      <p class="desbtn2">Email</p>
                      <a href="mailto:generationalpha2025@gmail.com" class="desbtn2">
                        generationalpha2025@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPageContact;
