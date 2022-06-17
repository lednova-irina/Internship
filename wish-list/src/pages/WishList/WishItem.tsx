import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import React, {FC} from 'react';
import {FormattedMessage, FormattedNumber} from 'react-intl';
import {useMutation, useQueryClient} from 'react-query';
import {Link} from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import {WishModel} from '../../models/WishModel';
import APIService from '../../services/APIService';

type Props = {
  post: WishModel;
};

const WishItem: FC<Props> = (props) => {
  const {
    post: {id, title, link, price, description, currency, picture},
  } = props;

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    (idToDelete?: string) => {
      if (idToDelete) {
        APIService.deleteWish(idToDelete);
      }
      return Promise.resolve();
    },
    {
      onError: (err: {message: string}) => {
        alert(err.message);
      },
      onSuccess: () => {
        queryClient.invalidateQueries('wishes');
        console.log('done');
      },
    },
  );

  return (
    <Card className="wish-item">
      <CardHeader className="wish-item__title" title={title} />
      {picture && (
        <CardMedia
          component="img"
          // height="150px"
          className="preview_img"
          image={picture}
          alt="preview"
        />
      )}
      <CardContent className="wish-item__description">
        <Typography>{description}</Typography>
        <Typography>
          {link && (
            <a href={link} className="wish-item__link">
              {' '}
              <FormattedMessage id="wish_item_link" />
            </a>
          )}
        </Typography>
        {price && (
          <Typography>
            <FormattedNumber
              value={price}
              // eslint-disable-next-line react/style-prop-object
              style="currency"
              currency={currency}
            />
          </Typography>
        )}
      </CardContent>
      <CardActions className="wish-item__btns">
        <Button variant="outlined" size="small" className="wish-item__btn">
          <Link className="wish-item__edit" to={`/edit-wish/${id}`}>
            {' '}
            <FormattedMessage id="wish_item_edit_btn" />
          </Link>
        </Button>
        <Button variant="outlined" size="small" className="wish-item__btn">
          {' '}
          <FormattedMessage id="wish_item_done_btn" />
        </Button>
        {deleteMutation.isLoading ? (
          <Loader />
        ) : (
          <Button
            variant="outlined"
            size="small"
            onClick={() => deleteMutation.mutate(id)}
            className="wish-item__btn"
          >
            <FormattedMessage id="wish_item_delete_btn" />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default WishItem;
