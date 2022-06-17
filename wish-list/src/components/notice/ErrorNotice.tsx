import React from 'react';
import {Alert, Snackbar} from '@mui/material';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ErrorService from '../../services/ErrorService';

const ErrorNotice = (props: {error: string}) => {
  const [open, setOpen] = React.useState(true);
  const {error} = props;
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    ErrorService.deleteError(error);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
        {error}
      </Alert>
    </Snackbar>
  );
};
export default ErrorNotice;
