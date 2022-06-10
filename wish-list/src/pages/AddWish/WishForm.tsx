import React, { FC } from "react";
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
import { StoreService } from "../../services/StoreService";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { AddWishModel } from "../../models/AddWishModel";
import { FormattedMessage, useIntl } from "react-intl";
import {FormSchema} from "../../validation/FormValidation"


type Props = {
  model?: AddWishModel;
};
type RouteParams = {
  id?: string;
};

const WishForm: FC<Props> = (props) => {
  const { id } = useParams<RouteParams>();
  const navigator = useNavigate();
  const queryClient = useQueryClient();
  const intl = useIntl();
  
  let model = {} as WishModel;
  if (id) {
    model = StoreService.getWish(id) || model;
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<WishModel>({
    mode:"onBlur",
    resolver: yupResolver(FormSchema),
    defaultValues: model,
  });

  const addMutation = useMutation(
    (data: WishModel) => {
      if (!id) {
        StoreService.addWish(data);
      } else {
        data.id = id;
        StoreService.editWish(data);
      }
      return Promise.resolve();
    },
    {
      onSuccess: () => {
        navigator("/wish-list");
        queryClient.invalidateQueries("wishes");
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
      <h1 className="title">
        <FormattedMessage id="form_title" />
      </h1>
      <TextField
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        label={intl.formatMessage({ id: "wish_title" })}
        placeholder={intl.formatMessage({ id: "wish_title_placeholder" })}
        margin="dense"
        variant="outlined"
      ></TextField>

      <TextField
        {...register("description")}
        multiline
        error={!!errors.description}
        helperText={errors.description?.message}
        label={intl.formatMessage({ id: "wish_description" })}
        placeholder={intl.formatMessage({ id: "wish_description_placeholder" })}
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register("link")}
        error={!!errors.link}
        helperText={errors.link?.message}
        label={intl.formatMessage({ id: "wish_link" })}
        placeholder={intl.formatMessage({ id: "wish_link_placeholder" })}
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register("price")}
        // error={!!errors.price}
        // helperText={errors.price?.message}
        
        label={intl.formatMessage({ id: "wish_price" })}
        placeholder={intl.formatMessage({ id: "wish_price_placeholder" })}
        margin="dense"
        variant="outlined"
      />
     
      <FormControl fullWidth margin="dense">
        <InputLabel>
          <FormattedMessage id="wish_currency" />
        </InputLabel>
        <Controller
          render={({ field }) => (
            <Select
              className="input-form__select"
              label="currency"
              {...field}
              error={!!errors.link}
              // как вывести текст ошибки?  helperText={errors.link?.message} span
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

      <Button className="button-submit" type="submit" variant="contained" disabled={!isValid}>
        <FormattedMessage id="add_btn" />
      </Button>
    </FormControl>
  );
};
export default WishForm;
