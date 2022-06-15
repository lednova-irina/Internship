/* eslint-disable jsx-a11y/label-has-associated-control */
import {Button} from '@mui/material';
import React, {FC} from 'react';
import {Control, Controller, UseFormSetValue} from 'react-hook-form';
import FileService from '../../services/FileService';
import './ImageInput.scss';

type Props = {
  control: Control<any, any>;
  name: string;
  setValue: UseFormSetValue<any>;
};
const ImageInput: FC<Props> = (props) => {
  const {control, name, setValue} = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value}}) => (
        <div>
          <input
            style={{display: 'none'}}
            accept="image/*"
            type="file"
            id="select-image"
            onChange={(e) =>
              e.target.files &&
              FileService.fileToBase64(e.target.files[0]).then(
                (base64: string) => setValue(name, base64),
              )
            }
          />

          <label htmlFor="select-image" className="upload_img_btn">
            <Button variant="contained" fullWidth component="span">
              Upload Image
            </Button>
          </label>
          {value && <img src={value} alt="Preview" className="preview_img" />}
        </div>
      )}
    />
  );
};

export default ImageInput;
