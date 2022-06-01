import React, { FC } from "react";
import { useState } from "react";
import { PostModel } from "../models/PostModel";

type Props = {
  post: PostModel;
};

const PostItem: FC<Props> = (props) => {
  const {
    post: { description, postNumber, key },
  } = props;

  return (
    <div className="post-item">
      <div key ={key} className="post-item__description">{postNumber}. {description}</div>
      <button className="post-item__edit">Edit</button>
      <button className="post-item__done">Done</button>
      <button className="post-item__delete">Delete</button>
    </div>
  );
};

export default PostItem;
