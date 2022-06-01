import React, { FC, useState } from "react";
import { WishModel } from "../../models/WishModel";
import WishItem from "./WishItem";

type Props = {
  post: WishModel;
};

const WishList: FC = (props) => {

  const postMethods = {
    postDelete: () => {},
    postEdit: () => {},
    postDone: () => {},
  };

  return (
    <div className="post-list">
      {/* {posts.map((post) => (
        <PostItem key={post.key} post={post} />
      ))} */}
    </div>
  );
};
export default WishList;
