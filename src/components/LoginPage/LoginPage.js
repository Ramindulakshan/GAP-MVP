import React from "react";
import Login_image from "../LoginPage/Img/login.png";
import "../LoginPage/LoginPage.css";
import Google_image from "../LoginPage/Img/google.png";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 vh-100 custom-bg d-flex align-items-center justify-content-center">
              <div className="vh-100 text-center">
                <img
                  src={Login_image}
                  alt="Your Image"
                  className="img-fluid custom-image-LI"
                />
              </div>
            </div>
            <div className="col-lg-7 vh-100 ">
              <h1 className="text-center mb-5 mt-5">Login to Account</h1>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="form-outline">
                    <br />
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Username"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <br />
                    <br />
                    <Form.Control
                      size="lg"
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <h5 className="mb-4 mt-2 custom-text-FP">Forgot password?</h5>
                  <div className="text-center">
                    <button
                      className="custom-button2 custom-button-reset my-1 my-sm-3"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                  <div class="text-center mb-4">
                    <h4 className="mb-4">Or, login with</h4>
                    <div className="Icon">
                      <img src={Google_image} alt="Image 1" />
                    </div>
                  </div>
                  <h6 className="custom-text-AR">
                    Don't have an account?{" "}
                    <span
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={() => {
                        window.location.href = "/register";
                      }}
                    >
                      Register
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
