import { React, useState } from "react";
import "./UserProfile.css";
import Navbar from "react-bootstrap/Navbar";
import GAP_Image from "./img/GAP_BG.png";
import Student_Image from "./img/Student.png";
import Level from "./img/level.png";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import prolog from "./img/Student.png";
import Image from "react-bootstrap/Image";
import pen from "./img/pen.png";
import Modal from "react-bootstrap/Modal";
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

function UserProfileEmptyView() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [description, setDescription] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");

  /*Photo Change Model*/
  const [show, setShow] = useState(false);

  /*Social Media Model Start*/
  const [show2, setShow2] = useState(false);

  /*Edit personal details Model*/
  const [show3, setShow3] = useState(false);

  /*Academic qualification Model*/
  const [show4, setShow4] = useState(false);

  /*Delete Model */
  const [show5, setShow5] = useState(false);

  /*License Model */

  /*professional experience Model */
  const [show7, setShow7] = useState(false);

  /*Photo Change Model*/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*Social Media Model Start*/
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  /*Edit personal details Model*/
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  /*Academic qualification Model*/
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  /*Delete Model */
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  /*professional experience Model */
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  //calling to endpoint for get user details which already in the database
  const getUserDetails = (e) => {
    e.preventDefault();
    handleShow3();
    axios
      .get("http://localhost:3001/api/getUser", {
        headers: {
          authorization: `${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { firstName, lastName, email } = response.data;
          setUserData({ firstName, lastName, email });
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  //calling to endpoint for saving personal details of the user
  const handleSaveUserData = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/api/personalDetails",
        {
          title,
          address,
          telephone,
          gender,
          birthday,
          description,
          portfolioLink,
        },
        {
          headers: {
            authorization: `${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setTitle("");
          setAddress("");
          setTelephone("");
          setGender("");
          setBirthday("");
          setDescription("");
          setPortfolioLink("");
          handleClose3();
          alert("Personal details saved successfully");
        } else {
          alert("Personal details not saved");
        }
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };

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
          <div className="col-lg-9 vh-100 overflow-auto">
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
            <div>
              <div class="carduprofl">
                <Col xs={5} md={3} className="mx-auto position-relative">
                  <img src={prolog} rounded alt="propick" className="imgr" />
                  <Image
                    src={pen}
                    rounded
                    className="position-absolute m-2 cursor-pointer penclzee"
                    onClick={handleShow}
                  />
                </Col>
                {/*Photo Change Model Start*/}
                <Modal
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
                      <h1>Profile Picture</h1>
                      <p>Change Profile Picture</p>
                    </Modal.Title>
                    <div className="p-7">
                      <Container className="mt-2">
                        <Row className="justify-content-center">
                          <Col
                            xs={12}
                            md={6}
                            lg={4}
                            style={{
                              width: "100%",
                            }}
                          >
                            <div className="text-center"></div>
                            <br />
                            <div className="text-center">
                              <Image
                                src={prolog}
                                roundedCircle
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <br />
                            <hr />
                            <Row>
                              <Col
                                xs={2}
                                className="text-left"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <label htmlFor="fileInput">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="27"
                                    viewBox="0 0 29 27"
                                    fill="none"
                                    cursor="pointer"
                                  >
                                    <path
                                      d="M24.4748 8.76935L21.6105 0.762355C21.3991 0.171244 20.7775 -0.142783 20.2259 0.0632531L1.1889 7.11538C0.637307 7.31999 0.358711 7.96368 0.571508 8.55479L3.58987 16.9966V12.4737C3.58987 10.4304 5.19705 8.76935 7.17383 8.76935H12.204L18.2029 4.49516L21.6734 8.76935H24.4748ZM27.433 11.3697H7.17383C7.0319 11.3694 6.89135 11.398 6.76045 11.4537C6.62954 11.5094 6.51092 11.591 6.41154 11.6939C6.31216 11.7967 6.23404 11.9187 6.18175 12.0526C6.12946 12.1865 6.10406 12.3297 6.10704 12.4737V25.859C6.10844 26.4899 6.58723 27 7.17383 27H27.433C28.021 27 28.4998 26.4899 28.4998 25.859V12.4737C28.5028 12.3297 28.4774 12.1865 28.4251 12.0526C28.3728 11.9187 28.2946 11.7967 28.1953 11.6939C28.0959 11.591 27.9773 11.5094 27.8464 11.4537C27.7155 11.398 27.5749 11.3694 27.433 11.3697ZM25.6998 24.1581H8.90001V21.3162L11.6776 15.6069L15.5527 20.4893L19.1899 16.7067L23.863 14.9945L25.6998 19.8953V24.1581Z"
                                      fill="black"
                                      fill-opacity="0.5"
                                    />

                                    {/* Gallery icon path */}
                                  </svg>
                                  <p style={{ textAlign: "center" }}>Gallery</p>
                                </label>
                                <input
                                  id="fileInput"
                                  type="file"
                                  accept="image/*"
                                  style={{ display: "none" }}
                                  onChange={handleFileChange}
                                />
                              </Col>
                              <Col
                                xs={8}
                                className="text-center"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="35"
                                  height="27"
                                  viewBox="0 0 35 27"
                                  fill="none"
                                >
                                  <path
                                    d="M17.5009 19.6364C20.2121 19.6364 22.41 17.4385 22.41 14.7273C22.41 12.0161 20.2121 9.81824 17.5009 9.81824C14.7897 9.81824 12.5918 12.0161 12.5918 14.7273C12.5918 17.4385 14.7897 19.6364 17.5009 19.6364Z"
                                    fill="black"
                                    fill-opacity="0.5"
                                  />
                                  <path
                                    d="M32.8411 4.90909H26.4746C26.2445 4.90909 25.9592 4.76028 25.7367 4.52557L23.6442 1.24261C22.7928 -2.92605e-07 22.4093 0 21.0286 0H13.9718C12.5911 0 12.1309 0 11.3584 1.24338L9.26364 4.52557C9.09336 4.71119 8.85404 4.90909 8.60245 4.90909V3.68182C8.60245 3.51907 8.5378 3.36299 8.42272 3.24791C8.30764 3.13283 8.15156 3.06818 7.98881 3.06818H4.92063C4.75789 3.06818 4.60181 3.13283 4.48673 3.24791C4.37165 3.36299 4.307 3.51907 4.307 3.68182V4.90909H2.15927C1.67103 4.90909 1.20279 5.10304 0.857549 5.44828C0.512312 5.79352 0.318359 6.26176 0.318359 6.75V25.1591C0.318359 25.6473 0.512312 26.1156 0.857549 26.4608C1.20279 26.806 1.67103 27 2.15927 27H32.8411C33.3293 27 33.7976 26.806 34.1428 26.4608C34.488 26.1156 34.682 25.6473 34.682 25.1591V6.75C34.682 6.26176 34.488 5.79352 34.1428 5.44828C33.7976 5.10304 33.3293 4.90909 32.8411 4.90909ZM17.8461 22.0832C16.3619 22.153 14.8913 21.772 13.6276 20.9905C12.3639 20.209 11.3662 19.0635 10.7655 17.7045C10.1648 16.3455 9.98936 14.8366 10.2621 13.376C10.5349 11.9154 11.2431 10.5715 12.2937 9.52083C13.3444 8.47019 14.6883 7.76196 16.1489 7.48921C17.6095 7.21645 19.1184 7.39194 20.4774 7.9926C21.8364 8.59326 22.982 9.591 23.7635 10.8547C24.5449 12.1184 24.9259 13.589 24.8561 15.0732C24.7682 16.904 24.0015 18.6364 22.7054 19.9325C21.4093 21.2286 19.6769 21.9953 17.8461 22.0832Z"
                                    fill="black"
                                    fill-opacity="0.5"
                                  />
                                </svg>
                                <p>Camera</p>
                              </Col>
                              <Col
                                xs={2}
                                className="text-right"
                                style={{
                                  cursor: "pointer",
                                }}
                                onClick={handleShow5}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="27"
                                  viewBox="0 0 24 27"
                                  fill="none"
                                >
                                  <path
                                    d="M4.5 27C3.675 27 2.9685 26.706 2.3805 26.118C1.7925 25.53 1.499 24.824 1.5 24V4.5H0V1.5H7.5V0H16.5V1.5H24V4.5H22.5V24C22.5 24.825 22.206 25.5315 21.618 26.1195C21.03 26.7075 20.324 27.001 19.5 27H4.5ZM19.5 4.5H4.5V24H19.5V4.5ZM7.5 21H10.5V7.5H7.5V21ZM13.5 21H16.5V7.5H13.5V21Z"
                                    fill="black"
                                    fill-opacity="0.5"
                                  />
                                </svg>
                                <p>Delete</p>
                              </Col>
                              {/*Delete Model Start*/}
                              <Modal
                                show={show5}
                                onHide={handleClose5}
                                aria-labelledby="example-custom-modal-styling-title"
                              >
                                <Modal.Header closeButton></Modal.Header>

                                <Modal.Body>
                                  <div className="p-7">
                                    <Container className="mt-2">
                                      <Row className="justify-content-center">
                                        <Col
                                          xs={12}
                                          md={6}
                                          lg={4}
                                          style={{
                                            width: "100%",
                                          }}
                                        >
                                          <div className="text-center"></div>
                                          <br />
                                          <div className="text-center">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="123"
                                              height="123"
                                              viewBox="0 0 123 123"
                                              fill="none"
                                            >
                                              <circle
                                                cx="61.5"
                                                cy="61.5"
                                                r="61.5"
                                                fill="white"
                                              />
                                              <circle
                                                cx="61.5"
                                                cy="61.5"
                                                r="60"
                                                stroke="#CF1010"
                                                stroke-opacity="0.8"
                                                stroke-width="3"
                                              />
                                              <path
                                                d="M45.7622 88.9257C44.0767 88.9257 42.6332 88.3284 41.4319 87.1339C40.2306 85.9393 39.6309 84.5051 39.633 82.8311V43.2162H36.5684V37.1216H51.8914V34.0743H70.2791V37.1216H85.6021V43.2162H82.5375V82.8311C82.5375 84.5071 81.9369 85.9424 80.7355 87.1369C79.5342 88.3315 78.0918 88.9277 76.4083 88.9257H45.7622ZM76.4083 43.2162H45.7622V82.8311H76.4083V43.2162ZM51.8914 76.7365H58.0206V49.3108H51.8914V76.7365ZM64.1499 76.7365H70.2791V49.3108H64.1499V76.7365Z"
                                                fill="#CF1010"
                                                fill-opacity="0.8"
                                              />
                                            </svg>
                                            <br></br>
                                            <Modal.Title
                                              id="example-custom-modal-styling-title"
                                              className="text-center"
                                            >
                                              <h1>Are you sure ?</h1>
                                              <p>
                                                do you really want to delete
                                                this record? this process cannot
                                                be undone
                                              </p>
                                            </Modal.Title>
                                          </div>
                                          <br />

                                          <Row className="justify-content-center">
                                            <Col
                                              xs={5}
                                              className="text-left"
                                              style={{
                                                cursor: "pointer",
                                              }}
                                            >
                                              <button
                                                style={{
                                                  cursor: "pointer",
                                                  borderRadius: "5px",
                                                  border:
                                                    "2px solid rgba(0, 0, 0, 0.50)",
                                                  background: "#FFF",
                                                  width: "120px",
                                                  padding: "12px 12px",

                                                  gap: "10px",
                                                }}
                                              >
                                                Cancel
                                              </button>
                                            </Col>
                                            <Col
                                              xs={5}
                                              className="text-center"
                                              style={{
                                                cursor: "pointer",
                                              }}
                                            >
                                              <button
                                                style={{
                                                  cursor: "pointer",
                                                  borderRadius: "5px",
                                                  border: "2px solid #CF1010CC",
                                                  background: "#FFF",
                                                  width: "120px",
                                                  padding: "12px 12px",
                                                  color: "#CF1010CC",
                                                  gap: "10px",
                                                  textAlign: "center",
                                                }}
                                              >
                                                Delete
                                              </button>
                                            </Col>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Container>
                                  </div>
                                </Modal.Body>
                              </Modal>
                              {/*Delete Model End*/}
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Modal.Body>
                </Modal>
                {/*Photo Change Model End*/}
                <div class="card-body">
                  <div class="text-section">
                    <h5 class="card-title fw-bold">Mr.julius aguirre</h5>
                    <p className="card-para">
                      Undergraduate | Software Engineering
                    </p>
                    <div class="row mt-4">
                      <div class="col-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          cursor="pointer"
                          onClick={handleShow2}
                        >
                          <rect width="30" height="30" rx="5" fill="#E6F6FF" />
                          <path
                            d="M10.8393 12.1759H7.28711V22.664H10.8393V12.1759Z"
                            fill="#2A2A72"
                          />
                          <path
                            d="M20.447 11.9486C20.3161 11.9335 20.1769 11.9259 20.0378 11.9183C18.0489 11.8425 16.9275 12.9338 16.5347 13.4036C16.4283 13.5324 16.3791 13.6082 16.3791 13.6082V12.2063H12.9824V22.6944H16.3791H16.5347C16.5347 21.6259 16.5347 20.5649 16.5347 19.4964C16.5347 18.9205 16.5347 18.3446 16.5347 17.7686C16.5347 17.0563 16.4774 16.2985 16.8621 15.6467C17.1894 15.1011 17.7788 14.8283 18.4417 14.8283C20.4061 14.8283 20.447 16.4728 20.447 16.6243C20.447 16.6319 20.447 16.6395 20.447 16.6395V22.7399H23.9993V15.8968C23.9993 13.5552 22.7142 12.176 20.447 11.9486Z"
                            fill="#2A2A72"
                          />
                          <path
                            d="M9.06258 10.8194C10.2017 10.8194 11.1252 9.96438 11.1252 8.90969C11.1252 7.855 10.2017 7 9.06258 7C7.92345 7 7 7.855 7 8.90969C7 9.96438 7.92345 10.8194 9.06258 10.8194Z"
                            fill="#2A2A72"
                          />
                        </svg>{" "}
                        &nbsp;&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          cursor="pointer"
                          onClick={handleShow2}
                        >
                          <rect width="30" height="30" rx="5" fill="#E6F6FF" />
                          <path
                            d="M24 9.75C24 8.7875 23.19 8 22.2 8H7.8C6.81 8 6 8.7875 6 9.75V20.25C6 21.2125 6.81 22 7.8 22H22.2C23.19 22 24 21.2125 24 20.25V9.75ZM22.2 9.75L15 14.125L7.8 9.75H22.2ZM22.2 20.25H7.8V11.5L15 15.875L22.2 11.5V20.25Z"
                            fill="#2A2A72"
                          />
                        </svg>
                        &nbsp;&nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          cursor="pointer"
                          onClick={handleShow2}
                        >
                          <rect width="30" height="30" rx="5" fill="#E6F6FF" />
                          <path
                            d="M15.7545 20.3545C15.8552 20.4548 15.9351 20.574 15.9896 20.7052C16.0441 20.8365 16.0721 20.9772 16.0721 21.1193C16.0721 21.2614 16.0441 21.4021 15.9896 21.5333C15.9351 21.6645 15.8552 21.7837 15.7545 21.884L15.22 22.4184C14.2071 23.4311 12.8334 24 11.4009 24C9.96852 24 8.59477 23.4311 7.5819 22.4184C6.56903 21.4057 6 20.0323 6 18.6001C6 17.168 6.56903 15.7945 7.5819 14.7819L9.75238 12.6127C10.7256 11.6373 12.035 11.0708 13.4124 11.0294C14.7897 10.9879 16.1309 11.4745 17.161 12.3896C17.2674 12.4841 17.3541 12.5986 17.4161 12.7267C17.4782 12.8547 17.5145 12.9937 17.5228 13.1357C17.5312 13.2777 17.5115 13.42 17.4648 13.5544C17.4182 13.6888 17.3455 13.8127 17.251 13.9191C17.1565 14.0254 17.0419 14.1121 16.9138 14.1741C16.7858 14.2362 16.6468 14.2725 16.5047 14.2808C16.3627 14.2892 16.2204 14.2695 16.0859 14.2228C15.9515 14.1762 15.8276 14.1035 15.7212 14.009C15.1035 13.4605 14.2995 13.1687 13.4736 13.1933C12.6478 13.2179 11.8626 13.557 11.2786 14.1413L9.10988 16.3077C8.50225 16.9152 8.16089 17.7392 8.16089 18.5983C8.16089 19.4575 8.50225 20.2814 9.10988 20.8889C9.71751 21.4965 10.5416 21.8377 11.4009 21.8377C12.2603 21.8377 13.0844 21.4965 13.692 20.8889L14.2265 20.3545C14.3268 20.2542 14.4459 20.1745 14.577 20.1202C14.7081 20.0659 14.8486 20.0379 14.9905 20.0379C15.1324 20.0379 15.2729 20.0659 15.404 20.1202C15.5351 20.1745 15.6542 20.2542 15.7545 20.3545ZM22.4207 7.57895C21.407 6.56784 20.0336 6 18.6017 6C17.1698 6 15.7963 6.56784 14.7826 7.57895L14.2481 8.11337C14.0453 8.31619 13.9313 8.59127 13.9313 8.8781C13.9313 9.16493 14.0453 9.44002 14.2481 9.64284C14.451 9.84566 14.7261 9.9596 15.013 9.9596C15.2999 9.9596 15.575 9.84566 15.7779 9.64284L16.3124 9.10842C16.9201 8.50091 17.7442 8.15962 18.6035 8.15962C19.4628 8.15962 20.2869 8.50091 20.8946 9.10842C21.5022 9.71593 21.8435 10.5399 21.8435 11.399C21.8435 12.2582 21.5022 13.0821 20.8946 13.6896L18.725 15.8597C18.1405 16.4437 17.3548 16.7824 16.5288 16.8063C15.7027 16.8302 14.8988 16.5376 14.2814 15.9883C14.1751 15.8938 14.0511 15.8212 13.9167 15.7745C13.7823 15.7279 13.64 15.7082 13.4979 15.7166C13.3558 15.7249 13.2168 15.7612 13.0888 15.8232C12.9607 15.8853 12.8462 15.972 12.7516 16.0783C12.6571 16.1846 12.5844 16.3086 12.5378 16.443C12.4912 16.5774 12.4715 16.7197 12.4798 16.8617C12.4882 17.0037 12.5244 17.1427 12.5865 17.2707C12.6486 17.3987 12.7353 17.5133 12.8416 17.6078C13.8711 18.5226 15.2113 19.0096 16.588 18.9689C17.9648 18.9283 19.2739 18.3632 20.2476 17.3892L22.418 15.22C23.4305 14.2068 23.9995 12.8332 24 11.4009C24.0005 9.96866 23.4325 8.59471 22.4207 7.58075V7.57895Z"
                            fill="#2A2A72"
                          />
                        </svg>
                        <div class="position-absolute bottom-0 end-0 p-3">
                          <div
                            class="box d-flex align-items-center"
                            onClick={getUserDetails}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              cursor="pointer"
                            >
                              <path
                                d="M7 17.0134L11.413 16.9984L21.045 7.45839C21.423 7.08039 21.631 6.57839 21.631 6.04439C21.631 5.51039 21.423 5.00839 21.045 4.63039L19.459 3.04439C18.703 2.28839 17.384 2.29239 16.634 3.04139L7 12.5834V17.0134ZM18.045 4.45839L19.634 6.04139L18.037 7.62339L16.451 6.03839L18.045 4.45839ZM9 13.4174L15.03 7.44439L16.616 9.03039L10.587 15.0014L9 15.0064V13.4174Z"
                                fill="#2A2A72"
                              />
                              <path
                                d="M5 21H19C20.103 21 21 20.103 21 19V10.332L19 12.332V19H8.158C8.132 19 8.105 19.01 8.079 19.01C8.046 19.01 8.013 19.001 7.979 19H5V5H11.847L13.847 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21Z"
                                fill="#2A2A72"
                              />
                            </svg>
                            <p
                              className="ptnpara ms-2 mb-0"
                              style={{ cursor: "pointer" }}
                            >
                              Edit Profile
                            </p>
                          </div>
                          {/*Edit personal details Model Start*/}
                          <Modal
                            show={show3}
                            onHide={handleClose3}
                            aria-labelledby="example-custom-modal-styling-title"
                          >
                            <Modal.Header closeButton></Modal.Header>

                            <Modal.Body>
                              <Modal.Title
                                id="example-custom-modal-styling-title"
                                className="text-center"
                              >
                                <h1>Edit personal details</h1>
                                <br></br>
                              </Modal.Title>
                              <div className="p-7">
                                <Container className="mt-2">
                                  <Row className="mb-3">
                                    <Form.Group
                                      as={Col}
                                      controlId="formGridState"
                                    >
                                      <Form.Label>Title*</Form.Label>
                                      <Form.Select
                                        value={title}
                                        onChange={(e) =>
                                          setTitle(e.target.value)
                                        }
                                        placeholder="Choose..."
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                        }}
                                      >
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                        <option>Miss</option>
                                      </Form.Select>
                                    </Form.Group>

                                    <Form.Group
                                      as={Col}
                                      controlId="formGridCity"
                                    >
                                      <Form.Label>First name</Form.Label>
                                      <Form.Control
                                        disabled
                                        value={userData.firstName}
                                        placeholder="First Name"
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                        }}
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      as={Col}
                                      controlId="formGridZip"
                                    >
                                      <Form.Label>Last name</Form.Label>
                                      <Form.Control
                                        disabled
                                        value={userData.lastName}
                                        placeholder="Last Name"
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                        }}
                                      />
                                    </Form.Group>
                                  </Row>

                                  <Form.Label>Email </Form.Label>
                                  <Form.Control
                                    disabled
                                    value={userData.email}
                                    placeholder="Email"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                    }}
                                  />
                                  <br></br>
                                  <Form.Label>Address </Form.Label>
                                  <Form.Control
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter Your Address"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                    }}
                                  />
                                  <br></br>
                                  <Form.Label>Telephone Number </Form.Label>
                                  <Form.Control
                                    value={telephone}
                                    onChange={(e) =>
                                      setTelephone(e.target.value)
                                    }
                                    placeholder="Enter Your Phone Number"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                    }}
                                  />
                                  <br></br>
                                  <Row className="mb-3">
                                    <Form.Group
                                      as={Col}
                                      controlId="formGridState"
                                    >
                                      <Form.Label>Gender</Form.Label>
                                      <Form.Select
                                        value={gender}
                                        onChange={(e) =>
                                          setGender(e.target.value)
                                        }
                                        placeholder="Choose..."
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                        }}
                                      >
                                        <option>Male</option>
                                        <option>Female</option>
                                      </Form.Select>
                                    </Form.Group>

                                    <Form.Group
                                      as={Col}
                                      controlId="formGridZip"
                                    >
                                      <Form.Label>Birthday</Form.Label>
                                      <Form.Control
                                        onChange={(e) =>
                                          setBirthday(e.target.value)
                                        }
                                        placeholder="Enter Your Birthday"
                                        value={birthday}
                                        type="date"
                                        style={{
                                          border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                          borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                          boxShadow: "none", // Optional: Remove box-shadow
                                        }}
                                      />
                                    </Form.Group>
                                  </Row>

                                  <Form.Label>Description*</Form.Label>
                                  <Form.Control
                                    value={description}
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                    placeholder="write a small description about yourself"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                    }}
                                  />
                                  <br></br>
                                  <Form.Label>Project Portfolio </Form.Label>
                                  <Form.Control
                                    value={portfolioLink}
                                    onChange={(e) =>
                                      setPortfolioLink(e.target.value)
                                    }
                                    placeholder="google drive link"
                                    style={{
                                      border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                      borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                      boxShadow: "none", // Optional: Remove box-shadow
                                    }}
                                  />
                                </Container>
                              </div>
                              <div className="text-center">
                                <button
                                  className="btn  custom-button-reset my-1 my-sm-3 t"
                                  type="submit"
                                  onClick={handleSaveUserData}
                                >
                                  Save
                                </button>
                              </div>
                            </Modal.Body>
                          </Modal>
                          {/*Edit personal details Model End*/}
                        </div>
                      </div>
                    </div>
                    {/*Social Media Model Start*/}
                    <Modal
                      show={show2}
                      onHide={handleClose2}
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton></Modal.Header>

                      <Modal.Body>
                        <Modal.Title
                          id="example-custom-modal-styling-title"
                          className="text-center"
                        >
                          <h1>Social Media</h1>
                          <p>add social media links</p>
                        </Modal.Title>
                        <div className="p-7">
                          <Container className="mt-2">
                            <label>Email</label>

                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="18"
                                  viewBox="0 0 22 18"
                                  fill="none"
                                >
                                  <path
                                    d="M22 2.25C22 1.0125 21.01 0 19.8 0H2.2C0.99 0 0 1.0125 0 2.25V15.75C0 16.9875 0.99 18 2.2 18H19.8C21.01 18 22 16.9875 22 15.75V2.25ZM19.8 2.25L11 7.875L2.2 2.25H19.8ZM19.8 15.75H2.2V4.5L11 10.125L19.8 4.5V15.75Z"
                                    fill="black"
                                    fill-opacity="0.5"
                                  />
                                </svg>
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="juliusaguirre@gmail.com"
                                aria-label="juliusaguirre@gmail.com"
                                aria-describedby="basic-addon1"
                                className="flex-grow-1" // Use Bootstrap's utility class for flexible width
                              />
                            </InputGroup>
                            <br></br>
                            <label style={{ color: "#2A2A72" }}>
                              LinkedIn Link
                            </label>

                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="21"
                                  viewBox="0 0 22 21"
                                  fill="none"
                                >
                                  <path
                                    d="M4.96998 6.69824H0.373047V20.2709H4.96998V6.69824Z"
                                    fill="#2A2A72"
                                  />
                                  <path
                                    d="M17.4041 6.40395C17.2346 6.38434 17.0545 6.37453 16.8745 6.36472C14.3006 6.26665 12.8495 7.67884 12.3411 8.28686C12.2034 8.45358 12.1398 8.55164 12.1398 8.55164V6.73738H7.74414V20.31H12.1398H12.3411C12.3411 18.9273 12.3411 17.5543 12.3411 16.1715C12.3411 15.4262 12.3411 14.6809 12.3411 13.9356C12.3411 13.0138 12.2669 12.0331 12.7648 11.1897C13.1884 10.4836 13.9511 10.1305 14.809 10.1305C17.3511 10.1305 17.4041 12.2586 17.4041 12.4548C17.4041 12.4646 17.4041 12.4744 17.4041 12.4744V20.3689H22.001V11.5133C22.001 8.483 20.338 6.69815 17.4041 6.40395Z"
                                    fill="#2A2A72"
                                  />
                                  <path
                                    d="M2.66918 4.94264C4.14334 4.94264 5.33838 3.83619 5.33838 2.47132C5.33838 1.10645 4.14334 0 2.66918 0C1.19503 0 0 1.10645 0 2.47132C0 3.83619 1.19503 4.94264 2.66918 4.94264Z"
                                    fill="#2A2A72"
                                  />
                                </svg>
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="/in/juliusaguirre"
                                aria-label="/in/juliusaguirre"
                                aria-describedby="basic-addon1"
                                className="flex-grow-1" // Use Bootstrap's utility class for flexible width
                              />
                            </InputGroup>
                            <br></br>
                            <label style={{ color: "#2A2A72" }}>
                              LinkedIn Link
                            </label>

                            <InputGroup className="mb-3">
                              <InputGroup.Text id="basic-addon1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                >
                                  <path
                                    d="M11.9222 17.5444C12.0452 17.667 12.1428 17.8127 12.2095 17.9731C12.2761 18.1335 12.3104 18.3054 12.3104 18.4791C12.3104 18.6528 12.2761 18.8247 12.2095 18.9851C12.1428 19.1455 12.0452 19.2912 11.9222 19.4138L11.2689 20.067C10.0309 21.3047 8.35189 22 6.60115 22C4.85042 22 3.17139 21.3047 1.93343 20.067C0.695477 18.8292 0 17.1506 0 15.4002C0 13.6498 0.695477 11.9711 1.93343 10.7334L4.58625 8.0822C5.7757 6.89004 7.37607 6.1977 9.05954 6.147C10.743 6.0963 12.3822 6.69107 13.6412 7.80949C13.7712 7.92502 13.8772 8.06501 13.9531 8.22147C14.0289 8.37794 14.0732 8.54781 14.0835 8.7214C14.0937 8.89498 14.0696 9.06888 14.0126 9.23316C13.9556 9.39744 13.8668 9.54888 13.7512 9.67885C13.6357 9.80881 13.4956 9.91475 13.3391 9.99061C13.1827 10.0665 13.0127 10.1108 12.8391 10.121C12.6655 10.1312 12.4916 10.1071 12.3273 10.0501C12.1629 9.99313 12.0115 9.90433 11.8815 9.78881C11.1265 9.1184 10.1438 8.76174 9.13443 8.79179C8.12508 8.82184 7.16536 9.23632 6.45157 9.95045L3.80096 12.5983C3.0583 13.3408 2.64108 14.3479 2.64108 15.398C2.64108 16.448 3.0583 17.4551 3.80096 18.1976C4.54362 18.9401 5.55088 19.3572 6.60115 19.3572C7.65143 19.3572 8.65869 18.9401 9.40134 18.1976L10.0546 17.5444C10.1772 17.4217 10.3228 17.3244 10.483 17.258C10.6432 17.1916 10.815 17.1574 10.9884 17.1574C11.1619 17.1574 11.3336 17.1916 11.4938 17.258C11.654 17.3244 11.7996 17.4217 11.9222 17.5444ZM20.0698 1.92983C18.8308 0.694024 17.1522 0 15.4021 0C13.652 0 11.9733 0.694024 10.7344 1.92983L10.081 2.583C9.8331 2.83089 9.69381 3.16711 9.69381 3.51768C9.69381 3.86825 9.8331 4.20446 10.081 4.45236C10.329 4.70025 10.6653 4.83951 11.0159 4.83951C11.3666 4.83951 11.7028 4.70025 11.9508 4.45236L12.6041 3.79918C13.3467 3.05667 14.354 2.63954 15.4043 2.63954C16.4545 2.63954 17.4618 3.05667 18.2045 3.79918C18.9471 4.54169 19.3643 5.54875 19.3643 6.59881C19.3643 7.64888 18.9471 8.65594 18.2045 9.39845L15.5527 12.0507C14.8383 12.7646 13.8781 13.1784 12.8685 13.2077C11.8589 13.2369 10.8763 12.8793 10.1217 12.208C9.99175 12.0925 9.84027 12.0037 9.67596 11.9467C9.51165 11.8897 9.33772 11.8656 9.1641 11.8758C8.99048 11.886 8.82057 11.9303 8.66407 12.0062C8.50758 12.082 8.36756 12.188 8.25201 12.3179C8.13647 12.4479 8.04765 12.5993 7.99065 12.7636C7.93364 12.9279 7.90956 13.1018 7.91977 13.2754C7.92998 13.449 7.97429 13.6188 8.05017 13.7753C8.12605 13.9318 8.23201 14.0718 8.36199 14.1873C9.62019 15.3055 11.2582 15.9006 12.9409 15.8509C14.6236 15.8013 16.2237 15.1105 17.4137 13.9201L20.0665 11.2689C21.304 10.0305 21.9994 8.35171 22 6.60115C22.0006 4.85058 21.3064 3.17132 20.0698 1.93203V1.92983Z"
                                    fill="#2A2A72"
                                  />
                                </svg>
                              </InputGroup.Text>
                              <Form.Control
                                placeholder="/juliusaguirre.com"
                                aria-label="/juliusaguirre.com"
                                aria-describedby="basic-addon1"
                                className="flex-grow-1" // Use Bootstrap's utility class for flexible width
                              />
                            </InputGroup>
                          </Container>
                        </div>
                        <div className="text-center">
                          <button
                            className="btn  custom-button-reset my-1 my-sm-3 t"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </Modal.Body>
                    </Modal>
                    {/*Social Media Model End*/}
                  </div>
                </div>
                <div></div>
              </div>

              <div class="cardfu">
                <div className="d-flex justify-content-between mt-4">
                  <h4>Fields of interest</h4>

                  <h6 className="View-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      cursor="pointer"
                      onClick={handleShow4}
                    >
                      <path
                        d="M15 8.4375H8.4375V15H6.5625V8.4375H0V6.5625H6.5625V0H8.4375V6.5625H15V8.4375Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </h6>
                  {/*Academic qualification Model Start*/}
                  <Modal
                    show={show4}
                    onHide={handleClose4}
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body>
                      <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="text-center"
                      >
                        <h1>Academic Qualification</h1>
                        <p>Add New Academic Qualification</p>
                      </Modal.Title>
                      <div className="p-7">
                        <Container className="mt-2">
                          <Form.Label>Institute* </Form.Label>
                          <Form.Control
                            placeholder="add institute name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>
                          <Form.Label>Degree / Course* </Form.Label>
                          <Form.Control
                            placeholder="add degree / course name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>

                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Start date*</Form.Label>
                            <Form.Control
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>End date (or expected)*</Form.Label>
                            <Form.Control
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Label>Grade*</Form.Label>
                          <Form.Control
                            placeholder="add grade"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>
                        </Container>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn  custom-button-reset my-1 my-sm-3 t"
                          type="submit"
                          onClick={handleShow}
                        >
                          Save
                        </button>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/*Academic qualification Model End*/}
                </div>
                <br></br>
                <hr></hr>
                <div className="d-flex justify-content-between mt-4">
                  <h4>Academic Qualification</h4>

                  <h6 className="View-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      cursor="pointer"
                      onClick={handleShow4}
                    >
                      <path
                        d="M15 8.4375H8.4375V15H6.5625V8.4375H0V6.5625H6.5625V0H8.4375V6.5625H15V8.4375Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </h6>
                  {/*Academic qualification Model Start*/}
                  <Modal
                    show={show4}
                    onHide={handleClose4}
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body>
                      <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="text-center"
                      >
                        <h1>Academic Qualification</h1>
                        <p>Add New Academic Qualification</p>
                      </Modal.Title>
                      <div className="p-7">
                        <Container className="mt-2">
                          <Form.Label>Institute* </Form.Label>
                          <Form.Control
                            placeholder="add institute name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>
                          <Form.Label>Degree / Course* </Form.Label>
                          <Form.Control
                            placeholder="add degree / course name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>

                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Start date*</Form.Label>
                            <Form.Control
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>End date (or expected)*</Form.Label>
                            <Form.Control
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Label>Grade*</Form.Label>
                          <Form.Control
                            placeholder="add grade"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>
                        </Container>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn  custom-button-reset my-1 my-sm-3 t"
                          type="submit"
                          onClick={handleShow}
                        >
                          Save
                        </button>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/*Academic qualification Model End*/}
                </div>
                <br></br>
                <hr></hr>
                <div className="d-flex justify-content-between mt-4">
                  <h4>Professional experience</h4>

                  <h6 className="View-more">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      cursor="pointer"
                      onClick={handleShow7}
                    >
                      <path
                        d="M15 8.4375H8.4375V15H6.5625V8.4375H0V6.5625H6.5625V0H8.4375V6.5625H15V8.4375Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </h6>
                  {/*Professional Experience  Model Start*/}
                  <Modal
                    show={show7}
                    onHide={handleClose7}
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton></Modal.Header>

                    <Modal.Body>
                      <Modal.Title
                        id="example-custom-modal-styling-title"
                        className="text-center"
                      >
                        <h1>Professional Experience </h1>
                        <p>Add New Professional Experience </p>
                      </Modal.Title>
                      <div className="p-7">
                        <Container className="mt-2">
                          <Form.Label>position* </Form.Label>
                          <Form.Control
                            placeholder="add position"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />
                          <br></br>

                          <Form.Label>Employment type*</Form.Label>
                          <Form.Select
                            placeholder="Select employment type"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          >
                            <option>Select employment type</option>
                            <option>Full time</option>
                            <option>Part time</option>
                            <option>Internship</option>
                            <option>Freelance</option>
                            <option>Contract</option>
                          </Form.Select>

                          <br></br>
                          <Form.Label>Company name* </Form.Label>
                          <Form.Control
                            placeholder="add Company name"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>
                          <Form.Label>Location type* </Form.Label>
                          <Form.Select
                            placeholder="select location type"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          >
                            <option>select location type</option>
                            <option>Onsite</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                          </Form.Select>

                          <br></br>
                          <Form.Label>Start date*</Form.Label>
                          <Form.Control
                            placeholder="Start date of degree"
                            type="date"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>
                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>End date(or expected)*</Form.Label>
                            <Form.Control
                              type="date"
                              style={{
                                border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                                borderRadius: "0", // Optional: Set border-radius to 0 if needed
                                boxShadow: "none", // Optional: Remove box-shadow
                              }}
                            />
                          </Form.Group>
                          <br></br>
                          <Form.Label>Skills</Form.Label>
                          <Form.Control
                            placeholder="describe about skills gathered"
                            style={{
                              border: "0 0 1px 0 solid #ced4da", // Set the bottom border style
                              borderRadius: "0", // Optional: Set border-radius to 0 if needed
                              boxShadow: "none", // Optional: Remove box-shadow
                            }}
                          />

                          <br></br>
                        </Container>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn  custom-button-reset my-1 my-sm-3 t"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/*Professional Experience  Model End*/}
                </div>
                <hr></hr>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileEmptyView;
