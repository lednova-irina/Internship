/* eslint-disable no-nested-ternary */
import {useSnackbar} from 'notistack';
import React, {FC} from 'react';
import {FormattedMessage} from 'react-intl';
import {useQuery} from 'react-query';
import Loader from '../../components/loader/Loader';
import APIService from '../../services/APIService';
import WishItem from './WishItem';

const WishList: FC = () => {
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const {isLoading, data, error, isError, isSuccess} = useQuery('wishes', () =>
    APIService.getAllWishes(),
  );
  if (isError) {
    const key = enqueueSnackbar(`Something went wrong: ${error}`, {
      variant: 'error',
      persist: true,
      preventDuplicate: true,
    });
    setTimeout(() => closeSnackbar(key), 6000);
  }

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
