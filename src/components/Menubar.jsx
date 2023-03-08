import {
  AiFillHome,
  AiOutlineMessage,
  AiOutlineCalendar,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import UserImg from "./UserImg";

const Menubar = () => {
  return (
    <div className="container">
      <div className="menuHeader">
        <UserImg />
        <span>
          <h3>Jhon Test</h3>
        </span>
      </div>
      <button className="btn" id="Home">
        <div className="icon-wrapper">
          <AiFillHome />
          <span>Home</span>
        </div>
      </button>
      <button className="btn" id="Messages">
        <div className="icon-wrapper">
          <AiOutlineMessage />
          <span>Messages</span>
        </div>
      </button>
      <button className="btn" id="notification">
        <div className="icon-wrapper">
          <IoMdNotificationsOutline />
          <span>Notification</span>
        </div>
      </button>
      <button className="btn" id="Events">
        <div className="icon-wrapper">
          <AiOutlineCalendar />
          <span>Events</span>
        </div>
      </button>
    </div>
  );
};

export default Menubar;
