import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainContext } from "../context/ContextProvider";
import Trackers from "./Trackers";
import LeftArrow from "../images/left-arrow.png";
import RightArrow from "../images/right-arrow.png";
import "../styles/BabyDetails.css";

function BabyDetails() {
  const { baby, getUserBabies, userAxios } = useContext(MainContext);
  const navigate = useNavigate();
  const params = useParams();
  const [confirmDelete, setConfirmDelete] = useState(false);
  // unidirection render cycle.
  //uni direction cycle - trigger new render if new data
  //syncrhonize data to whats on the page
  const foundBaby = baby.find((child) => child._id === params.babyId);

  useEffect(() => {
    // this changes state giving two consoles!!! ...loading creation
    getUserBabies();
    // more efficient if I had a getbabytrackerlogs by babyId
    // if there is no baby data and baby does not exist go fetch that baby(efficent practices!)
    // eslint-disable-next-line
  }, []);

  //loading text while data is being fetched(state change delay)
  if (!foundBaby) {
    return <p>...loading</p>;
  }

  const deleteBaby = (babyId) => {
    console.log(`clicked, ${babyId}`);
    userAxios
      .delete(`/api/baby/${babyId}`)
      .then((res) => {
        alert(res.data)
        setConfirmDelete(false)
    })
      .then((err) => console.log(err));
  };

  const sureFunction = () => {
   setConfirmDelete(true)
  };

  const foundBabyId = foundBaby._id;
  return (
    <div className="baby-details-container">
      <h1>
        {foundBaby.babyname.charAt(0).toUpperCase() +
          foundBaby.babyname.slice(1)}
        <div
          onClick={() => {sureFunction()}}
          className="delete-baby-button"
        >
          Remove
        </div>
      </h1>
      {confirmDelete && <div className="areYouSure">
        {`Are you sure you want to remove ${
          foundBaby.babyname.charAt(0).toUpperCase() +
          foundBaby.babyname.slice(1) }?`}
        <p><u>This action is irreversible</u></p>
        {/* if a user deletes baby make sure it deletes trackers too, create function! */}
        <button onClick={() => {
            deleteBaby(foundBabyId)
            navigate("/profile")
            }} className="remove-baby-final-btn">Remove</button>
        <button onClick={() => {setConfirmDelete(false)}} className="cancel-baby-final-btn">Cancel</button>
      </div>}
      <div className="stylish-baby-container">
        <p className="bubble1"></p>
        <p className="bubble2"></p>
        <p className="bubble3"></p>
        <img className="baby-details-image" src={foundBaby.babyImg} alt="" />
      </div>

      <Trackers baby={foundBaby} />
    </div>
  );
}

export default BabyDetails;
