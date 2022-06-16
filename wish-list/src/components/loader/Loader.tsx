import React from 'react';
import {ThreeDots} from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <ThreeDots height="80" width="80" color="#c2c0a6" ariaLabel="loading" />
  );
};
export default Loader;
