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
      password: "",
      confirmPassword: "",
      resendDisabled: false,
      countdown: 60,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  VerifyOTP = async (e) => {
    e.preventDefault();
    const data = {
      password: this.state.password,
      otp:
        this.state.otp1 +
        this.state.otp2 +
        this.state.otp3 +
        this.state.otp4 +
        this.state.otp5 +
        this.state.otp6,
    };
    await axios
      .post("http://localhost:3001/api/resetPassword", data)
      .then((response) => {
        if (response.data.status === "success") {
          alert("Password Succesfully Reseted")
          window.location.href = "/login";
        } else {
          alert("Incorrect Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  resendOTP = async (e) => {
    e.preventDefault();
    this.setState({ resendDisabled: true });
    let countdown = 60; // Reset countdown to 60 seconds
    this.countdownInterval = setInterval(() => {
      countdown--;
      if (countdown === 0) {
        clearInterval(this.countdownInterval);
        this.setState({ resendDisabled: false, countdown: 60 });
      } else {
        this.setState({ countdown });
      }
    }, 1000); // Update countdown every second

    await axios
      .post("http://localhost:3001/api/forgotPassword", {
        email: localStorage.getItem("email"),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
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
                  className="img-fluid img-fluid custom-image-ULock3 mx-auto d-block"
                />      
                <h1 className="text-center mb-4">Verify Email Address</h1>
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="form-outline">
                      
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
                    <h6 className="custom-text-AR ore mt-3 mb-2">
                      Don’t receive OTP?{" "}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={this.resendOTP}
                        disabled={this.state.resendDisabled}
                      >
                        Resend
                      </span>{" "}
                      {this.state.resendDisabled && (
                        <span>{this.state.countdown} seconds</span>
                      )}
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
                    <div className="custom-input">
                    <h5 className="mb-4 custom-text-sendcode ">
                    Create A New Password
                      </h5>
                    <div className="">
                      <div className="mb-4 ">
                        <input
                          value={this.state.password}
                          onChange={(e) => this.handleChange("password", e)}
                          type="Password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>

                      <div className="">
                        <input
                          value={this.state.confirmPassword}
                          onChange={(e) => this.handleChange("confirmPassword", e)}
                          type="Password"
                          className="form-control"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      <button
                        className="btn custom-button2rtyu  my-1 my-sm-3"
                        type="submit"
                        // onClick={this.VerifyOTP}
                      >
                        Reset
                      </button>
                    </div>
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
