import { useState } from "react";

import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  const [post, setPost] = useState([
    {
      id: 1,
      text: "asd",
    },
  ]);

  //delete post
  const deletePost = (id) => {
    setPost(post.filter((post) => post.id !== id));
  };
  return (
    <div className="App">
      <Navbar />
      <Main posts={post} onDelete={deletePost} />
    </div>
  );
}

export default App;
