import React, { useEffect } from "react";
import FemaleIcon from "../images/female.png";
import "../styles/CommunityPost.css";

function CommunityPost(props) {
  const { userAxios, allPosts, _id, user, title, date} = props
  
  console.log(allPosts)
function getPostByPostId(test) {
    userAxios.get(`/api/post/:${test}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data.errMsg))
}
  useEffect(() => {
    // getPostByPostId()
  }, [allPosts.length])
  
  return (
    <div className="post-content-box" key={_id}>
      <img className="post-user-image" src={FemaleIcon}></img>
      <p className="post-user-info">{user}</p>
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
