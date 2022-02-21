import { FC } from 'react';
// Styles
import { Wrapper } from './SkyObjectCheckbox.styles';
import { CustomizedCheckbox } from './SkyObjectCheckbox.MUI.styles';
// Components
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material';
// Hooks
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const CheckBox: FC = () => {
  const { stars_view, planets_view, satellites_view, moon_sun_view } =
    useTypedSelector((state) => state.map);
  const { setStarsView, setPlanetsView, setSatellitesView, setMoonSunView } =
    useActions();

  return (
    <Wrapper>
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label={
          <Box component="div" fontSize={15}>
            Stars
          </Box>
        }
        checked={stars_view}
        onChange={(e: any) => setStarsView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label={
          <Box component="div" fontSize={15}>
            Planets
          </Box>
        }
        checked={planets_view}
        onChange={(e: any) => setPlanetsView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label={
          <Box component="div" fontSize={15}>
            Satellites
          </Box>
        }
        checked={satellites_view}
        onChange={(e: any) => setSatellitesView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label={
          <Box component="div" fontSize={15}>
            Moon/Sun
          </Box>
        }
        checked={moon_sun_view}
        onChange={(e: any) => setMoonSunView(e.target.checked)}
      />
    </Wrapper>
  );
};

export default CheckBox;
