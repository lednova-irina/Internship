import React, { FC } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { WishModel } from "../../models/WishModel";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StoreService } from "../../services/StoreService";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

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
type Props = {
  model?: WishModel;
};
type RouteParams = {
  id: string;
};

const WishForm: FC<Props> = (props) => {
  const { id } = useParams<RouteParams>();
  const navigator = useNavigate();
  let model = { title: "" } as WishModel;
  if (id) {
    model = StoreService.getWish(id) || model;
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WishModel>({
    resolver: yupResolver(schema),
    defaultValues: model,
  });

  const addMutation = useMutation(
    StoreService.storeKey,
    (data: WishModel) => {
      if (id) {
        data.id = id;
        StoreService.editWish(data);
      } else {
        StoreService.addWish(data);
      }
      return Promise.resolve();
    },
    {
      onSuccess: () => {
        navigator("/wish-list");
      },
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  const createWish = (
    model: WishModel,
    e: React.BaseSyntheticEvent | undefined
  ) => {
    e && e.preventDefault();
    addMutation.mutate(model);
  };

  // const onSubmit: SubmitHandler<WishModel> = (data) => {
  //   StoreService.addWish(data);
  //   reset();
  // };
  // const handleChangeCurrency = (event: SelectChangeEvent) => {
  //   setCurrency(event.target.value);
  // };

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
      onSubmit={handleSubmit(createWish)}
    >
      <h1 className="title">Wish list</h1>
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
      <FormControl fullWidth margin="dense">
        <InputLabel>Currency</InputLabel>
        <Controller
          render={({ field }) => (
            <Select label="Currency" {...field}>
              <MenuItem value={"USD"}>$</MenuItem>
              <MenuItem value={"EUR"}>€</MenuItem>
              <MenuItem value={"UAH"}>₴</MenuItem>
            </Select>
          )}
          control={control}
          name="currency"
          defaultValue={""}
        />
      </FormControl>
      {/* <FormControl fullWidth margin="dense">
        <InputLabel>Currency</InputLabel>
        <Select
          value={currency}
          label="Currency"
          onChange={handleChangeCurrency}
        >
          <MenuItem value={"USD"}>$</MenuItem>
          <MenuItem value={"EUR"}>€</MenuItem>
          <MenuItem value={"UAH"}>₴</MenuItem>
        </Select>
      </FormControl> */}

      <Button className="button-submit" type="submit" variant="contained">
        Add
      </Button>
    </FormControl>
  );
};
export default WishForm;
