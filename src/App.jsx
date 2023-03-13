import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const storedPost = JSON.parse(localStorage.getItem("post"));
    if (storedPost) {
      setPost(storedPost);
    } else {
      fetchPost();
    }
  }, []);

  const fetchPost = async () => {
    const res = await fetch("http://localhost:5000/post");
    const data = await res.json();
    setPost(data);
    localStorage.setItem("post", JSON.stringify(data));
  };

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
    localStorage.setItem("post", JSON.stringify([...post, data]));
  };

  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/post/${id}`, {
      method: "DELETE",
    });
    setPost(post.filter((post) => post.id !== id));
    localStorage.setItem(
      "post",
      JSON.stringify(post.filter((post) => post.id !== id))
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Main posts={post} onDelete={deletePost} onAdd={addPost} />
    </div>
  );
}

export default App;
