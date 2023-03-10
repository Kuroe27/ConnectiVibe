import React from "react";
import UserImg from "./UserImg";
import { FaVine, FaTimes } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";

const PostContainer = ({ post, onDelete }) => {
  return (
    <div className="postContainer">
      <div className="postHeader">
        <UserImg />
        <div className="headerInfo">
          <h3>Jhon Test</h3>
        </div>
        <FaTimes
          className="btn"
          id="deletePost"
          onClick={() => onDelete(post.id)}
        />
      </div>
      <div className="postText">
        <h3>{post.text}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sunt
          quibusdam autem veritatis mollitia blanditiis aspernatur, unde
          excepturi maxime harum doloribus ducimus dolorem! Molestias sit amet
          commodi recusandae soluta minima fugit ab, sapiente ut veniam eveniet,
          laborum maiores, modi iure.
        </p>
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
