//counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "First Post", body: "This is the first post" },
  { id: 2, title: "Second Post", body: "This is the second post" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { title, body } = action.payload;
      const id = state.length + 1;
      state.push({ id, title, body });
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      const res = state.filter((post) => post.id !== postId);
      console.log("res", res);
      return res;
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
