import React, { FC } from "react";
import PostItem from "./PostItem"

 const PostList: FC = () => {
  return (
    <div className="post-list">
      <PostItem></PostItem>
    </div>
  );
};
export default PostList
