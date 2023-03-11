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

  //add post
  const addPost = (newPost) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newPosts = { id, ...newPost };
    setPost([...post, newPosts]);
  };

  //delete post
  const deletePost = (id) => {
    setPost(post.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <Navbar />
      <Main posts={post} onDelete={deletePost} onAdd={addPost} />
    </div>
  );
}

export default App;
