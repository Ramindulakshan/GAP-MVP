import { useParams } from "react-router-dom";
import axios from "axios";
import { backEndURL } from "../../backendUrl";
import "./MentorReview.css";
import Photo from "./Img/bk.png";
const MentorReview = () => {
  const { userId } = useParams();

  // Unified function to handle both accept and reject operations
  const handleMentorDecision = (decision) => {
    axios.post(`${backEndURL}/mentor/${decision}/${userId}`, {
      decision: decision
    })
    .then((response) => {
      alert(response.data.message);
      console.log(`Mentor ${decision}`);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <div className="acept_box_mentro">
        <div>
          <h1 className="name_topic">Request Management Center</h1>
          <div className="box_btn_mentor">
            <div className="btn_box_ful_con">
              <img src={Photo} alt="img" className="img_request_acetp" />
<br></br>
<h1 className="hlword">Heloo World</h1>
              <button
                className="btn_acept_mentor"
                onClick={() => handleMentorDecision("approved")}
              >
                Accept
              </button>
              <button
                className="btn_dis_mentor"
                onClick={() => handleMentorDecision("rejected")}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorReview;
