import React, { useState, useEffect } from "react";
import FemaleIcon from "../images/female.png";
import "../styles/CommunityPost.css";

function CommunityPost(props) {
  const { userAxios, allPosts, _id, user, title, date} = props

  const [userDetails, setUserDetails] = useState([])
  useEffect(() => {
        userAxios.get(`/api/post/${_id}`)
        .then(res => [
            setUserDetails(res.data)
        ])
        .catch(err => console.log(err))
  }, [allPosts.length])

const username = userDetails.user?.username
const userId = userDetails.user?._id

console.log(userDetails)


  
  return (
    
    <div className="post-content-box" key={_id}>
      <img className="post-user-image" src={FemaleIcon} alt="female-icon"></img>
      <p className="post-user-info"></p>
      <p className="post-user-title">{title}</p>
      <p className="post-comments">Comments</p>
      <p className="post-date_time">Date:
        {new Date(date)
          .toLocaleDateString(`en-us`, {
            hourCycle: "h12",
            hour: "2-digit",
            minute: "2-digit",
          })
          .split(",")}
      </p>
    </div>
  );
}

export default CommunityPost;
