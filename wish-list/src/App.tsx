import React, { FC } from "react";
import InputForm from "./components/InputForm";
import PostList from "./components/PostList";
import { useState } from "react";


const App: FC = () => {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState("");

  return (
    <div>
      <div className="Title">Wish list</div>
      <InputForm />
      <PostList />
    </div>
  );
};

export default App;
