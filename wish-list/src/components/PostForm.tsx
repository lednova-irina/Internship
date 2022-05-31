import React, { FC, useContext } from "react";
import { useState } from "react";
import { PostsContext } from "../contexts/PostsContex";
import { PostModel } from "../models/PostModel";

type Props = {
  // addNewPost: (text: string) => void;
};

const PostForm: FC<Props> = (props) => {
  const { posts, setPosts } = useContext(PostsContext);
  const [inputText, setInputText] = useState("");

  const addNewPost = () => {
    const newPost: PostModel = {
      postNumber: posts.length + 1,
      description: inputText,
      key: Date.now(),
    };
    setPosts([...posts, newPost]);
    setInputText("");
  };

  return (
    // <PostsContext.Consumer>
    //   {({ setPost }) => (
    <form className="input-form">
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="type a wish"
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addNewPost();
        }}
      >
        Add
      </button>
    </form>
    //   )}
    // </PostsContext.Consumer>
  );
};
export default PostForm;
