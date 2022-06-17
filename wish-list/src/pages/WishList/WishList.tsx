/* eslint-disable no-nested-ternary */
import React, {FC} from 'react';
import {FormattedMessage} from 'react-intl';
import {useQuery} from 'react-query';
import Loader from '../../components/loader/Loader';
import APIService from '../../services/APIService';
import WishItem from './WishItem';

const WishList: FC = () => {
  const {isLoading, data, isSuccess} = useQuery('wishes', () =>
    APIService.getAllWishes(),
  );

  return (
    <div className="wish-list">
      <h1 className="title">
        <FormattedMessage id="wish_list_title" />
      </h1>

      {isLoading && <Loader />}

      {isSuccess && (
        <div className="wish-list__items">
          {data && data.map((wish) => <WishItem key={wish.id} post={wish} />)}
        </div>
      )}
    </div>
  );
};
export default WishList;
