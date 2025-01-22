import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/global.scss";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <PostForm />
        <PostList />
      </Container>
    </div>
  );
}

export default App;
