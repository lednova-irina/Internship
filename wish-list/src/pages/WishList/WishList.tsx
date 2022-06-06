import React, { FC, useState } from "react";
import { useStorage } from "../../hooks/useStorage";
import WishItem from "./WishItem";

const WishList: FC = () => {
 const{isLoading, posts}= useStorage()

  return (
    <div className="wish-list">
      <h1 className="title">My wishes</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="wish-list">
          {posts && posts.map((post) => <WishItem key={post.id} post={post} />)}
        </div>
      )}
    </div>
  );
};
export default WishList;
