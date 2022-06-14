import React, {FC} from 'react';
import {FormattedMessage} from 'react-intl';
import {useQuery} from 'react-query';
import Loader from '../../loader/Loader';
import StoreService from '../../services/StoreService';
import WishItem from './WishItem';

const WishList: FC = () => {
  const {isLoading, data} = useQuery('wishes', () => StoreService.getStore(), {
    onError: (error: {message: string}) => {
      alert(error.message);
    },
  });

  return (
    <div className="wish-list">
      <h1 className="title">
        <FormattedMessage id="wish_list_title" />
      </h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="wish-list__items">
          {data && data.map((wish) => <WishItem key={wish.id} post={wish} />)}
        </div>
      )}
    </div>
  );
};
export default WishList;
