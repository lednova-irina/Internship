import React, { FC } from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { WishModel } from "../../models/WishModel";
import MyInput from "../../UI/MyInput";
import { Button, FormControl } from "@mui/material";
import { color } from "@mui/system";

const WishForm: FC = (props) => {
  // const [wishes, setWish] = useState();
  // const [inputText, setInputText] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WishModel>();

  const onSubmit: SubmitHandler<WishModel> = (data) => {
    console.log(errors);
  };
  // const addNewPost = () => {
  //   const newWish: WishModel = {
  //     id: Date.now().toString(),
  //     title: string;
  //     description: inputText,
  //     link: string;
  //     price: number;

  //     };
  //   setWish([...wishes, newWish]);
  //   setInputText("");
  // };

  // const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
  //   setInputText(e.target.value);

  // const onClick: React.ReactEventHandler = (e) => {
  //   e.preventDefault();
  //    addNewPost();
  // };

  return (
    <FormControl
      sx={{
        "& .MuiTextField-root": {
          background: "#F2F2EB",
          opacity: "0.8",
          borderRadius: "10px",
        },
      }}
      component="form"
      autoComplete="off"
      className="input-fields"
      onSubmit={handleSubmit(onSubmit)}
    >
      <MyInput
        {...register("title", { pattern: /^[а-яА-ЯёЁa-zA-Z0-9]+$/ })}
        // onChange={onChange}
        error={!!errors.title}
        label="Title"
        required
        type="text"
        placeholder="type wish title"
      />

      <MyInput
        {...register("description", { pattern: /^[а-яА-ЯёЁa-zA-Z0-9]+$/ })}
        // onChange={onChange}

        multiline
        error={!!errors.description}
        label="Description"
        required
        type="text"
        placeholder="type wish description"
      />

      <MyInput
        {...register("link", {
          pattern:
            /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        })}
        // onChange={onChange}
        label="Link"
        type="text"
        placeholder="add wish link"
      />

      <MyInput
        {...register("price", { pattern: /\-?\d+(\.\d{0,})?/ })}
        // onChange={onChange}
        label="Price"
        type="text"
        placeholder="add wish price"
      />

      <Button
        type="submit"
        variant="contained"
        // onClick={onClick}
      >
        Add
      </Button>
    </FormControl>
  );
};
export default WishForm;
