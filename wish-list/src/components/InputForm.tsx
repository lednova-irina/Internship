import { FC } from "react";
import { useState } from "react";

const InputForm: FC = () => {
  const [inputText, setInputText] = useState("");
  // const [item, setItem] = useState("");
  // const [description, setDescription] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="wish"
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(inputText);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};
export default InputForm;
