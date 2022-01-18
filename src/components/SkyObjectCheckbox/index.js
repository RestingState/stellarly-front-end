import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useAction";
import FormControlLabel from "@mui/material/FormControlLabel";
// Styles
import { Wrapper } from "./SkyObjectCheckbox.styles";
import { CustomizedCheckbox } from "./SkyObjectCheckbox.MUI.styles";

const CheckBox = () => {
  const { stars_view, planets_view, satellites_view, moon_sun_view } =
    useSelector((state) => state.map);
  const { setStarsView, setPlanetsView, setSatellitesView, setMoonSunView } =
    useActions();

  return (
    <Wrapper>
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label="Stars"
        checked={stars_view}
        onChange={(e) => setStarsView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label="Planets"
        checked={planets_view}
        onChange={(e) => setPlanetsView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label="Satellites"
        checked={satellites_view}
        onChange={(e) => setSatellitesView(e.target.checked)}
      />
      <FormControlLabel
        control={<CustomizedCheckbox />}
        label="Moon/Sun"
        checked={moon_sun_view}
        onChange={(e) => setMoonSunView(e.target.checked)}
      />
    </Wrapper>
  );
};

export default CheckBox;
