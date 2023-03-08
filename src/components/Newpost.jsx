import UserImg from "./UserImg";
import { GoGlobe } from "react-icons/go";
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
          <i className="fa-regular fa-images"></i>
          <span>Media</span>{" "}
        </button>
        <button className="button">
          <i className="fa fa-location-dot"></i>
          <span>Location</span>
        </button>
        <button className="button">
          <i className="fa-regular fa-face-smile"></i>
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
