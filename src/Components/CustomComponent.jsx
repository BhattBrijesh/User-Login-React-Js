import { Button, TextField } from "@mui/material";

export const customTextField = (props) => {
  const { id = "", label = "", variant = "" } = props;
  return <TextField id={id} label={label} variant={variant} />;
};
export const customButton = () => {
  // const {}=props
  return <Button />;
};
