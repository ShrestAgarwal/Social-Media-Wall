import React, { useState } from "react";
import { FaHeart, FaTrash } from "react-icons/fa"; // Import icons

function Post({ post, deletePost }) {
  const [liked, setLiked] = useState(false); // Track if user liked

  const handleLike = () => {
    setLiked(!liked); // Toggle like state
  };

  const [comments, setComments] = useState(post.comments);
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="post">
      <div className="post-content">
        <p>{post.content}</p>
        <div className="delete-icons">
          <button onClick={() => deletePost(post.id)}>Delete</button>
          <FaTrash onClick={() => deletePost(post.id)} />
        </div>
      </div>
      <div className="post-actions">
        <button onClick={handleLike}>
          <FaHeart className={liked ? "liked" : ""} />
          {liked ? "Unlike" : "Like"} ({post.likes + (liked ? 1 : 0)})
        </button>
        <form onSubmit={handleComment}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button type="submit">Comment</button>
        </form>
        <div className="comments">
          {comments.map((cmt, index) => (
            <p key={index}>{cmt}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
