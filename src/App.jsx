import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const postFromServer = await fetchPost();
      setPost(postFromServer);
    };
    getPost();
  }, []);

  //fetch task
  const fetchPost = async () => {
    const res = await fetch("http://localhost:5000/post");
    const data = await res.json();
    return data;
  };

  //add post
  const addPost = async (newPost) => {
    const res = await fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    const data = await res.json();
    setPost([...post, data]);
  };

  //delete post
  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/post/${id}`, {
      method: "DELETE",
    });

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
