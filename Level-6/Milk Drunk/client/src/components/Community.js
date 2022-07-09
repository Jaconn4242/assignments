import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommunityImage from "../images/community-image.svg";
import { MainContext } from "../context/ContextProvider";
import "../styles/Community.css";

function Community() {
  const { getAllPosts, allPosts } = useContext(MainContext);

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line
  }, []);
  console.log(allPosts);
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
          return (
            <div className="post-content-box">
              <p className="post-user-info">{post.user}</p>
              <p className="post-user-title">{post.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Community;
