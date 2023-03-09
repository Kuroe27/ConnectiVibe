import UserImg from "./UserImg";
import { GoGlobe, GoFileMedia, GoLocation } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
import { FaVine } from "react-icons/fa";

const Newpost = () => {
  return (
    <div className="newPost">
      <div className="newpostHeader">
        <UserImg />
        <button className="privacy">
          <GoGlobe />
          Public
        </button>
      </div>
      <form action="" className="form">
        <textarea
          type="text"
          className="postInput"
          placeholder="What's on your mind?"
        ></textarea>
      </form>
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
        <button className="button" id="buttonpost">
          <span></span>Vibe It!
        </button>
      </div>
    </div>
  );
};

export default Newpost;
