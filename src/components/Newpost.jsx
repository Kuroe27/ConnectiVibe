import UserImg from "./UserImg";
import { GoGlobe, GoFileMedia, GoLocation } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
import { FaVine } from "react-icons/fa";
import { useState } from "react";

const Newpost = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    onAdd({ text });
  };
  return (
    <div className="newPost">
      <div className="newpostHeader">
        <UserImg />
        <button className="privacy">
          <GoGlobe />
          Public
        </button>
      </div>
      <form action="" className="form" onSubmit={onsubmit}>
        <textarea
          type="text"
          className="postInput"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="newpostFooter">
          <button className="button">
            <GoFileMedia />
            <span>Media</span>{" "}
          </button>
          <button className="button">
            <GoLocation />
            <span>Location</span>
          </button>
          <button className="button">
            <BsEmojiSmile />
            <span>Emoji</span>
          </button>
          <button type="submit" className="button" id="buttonpost">
            <span></span>Vibe It!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newpost;
