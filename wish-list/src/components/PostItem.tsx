import React from "react";
import { useState } from "react";

// type Props = {
//   description: string
// };

const PostItem = () => {
 
  return (
    <div className="post-item">
      <div className="post-item__description"></div>
      <button className="post-item__edit">Edit</button>
      <button className="post-item__done">Done</button>
      <button className="post-item__delete">Delete</button>
    </div>
  );
};

export default PostItem;
