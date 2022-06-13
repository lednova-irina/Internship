import { Button } from '@mui/material';
import React, { FC } from 'react';
// эта пока заготовка))
const FileInput: FC = () => (
  <div>
    <input
      style={{ display: 'none' }}
      accept="image/*"
      type="file"
      id="select-image"
    />
    <label htmlFor="select-image" />
    <Button variant="contained" fullWidth component="span">
      Upload Image
    </Button>
  </div>
);

export default FileInput;
