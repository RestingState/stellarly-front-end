import { FC } from 'react';
// Styles
import { Wrapper } from './SkyObjectCheckbox.styles';
import { CustomizedCheckbox } from './SkyObjectCheckbox.MUI.styles';
// Components
import FormControlLabel from '@mui/material/FormControlLabel';
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
        label="Stars"
        checked={stars_view}
        onChange={(e: any) => setStarsView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label="Planets"
        checked={planets_view}
        onChange={(e: any) => setPlanetsView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label="Satellites"
        checked={satellites_view}
        onChange={(e: any) => setSatellitesView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label="Moon/Sun"
        checked={moon_sun_view}
        onChange={(e: any) => setMoonSunView(e.target.checked)}
      />
    </Wrapper>
  );
};

export default CheckBox;
