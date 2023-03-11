import React from "react";
import UserImg from "./UserImg";
import { FaVine } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { GrFormClose } from "react-icons/gr";

const PostContainer = ({ post, onDelete }) => {
  return (
    <div className="postContainer">
      <div className="postHeader">
        <UserImg />
        <div className="headerInfo">
          <h3>Jhon Test</h3>
        </div>
        <GrFormClose
          className="btn"
          id="deletePost"
          onClick={() => onDelete(post.id)}
        />
      </div>
      <div className="postText">
        <p>{post.text}</p>
        <p></p>
      </div>
      <div className="postFooter">
        <button className="btn">
          <FaVine />
          <span>Vibe</span>
        </button>
        <button className="btn">
          <AiOutlineMessage />
          <span>Comment</span>
        </button>
        <button className="btn">
          <TbShare3 />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostContainer;
