import { Box, Button, styled, Typography } from "@mui/material";
import Avatar from "./Avatar";
import moment from "moment";
import { CommentDataTypes } from "../reducer/postsTypes";

const StyledButton = styled(Button)({
  padding: 0,
  minWidth: "auto",
  textTransform: "none",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const CommentThread = ({
  comment,
  onCommentLikeClick,
  onReplyClick,
}: {
  comment: CommentDataTypes;
  onCommentLikeClick: (commentId: number) => void;
  onReplyClick: (comment: CommentDataTypes) => void;
}) => {
  const formatTimeAgo = (date: string): string => {
    const now = moment();
    const postTime = moment(date);
    const duration = moment.duration(now.diff(postTime));

    if (duration.days() >= 1) {
      return `${duration.days()} day${duration.days() > 1 ? "s" : ""} ago`;
    }
    if (duration.hours() >= 1) {
      return `${duration.hours()} hour${duration.hours() > 1 ? "s" : ""} ago`;
    }
    if (duration.minutes() >= 1) {
      return `${duration.minutes()} minute${
        duration.minutes() > 1 ? "s" : ""
      } ago`;
    }
    return "Just now";
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Box display={"flex"} gap={2}>
        <Avatar src={comment.user.image} alt={comment.user.name} />
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            columnGap={1}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              {comment.user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {formatTimeAgo(comment.date)}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {comment.content}
          </Typography>
          <Box display={"flex"} gap={2}>
            <StyledButton
              color={comment.isLiked ? "primary" : "inherit"}
              onClick={() => onCommentLikeClick(comment.id)}
            >
              Like
            </StyledButton>
            <StyledButton
              color="inherit"
              onClick={() => {
                onReplyClick(comment);
              }}
            >
              Reply
            </StyledButton>
          </Box>
        </Box>
      </Box>
      {comment.replies?.map((replyComment, index) => (
        <Box paddingLeft={8} key={index}>
          <CommentThread
            onCommentLikeClick={onCommentLikeClick}
            comment={replyComment}
            onReplyClick={onReplyClick}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CommentThread;
