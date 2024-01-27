import '../ForgotPassword/ForgotPassword.css';
import Forgotpassword_image from '../ForgotPassword/Img/forgotpassword.png';
import Login_image from '../LoginPage/Img/login.png';
import Lock_image from '../ForgotPassword/Img/lock.png';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
function ForgotPassword() {
  return (
    <>
      <section className=''>
        <div className='container-fluid '>
          <div className='row'>
            <div className='col-lg-5 vh-100 custom-bg d-flex align-items-center justify-content-center'>
              <div className="vh-100 text-center">
                <img src={Login_image} alt='Your Image' className='img-fluid custom-image-LI' />
              </div>
            </div>
            <div className='col-lg-7 vh-100 '>
              <img src={Lock_image} alt='Your Image' className='img-fluid img-fluid custom-image-ULock mx-auto d-block' />
              <h1 className='text-center'>Forgot password?</h1>
              <h5 className=' text-center mb-4 custom-text-sendcode'>Please Select an option to send security code</h5>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="form-outline">
                    <br />
                    <Form.Control className='mt-3 mb-2' size="lg" type="text" placeholder="Enter Your Email" />
                    <br />                 
                  </div>
                  <div className="text-center">
                    <button className="btn custom-button-reset my-1 my-sm-3" type="submit" onClick={() => {
                      window.location.href = "/verifyE";
                    }}>Send the code</button>
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

export default ForgotPassword;