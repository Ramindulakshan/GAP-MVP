import React, { useState } from "react";
import "./Notification.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdMore } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
function Notification() {
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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
            <h5 className="card-title fw-bold titleneww">Notification</h5>
            <div
              style={{
                border: "2px solid #63636380",
                width: "95%",
                height: "auto",
                padding: "0px",
                borderRadius: "5px",
                margin: "0 0 50px 20px",
              }}
            >
              <table className="tblnoty bkclorset">
                <tr className="trnoty">
                  <td className="tdlnoty1">
                    <tr>
                      <td className="tdlnotylewen">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <circle cx="5" cy="5" r="5" fill="#3562FF" />
                        </svg>{" "}
                      </td>
                      <td>
                        <div className="vect">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                              fill="#2A2A72"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </td>
                  <td className="tdlnoty2">
                    <p className="tblnotupara1">
                      Mahela Withana has accepted your request to participate in
                      the mentoring program.
                    </p>
                    <p className="tblnotupara">Just Now</p>
                  </td>
                  <td className="tdlnoty3">
                    <IoMdMore
                      className="tblnotuicon"
                      onChange={handleShow2}
                      onClick={handleShow2}
                    />
                  </td>
                </tr>
              </table>
              <Modal
                size="sm"
                show={show2}
                onHide={handleClose2}
                aria-labelledby="example-custom-modal-styling-title"
                centered
              >
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body>
                  <tr
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                      >
                        <path
                          d="M3 18C2.45 18 1.979 17.804 1.587 17.412C1.195 17.02 0.999333 16.5493 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.804 17.021 14.412 17.413C14.02 17.805 13.5493 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                          fill="black"
                          fill-opacity="0.75"
                        />
                      </svg>
                    </td>

                    <td>
                      <p> &nbsp;&nbsp; &nbsp;Delete Notification</p>
                    </td>
                  </tr>
                  <tr
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                      >
                        <path
                          d="M13.7143 9.67407V7.44828C13.7137 6.47717 13.5008 5.52009 13.0931 4.65579L16 1.49834L15.192 0.62069L0 17.1223L0.808 18L4.23657 14.2759H5.14286V14.8966C5.14286 15.7196 5.44388 16.509 5.9797 17.091C6.51551 17.673 7.24224 18 8 18C8.75776 18 9.48449 17.673 10.0203 17.091C10.5561 16.509 10.8571 15.7196 10.8571 14.8966V14.2759H14.8571C15.0087 14.2759 15.154 14.2105 15.2612 14.0941C15.3684 13.9777 15.4286 13.8198 15.4286 13.6552V11.7931C15.4285 11.6285 15.3683 11.4706 15.2611 11.3543L13.7143 9.67407ZM9.71429 14.8966C9.71429 15.3904 9.53367 15.864 9.21218 16.2132C8.89069 16.5624 8.45466 16.7586 8 16.7586C7.54534 16.7586 7.10931 16.5624 6.78782 16.2132C6.46633 15.864 6.28571 15.3904 6.28571 14.8966V14.2759H9.71429V14.8966ZM11.2057 2.32014C10.4222 1.73704 9.51639 1.37699 8.57143 1.27303V0H7.42857V1.27241C6.01976 1.42816 4.71415 2.1458 3.76421 3.28654C2.81427 4.42728 2.28749 5.91011 2.28571 7.44828V9.67407L0.738857 11.3543C0.631686 11.4706 0.571461 11.6285 0.571429 11.7931V13.6552C0.57416 13.7167 0.58553 13.7774 0.605143 13.8352L11.2057 2.32014Z"
                          fill="black"
                          fill-opacity="0.75"
                        />
                      </svg>
                    </td>
                    <td>
                      <p>&nbsp;&nbsp; &nbsp;Turn off this notification type</p>
                    </td>
                  </tr>
                </Modal.Body>
              </Modal>
              <table className="tblnoty bkclorset">
                <tr className="trnoty">
                  <td className="tdlnoty1">
                    <tr>
                      <td className="tdlnotylewen">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                        >
                          <circle cx="5" cy="5" r="5" fill="#3562FF" />
                        </svg>{" "}
                      </td>
                      <td>
                        <div className="vect">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                              fill="#2A2A72"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </td>
                  <td className="tdlnoty2">
                    <p className="tblnotupara1">
                      Mahela Withana has accepted your request to participate in
                      the mentoring program.
                    </p>
                    <p className="tblnotupara">56 minutes ago</p>
                  </td>
                  <td className="tdlnoty3">
                    <IoMdMore
                      className="tblnotuicon"
                      onChange={handleShow2}
                      onClick={handleShow2}
                    />
                  </td>
                </tr>
              </table>
              <table className="tblnoty">
                <tr className="trnoty">
                  <td className="tdlnoty1">
                    <tr>
                      <td className="tdlnotylewen2"></td>
                      <td>
                        <div className="vect">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                              fill="#2A2A72"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </td>
                  <td className="tdlnoty2">
                    <p className="tblnotupara1">
                      Mahela Withana has accepted your request to participate in
                      the mentoring program.
                    </p>
                    <p className="tblnotupara">56 minutes ago</p>
                  </td>
                  <td className="tdlnoty3">
                    <IoMdMore
                      className="tblnotuicon"
                      onChange={handleShow2}
                      onClick={handleShow2}
                    />
                  </td>
                </tr>
              </table>
              <table className="tblnoty">
                <tr className="trnoty">
                  <td className="tdlnoty1">
                    <tr>
                      <td className="tdlnotylewen2"></td>
                      <td>
                        <div className="vect">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                              fill="#2A2A72"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </td>
                  <td className="tdlnoty2">
                    <p className="tblnotupara1">
                      Mahela Withana has accepted your request to participate in
                      the mentoring program.
                    </p>
                    <p className="tblnotupara">56 minutes ago</p>
                  </td>
                  <td className="tdlnoty3">
                    <IoMdMore
                      className="tblnotuicon"
                      onChange={handleShow2}
                      onClick={handleShow2}
                    />
                  </td>
                </tr>
              </table>
              <table className="tblnoty">
                <tr className="trnoty">
                  <td className="tdlnoty1">
                    <tr>
                      <td className="tdlnotylewen2"></td>
                      <td>
                        <div className="vect">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                              fill="#2A2A72"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </td>
                  <td className="tdlnoty2">
                    <p className="tblnotupara1">
                      Mahela Withana has accepted your request to participate in
                      the mentoring program.
                    </p>
                    <p className="tblnotupara">56 minutes ago</p>
                  </td>
                  <td className="tdlnoty3">
                    <IoMdMore
                      className="tblnotuicon"
                      onChange={handleShow2}
                      onClick={handleShow2}
                    />
                  </td>
                </tr>
              </table>
              <table className="tblnoty">
                <tr className="trnoty">
                  <td className="tdlnoty1">
                    <tr>
                      <td className="tdlnotylewen2"></td>
                      <td>
                        <div className="vect">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                              fill="#2A2A72"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </td>
                  <td className="tdlnoty2">
                    <p className="tblnotupara1">
                      Mahela Withana has accepted your request to participate in
                      the mentoring program.
                    </p>
                    <p className="tblnotupara">56 minutes ago</p>
                  </td>
                  <td className="tdlnoty3">
                    <IoMdMore
                      className="tblnotuicon"
                      onChange={handleShow2}
                      onClick={handleShow2}
                    />
                  </td>
                </tr>
              </table>
              <table className="tblnoty">
                <tr className="trnoty">
                  <td className="tdlnoty1">
                    <tr>
                      <td className="tdlnotylewen2"></td>
                      <td>
                        <div className="vect">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="29"
                            viewBox="0 0 26 29"
                            fill="none"
                          >
                            <path
                              d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                              fill="#2A2A72"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </td>
                  <td className="tdlnoty2">
                    <p className="tblnotupara1">
                      Mahela Withana has accepted your request to participate in
                      the mentoring program.
                    </p>
                    <p className="tblnotupara">56 minutes ago</p>
                  </td>
                  <td className="tdlnoty3">
                    <IoMdMore
                      className="tblnotuicon"
                      onChange={handleShow2}
                      onClick={handleShow2}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
