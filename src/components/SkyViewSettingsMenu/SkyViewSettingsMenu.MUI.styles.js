import { styled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";

export const SubmitCheckbox = styled(Checkbox)({
  color: "#fff",
  position: "absolute",
  right: "5%",
  bottom: "2%",
  width: 0,
  height: 0,

  "&.Mui-checked": {
    color: "#fff",
  },
});
