import { useParams } from 'react-router-dom';
import axios from 'axios';
import { backEndURL } from '../../backendUrl';

const MentorReview = () => {
  const { userId } = useParams();

  // Unified function to handle both accept and reject operations
  const handleMentorDecision = (decision) => {
    axios.post(`${backEndURL}/mentor/${decision}/${userId}`, {
      decision: decision
    })
    .then((response) => {
      console.log(response.data.message);
      console.log(`Mentor ${decision}`);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <button onClick={() => handleMentorDecision('approved')}>Accept</button> <br /><br />
      <button onClick={() => handleMentorDecision('rejected')}>Decline</button>
    </div>
  );
};

export default MentorReview;
