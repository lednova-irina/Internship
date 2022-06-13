import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { WishModel } from "../../models/WishModel";
import { StoreService } from "../../services/StoreService";

type Props = {
  post: WishModel;
};

const WishItem: FC<Props> = (props) => {
  const {
    post: { id, title, link, price, description, currency },
  } = props;

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    (id?: string) => {
      if (id) {
        StoreService.deleteWish(id);
      }
      return Promise.resolve();
    },
    {
      onError: (error: any) => {
        alert(error.message);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("wishes");
      },
    }
  );

  return (
    <Card className="wish-item">
      <CardHeader className="wish-item__title" title={title} />
      <CardContent className="wish-item__description">
        <Typography>{description}</Typography>
        <Typography >
          {link && (
            <a href={link} className="wish-item__link" >
              {" "}
              <FormattedMessage id="wish_item_link" />
            </a>
          )}
        </Typography>
        {price && (
          <Typography>
            <FormattedNumber
              value={price}
              style={`currency`}
              currency={currency}
            ></FormattedNumber>
          </Typography>
        )}
      </CardContent>
      <CardActions className="wish-item__btns">
        <Button variant="outlined" size="small" className="wish-item__btn">
          <Link className="wish-item__edit" to={`/edit-wish/${id}`}>
            {" "}
            <FormattedMessage id="wish_item_edit_btn" />
          </Link>
        </Button>
        <Button variant="outlined" size="small" className="wish-item__btn">
          {" "}
          <FormattedMessage id="wish_item_done_btn" />
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => deleteMutation.mutate(id)}
          className="wish-item__btn"
        >
          <FormattedMessage id="wish_item_delete_btn" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default WishItem;
