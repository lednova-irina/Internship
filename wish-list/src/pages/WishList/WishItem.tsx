import React, { FC } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { WishModel } from "../../models/WishModel";
import { StoreService } from "../../services/StoreService";

type Props = {
  post: WishModel;
};

const WishItem: FC<Props> = (props) => {
  const {
    post: { id, title, link, price, description, currency },
  } = props;

  const deleteMutation = useMutation(
    (id: string | undefined) => {
      if (id) {
        StoreService.deleteWish(id);
      }
      return Promise.resolve();
    },
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );

  return (
    <div className="post-item">
      <ul>
        <li className="post-item__title">{title}</li>
        <li className="post-item__description">{description}</li>
        <li>{link}</li>
        <li>
          {price} {currency}
        </li>
      </ul>
      <button className="post-item__edit">
        <Link to={`/edit-wish/${id}`}> Edit</Link>
      </button>
      <button className="post-item__done">Done</button>
      <button
        onClick={() => deleteMutation.mutate(id)}
        className="post-item__delete"
      >
        Delete
      </button>
    </div>
  );
};

export default WishItem;
