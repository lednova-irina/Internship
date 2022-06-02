import React, { FC } from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { WishModel } from "../../models/WishModel";
import { Button, FormControl, MenuItem } from "@mui/material";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { WishService } from "../../services/WishService";

const schema = yup
  .object()
  .shape({
    title: yup.string().required("Fill this field"),
    //  .matches(/^[а-яА-ЯёЁa-zA-Z0-9]+$/, { message: "Use valid characters" }),
    description: yup.string().required("Fill this field"),
    link: yup.string().url(),
    price: yup.number().positive("Use only positive price"),
    currency: yup.string(),
  })
  .required();

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "UAH",
    label: "₴",
  },
];

const WishForm: FC = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WishModel>({
    resolver: yupResolver(schema),
  });
  const [currency, setCurrency] = useState("");

  const onSubmit: SubmitHandler<WishModel> = (data) => {
    WishService.addWish(data);
    console.log(data);
  };
  const handleChangeCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <FormControl
      sx={{
        "& .MuiTextField-root": {
          background: "#F2F2EB",
          opacity: "0.8",
          borderRadius: "5px",
        },
      }}
      component="form"
      autoComplete="off"
      className="input-fields"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        label="Title*"
        placeholder="type wish title"
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register("description", { pattern: /^[а-яА-ЯёЁa-zA-Z0-9]+$/ })}
        multiline
        error={!!errors.description}
        helperText={errors.description?.message}
        label="Description*"
        placeholder="type wish description"
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register("link")}
        label="Link"
        placeholder="add wish link"
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register("price")}
        error={!!errors.price}
        helperText={errors.price?.message}
        label="Price"
        placeholder="add wish price"
        margin="dense"
        variant="outlined"
      />
      <TextField
        type="file"
        {...register("currency")}
        select
        label="Currency"
        value={currency}
        onChange={handleChangeCurrency}
        margin="dense"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button className="button-submit" type="submit" variant="contained">
        Add
      </Button>
    </FormControl>
  );
};
export default WishForm;

// const [wishes, setWish] = useState();
// const [inputText, setInputText] = useState("");
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
