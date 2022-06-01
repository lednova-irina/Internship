import React, { FC } from "react";
import { WishModel } from "../../models/WishModel";

type Props = {
  post: WishModel;
};

const WishItem: FC<Props> = (props) => {
  const {
    post: { id, title, link, price, description },
  } = props;

  return (
    <div id={id} className="post-item">
      <ul>
        <li className="post-item__title">{title}</li>
        <li className="post-item__description">{description}</li>
        <li>{link}</li>
        <li>{price}</li>
      </ul>

      <button className="post-item__edit">Edit</button>
      <button className="post-item__done">Done</button>
      <button className="post-item__delete">Delete</button>
    </div>
  );
};

export default WishItem;
