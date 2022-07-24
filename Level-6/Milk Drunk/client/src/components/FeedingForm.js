import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "../context/ContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/FeedingForm.css";
import FeedingList from "./FeedingList";

function FeedingForm() {
  const params = useParams();

  const initInputs = {
    feedingDate: "",
    feedingTime: "",
    feedingAmount: "",
    diaperNotes: "",
  };
  const { userAxios, getUserBabies, baby } = useContext(MainContext);
  const [trackerLogs, setTrackerLogs] = useState([]);
  const [inputs, setInputs] = useState(initInputs);
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function addTrackerLog(inputs) {
    userAxios
      .post(`/api/baby/trackerLogs/${params.babyId}/trackerLogs`, inputs)
      .then((res) => setTrackerLogs((prevState) => [...prevState, res.data]))
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTrackerLog(inputs);
    setInputs(initInputs);
    // navigate("/profile")
  }

  useEffect(() => {
    getUserBabies();
    getBabyTrackerLogs();
    // eslint-disable-next-line
  }, []);

  function getBabyTrackerLogs(realId) {
    userAxios
      .get(`/api/baby/trackerLogs/${params.babyId}/trackerLogs`)
      .then((res) => setTrackerLogs(res.data))
      .catch((err) => console.log(err.response.data.errMsg));
  }

  const { feedingDate, feedingTime, feedingAmount, feedingNotes } = inputs;
  return (
    <div className="feeding-session-page">
      {/* <button onClick={addTrackerLog}>addtrackerlog</button> */}
      <h1 className="feeding-form-header">Feeding Time</h1>
      {showForm && (
        <form className="feeding-form" onSubmit={handleSubmit}>
          <p onClick={() => navigate(-1)} className="back-button">
            Back
          </p>
          <input
            type="Date"
            name="feedingDate"
            value={feedingDate}
            onChange={handleChange}
          />
          <input
            type="Time"
            name="feedingTime"
            value={feedingTime}
            onChange={handleChange}
          />
          <input
            type="text"
            name="feedingAmount"
            value={feedingAmount}
            onChange={handleChange}
            placeholder="oz."
          />
          <textarea
            className="notes-container"
            placeholder="Additional notes... "
            name="feedingNotes"
            value={feedingNotes}
            onChange={handleChange}
          ></textarea>
          <button>Add</button>
        </form>
      )}
        <FeedingList
          trackerLogs={trackerLogs}
          setTrackerLogs={setTrackerLogs}
          baby={baby}
          getBabyTrackerLogs={getBabyTrackerLogs}
        />
      
    </div>
  );
}

export default FeedingForm;
