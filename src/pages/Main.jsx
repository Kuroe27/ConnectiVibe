import React from "react";
import Newpost from "../components/Newpost";
import Menubar from "../components/Menubar";
import Recommendation from "../components/Recommendation";
import Post from "../components/Post";
const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="menu">
          <Menubar />
        </div>
        <div className="content">
          <Newpost />
          <Post />
        </div>
        <div className="recommendation">
          <Recommendation />
        </div>
      </div>
    </main>
  );
};

export default Main;
