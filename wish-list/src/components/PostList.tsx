import React, { FC, useContext, useState } from "react";
import { PostsContext } from "../contexts/PostsContex";
import { PostModel } from "../models/PostModel";
import PostItem from "./PostItem";



const PostList: FC = () => {
  const { posts } = useContext(PostsContext);

  return (
    <div className="post-list">
      
      {posts.map((post) => (
        <PostItem key={post.key} post={post} />
      ))}
    </div>
  );
};
export default PostList;
