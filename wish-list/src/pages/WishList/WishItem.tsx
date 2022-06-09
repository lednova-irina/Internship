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
    <div className="post-item">
      <ul>
        <li className="post-item__title">{title}</li>
        <li className="post-item__description">{description}</li>
        <li>{link}</li>
        {price && (
          <li>
            <FormattedNumber
              value={price}
              style={`currency`}
              currency={currency}
            ></FormattedNumber>
          </li>
        )}
      </ul>
      <Link className="post-item__edit" to={`/edit-wish/${id}`}>
        {" "}
        <FormattedMessage id="wish_item_edit_btn" />
      </Link>
      <button className="post-item__done"><FormattedMessage id="wish_item_done_btn" /></button>
      <button
        onClick={() => deleteMutation.mutate(id)}
        className="post-item__delete"
      >
       <FormattedMessage id="wish_item_delete_btn" />
      </button>
    </div>
  );
};

export default WishItem;
