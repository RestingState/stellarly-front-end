import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

export const CustomizedCheckbox = styled(Checkbox)(({ theme }) => ({
  color: '#c62828',
  '&.Mui-checked': {
    color: '#c62828'
  }
}));
