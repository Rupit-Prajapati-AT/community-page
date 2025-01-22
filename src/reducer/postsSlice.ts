import { createSlice } from "@reduxjs/toolkit";
import { user, userPost } from "../mock/mockData";
import { CommentDataTypes, InitialStateTypes } from "./postsTypes";
import moment from "moment";
import { findCommentById, likeCommentById } from "../utils/helper";

const initialState: InitialStateTypes = {
  posts: userPost,
  currentUser: user,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (
      state,
      { payload }: { payload: { image: string; description: string } }
    ) => {
      state.posts.unshift({
        id: Date.now(),
        date: moment().toISOString(),
        ...payload,
        user: state.currentUser,
        comments: [],
        isLiked: false,
      });
    },
    likePost: (state, { payload }: { payload: number }) => {
      const post = state.posts.find((post) => post.id === payload);
      if (post) post.isLiked = !post.isLiked;
    },
    likeComment: (state, { payload }) => {
      const post = state.posts.find((post) => post.id === payload.postId);
      if (post) {
        const comment = likeCommentById(post, payload.commentId);
        if (comment) {
          comment.isLiked = !comment.isLiked;
        }
      }
    },
    addComment: (
      state,
      {
        payload,
      }: {
        payload: {
          postId: number;
          replyingToUser: CommentDataTypes | null;
          comment: string;
        };
      }
    ) => {
      const { postId, replyingToUser, comment } = payload;
      const newComment: CommentDataTypes = {
        id: Date.now(),
        user: state.currentUser,
        content: comment,
        isLiked: false,
        date: moment().toISOString(),
        replies: [],
      };
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        if (replyingToUser) {
          const parentComment = findCommentById(
            post.comments,
            replyingToUser.id
          );
          parentComment?.replies.push(newComment);
        } else {
          post.comments.push(newComment);
        }
      }
    },
  },
});

export const { addPost, likePost, addComment, likeComment } =
  postsSlice.actions;
export default postsSlice.reducer;
