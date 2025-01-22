import { Box } from "@mui/material";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const PostList = () => {
  const { posts } = useSelector((state: RootState) => state.post);
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      {posts.map((item, i) => {
        return <PostCard post={item} key={i} />;
      })}
    </Box>
  );
};

export default PostList;
