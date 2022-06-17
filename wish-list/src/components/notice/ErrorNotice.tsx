import React from 'react';
import {Alert, Snackbar} from '@mui/material';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ErrorNotice = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{width: '100%'}} />
    </Snackbar>
  );
};
export default ErrorNotice;
