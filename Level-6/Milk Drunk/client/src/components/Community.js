import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommunityImage from "../images/community-image.svg";
import { MainContext } from "../context/ContextProvider";
import "../styles/Community.css";
import CommunityPost from "./CommunityPost";

function Community() {
  const { getAllPosts, allPosts, userAxios } = useContext(MainContext);

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line
  }, []);

  if (!allPosts) {
    return <p>...loading</p>;
  }

  return (
    <div className="community-page">
      <div className="community-section">
        <div className="community-header">
          <img src={CommunityImage} alt="" />
          <h1>Community Page</h1>
          <p>Connect with other parents on the latest tracking topics.</p>
          <div className="community-stats">
            <p className="all-posts_qty">
              {allPosts.length}
              <span>DISCUSSIONS</span>
            </p>
            <p className="all-members_qty">
              {allPosts.length}
              <span>MEMBERS</span>
            </p>
          </div>
        </div>
        <p className="post-section-title">Latest Discussions</p>
      </div>
      <div className="post-section">
        {allPosts.map((post) => {
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: `numeric`};
          return (
            <CommunityPost {...post} allPosts={allPosts}userAxios={userAxios} key={post._id}/>
          );
        })}
      </div>
    </div>
  );
}

export default Community;
