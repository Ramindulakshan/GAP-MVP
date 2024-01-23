import React, { useState } from "react";
import "../LandingPage/Landing.css";
import GAP_Image from "../HomePage/Img/GAP_BG.png";
import "../Settings/Settings.css";
import { Form, FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
function LandingPageContact() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    // Limit the input to 300 characters
    if (inputText.length <= 300) {
      setText(inputText);
    }
  };
  return (
    <div>
      <section className="">
        <div className="vh-100">
          <div className="container">
            <nav className="navbar navbar-light">
              <a className="navbar-brand" href="#c">
                <img src={GAP_Image} height="90" alt="" /> GAP
              </a>
              <div className="d-flex justify-content-end">
                <a className="nav-link custom-nav-link " href="#c">
                  Home
                </a>
                <a className="nav-link custom-nav-link " href="#c">
                  About
                </a>
                <a className="nav-link custom-nav-link" href="#c">
                  Contact
                </a>
                <a className="nav-link custom-nav-link" href="#c">
                  Login
                </a>
                <form className="form-inline my-2 my-lg-0">
                  <button
                    className="btn custom-button1 my-2 my-sm-3"
                    type="submit"
                  >
                    Register
                  </button>
                </form>
              </div>
            </nav>
          </div>
          <div className="">
            {/*Contact Us Section Start*/}
            <div>
              <div class="newrtty">
                <div className="confull">
                  <h5 className="card-title fw-bold titlenewwrt">Contact Us</h5>
                  <p className="pareconus">
                    Any Questions or Remarks? Just write us a message!
                  </p>
                  <div className="cardll">
                    <div className=" mt-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="lblcous">
                            Phone Number
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="+94 000000000"
                            required={"required"}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="lblcous">
                            Email (Optional)
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="example@gmail.com "
                            required={"required"}
                          />
                          <Form.Label className="lblcous">Reason</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select Your Reason</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
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
                          />
                        </Form.Group>

                        <div className="text-right">
                          <p>{text.length}/300</p>
                        </div>
                        <button className="sbmitbtn">Submit</button>
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
              <div className="row">
                <div className="col-sm-5 col-md-5 col-lg-4 text-center">
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
                    <p className="desbtn">011 4586936</p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className="pbtn2oo">
                    <div className="clbtnnwe">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <rect width="40" height="40" rx="2" fill="#E86F00" />
                        <path
                          d="M28 12H12C10.9 12 10.01 12.9 10.01 14L10 26C10 27.1 10.9 28 12 28H28C29.1 28 30 27.1 30 26V14C30 12.9 29.1 12 28 12ZM28 16L20 21L12 16V14L20 19L28 14V16Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="desbtn2">Email</p>
                    <p className="desbtn2">abc@gmail.com</p>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className="pbtn2oo">
                    <div className="clbtnnwe">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <rect width="40" height="40" rx="2" fill="#2A2A72" />
                        <path
                          d="M24.36 22C24.44 21.34 24.5 20.68 24.5 20C24.5 19.32 24.44 18.66 24.36 18H27.74C27.9 18.64 28 19.31 28 20C28 20.69 27.9 21.36 27.74 22M22.59 27.56C23.19 26.45 23.65 25.25 23.97 24H26.92C25.9512 25.6683 24.4141 26.932 22.59 27.56ZM22.34 22H17.66C17.56 21.34 17.5 20.68 17.5 20C17.5 19.32 17.56 18.65 17.66 18H22.34C22.43 18.65 22.5 19.32 22.5 20C22.5 20.68 22.43 21.34 22.34 22ZM20 27.96C19.17 26.76 18.5 25.43 18.09 24H21.91C21.5 25.43 20.83 26.76 20 27.96ZM16 16H13.08C14.0389 14.3272 15.5748 13.0615 17.4 12.44C16.8 13.55 16.35 14.75 16 16ZM13.08 24H16C16.35 25.25 16.8 26.45 17.4 27.56C15.5786 26.9317 14.0448 25.6677 13.08 24ZM12.26 22C12.1 21.36 12 20.69 12 20C12 19.31 12.1 18.64 12.26 18H15.64C15.56 18.66 15.5 19.32 15.5 20C15.5 20.68 15.56 21.34 15.64 22M20 12.03C20.83 13.23 21.5 14.57 21.91 16H18.09C18.5 14.57 19.17 13.23 20 12.03ZM26.92 16H23.97C23.657 14.7615 23.1936 13.5659 22.59 12.44C24.43 13.07 25.96 14.34 26.92 16ZM20 10C14.47 10 10 14.5 10 20C10 22.6522 11.0536 25.1957 12.9289 27.0711C13.8575 27.9997 14.9599 28.7362 16.1732 29.2388C17.3864 29.7413 18.6868 30 20 30C22.6522 30 25.1957 28.9464 27.0711 27.0711C28.9464 25.1957 30 22.6522 30 20C30 18.6868 29.7413 17.3864 29.2388 16.1732C28.7362 14.9599 27.9997 13.8575 27.0711 12.9289C26.1425 12.0003 25.0401 11.2638 23.8268 10.7612C22.6136 10.2587 21.3132 10 20 10Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="desbtn2">Website</p>
                    <p className="desbtn2">https://gap.lk</p>
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
