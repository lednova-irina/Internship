import { FC, useContext, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { PostsContext } from "./contexts/PostsContex";
import { PostModel } from "./models/PostModel";

const App: FC = () => {
  const [posts, setPosts] = useState(new Array<PostModel>());
  const state = { posts, setPosts };

  return (
    <PostsContext.Provider
      value={{ posts: state.posts, setPosts: state.setPosts }}
    >
      <div className="wish-list">
        <div className="title">Wish list</div>
        <PostForm />
        <PostList />
      </div>
    </PostsContext.Provider>
  );
};

export default App;
