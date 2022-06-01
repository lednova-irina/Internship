import * as React from "react";
import { TextField } from "@mui/material";

type Props = {
  type: string;
  placeholder: string;
  label: string;
  multiline?: boolean;
  error?: boolean;
  title?: string;
  required?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
};

const MyInput = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => {
    return (
      <TextField
        variant="outlined"
        {...props}
        ref={ref}
        margin="dense"
        // fullWidth
      />
    );
  }
);
export default MyInput;
