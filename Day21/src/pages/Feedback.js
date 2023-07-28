import React, { useState, useEffect } from "react";
import axios from "axios";

function Feedback() {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [feedbck, setFeedbck] = useState([]);

  // Function to fetch feedback data from the backend API
  const getFeedbackData = () => {
    axios
      .get("http://localhost:8082/api/v1/feed/getFeedback")
      .then((response) => {
        setFeedbck(response.data);
      })
      .catch((error) => {
        console.error("Error fetching feedback data:", error);
      });
  };

  useEffect(() => {
    // Fetch feedback data when the component mounts
    getFeedbackData();
  }, []);

  let isValid = true;

  const handleSubmit = (e) => {
    // e.preventDefault();
    validate();
    if (isValid) {
      axios
        .post("http://localhost:8080/api/v1/feedback/addUserFeedback", {
          email: email,
          feedback: feedback,
        })
        .then((response) => {
          console.log("feedback add response");
          console.log(response.data);
          // Update the feedback list with the new feedback
          setFeedbck([...feedbck, { email: email, feedback: feedback }]);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
      handleClear();
    }
  };

  const handleClear = (e) => {
    // e.preventDefault();
    setEmail("");
    setFeedback("");
    setEmailError("");
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setEmailError("*Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid Email");
      isValid = false;
    } else {
      setEmailError("");
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "80vh",
  //       }}
  //     >
  //       <Dna
  //         visible={true}
  //         height={80}
  //         width={80}
  //         ariaLabel="dna-loading"
  //         wrapperStyle={{}}
  //         wrapperClass="dna-wrapper"
  //       />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="feedback-main container text-slate-100">
        <div className="feedback-area">
          <div className="feedback-section">
            <p>This is the feedback Section</p>
            <div className="feedback-list-main">
              <div className="feedback-list-grid">
                {feedbck.map((feedback, index) => (
                  <div className="feedback-list-implementation  " key={index}>
                    <p className="text-slate-950">Email: {feedback.email}</p>
                    <p className="text-slate-950">Feedback: {feedback.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-text-enter">
          <form onSubmit={handleSubmit} >
            <div>
              <label>Enter your Email:</label>
              <input 
                type="email"
                className="feedback-email-input text-slate-950"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
                required
              />
              {emailError && <div className="feedback-error">{emailError}</div>}
            </div>
            <div>
              <label>Post your valuable feedback here:</label>
              <textarea
                className="feedback-input  text-slate-950"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback..."
                required
              />
            </div>
            <button className="feedback-input-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Feedback;
