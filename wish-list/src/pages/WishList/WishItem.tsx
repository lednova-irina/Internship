import React, { FC } from "react";
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
        <li>
          {price} {currency}
        </li>
      </ul>
      <Link className="post-item__edit" to={`/edit-wish/${id}`}>
        {" "}
        Edit
      </Link>
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
