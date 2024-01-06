import '../FogotPassword/FogotPassword.css';
import Forgotpassword_image from '../FogotPassword/Img/forgotpassword.png';
import Login_image from '../LoginPage/Img/login.png';
import Lock_image from '../FogotPassword/Img/lock.png';
import Card from 'react-bootstrap/Card';

function FogotPassword() {
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
            <div className='col-lg-7 vh-100 text-center '>
              <img src={Lock_image} alt='Your Image' className='img-fluid img-fluid custom-image-ULock mx-auto d-block' />
              <h1 className='text-center'>Forgot password?</h1>
              <h5 className='mb-4 custom-text-sendcode'>Please Select an option to send security code</h5>
              <Card className=" col-lg-5 mx-auto mb-4 custom-card">
                <Card.Text>
                  Send to your mobile number<br />07******53
                </Card.Text>
              </Card>
              <Card className=" col-lg-5 mb-4 mx-auto custom-card ">
                <Card.Text>
                  Send to your email address<br />fgh*********@gmail.com
                </Card.Text>
              </Card>
              <button className="btn custom-button-reset my-1 my-sm-3" type="submit">Send the code</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FogotPassword;