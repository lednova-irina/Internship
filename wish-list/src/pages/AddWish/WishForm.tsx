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
import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    title: yup
      .string()
      .required("Fill this field")
      .matches(/^(?=[a-z0-9])[a-z0-9\s]{0,99}[a-z0-9]$/i, {
        message: "Use valid characters",
      }),
    description: yup
      .string()
      .required("Fill this field")
      .matches(/^(?=[a-z0-9])[a-z0-9\s]{0,300}[a-z0-9]$/i, {
        message: "Use valid characters",
      }),
    link: yup.string().url("Use only url"),
    price: yup
      .number()
      .typeError("Use only numbers")
      .positive("Use only positive price")
      .nullable()
      .transform((value: string, originalValue: string) =>
        originalValue.trim() === "" ? null : value
      ),
    // .when("currency", {
    //   is: "",
    //   then: yup.number().required("Price is required"),
    // }),
    currency: yup.string().when("price", {
      is: (price: number) => !!price,
      then: yup.string().required("Fill this field"),
    }),
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
  const queryClient = useQueryClient();
  let model = {} as WishModel;
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
    (data: WishModel) => {
      data.id = id;
      StoreService.addOrEdit(data);

      return Promise.resolve();
    },
    {
      onSuccess: () => {
        navigator("/wish-list");
        queryClient.invalidateQueries();
      },
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );

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
      onSubmit={handleSubmit((model: WishModel) => addMutation.mutate(model))}
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
        {...register("description")}
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
        error={!!errors.link}
        helperText={errors.link?.message}
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
            <Select
              className="input-form__select"
              label="Currency"
              {...field}
              error={!!errors.link}
              // как вывести текст ошибки?  helperText={errors.link?.message}
            >
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

      <Button className="button-submit" type="submit" variant="contained">
        Add
      </Button>
    </FormControl>
  );
};
export default WishForm;
