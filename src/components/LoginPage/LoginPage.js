import React from "react";
import "../LoginPage/LoginPage.css";
import Google_image from "../LoginPage/Img/google.png";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Register_image from "../Register/img/register.png";
import InputGroup from "react-bootstrap/InputGroup";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
    }

    axios
      .post("http://localhost:3001/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === "ok") {
          const token = response.data.token;
          localStorage.setItem("jwtToken", token);
          getUserName();
          alert("Login Successful");
          navigate("/home");
        } else if(response.data.status === "error") {
          alert("Invalid Username or Password");
          console.log("Invalid Username or Password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserName = () => {
    axios
      .get("http://localhost:3001/api/getUser", {
        headers: {
          authorization: `${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const firstName = response.data.firstName;
          const lastName = response.data.lastName;
          localStorage.setItem("firstName", firstName);
          localStorage.setItem("lastName", lastName);
        }
      });
  };

  // const googleAuth = () => {
  //   window.open(
  //     "http://localhost:3001/auth/google/callback",
  //     "_self"
  //   );
  // } //google login 
 
  return (
    <>
      <section className="newwitchg">
       
        <div className="container-fluid container-fluidreg">
        <div className="">
        <br></br> <br></br> <br></br>
          <div className="row bxbxsetlog">
            <div className="col-lg-5  custom-bglog  align-items-center justify-content-center">
              <div className=" text-center">
                <img
                  src={Register_image}
                  alt="Log Img"
                  className="img-fluid custom-image-LI"
                  style={{ maxHeight: "100%", width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-6 overflow-auto "><br />
              <h1 className="text-center mb-5 mt-5 ">Login to Account</h1>
              <div className="row justify-content-center">
                <div className="col-lg-9 sitewyey-log">
                  <div className="form-outline">
                    <br /> 

                    <Form
                      noValidate
                      validated={validated}
                    >
                      <Form.Group controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            style={{ textTransform: "none" }}
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(e) => setUserName(e.target.value)}
                          />
                          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <br></br>

                      <Form.Group controlId="validationCustomUsername">
                        <InputGroup hasValidation>
                          <Form.Control
                            
                            type ={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            aria-describedby="passwordHelpBlock2"
                            id="inputConfirmPassword"

                            style={{ textTransform: "none" }}
                            
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <InputGroup.Text
                            id="passwordHelpBlock"
                            onClick={togglePasswordVisibility}
                          >
                            {!showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                          </InputGroup.Text>
                          <Form.Control.Feedback type="invalid">
                            
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Form>
                  </div>
                  <h5
                    className="mb-4 mt-2 custom-text-FP ore "
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href = "/forgotPassword";
                    }}
                  >
                    Forgot password?
                  </h5>
                  <div className="text-center">
                    <button
                      className="custom-button2rtyu  my-1 my-sm-3"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
               {/* {   <div class="text-center mb-4">
                    <h4 className="mb-4 ore">Or, login with</h4>
                    <div className="Icon">
                      <img src={Google_image} alt="Image1" />
                    </div>
                  </div>} */}
                  <br /> <br />
                  <h6 className="custom-text-AR ore">
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
        </div>
      </section>
      
    </>
  );
  
};


export default LoginPage;
