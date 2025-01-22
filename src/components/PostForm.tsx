import { useState, useCallback } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Button,
  Card,
  IconButton,
  styled,
  TextField,
} from "@mui/material";
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import SendIcon from "@mui/icons-material/Send";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { addPost } from "../reducer/postsSlice";

const PostForm = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.post);

  const [postContent, setPostContent] = useState<string>("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");

  const handlePostSubmission = useCallback(() => {
    if (!postContent.trim() && !imagePreviewUrl) return;
    dispatch(
      addPost({ image: imagePreviewUrl, description: postContent.trim() })
    );
    setPostContent("");
    setImagePreviewUrl("");
  }, [dispatch, postContent, imagePreviewUrl]);

  const HiddenFileInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setImagePreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <Card
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginBottom: 3,
      }}
    >
      {imagePreviewUrl && (
        <Box position="relative">
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(50%,-50%)",
              background: "white",
            }}
            onClick={() => setImagePreviewUrl("")}
          >
            <CloseRoundedIcon />
          </IconButton>
          <img src={imagePreviewUrl} alt="Uploaded" width="100%" />
        </Box>
      )}
      <Box display="flex" gap={2} alignItems="center">
        <Avatar src={currentUser.image} alt={currentUser.name} />
        <TextField
          size="medium"
          value={postContent}
          variant="outlined"
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Write your post..."
          fullWidth
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button
          component="label"
          size="small"
          variant="text"
          sx={{ minWidth: "auto", padding: 0 }}
        >
          <InsertPhotoIcon />
          <HiddenFileInput
            type="file"
            onChange={handleFileSelection}
            multiple={false}
          />
        </Button>
        <Button
          onClick={handlePostSubmission}
          variant="contained"
          sx={{ display: "flex", alignItems: "center", padding: 1 }}
          endIcon={<SendIcon />}
        >
          Post
        </Button>
      </Box>
    </Card>
  );
};

export default PostForm;
