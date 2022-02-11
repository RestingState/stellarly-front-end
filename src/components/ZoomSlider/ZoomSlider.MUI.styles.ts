import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

export const CustomizedSlider = styled(Slider)`
  width: 110%;

  & .MuiSlider-thumb {
    border-radius: 1px;
    color: #c62828;
    height: 1.2rem;
    width: 1.7rem;
  }

  & .MuiSlider-track {
    color: white;
  }

  & .MuiSlider-rail {
    color: white;
  }
`;
