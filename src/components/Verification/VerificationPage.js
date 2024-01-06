

import '../FogotPassword/Verify.css';
import Verification_image from '../MobileAuthentication/Img/verification.png';
import Moblie_image from '../FogotPassword/Img/mobile.png';
import MobileIcon_image from '../MobileAuthentication/Img/mobileicon.png';
import Modal from 'react-bootstrap/Modal';
import React, { Component, ReactDOM,useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import Password_image from '../FogotPassword/Img/password.png';

class VerificationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "",  otp6: "",disable: true };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            console.log("next");
            const next = elmnt.target.tabIndex;
            if (next < 6) {
                elmnt.target.form.elements[next].focus()
            }
        }
    }
    toggleModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    };

    render() {
        
        return (
            <>
                <section className=''>
                    <div className='container-fluid '>
                        <div className='row'>
                            <div className='col-lg-5 vh-100 custom-bg d-flex align-items-center justify-content-center'>
                                <div className="vh-100 text-center">
                                    <img src={Verification_image} alt='Your Image' className='img-fluid custom-image-LI' />
                                    
                                </div>
                            </div>
                            <div className='col-lg-7 vh-100 '>
                                <img src={MobileIcon_image} alt='Your Image' className='img-fluid img-fluid custom-image-ULock mx-auto d-block' />
                                <h1 className='text-center mb-5'>Enter  OTP Verification</h1>
                                <div className="row justify-content-center">
                                    <div className="col-lg-9">
                                        <div className="form-outline">
                                            <h5 className='mb-4 custom-text-sendcode'>Enter the OTP that send to your mobile</h5>
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="otpContainer">
                                                    <input
                                                        name="otp1"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={this.state.otp1}
                                                        onKeyPress={this.keyPressed}
                                                        onChange={e => this.handleChange("otp1", e)}
                                                        tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                                                    />
                                                    <input
                                                        name="otp2"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={this.state.otp2}
                                                        onChange={e => this.handleChange("otp2", e)}
                                                        tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                                                    />
                                                    <input
                                                        name="otp3"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={this.state.otp3}
                                                        onChange={e => this.handleChange("otp3", e)}
                                                        tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                                                    />
                                                    <input
                                                        name="otp4"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={this.state.otp4}
                                                        onChange={e => this.handleChange("otp4", e)}
                                                        tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                                    />
                                                    <input
                                                        name="otp5"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={this.state.otp5}
                                                        onChange={e => this.handleChange("otp5", e)}
                                                        tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                                    />
                                                    <input
                                                        name="otp6"
                                                        type="text"
                                                        autoComplete="off"
                                                        className="otpInput"
                                                        value={this.state.otp6}
                                                        onChange={e => this.handleChange("otp6", e)}
                                                        tabIndex="6" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                                                    />
                                                </div>
                                            </form>
                                       </div>
                                       <h6 className='custom-text-AR mt-4 mb-5'>Don’t receive OTP? <span>Resend</span></h6>
                                        <div className="text-center">
                                        <button className="btn custom-button-reset my-1 my-sm-3" type="submit" onClick={this.toggleModal} >Verify</button>
                                    </div>
                                    <Modal size = 'lg' show={this.state.showModal} onHide={this.toggleModal} >
                                        <ModalBody>
                                        <div className='text-center'>
                                                <img src={Password_image} alt='Your Image' className='img-fluid img-fluid custom-image-ULock mx-auto d-block mb-4' />
                                                <h1 className='mb-4'>Verification successful!</h1>
                                                <h3 className='mb-5'>welcome to our community! start exploring now.</h3>
                                                <button className="btn  custom-button-reset my-1 my-sm-3" type="submit" >Home</button>
                                                <h3 className='mb-5'></h3>
                                            </div>
                                        </ModalBody>
                                    </Modal>
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

export default VerificationPage;