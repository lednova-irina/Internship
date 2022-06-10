import React, { FC, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useQuery } from "react-query";
import { StoreService } from "../../services/StoreService";
import WishItem from "./WishItem";

const WishList: FC = () => {
  const { isLoading, data, error } = useQuery(
    "wishes",
    () => StoreService.getStore(),
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );

  return (
    <div className="wish-list">
      <h1 className="title">
        <FormattedMessage id="wish_list_title" />
      </h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="wish-list__item">
          {data && data.map((wish) => <WishItem key={wish.id} post={wish} />)}
        </div>
      )}
    </div>
  );
};
export default WishList;
