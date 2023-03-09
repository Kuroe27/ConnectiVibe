import UserImg from "./UserImg";
import { IoMdAdd } from "react-icons/io";
const Recommendation = () => {
  return (
    <div className="cardRecommendation">
      <h3>Add to your feed</h3>

      <ul className="recommendationList">
        <li className="viberz">
          <UserImg />
          <div className="userInfo">
            <h3>Jhon Recom</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
              fugit!
            </p>
            <button className="btn" id="follow">
              <IoMdAdd />
              Follow
            </button>
          </div>
        </li>
        <li className="viberz">
          <UserImg />
          <div className="userInfo">
            <h3>Jhon Recom</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
              fugit!
            </p>
            <button className="btn" id="follow">
              <IoMdAdd />
              Follow
            </button>
          </div>
        </li>
        <li className="viberz">
          <UserImg />
          <div className="userInfo">
            <h3>Jhon Recom</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
              fugit!
            </p>
            <button className="btn" id="follow">
              <IoMdAdd />
              Follow
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Recommendation;
