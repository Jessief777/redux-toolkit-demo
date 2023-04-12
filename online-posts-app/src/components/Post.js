import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../store/postsSlice";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(post.id)); //=> action.payload
  };
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button className="delete-button" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default Post;
