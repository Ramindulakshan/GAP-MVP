import "../ForgotPassword/Verify.css";
import VerifyEmail_image from "../ForgotPassword/Img/VerifyEmail.png";
import Email_image from "../ForgotPassword/Img/email.png";
import Register_image from "../Register/img/register.png";
import React, { Component, ReactDOM } from "react";
import axios from "axios";

class VerifyE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  VerifyOTP = async (e) => {
    e.preventDefault();
    const data = {
      otp:
        this.state.otp1 +
        this.state.otp2 +
        this.state.otp3 +
        this.state.otp4 +
        this.state.otp5 +
        this.state.otp6,
    };
    await axios
      .post("http://localhost:3001/api/verifyOTP", data)
      .then((response) => {
        if (response.data.status === "success") {
          window.location.href = "/resetPassword";
        } else {
          alert("OTP is incorrect or expired");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

   resendOTP = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/forgotpassword",
    {
      email: localStorage.getItem("email"),
    }
    ).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });

  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  render() {
    return (
      <>
        <section className="newwitchg">
          <div className="container-fluid container-fluidreg">
            <div className="row bxbxset">
              <div className="col-lg-5  custom-bgregit  align-items-center justify-content-center">
                <div className="text-center">
                  <img
                    src={Register_image}
                    alt="Your Image"
                    className="img-fluid custom-image-LI"
                  />
                </div>
              </div>
              <div className="col-lg-6 vh-100 ">
                <img
                  src={Email_image}
                  alt="Your Image"
                  className="img-fluid img-fluid custom-image-ULock mx-auto d-block"
                />
                <h1 className="text-center mb-5">Verify Email Address</h1>
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="form-outline">
                      <h5 className="mb-4 custom-text-sendcode ">
                        Enter the OTP that send to your email
                      </h5>
                      <form onSubmit={this.handleSubmit}>
                        <div className="otpContainer">
                          <input
                            name="otp1"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp1}
                            onKeyPress={this.keyPressed}
                            onChange={(e) => this.handleChange("otp1", e)}
                            tabIndex="1"
                            maxLength="1"
                            onKeyUp={(e) => this.inputfocus(e)}
                          />
                          <input
                            name="otp2"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp2}
                            onChange={(e) => this.handleChange("otp2", e)}
                            tabIndex="2"
                            maxLength="1"
                            onKeyUp={(e) => this.inputfocus(e)}
                          />
                          <input
                            name="otp3"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp3}
                            onChange={(e) => this.handleChange("otp3", e)}
                            tabIndex="3"
                            maxLength="1"
                            onKeyUp={(e) => this.inputfocus(e)}
                          />
                          <input
                            name="otp4"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp4}
                            onChange={(e) => this.handleChange("otp4", e)}
                            tabIndex="4"
                            maxLength="1"
                            onKeyUp={(e) => this.inputfocus(e)}
                          />
                          <input
                            name="otp5"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp5}
                            onChange={(e) => this.handleChange("otp5", e)}
                            tabIndex="5"
                            maxLength="1"
                            onKeyUp={(e) => this.inputfocus(e)}
                          />
                          <input
                            name="otp6"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp6}
                            onChange={(e) => this.handleChange("otp6", e)}
                            tabIndex="6"
                            maxLength="1"
                            onKeyUp={(e) => this.inputfocus(e)}
                          />
                        </div>
                      </form>
                    </div>
                    <h6 className="custom-text-AR ore mt-4 mb-5">
                      Don’t receive OTP? <span style={{ cursor: "pointer"}} onClick={this.resendOTP}>Resend</span>
                    </h6>
                    <div className="text-center">
                      <button
                        className="btn custom-button2rtyu  my-1 my-sm-3"
                        type="submit"
                        onClick={this.VerifyOTP}
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default VerifyE;
