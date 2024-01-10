import React from "react";
import "./Request.css";
import Navbar from "react-bootstrap/Navbar";
import GAP_Image from "./img/GAP_BG.png";
import Student_Image from "./img/Student.png";
import Level from "./img/level.png";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import { BsStarFill, BsStar } from "react-icons/bs";
import prolog from "./img/pro1.png";
import pro2 from "./img/pro2.png";
import Modal from "react-bootstrap/Modal";
import pro3 from "./img/pro3.png";
import tick from "./img/tim.png";
import pro4 from "./img/pro4.png";

function Mentors() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    // Limit the input to 300 characters
    if (inputText.length <= 300) {
      setText(inputText);
    }
  };
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 vh-100">
            <div className="d-flex">
              <div className="vh-100  ">
                <div className="">
                  <img
                    src={GAP_Image}
                    alt="logo"
                    className="img-fluid custom-image-Gap"
                  />
                </div>

                <Tab.Container
                  id="list-group-tabs-example"
                  defaultActiveKey="#link1"
                >
                  <Row>
                    <ListGroup>
                      <ListGroup.Item
                        action
                        variant="light"
                        className="list-group-item-custom"
                        href="#link1"
                        style={{ backgroundColor: "#DDDDFE", border: "0" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="18"
                          viewBox="0 0 21 18"
                          fill="none"
                        >
                          <path
                            d="M10.5 3.19L15.75 7.69V15.5H13.65V9.5H7.35V15.5H5.25V7.69L10.5 3.19ZM10.5 0.5L0 9.5H3.15V17.5H9.45V11.5H11.55V17.5H17.85V9.5H21L10.5 0.5Z"
                            fill="#2A2A72"
                          />
                        </svg>
                        &nbsp;Home
                      </ListGroup.Item>
                      <br />
                      <ListGroup.Item
                        action
                        variant="light"
                        className="list-group-item-custom"
                        href="#link2"
                        style={{
                          backgroundColor: " rgb(255, 255, 255)",
                          border: "0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="18"
                          viewBox="0 0 21 18"
                          fill="none"
                        >
                          <path
                            d="M11.6235 7.7647C12.2613 6.8028 12.6043 5.64958 12.6043 4.46671C12.6043 3.28384 12.2613 2.13062 11.6235 1.16872C12.2204 0.728942 12.9273 0.495716 13.65 0.50006C14.6247 0.50006 15.5594 0.917974 16.2486 1.66187C16.9378 2.40576 17.325 3.41469 17.325 4.46671C17.325 5.51873 16.9378 6.52767 16.2486 7.27156C15.5594 8.01545 14.6247 8.43337 13.65 8.43337C12.9273 8.43771 12.2204 8.20448 11.6235 7.7647ZM3.675 4.46671C3.675 3.68218 3.89053 2.91527 4.29435 2.26296C4.69816 1.61065 5.27212 1.10223 5.94364 0.802003C6.61516 0.501777 7.35408 0.423224 8.06696 0.576278C8.77984 0.729332 9.43466 1.10712 9.94862 1.66187C10.4626 2.21661 10.8126 2.9234 10.9544 3.69286C11.0962 4.46231 11.0234 5.25987 10.7453 5.98468C10.4671 6.7095 9.99607 7.329 9.39172 7.76486C8.78737 8.20073 8.07685 8.43337 7.35 8.43337C6.37533 8.43337 5.44058 8.01545 4.75138 7.27156C4.06219 6.52767 3.675 5.51873 3.675 4.46671ZM5.775 4.46671C5.775 4.80294 5.86737 5.13162 6.04044 5.41118C6.2135 5.69074 6.45948 5.90863 6.74727 6.0373C7.03507 6.16597 7.35175 6.19964 7.65727 6.13404C7.96279 6.06845 8.24343 5.90654 8.46369 5.66879C8.68396 5.43104 8.83397 5.12813 8.89474 4.79837C8.95551 4.4686 8.92432 4.12679 8.80511 3.81615C8.6859 3.50552 8.48403 3.24002 8.22502 3.05322C7.96601 2.86642 7.66151 2.76672 7.35 2.76672C6.93228 2.76672 6.53168 2.94582 6.23631 3.26464C5.94094 3.58345 5.775 4.01585 5.775 4.46671ZM14.7 15.2333V17.5H0V15.2333C0 15.2333 0 10.7 7.35 10.7C14.7 10.7 14.7 15.2333 14.7 15.2333ZM12.6 15.2333C12.453 14.3493 11.2035 12.9667 7.35 12.9667C3.4965 12.9667 2.1735 14.4513 2.1 15.2333M14.6475 10.7C15.2911 11.2403 15.8172 11.9261 16.1891 12.7093C16.5609 13.4924 16.7695 14.3539 16.8 15.2333V17.5H21V15.2333C21 15.2333 21 11.1194 14.637 10.7H14.6475Z"
                            fill="black"
                            fill-opacity="0.5"
                          />
                        </svg>
                        &nbsp;Be a mentor
                      </ListGroup.Item>
                      <br />
                      <ListGroup.Item
                        action
                        variant="light"
                        className="list-group-item-custom"
                        href="#link3"
                        style={{
                          backgroundColor: " rgb(255, 255, 255)",
                          border: "0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23"
                          height="20"
                          viewBox="0 0 23 20"
                          fill="none"
                        >
                          <path
                            d="M17.3333 18.5C17.3333 16.6235 14.7212 15.1026 11.5 15.1026C8.27883 15.1026 5.66667 16.6235 5.66667 18.5M22 15.1026C22 13.7097 20.5603 12.5127 18.5 11.9884M1 15.1026C1 13.7097 2.43967 12.5127 4.5 11.9884M18.5 7.4427C18.8456 7.1461 19.1275 6.7861 19.3293 6.3834C19.531 5.9807 19.6488 5.54325 19.6758 5.09621C19.7028 4.64917 19.6385 4.20135 19.4866 3.77852C19.3347 3.35569 19.0981 2.96619 18.7905 2.63242C18.483 2.29864 18.1105 2.02719 17.6944 1.83365C17.2784 1.64012 16.8271 1.52834 16.3664 1.50473C15.9057 1.48111 15.4447 1.54614 15.01 1.69608C14.5753 1.84601 14.1754 2.07788 13.8333 2.37836M4.5 7.4427C3.81435 6.8404 3.40212 5.99919 3.35336 5.10282C3.30461 4.20645 3.62328 3.32778 4.23978 2.65874C4.85628 1.98971 5.7205 1.58469 6.64365 1.53215C7.5668 1.47962 8.47385 1.78384 9.16667 2.37836M11.5 11.7053C11.0404 11.7053 10.5852 11.6174 10.1606 11.4467C9.73597 11.2759 9.35013 11.0257 9.02513 10.7102C8.70012 10.3947 8.44231 10.0202 8.26642 9.60801C8.09053 9.19583 8 8.75405 8 8.3079C8 7.86175 8.09053 7.41997 8.26642 7.00778C8.44231 6.59559 8.70012 6.22107 9.02513 5.9056C9.35013 5.59012 9.73597 5.33987 10.1606 5.16914C10.5852 4.99841 11.0404 4.91053 11.5 4.91053C12.4283 4.91053 13.3185 5.26847 13.9749 5.9056C14.6313 6.54273 15 7.40686 15 8.3079C15 9.20894 14.6313 10.0731 13.9749 10.7102C13.3185 11.3473 12.4283 11.7053 11.5 11.7053Z"
                            stroke="black"
                            stroke-opacity="0.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        &nbsp;My Mentee
                      </ListGroup.Item>
                      <br />
                      <ListGroup.Item
                        action
                        variant="light"
                        className="list-group-item-custom"
                        href="#link4"
                        style={{
                          backgroundColor: " rgb(255, 255, 255)",
                          border: "0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 20C7.44444 20 5.21741 19.1526 3.31889 17.4578C1.42037 15.763 0.332593 13.6474 0.0555555 11.1111H2.33333C2.59259 13.037 3.44926 14.6296 4.90333 15.8889C6.35741 17.1481 8.0563 17.7778 10 17.7778C12.1667 17.7778 14.0048 17.023 15.5144 15.5133C17.0241 14.0037 17.7785 12.1659 17.7778 10C17.7778 7.83333 17.023 5.99518 15.5133 4.48556C14.0037 2.97593 12.1659 2.22148 10 2.22222C8.72222 2.22222 7.52778 2.51852 6.41667 3.11111C5.30555 3.7037 4.37037 4.51852 3.61111 5.55556H6.66667V7.77778H0V1.11111H2.22222V3.72222C3.16667 2.53704 4.31963 1.62037 5.68111 0.972222C7.04259 0.324074 8.48222 0 10 0C11.3889 0 12.69 0.264074 13.9033 0.792222C15.1167 1.32037 16.1722 2.03296 17.07 2.93C17.9678 3.82852 18.6807 4.88407 19.2089 6.09667C19.737 7.30926 20.0007 8.61037 20 10C20 11.3889 19.7359 12.69 19.2078 13.9033C18.6796 15.1167 17.967 16.1722 17.07 17.07C16.1715 17.9678 15.1159 18.6807 13.9033 19.2089C12.6907 19.737 11.3896 20.0007 10 20ZM13.1111 14.6667L8.88889 10.4444V4.44444H11.1111V9.55556L14.6667 13.1111L13.1111 14.6667Z"
                            fill="black"
                            fill-opacity="0.5"
                          />
                        </svg>
                        &nbsp;&nbsp;Mentoring History
                      </ListGroup.Item>
                      <br />
                      <ListGroup.Item
                        action
                        variant="light"
                        className="list-group-item-custom"
                        href="#link5"
                        style={{
                          backgroundColor: " rgb(255, 255, 255)",
                          border: "0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="18"
                          viewBox="0 0 21 18"
                          fill="none"
                        >
                          <path
                            d="M14.875 0.5C13.3061 0.5 11.8843 0.738 10.773 1.18637C9.66263 1.63475 8.75 2.36504 8.75 3.33333V6.16667C8.75 6.25804 8.78762 6.34658 8.80512 6.43229C7.92927 6.25212 7.02867 6.16287 6.125 6.16667C4.55613 6.16667 3.13425 6.40467 2.023 6.85304C0.912625 7.30142 0 8.03171 0 9V14.6667C0 15.635 0.912625 16.3652 2.02388 16.8136C3.13425 17.262 4.55613 17.5 6.125 17.5C7.69387 17.5 9.11575 17.262 10.227 16.8136C11.3365 16.3652 12.25 15.635 12.25 14.6667V14.3791C13.106 14.5664 13.9883 14.6631 14.875 14.6667C16.4439 14.6667 17.8657 14.4287 18.977 13.9803C20.0865 13.5319 21 12.8016 21 11.8333V3.33333C21 2.36504 20.0874 1.63475 18.9761 1.18637C17.8666 0.738 16.4447 0.5 14.875 0.5ZM14.875 1.91667C16.2076 1.91667 17.3941 2.149 18.1834 2.46988C18.9735 2.79075 19.25 3.12862 19.25 3.33333C19.25 3.53875 18.9735 3.87592 18.1834 4.19679C17.395 4.51767 16.2076 4.75 14.875 4.75C13.5424 4.75 12.3559 4.51767 11.5666 4.19679C10.7765 3.87592 10.5 3.53804 10.5 3.33333C10.5 3.12792 10.7765 2.79075 11.5666 2.46988C12.355 2.149 13.5424 1.91667 14.875 1.91667ZM10.5 5.34783C10.5919 5.38892 10.6776 5.44204 10.7739 5.48029C11.8842 5.92867 13.3061 6.16667 14.875 6.16667C16.4439 6.16667 17.8657 5.92867 18.977 5.48029C19.0724 5.44204 19.1581 5.38892 19.25 5.34783V6.16667C19.25 6.37208 18.9735 6.70925 18.1834 7.03012C17.3941 7.351 16.2076 7.58333 14.875 7.58333C13.5424 7.58333 12.3559 7.351 11.5666 7.03012C10.7765 6.70925 10.5 6.37137 10.5 6.16667V5.34783ZM6.125 7.58333C7.45762 7.58333 8.64412 7.81567 9.43338 8.13654C10.2235 8.45742 10.5 8.79529 10.5 9C10.5 9.20542 10.2235 9.54258 9.43338 9.86346C8.64412 10.1843 7.45762 10.4167 6.125 10.4167C4.79238 10.4167 3.60587 10.1843 2.81662 9.86346C2.0265 9.54258 1.75 9.20471 1.75 9C1.75 8.79458 2.0265 8.45742 2.81662 8.13654C3.605 7.81567 4.79238 7.58333 6.125 7.58333ZM19.25 8.18117V9C19.25 9.20542 18.9735 9.54258 18.1834 9.86346C17.3941 10.1843 16.2076 10.4167 14.875 10.4167C13.9837 10.4206 13.0973 10.3084 12.25 10.0845V9C12.25 8.90862 12.2124 8.82008 12.1949 8.73438C13.0086 8.90579 13.9108 9 14.875 9C16.4439 9 17.8657 8.762 18.977 8.31362C19.0724 8.27537 19.1581 8.22225 19.25 8.18117ZM1.75 11.0145C1.84187 11.0556 1.92763 11.1087 2.02388 11.147C3.13425 11.5953 4.55613 11.8333 6.125 11.8333C7.69387 11.8333 9.11575 11.5953 10.227 11.147C10.3224 11.1087 10.4081 11.0556 10.5 11.0145V11.8333C10.5 12.0387 10.2235 12.3759 9.43338 12.6968C8.64412 13.0177 7.45762 13.25 6.125 13.25C4.79238 13.25 3.60587 13.0177 2.81662 12.6968C2.0265 12.3759 1.75 12.038 1.75 11.8333V11.0145ZM19.25 11.0145V11.8333C19.25 12.0387 18.9735 12.3759 18.1834 12.6968C17.3941 13.0177 16.2076 13.25 14.875 13.25C13.8801 13.25 12.9815 13.1367 12.25 12.9397V11.5677C13.0533 11.7391 13.9283 11.8333 14.875 11.8333C16.4439 11.8333 17.8657 11.5953 18.977 11.147C19.0724 11.1087 19.1581 11.0556 19.25 11.0145ZM1.75 13.8478C1.84187 13.8889 1.92763 13.942 2.02388 13.9803C3.13425 14.4287 4.55613 14.6667 6.125 14.6667C7.69387 14.6667 9.11575 14.4287 10.227 13.9803C10.3224 13.942 10.4081 13.8889 10.5 13.8478V14.6667C10.5 14.8721 10.2235 15.2092 9.43338 15.5301C8.64412 15.851 7.45762 16.0833 6.125 16.0833C4.79238 16.0833 3.60587 15.851 2.81662 15.5301C2.0265 15.2092 1.75 14.8714 1.75 14.6667V13.8478Z"
                            fill="black"
                            fill-opacity="0.5"
                          />
                        </svg>
                        &nbsp; Earnings
                      </ListGroup.Item>
                      <br />
                      <ListGroup.Item
                        action
                        variant="light"
                        className="list-group-item-custom"
                        href="#link6"
                        style={{
                          backgroundColor: " rgb(255, 255, 255)",
                          border: "0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="10"
                          viewBox="0 0 20 10"
                          fill="none"
                        >
                          <path
                            d="M16.3636 0C15.3636 0 14.5455 0.9 14.5455 2V4C14.5455 5.1 15.3636 6 16.3636 6H18.1818V8H14.5455V10H18.1818C19.1818 10 20 9.1 20 8V6C20 4.9 19.1818 4 18.1818 4H16.3636V2H20V0H16.3636ZM7.27273 0V10H10.9091C11.9091 10 12.7273 9.1 12.7273 8V2C12.7273 0.9 11.9091 0 10.9091 0H7.27273ZM9.09091 2H10.9091V8H9.09091V2ZM1.81818 0C0.818182 0 0 0.9 0 2V10H1.81818V6H3.63636V10H5.45455V2C5.45455 0.9 4.63636 0 3.63636 0H1.81818ZM1.81818 2H3.63636V4H1.81818V2Z"
                            fill="black"
                            fill-opacity="0.5"
                          />
                        </svg>
                        &nbsp;&nbsp;Advertisement
                      </ListGroup.Item>
                      <br />
                      <ListGroup.Item
                        action
                        variant="light"
                        className="list-group-item-custom"
                        href="#link7"
                        style={{
                          backgroundColor: " rgb(255, 255, 255)",
                          border: "0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 14"
                          fill="none"
                        >
                          <path
                            d="M10.4348 6C10.9507 6 11.4551 5.82405 11.8841 5.49441C12.3131 5.16476 12.6475 4.69623 12.8449 4.14805C13.0423 3.59987 13.094 2.99667 12.9934 2.41473C12.8927 1.83279 12.6442 1.29824 12.2794 0.878681C11.9146 0.459123 11.4498 0.173401 10.9437 0.0576455C10.4377 -0.0581102 9.91315 0.00129986 9.43648 0.228363C8.9598 0.455426 8.55238 0.839943 8.26573 1.33329C7.97908 1.82664 7.82609 2.40666 7.82609 3C7.82609 3.79565 8.10093 4.55871 8.59016 5.12132C9.07938 5.68393 9.74291 6 10.4348 6ZM10.4348 2C10.6068 2 10.7749 2.05865 10.9179 2.16853C11.0609 2.27841 11.1723 2.43459 11.2382 2.61732C11.304 2.80004 11.3212 3.00111 11.2876 3.19509C11.2541 3.38907 11.1713 3.56726 11.0497 3.70711C10.928 3.84696 10.7731 3.9422 10.6044 3.98079C10.4357 4.01937 10.2609 3.99957 10.102 3.92388C9.94312 3.84819 9.80731 3.72002 9.71177 3.55557C9.61622 3.39112 9.56522 3.19778 9.56522 3C9.56522 2.73478 9.65683 2.48043 9.81991 2.29289C9.98298 2.10536 10.2042 2 10.4348 2ZM14.0087 5.86C14.5174 5.02103 14.7902 4.02282 14.7902 3C14.7902 1.97718 14.5174 0.97897 14.0087 0.140001C14.2588 0.0474144 14.5199 0.000181955 14.7826 1.1415e-06C15.4745 1.1415e-06 16.138 0.316072 16.6272 0.878681C17.1165 1.44129 17.3913 2.20435 17.3913 3C17.3913 3.79565 17.1165 4.55871 16.6272 5.12132C16.138 5.68393 15.4745 6 14.7826 6C14.5199 5.99982 14.2588 5.95259 14.0087 5.86ZM10.4348 8C5.21739 8 5.21739 12 5.21739 12V14H15.6522V12C15.6522 12 15.6522 8 10.4348 8ZM6.95652 12C6.95652 11.71 7.23478 10 10.4348 10C13.4783 10 13.8609 11.56 13.913 12M20 12V14H17.3913V12C17.371 11.2566 17.2221 10.5254 16.9534 9.84891C16.6846 9.17244 16.3014 8.5643 15.8261 8.06C20 8.55 20 12 20 12ZM5.51304 3.92L6.52174 5.33L2.3913 10.08L0 7.08L1.0087 5.92L2.3913 7.5L5.51304 3.92Z"
                            fill="black"
                            fill-opacity="0.5"
                          />
                        </svg>
                        &nbsp;Applicant
                      </ListGroup.Item>
                      <br />
                      <ListGroup.Item
                        action
                        variant="light"
                        className="list-group-item-custom"
                        href="#link8"
                        style={{
                          backgroundColor: " rgb(255, 255, 255)",
                          border: "0",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M7.26368 20L6.86567 16.8C6.65008 16.7167 6.44677 16.6167 6.25572 16.5C6.06468 16.3833 5.87828 16.2583 5.69652 16.125L2.73632 17.375L0 12.625L2.56219 10.675C2.54561 10.5583 2.53731 10.4457 2.53731 10.337V9.663C2.53731 9.55433 2.54561 9.44167 2.56219 9.325L0 7.375L2.73632 2.625L5.69652 3.875C5.87894 3.74167 6.06965 3.61667 6.26866 3.5C6.46766 3.38333 6.66667 3.28333 6.86567 3.2L7.26368 0H12.7363L13.1343 3.2C13.3499 3.28333 13.5532 3.38333 13.7443 3.5C13.9353 3.61667 14.1217 3.74167 14.3035 3.875L17.2637 2.625L20 7.375L17.4378 9.325C17.4544 9.44167 17.4627 9.55433 17.4627 9.663V10.337C17.4627 10.4457 17.4461 10.5583 17.4129 10.675L19.9751 12.625L17.2388 17.375L14.3035 16.125C14.1211 16.2583 13.9304 16.3833 13.7313 16.5C13.5323 16.6167 13.3333 16.7167 13.1343 16.8L12.7363 20H7.26368ZM10.0498 13.5C11.0116 13.5 11.8325 13.1583 12.5124 12.475C13.1924 11.7917 13.5323 10.9667 13.5323 10C13.5323 9.03333 13.1924 8.20833 12.5124 7.525C11.8325 6.84167 11.0116 6.5 10.0498 6.5C9.07131 6.5 8.2461 6.84167 7.57413 7.525C6.90216 8.20833 6.5665 9.03333 6.56717 10C6.56717 10.9667 6.90282 11.7917 7.57413 12.475C8.24544 13.1583 9.07065 13.5 10.0498 13.5ZM10.0498 11.5C9.63516 11.5 9.28259 11.354 8.99204 11.062C8.70149 10.77 8.55655 10.416 8.55721 10C8.55721 9.58333 8.70249 9.229 8.99304 8.937C9.28358 8.645 9.63582 8.49933 10.0498 8.5C10.4643 8.5 10.8169 8.646 11.1075 8.938C11.398 9.23 11.543 9.584 11.5423 10C11.5423 10.4167 11.397 10.771 11.1065 11.063C10.8159 11.355 10.4637 11.5007 10.0498 11.5ZM9.00498 18H10.9702L11.3184 15.35C11.8325 15.2167 12.3095 15.0207 12.7493 14.762C13.1891 14.5033 13.591 14.191 13.9552 13.825L16.4179 14.85L17.3881 13.15L15.2488 11.525C15.3317 11.2917 15.3897 11.046 15.4229 10.788C15.4561 10.53 15.4726 10.2673 15.4726 10C15.4726 9.73333 15.4561 9.471 15.4229 9.213C15.3897 8.955 15.3317 8.709 15.2488 8.475L17.3881 6.85L16.4179 5.15L13.9552 6.2C13.5904 5.81667 13.1884 5.496 12.7493 5.238C12.3101 4.98 11.8332 4.784 11.3184 4.65L10.995 2H9.02985L8.68159 4.65C8.1675 4.78333 7.69088 4.97933 7.25174 5.238C6.8126 5.49667 6.41028 5.809 6.04478 6.175L3.58209 5.15L2.61194 6.85L4.75124 8.45C4.66832 8.7 4.61028 8.95 4.57712 9.2C4.54395 9.45 4.52736 9.71667 4.52736 10C4.52736 10.2667 4.54395 10.525 4.57712 10.775C4.61028 11.025 4.66832 11.275 4.75124 11.525L2.61194 13.15L3.58209 14.85L6.04478 13.8C6.40962 14.1833 6.81194 14.5043 7.25174 14.763C7.69154 15.0217 8.16816 15.2173 8.68159 15.35L9.00498 18Z"
                            fill="black"
                            fill-opacity="0.5"
                          />
                        </svg>
                        &nbsp;&nbsp;Settings
                      </ListGroup.Item>
                    </ListGroup>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
          <div className="col-lg-9 vh-100 ">
            <Navbar className="mt-3 justify-content-between">
              <Form className="mx-auto">
                <div className="position-relative">
                  <FormControl
                    type="text"
                    placeholder="Find A Mentor"
                    className="w-100"
                  />
                  <FaSearch
                    className="position-absolute top-50 translate-middle-y text-muted"
                    style={{ right: "15px" }}
                  />
                </div>
              </Form>
              <Navbar.Brand
                href="#"
                className="d-flex align-items-center"
                style={{ marginLeft: "auto" }}
              >
                <img
                  src={Level}
                  width="60"
                  height="40"
                  className="d-inline-block "
                  alt="React Bootstrap logo"
                />{" "}
                &nbsp;&nbsp;
                <div className="ml-auto d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="40"
                    viewBox="0 0 39 40"
                    fill="none"
                  >
                    <path
                      d="M31.6875 20.7142V17.5625H29.25V21.2188C29.2501 21.542 29.3785 21.8519 29.6071 22.0804L32.9062 25.3796V27.3125H6.09375V25.3796L9.39291 22.0804C9.62148 21.8519 9.74993 21.542 9.75 21.2188V16.3438C9.7466 14.6312 10.1952 12.948 11.0505 11.4643C11.9058 9.98053 13.1375 8.74879 14.6212 7.89343C16.1049 7.03808 17.7881 6.58941 19.5007 6.59275C21.2133 6.59609 22.8946 7.05131 24.375 7.91244V5.18853C23.2149 4.67485 21.9809 4.34745 20.7188 4.21841V1.71875H18.2812V4.21719C15.2765 4.52301 12.4919 5.93211 10.4659 8.17201C8.43982 10.4119 7.31628 13.3235 7.3125 16.3438V20.7142L4.01334 24.0133C3.78477 24.2418 3.65632 24.5518 3.65625 24.875V28.5312C3.65625 28.8545 3.78465 29.1645 4.01321 29.393C4.24177 29.6216 4.55177 29.75 4.875 29.75H13.4062V30.9688C13.4062 32.5849 14.0483 34.1349 15.1911 35.2777C16.3339 36.4205 17.8838 37.0625 19.5 37.0625C21.1162 37.0625 22.6661 36.4205 23.8089 35.2777C24.9517 34.1349 25.5938 32.5849 25.5938 30.9688V29.75H34.125C34.4482 29.75 34.7582 29.6216 34.9868 29.393C35.2153 29.1645 35.3438 28.8545 35.3438 28.5312V24.875C35.3437 24.5518 35.2152 24.2418 34.9867 24.0133L31.6875 20.7142ZM23.1562 30.9688C23.1562 31.9384 22.771 32.8684 22.0854 33.5541C21.3997 34.2398 20.4697 34.625 19.5 34.625C18.5303 34.625 17.6003 34.2398 16.9146 33.5541C16.229 32.8684 15.8438 31.9384 15.8438 30.9688V29.75H23.1562V30.9688Z"
                      fill="#2A2A72"
                    />
                    <path
                      d="M31.6875 15.125C34.3799 15.125 36.5625 12.9424 36.5625 10.25C36.5625 7.55761 34.3799 5.375 31.6875 5.375C28.9951 5.375 26.8125 7.55761 26.8125 10.25C26.8125 12.9424 28.9951 15.125 31.6875 15.125Z"
                      fill="#FF0000"
                    />
                  </svg>
                  &nbsp;&nbsp;
                  <img
                    src={Student_Image}
                    width="45"
                    height="45"
                    className="d-inline-block"
                    alt="React Bootstrap logo"
                  />
                </div>
              </Navbar.Brand>
            </Navbar>
            <br></br>
            <br></br>
            <div
              className="main-box"
              style={{
                border: "2px solid #63636380",
                width: "100%",
                height: "auto",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1">
                  <h5 className="mb-0">Mentors</h5>
                </div>
                <div>
                  <button
                    style={{
                      border: "2px solid #63636380",

                      padding: "10px 20px",
                      borderRadius: "20px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                    >
                      <path
                        d="M15.2 1.58824H0.8C0.587827 1.58824 0.384344 1.50457 0.234315 1.35564C0.0842855 1.20672 0 1.00473 0 0.794118C0 0.583505 0.0842855 0.381518 0.234315 0.232592C0.384344 0.0836656 0.587827 0 0.8 0H15.2C15.4122 0 15.6157 0.0836656 15.7657 0.232592C15.9157 0.381518 16 0.583505 16 0.794118C16 1.00473 15.9157 1.20672 15.7657 1.35564C15.6157 1.50457 15.4122 1.58824 15.2 1.58824ZM12.5333 5.29412H3.46667C3.25449 5.29412 3.05101 5.21045 2.90098 5.06153C2.75095 4.9126 2.66667 4.71061 2.66667 4.5C2.66667 4.28939 2.75095 4.0874 2.90098 3.93847C3.05101 3.78955 3.25449 3.70588 3.46667 3.70588H12.5333C12.7455 3.70588 12.949 3.78955 13.099 3.93847C13.249 4.0874 13.3333 4.28939 13.3333 4.5C13.3333 4.71061 13.249 4.9126 13.099 5.06153C12.949 5.21045 12.7455 5.29412 12.5333 5.29412ZM9.33333 9H6.66667C6.45449 9 6.25101 8.91633 6.10098 8.76741C5.95095 8.61848 5.86667 8.4165 5.86667 8.20588C5.86667 7.99527 5.95095 7.79328 6.10098 7.64436C6.25101 7.49543 6.45449 7.41177 6.66667 7.41177H9.33333C9.54551 7.41177 9.74899 7.49543 9.89902 7.64436C10.049 7.79328 10.1333 7.99527 10.1333 8.20588C10.1333 8.4165 10.049 8.61848 9.89902 8.76741C9.74899 8.91633 9.54551 9 9.33333 9Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>{" "}
                    &nbsp;&nbsp;Filter
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="d-md-flex">
                  {/* Left Column for Image */}
                  <Col xs={12} md={2} className="mx-auto">
                    <img src={prolog} rounded alt="propic" className="imgr" />
                  </Col>

                  {/* Right Column for Other Details */}

                  <div className="card-body d-md-flex">
                    <div className="text-section">
                      <h5 className="card-title fw-bold">Mr. Julius Aguirre</h5>
                      <p className="card-para">
                        Senior Software Engineer at Innovation Lanka
                        <br />
                        <div className="d-inline-block">
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStar className="text-warning" />
                        </div>
                      </p>
                      <div className="container mt-3">
                        <div className="d-inline-block">
                          <button className="pbtn">IT</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Programming</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Technology</button>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="ms-md-auto d-md-flex align-items-end">
                      <div className="box d-flex align-items-center">
                        <p className="ptnpara ms-2 mb-0">
                          <button
                            className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            View Profile
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="main-body-select">
                  <h2 className="sele-h">Select a Meeting Duration</h2>

                  <div className="container mt-2">
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-2 text-center">
                        <button
                          className="pbtn2"
                          style={{ backgroundColor: "#2A2A72", color: "white" }}
                        >
                          30 Minutes
                        </button>
                        <p className="mb-0">X.00 /=</p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-2 text-center">
                        <button className="pbtn2">45 Minutes</button>
                        <p className="mb-0">Y.00 /=</p>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-2 text-center">
                        <button className="pbtn2">1 Hour</button>
                        <p className="mb-0">z.00 /=</p>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <h2 className="sele-h">Select a date</h2>
                  <div className="container mt-3">
                    <div className="calbox">
                      <div className="row">
                        <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                          <p className="pbtn2ww">Mon</p>
                          <p
                            className="mb-0"
                            style={{
                              backgroundColor: "#2A2A72",
                              color: "white",
                              padding: "2px 0 0 0",
                            }}
                          >
                            11
                          </p>
                          <p
                            className="mb-0"
                            style={{
                              backgroundColor: "#2A2A72",
                              color: "white",
                              padding: "0 0 4px 0",
                            }}
                          >
                            Sep
                          </p>
                        </div>
                        <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                          <p className="pbtn2ww">Thu</p>
                          <p className="mb-0">12</p>
                          <p className="mb-0">Sep</p>
                        </div>
                        <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                          <p className="pbtn2ww">Wed</p>
                          <p className="mb-0">13</p>
                          <p className="mb-0">Sep</p>
                        </div>
                        <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                          <p className="pbtn2ww">Thu</p>
                          <p className="mb-0">14</p>
                          <p className="mb-0">Sep</p>
                        </div>
                        <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                          <p className="pbtn2ww">Fri</p>
                          <p className="mb-0">15</p>
                          <p className="mb-0">Sep</p>
                        </div>
                        <div className="col-12 col-md-1 text-center mb-2 mb-md-0">
                          <p className="pbtn2ww">Sat</p>
                          <p className="mb-0">16</p>
                          <p className="mb-0">Sep</p>
                        </div>
                        <div className="col-12 col-md-1 text-center">
                          <p className="pbtn2ww">Sun</p>
                          <p className="mb-0">17</p>
                          <p className="mb-0">Sep</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <h2 className="sele-h">Select a Meeting Duration</h2>

                  <div className="container mt-2">
                    <div className="row">
                      <div className="col-sm-4 col-md-4 col-lg-2 text-center mb-2">
                        <button className="pbtn2">7:30 AM</button>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-2 text-center mb-2">
                        <button
                          className="pbtn2"
                          style={{ backgroundColor: "#2A2A72", color: "white" }}
                        >
                          8:30 AM
                        </button>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-2 text-center mb-2">
                        <button className="pbtn2">9:00 AM</button>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <h2 className="sele-h">
                    Write your expectations from this mentorship*
                  </h2>
                  <div className="container mt-3">
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          rows={5}
                          className="form-control"
                          style={{ resize: "none" }}
                          value={text}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Form>
                    <div className="text-right">
                      <p>{text.length}/300</p>
                    </div>
                  </div>
                </div>
                <div className="ms-md-auto d-md-flex align-items-end">
                  <div className="box d-flex align-items-center">
                    <p className="ptnpara ms-2 mb-0">
                      <button
                        className="custom-button218 custom-button-reset my-1 my-sm-3 t"
                        type="submit"
                      >
                        Cancel
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        className="custom-button2136 custom-button-reset my-1 my-sm-3 t"
                        type="submit"
                        onChange={handleShow2}
                        onClick={handleShow2}
                      >
                        Request
                      </button>
                    </p>
                  </div>
                  <Modal
                    size="sm"
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
                      <h4 className="mb-2">
                        Wait Until the Mentor Accepts your Request
                      </h4>

                      {/* Sub Message */}
                      <p className="mb-4 p-10">
                        we will notify you once it is done
                      </p>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
              <div className="card">
                <div className="d-md-flex">
                  {/* Left Column for Image */}
                  <Col xs={12} md={2} className="mx-auto">
                    <img src={pro2} rounded alt="propic" className="imgr" />
                  </Col>

                  {/* Right Column for Other Details */}
                  <div className="card-body d-md-flex">
                    <div className="text-section">
                      <h5 className="card-title fw-bold">Sasha Fernando</h5>
                      <p className="card-para">
                        Senior Software Engineer at Innovation Lanka
                        <br />
                        <div className="d-inline-block">
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStar className="text-warning" />
                        </div>
                      </p>
                      <div className="container mt-3">
                        <div className="d-inline-block">
                          <button className="pbtn">IT</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Programming</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Technology</button>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="ms-md-auto d-md-flex align-items-end">
                      <div className="box d-flex align-items-center">
                        <p className="ptnpara ms-2 mb-0">
                          <button
                            className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Request
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="d-md-flex">
                  {/* Left Column for Image */}
                  <Col xs={12} md={2} className="mx-auto">
                    <img src={pro3} rounded alt="propic" className="imgr" />
                  </Col>

                  {/* Right Column for Other Details */}
                  <div className="card-body d-md-flex">
                    <div className="text-section">
                      <h5 className="card-title fw-bold">Amanda Silva</h5>
                      <p className="card-para">
                        Senior Software Engineer at Innovation Lanka
                        <br />
                        <div className="d-inline-block">
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStar className="text-warning" />
                        </div>
                      </p>
                      <div className="container mt-3">
                        <div className="d-inline-block">
                          <button className="pbtn">IT</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Programming</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Technology</button>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="ms-md-auto d-md-flex align-items-end">
                      <div className="box d-flex align-items-center">
                        <p className="ptnpara ms-2 mb-0">
                          <button
                            className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Request
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="d-md-flex">
                  {/* Left Column for Image */}
                  <Col xs={12} md={2} className="mx-auto">
                    <img src={pro4} rounded alt="propic" className="imgr" />
                  </Col>

                  {/* Right Column for Other Details */}
                  <div className="card-body d-md-flex">
                    <div className="text-section">
                      <h5 className="card-title fw-bold">Jerome Williams</h5>
                      <p className="card-para">
                        Senior Software Engineer at Innovation Lanka
                        <br />
                        <div className="d-inline-block">
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStarFill className="text-warning" />
                          <BsStar className="text-warning" />
                        </div>
                      </p>
                      <div className="container mt-3">
                        <div className="d-inline-block">
                          <button className="pbtn">IT</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Programming</button>
                          &nbsp;&nbsp;
                          <button className="pbtn">Technology</button>
                        </div>
                      </div>
                    </div>

                    {/* Edit Profile Section */}
                    <div className="ms-md-auto d-md-flex align-items-end">
                      <div className="box d-flex align-items-center">
                        <p className="ptnpara ms-2 mb-0">
                          <button
                            className="custom-button21 custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Request
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Mentors;
