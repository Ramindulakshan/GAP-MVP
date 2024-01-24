import React, { useState } from "react";
import Register_image from "./img/register.png";
import Google_image from "./img/google.png";
import tick from "./img/tick.png";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { InputGroup } from "react-bootstrap";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Prologin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const confirmPasswordMatch = () => {
    return password === confirmPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/register", {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 vh-100 custom-bgregit align-items-center justify-content-center">
              <div className="vh-100 text-center">
                <img
                  src={Register_image}
                  className="img-fluid custom-image-LI" // Keep img-fluid for responsiveness
                  style={{ maxHeight: "80vh", width: "80vh" }} // Set maxHeight to 100% or adjust as needed
                  alt="Regi Img"
                />
              </div>
            </div>
            <div className="col-lg-7 vh-100 overflow-auto">
              <h1 className="text-center mb-4 mt-5">Register</h1>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="form-outline">
                    <Row className="">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control
                          type="Text"
                          size="lg"
                          placeholder="First Name"
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control
                          type="text"
                          size="lg"
                          placeholder="Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Form.Group>
                    </Row>
                    <br />
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Username"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <br />
                    <Form.Control
                      size="lg"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />

                    <InputGroup className="mb-3">
                      <Form.Control
                        size="lg"
                        type={showPassword ? "text" : "password"}
                        id="inputPassword"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <InputGroup.Text
                        id="passwordHelpBlock"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                      </InputGroup.Text>
                    </InputGroup>
                    <br />

                    <InputGroup className="mb-3">
                      <Form.Control
                        size="lg"
                        type={showPassword ? "text" : "password"}
                        id="inputConfirmPassword"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      <InputGroup.Text
                        id="passwordHelpBlock"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                      </InputGroup.Text>
                    </InputGroup>

                    {confirmPasswordMatch() ? (
                      <p></p>
                    ) : (
                      <p>Passwords do not match.</p>
                    )}

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label={
                          <span>
                            By registering to GAP you agree to the{" "}
                            <u
                              style={{ cursor: "pointer", color: "blue" }}
                              onClick={handleShow}
                            >
                              terms & conditions
                            </u>
                          </span>
                        }
                        onChange={handleShow}
                        // checked={true}
                      />
                    </Form.Group>
                    <Modal
                      size="lg"
                      show={show}
                      onHide={handleClose}
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton></Modal.Header>

                      <Modal.Body>
                        <Modal.Title
                          id="example-custom-modal-styling-title"
                          className="text-center"
                        >
                          <h1 className="mb-1">Terms & Conditions</h1>
                        </Modal.Title>
                        <div className="p-4">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut condimentum eu arcu vel tempus. Ut faucibus
                            id velit vel porttitor. Duis eu porttitor sem. Nulla
                            elit nulla, elementum vel hendrerit id, malesuada
                            nec eros. Donec sed turpis odio. Suspendisse id
                            turpis non eros ornare pellentesque. Proin tempus
                            hendrerit leo sit amet mattis. Quisque sit amet
                            placerat lacus. Cras eu feugiat mauris. Nam
                            tincidunt augue aliquam, sagittis nunc et, maximus
                            dolor. Sed vel lorem eget diam bibendum aliquet.
                            Etiam a nisl sed massa malesuada fringilla. Nunc
                            venenatis ut magna ac lacinia.
                          </p>

                          <p>
                            Sed cursus aliquam nulla, vel egestas nunc euismod
                            in. Etiam condimentum eu dui nec porta. Sed erat
                            turpis, sodales id tristique ut, finibus eu elit.
                            Nulla luctus orci vel libero euismod, eget
                            ullamcorper elit iaculis. Praesent vitae efficitur
                            dui, ac convallis nisl. Sed tempor posuere lectus,
                            vitae tempus tortor faucibus et. Sed sagittis in
                            elit vitae blandit. Ut id malesuada tellus. Nullam
                            eu lobortis nunc. Praesent interdum porttitor augue,
                            et mollis orci sollicitudin a. Sed interdum volutpat
                            nisl, nec lobortis lacus mattis feugiat. Nulla
                          </p>
                          <p>
                            Sed cursus aliquam nulla, vel egestas nunc euismod
                            in. Etiam condimentum eu dui nec porta. Sed erat
                            turpis, sodales id tristique ut, finibus eu elit.
                            Nulla luctus orci vel libero euismod, eget
                            ullamcorper elit iaculis. Praesent vitae efficitur
                            dui, ac convallis nisl. Sed tempor posuere lectus,
                            vitae tempus tortor faucibus et. Sed sagittis in
                            elit vitae blandit. Ut id malesuada tellus. Nullam
                            eu lobortis nunc. Praesent interdum porttitor augue,
                            et mollis orci sollicitudin a. Sed interdum volutpat
                            nisl, nec lobortis lacus mattis feugiat. Nulla Sed
                            cursus aliquam nulla, vel egestas nunc euismod in.
                            Etiam condimentum eu dui nec porta. Sed erat turpis,
                            sodales id tristique ut, finibus eu elit. Nulla
                            luctus orci vel libero euismod, eget ullamcorper
                            elit iaculis. Praesent vitae efficitur dui, ac
                            convallis nisl. Sed tempor posuere lectus, vitae
                            tempus tortor faucibus et. Sed sagittis in elit
                            vitae blandit. Ut id malesuada tellus. Nullam eu
                            lobortis nunc. Praesent interdum porttitor augue, et
                            mollis orci
                          </p>
                        </div>
                        <div className="text-center">
                          <button
                            className="custom-button2 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                            onClick={handleClose}
                          >
                            Agree
                          </button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>

                  <div className="text-center">
                    <button
                      className="custom-button2 custom-button-reset my-1 my-sm-3"
                      type="submit"
                      onChange={handleShow2}
                      onClick={handleShow2}
                    >
                      Register
                    </button>
                    <Modal
                      size="medium"
                      show={show2}
                      onHide={handleClose2}
                      aria-labelledby="example-custom-modal-styling-title"
                      centered
                    >
                      <Modal.Header closeButton></Modal.Header>

                      <Modal.Body className="text-center">
                        {/* Image */}
                        <img
                          src={tick}
                          alt="Tickimg"
                          className="img-fluid mb-4"
                          style={{ width: "100px", height: "100px" }}
                        />

                        {/* Successful Registration Message */}
                        <h4 className="mb-2">Successful Registration!</h4>

                        {/* Sub Message */}
                        <p className="mb-4 p-10">
                          Please verify your mobile number to continue
                        </p>

                        {/* Submit Button */}
                        <div className="text-center">
                          <button
                            className="custom-button2 custom-button-reset my-1 my-sm-3"
                            type="submit"
                            onClick={handleClose2}
                          >
                            Continue
                          </button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  <div class="text-center mb-4">
                    <h4 className="mb-4">Or, Register with</h4>
                    <div className="Icon">
                      <img src={Google_image} alt="Imag1" />
                    </div>
                  </div>
                  <h6 className="custom-text-AR">
                    Already have an account?{" "}
                    <span
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={() => {
                        window.location.href = "/login";
                      }}
                    >
                      Login
                    </span>
                  </h6>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prologin;
