import React, { useState } from "react";
import MenuBar from "./components/MenuBar";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (content) => {
    const newPost = { id: Date.now(), content, likes: 0, comments: [] };
    setPosts([newPost, ...posts]);
  };
  

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      <MenuBar />
      <div className="content">
        <AddPost addPost={addPost} />
        <div className="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} deletePost={deletePost} />
          ))}
        </div>
      </div>
      <ChatWindow />
    </div>
  );
}

export default App;
