import React, { FC, useState } from "react";
import { WishModel } from "../../models/WishModel";
import WishItem from "./WishItem";

const WishList: FC = (props) => {
  // const postMethods = {
  //   postDelete: () => {},
  //   postEdit: () => {},
  //   postDone: () => {},
  // };

  return (
    <div className="wish-list">
      <h1 className="title">My wishes</h1>
      {/* {posts.map((post) => (
        <WishItem key={post.key} post={post} />
      ))} */}
    </div>
  );
};
export default WishList;
