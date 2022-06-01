import React, { FC, useContext } from "react";
import { useState } from "react";
import { PostsContext } from "../contexts/PostsContex";
import { PostModel } from "../models/PostModel";

const PostForm: FC = () => {
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
      {/*onFormSubmit console log data*/}


  return (     
     {/*react hook form with validation*/}

    <form className="input-form">
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="type a wish"
      />
      {/*name* text/}
      {/*url* text/}
      {/*price* number with precition/}
      {/*description textarea*/}
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
  );
};
export default PostForm;
