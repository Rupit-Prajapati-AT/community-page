import { CommentDataTypes, PostTypes } from "../reducer/postsTypes";

export function findCommentById(
  comments: CommentDataTypes[],
  id: number
): CommentDataTypes | null {
  for (const comment of comments) {
    if (comment.id === id) return comment;
    if (comment.replies) {
      const found = findCommentById(comment.replies, id);
      if (found) return found;
    }
  }
  return null;
}

function likeCommentByIdInReplies(
  replies: CommentDataTypes[],
  commentId: number
): CommentDataTypes | null {
  for (const reply of replies) {
    if (reply.id === commentId) {
      return reply;
    }
    if (reply.replies.length > 0) {
      const foundReply = likeCommentByIdInReplies(reply.replies, commentId);
      if (foundReply) return foundReply;
    }
  }
  return null;
}

export function likeCommentById(
  post: PostTypes,
  commentId: number
): CommentDataTypes | null {
  for (const comment of post.comments) {
    if (comment.id === commentId) {
      return comment;
    }
    if (comment.replies.length > 0) {
      const foundReply = likeCommentByIdInReplies(comment.replies, commentId);
      if (foundReply) return foundReply;
    }
  }
  return null;
}
