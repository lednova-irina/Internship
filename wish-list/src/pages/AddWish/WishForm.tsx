import React, {FC, useEffect, useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {useNavigate, useParams} from 'react-router-dom';
import {FormattedMessage, useIntl} from 'react-intl';
import {WishModel} from '../../models/WishModel';
import FormSchema from '../../validation/FormValidation';
import ImageInput from '../../components/ImageInput/ImageInput';
import APIService from '../../services/APIService';
import Loader from '../../components/loader/Loader';

type RouteParams = {
  id?: string;
};

const WishForm: FC = () => {
  const {id} = useParams<RouteParams>();
  const navigator = useNavigate();
  const queryClient = useQueryClient();
  const intl = useIntl();

  const {isLoading, data} = useQuery<WishModel | null, {message: string}>(
    ['wish', id],
    () => APIService.getWish(id!),
    {
      enabled: !!id,
    },
  );

  const {
    register,
    handleSubmit,
    control,
    trigger,
    reset,
    setValue,
    formState: {errors, isValid},
  } = useForm<WishModel>({
    mode: 'all',
    resolver: useMemo(() => yupResolver(FormSchema), []),
  });
  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data]);

  const addMutation = useMutation(
    async (wish: WishModel) => {
      const mutation = {...wish};
      if (!id) {
        await APIService.addWish(mutation);
      } else {
        mutation.id = id;
        await APIService.editWish(mutation);
      }
    },
    {
      onSuccess: () => {
        navigator('/wish-list');
        queryClient.invalidateQueries('wishes');
      },
    },
  );
  if (isLoading) return <Loader />;

  return (
    <FormControl
      sx={{
        '& .MuiTextField-root': {
          background: '#F2F2EB',
          opacity: '0.8',
          borderRadius: '5px',
        },
      }}
      component="form"
      autoComplete="off"
      className="input-fields"
      onSubmit={handleSubmit((mutation: WishModel) => {
        addMutation.mutate(mutation);
      })}
    >
      <h1 className="title">
        <FormattedMessage id="form_title" />
      </h1>
      <TextField
        {...register('title')}
        error={!!errors.title}
        helperText={
          errors.title && intl.formatMessage({id: errors.title.message})
        }
        label={intl.formatMessage({id: 'wish_title'})}
        placeholder={intl.formatMessage({id: 'wish_title_placeholder'})}
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register('description')}
        multiline
        error={!!errors.description}
        helperText={
          errors.description &&
          intl.formatMessage({id: errors.description.message})
        }
        label={intl.formatMessage({id: 'wish_description'})}
        placeholder={intl.formatMessage({id: 'wish_description_placeholder'})}
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register('link')}
        error={!!errors.link}
        helperText={
          errors.link && intl.formatMessage({id: errors.link.message})
        }
        label={intl.formatMessage({id: 'wish_link'})}
        placeholder={intl.formatMessage({id: 'wish_link_placeholder'})}
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register('price')}
        error={!!errors.price}
        helperText={
          errors.price && intl.formatMessage({id: errors.price.message})
        }
        label={intl.formatMessage({id: 'wish_price'})}
        placeholder={intl.formatMessage({id: 'wish_price_placeholder'})}
        margin="dense"
        variant="outlined"
      />

      <FormControl fullWidth margin="dense" error={!!errors.currency}>
        <InputLabel>
          <FormattedMessage id="wish_currency" />
        </InputLabel>
        <Controller
          render={({field}) => (
            <Select
              className="input-form__select"
              label="currency"
              {...field}
              error={!!errors.currency}
              onChange={async (e) => {
                field.onChange(e);
                await trigger('price');
              }}
            >
              <MenuItem value="USD">$</MenuItem>
              <MenuItem value="EUR">€</MenuItem>
              <MenuItem value="UAH">₴</MenuItem>
            </Select>
          )}
          control={control}
          name="currency"
          defaultValue=""
        />
        {errors.currency && (
          <FormHelperText>
            {errors.currency &&
              intl.formatMessage({id: errors.currency.message})}
          </FormHelperText>
        )}
      </FormControl>

      <ImageInput control={control} name="picture" setValue={setValue} />

      <Button
        className="button-submit"
        type="submit"
        variant="contained"
        disabled={!isValid}
      >
        <FormattedMessage id="add_btn" />
      </Button>
    </FormControl>
  );
};
export default WishForm;
