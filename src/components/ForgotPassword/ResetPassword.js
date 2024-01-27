import React, { useState } from 'react';
import '../ForgotPassword/ResetPassword.css';
import Createpassword_image from '../ForgotPassword/Img/createpassword.png';
import Login_image from '../LoginPage/Img/login.png';
import Password_image from '../ForgotPassword/Img/password.png';
import Unlock_image from '../ForgotPassword/Img/unlock.png';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ResetPassword = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className=''>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-5 vh-100 custom-bg d-flex align-items-center justify-content-center'>
                            <div className="vh-100 text-center">
                                <img src={Login_image} alt='Your Image' className='img-fluid custom-image-LI' />
                            </div>
                        </div>
                        <div className='col-lg-7 vh-100 '>
                            <img src={Unlock_image} alt='Your Image' className='img-fluid img-fluid custom-image-ULock mx-auto d-block' />
                            <h1 className='mt-2 text-center'>Create A New Password</h1>
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="form-outline">
                                        <br />
                                        <Form.Control className='mt-3 mb-2' size="lg" type="text" placeholder="New Password" />
                                        <br />
                                        <Form.Control size="lg" type="text" placeholder="Confirm Password" />
                                    </div>
                                    <h5 className='mb-4 mt-2'>You should enter at least 6 characters </h5>
                                    <div className="text-center">
                                        <button className="btn custom-button-reset  my-1 my-sm-3" type="submit" onClick={handleShow}>Reset</button>
                                    </div>
                                    <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered >
                                        <Modal.Body>
                                            <div className='text-center'>
                                                <img src={Password_image} alt='YourImage' className='img-fluid img-fluid custom-image-ULock mx-auto d-block mb-4' />
                                                <h1 className='mb-4'>Password Changed!</h1>
                                                <h3 className='mb-5'>Your password has been changed successfully.</h3>
                                                <button className="btn  custom-button-reset my-1 my-sm-3" type="submit" >Login</button>
                                                <h3 className='mb-5'></h3>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResetPassword;
