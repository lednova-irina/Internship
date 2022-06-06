import React, { FC } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { WishModel } from "../../models/WishModel";
import { StoreService } from "../../services/StoreService";

type Props = {
  post: WishModel;
};

const WishItem: FC<Props> = (props) => {
  const {
    post: { id, title, link, price, description, currency },
  } = props;

  const navigator = useNavigate();
  const editWish = (e: React.BaseSyntheticEvent | undefined) => {
    e && e.preventDefault();
    navigator(`/add-wish/${id}`);
  };

  const deleteMutation = useMutation(
    StoreService.storeKey,
    (id: string) => {
      StoreService.deleteWish(id);
      return Promise.resolve();
    },
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  const deleteWish = (e: React.BaseSyntheticEvent | undefined) => {
    e && e.preventDefault();
    deleteMutation.mutate(id);
  };
  // const editWish: React.ReactEventHandler = () => {
  //   StoreService.editWish(props.post);
  // };
  // const deleteWish: React.ReactEventHandler = () => {
  //   StoreService.deleteWish(id);
  // };

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

      <button onClick={editWish} className="post-item__edit">
        Edit
      </button>
      <button className="post-item__done">Done</button>
      <button onClick={deleteWish} className="post-item__delete">
        Delete
      </button>
    </div>
  );
};

export default WishItem;
