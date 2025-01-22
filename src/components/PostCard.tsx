import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Card from "@mui/material/Card";
import SendIcon from "@mui/icons-material/Send";
import {
  CardMedia,
  CardContent,
  Collapse,
  IconButton,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRef, useState } from "react";
import Avatar from "./Avatar";
import moment from "moment";
import CommentThread from "./CommentThread";
import { addComment, likeComment, likePost } from "../reducer/postsSlice";
import { useAppDispatch } from "../store";
import { CommentDataTypes, PostTypes } from "../reducer/postsTypes";
import { likeCommentById } from "../utils/helper";

const PostCard = ({ post }: { post: PostTypes }) => {
  const dispatch = useAppDispatch();
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");
  const [replyingToUser, setReplyingToUser] = useState<CommentDataTypes | null>(
    null
  );
  const textFieldRef = useRef<HTMLInputElement | null>(null);
  const handleReplyClick = (user: CommentDataTypes) => {
    setReplyingToUser(user);
    if (textFieldRef.current) {
      textFieldRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setTimeout(() => {
        textFieldRef.current?.focus();
      }, 300);
    }
  };
  const handleCommentLike = (commentId: number) => {
    dispatch(likeComment({ postId: post.id, commentId: commentId }));
  };

  const handleLikeClick = () => {
    dispatch(likePost(post.id));
  };

  const handleCommentSubmit = () => {
    if (!newCommentText) return;
    dispatch(
      addComment({
        postId: post.id,
        replyingToUser: replyingToUser,
        comment: newCommentText.trim(),
      })
    );
    setNewCommentText("");
    setReplyingToUser(null);
  };

  return (
    <Card>
      <Box
        display={"flex"}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={2}
      >
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Avatar src={post.user.image} alt={post.user.name} />
          <Box>
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              {post.user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {moment(post.date).format("DD MMMM")}
            </Typography>
          </Box>
        </Box>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>
      {post.image && (
        <CardMedia component="img" image={post.image} alt="Post image" />
      )}
      {post.description && (
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {post.description}
          </Typography>
        </CardContent>
      )}
      <Box
        style={{ borderTop: "1px solid lightgray" }}
        justifyContent={"space-between"}
        display={"flex"}
        alignItems={"center"}
        paddingX={2}
        paddingY={1}
      >
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "none",
            }}
            onClick={handleLikeClick}
          >
            <ThumbUpOutlinedIcon color={post.isLiked ? "info" : "action"} />
            <Typography
              variant="body2"
              sx={{ color: `${post.isLiked ? "text.info" : "text.secondary"}` }}
            >
              Like
            </Typography>
          </Button>
          <IconButton
            onClick={() => setIsCommentsVisible(!isCommentsVisible)}
            style={{ display: "flex", gap: 10, borderRadius: 5 }}
          >
            <ChatBubbleOutlineRoundedIcon />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Comments
            </Typography>
          </IconButton>
        </Box>
        <IconButton
          onClick={() => setIsCommentsVisible(!isCommentsVisible)}
          style={{ display: "flex", gap: 10, borderRadius: 5 }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {`${post.comments.length} Comments`}
          </Typography>
        </IconButton>
      </Box>
      <Collapse in={isCommentsVisible} timeout="auto" unmountOnExit>
        <Box
          padding={2}
          borderTop={"1px solid lightgrey"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          {post.comments.map((comment, index) => (
            <CommentThread
              comment={comment}
              key={index}
              onCommentLikeClick={handleCommentLike}
              onReplyClick={handleReplyClick}
            />
          ))}
          <Box position={"relative"}>
            {replyingToUser && (
              <Typography
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                Replying to {replyingToUser.user.name}
                <IconButton
                  sx={{}}
                  onClick={() => {
                    setReplyingToUser(null);
                  }}
                >
                  <CloseRoundedIcon />
                </IconButton>
              </Typography>
            )}
            <TextField
              placeholder="What are your thoughts?"
              fullWidth
              multiline
              value={newCommentText}
              inputRef={textFieldRef}
              InputProps={{
                sx: {
                  paddingRight: 8,
                },
              }}
              onChange={(e) => {
                setNewCommentText(e.target.value);
              }}
            />
            <Button
              sx={{
                position: "absolute",
                bottom: 11,
                right: 10,
                zIndex: 1,
                minWidth: "auto",
                padding: "5px 10px",
              }}
              variant="contained"
              onClick={handleCommentSubmit}
            >
              <SendIcon />
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
};

export default PostCard;
