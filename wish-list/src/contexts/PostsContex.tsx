import { createContext } from "react";
import { PostModel } from "../models/PostModel";

type PostsContextType = {
  posts: Array<PostModel>;
  setPosts: (posts: Array<PostModel>) => void;
};

export const PostsContext = createContext<PostsContextType>(
  {} as PostsContextType
);
