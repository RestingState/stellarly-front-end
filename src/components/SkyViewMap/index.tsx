import { FC, useState, useRef, useEffect, MutableRefObject } from 'react';
// Styles
import { Wrapper, Map, SpinnerBox } from './SkyViewMap.styles';
// Components
import ClipLoader from 'react-spinners/ClipLoader';
import AlertPopup from '../AlertPopup';
// Hooks
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// Helper function
import { renderMap } from '../../helpers';
// Types
import {
  ISkyViewParams,
  ISkyViewInfoMenuData,
  defaultMass,
  defaultRadius,
  defaultTemperature,
  defaultLuminosity,
  defaultParallax
} from '../../types/skyView';
import { defaultMoon, IMoon } from '../../types/moon';
import { defaultSun, ISun } from '../../types/sun';
import { IStar, SortTypes } from '../../types/star';
import { IPlanet } from '../../types/planet';

import { sunMapped } from '../../helpers/sun';
import { moonMapped } from '../../helpers/moon';
import { planetsMapped } from '../../helpers/planet';
import { starsMapped } from '../../helpers/star';

interface SkyViewMapParams {
  paramsRef: MutableRefObject<ISkyViewParams>;
  handleInfoMenuData: (data: ISkyViewInfoMenuData) => void;
}

const SkyViewMap: FC<SkyViewMapParams> = ({
  paramsRef,
  handleInfoMenuData,
  ...props
}) => {
  // const [skyViewParams, setSkyViewParams] = useState<ISkyViewParams>();
  const [alertActive, setAlertActive] = useState<boolean>(false);
  const {
    right_ascension,
    declination,
    zoom,
    stars_view,
    planets_view,
    moon_sun_view
  } = useTypedSelector((state) => state.map);
  const {
    stars,
    loading: starsLoading,
    error: starsError
  } = useTypedSelector((state) => state.star);
  const {
    planets,
    loading: planetsLoading,
    error: planetsError
  } = useTypedSelector((state) => state.planet);
  const {
    moon,
    loading: moonLoading,
    error: moonError
  } = useTypedSelector((state) => state.moon);
  const {
    sun,
    loading: sunLoading,
    error: sunError
  } = useTypedSelector((state) => state.sun);
  const {
    setRightAscension,
    setDeclination,
    fetchStars,
    fetchPlanets,
    fetchMoon,
    fetchSun
  } = useActions();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const paramsRef = useRef<ISkyViewParams>(
  //   null
  // ) as MutableRefObject<ISkyViewParams>;

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    canvas!.setAttribute('height', window.innerHeight.toString());
    canvas!.setAttribute(
      'width',
      document.documentElement.clientWidth.toString()
    );

    paramsRef.current = {
      context: canvas!.getContext('2d'),
      is_moving: false,
      last_x: 0.0,
      last_y: 0.0,
      gamma: right_ascension,
      theta: declination,
      screen_width: canvas!.width,
      screen_height: canvas!.height,
      zoom_level: zoom,
      rotation_speed: 0.2,
      planets: [],
      stars: [],
      moon: defaultMoon,
      sun: defaultSun,
      has_moved: false
    };

    const params = paramsRef.current;

    window.addEventListener('load', () => renderMap(params));

    canvas!.addEventListener('mousedown', (e) => {
      params.last_x = e.offsetX;
      params.last_y = e.offsetY;

      params.is_moving = true;
      params.has_moved = false;
    });

    canvas!.addEventListener('mousemove', (e) => {
      params.has_moved = true;
      if (params.is_moving === true) {
        params.gamma +=
          ((params.last_x - e.offsetX) * params.rotation_speed) /
          params.zoom_level; // changing view angle
        params.theta +=
          ((e.offsetY - params.last_y) * params.rotation_speed) /
          params.zoom_level;
        if (params.gamma > 359) {
          params.gamma -= 359;
        } // here i check if angles are out of range,
        if (params.gamma < 0) {
          params.gamma += 359;
        } // and set their values accordingly.
        if (params.theta > 180) {
          params.theta = 180;
        } // might be a better way to do this
        if (params.theta <= 0) {
          params.theta = 0.01;
        }

        setRightAscension(params.gamma);
        setDeclination(params.theta);

        params.last_x = e.offsetX;
        params.last_y = e.offsetY;

        renderMap(params);
      }
    });

    canvas!.addEventListener('mouseup', (e) => {
      // register sun & moon click
      if (!params.has_moved && sunMapped) {
        if (
          Math.abs(e.offsetX - sunMapped[0]) < 8 &&
          Math.abs(e.offsetY - sunMapped[1]) < 8
        ) {
          const sunInfo: ISkyViewInfoMenuData = {
            type: 'sun',
            name: params.sun.information.name,
            mass: defaultMass,
            radius: defaultRadius,
            luminosity: defaultLuminosity,
            temperature: defaultTemperature,
            parallax: defaultParallax
          };
          handleInfoMenuData(sunInfo);
        }
      }
      if (!params.has_moved && moonMapped) {
        if (
          Math.abs(e.offsetX - moonMapped[0]) < 4 &&
          Math.abs(e.offsetY - moonMapped[1]) < 4
        ) {
          const moonInfo: ISkyViewInfoMenuData = {
            type: 'moon',
            name: params.moon.information.name,
            mass: defaultMass,
            radius: defaultRadius,
            luminosity: defaultLuminosity,
            temperature: defaultTemperature,
            parallax: defaultParallax
          };
          handleInfoMenuData(moonInfo);
        }
      }

      //register planets click
      for (let i = 0; i < planetsMapped.length; i++) {
        if (!params.has_moved && planetsMapped[i]) {
          if (
            Math.abs(e.offsetX - planetsMapped[i][0]) < 4 &&
            Math.abs(e.offsetY - planetsMapped[i][1]) < 4
          ) {
            const planetInfo: ISkyViewInfoMenuData = {
              type: 'planet',
              name: params.planets[i].information.name,
              mass: params.planets[i].information.mass.toString(),
              radius: params.planets[i].information.radius.toString(),
              luminosity: defaultLuminosity,
              temperature:
                params.planets[i].information.mean_temperature.toString(),
              parallax: defaultParallax
            };
            handleInfoMenuData(planetInfo);
          }
        }
      }

      //register stars click
      for (let i = 0; i < starsMapped.length; i++) {
        if (!params.has_moved && starsMapped[i]) {
          if (
            Math.abs(e.offsetX - starsMapped[i][0]) < 0.7 * params.zoom_level &&
            Math.abs(e.offsetY - starsMapped[i][1]) < 0.7 * params.zoom_level
          ) {
            const starInfo: ISkyViewInfoMenuData = {
              type: 'star',
              name: params.stars[i].name,
              mass: defaultMass,
              radius: defaultRadius,
              luminosity: defaultLuminosity,
              temperature: defaultTemperature,
              parallax: params.stars[i].parallax.toString()
            };
            handleInfoMenuData(starInfo);
          }
        }
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (params.is_moving === true) {
        params.is_moving = false;
      }
    });
  }, []);

  useEffect(() => {
    const params = paramsRef.current;
    if (!planets_view) {
      params.planets = [];
      renderMap(params);
    } else {
      fetchPlanets().then((planetsData: IPlanet[]) => {
        params.planets = planetsData;
        renderMap(params);
      });
    }
  }, [planets_view]);

  useEffect(() => {
    const params = paramsRef.current;
    if (!stars_view) {
      params.stars = [];
      renderMap(params);
    } else {
      fetchStars(5000, SortTypes.parallax).then((starsData: IStar[]) => {
        params.stars = starsData;
        renderMap(params);
      });
      fetchStars(50000, SortTypes.parallax).then((starsData: IStar[]) => {
        params.stars = starsData;
        renderMap(params);
      });
    }
  }, [stars_view]);

  useEffect(() => {
    const params = paramsRef.current;
    if (!moon_sun_view) {
      params.moon = defaultMoon;
      params.sun = defaultSun;
      renderMap(params);
    } else {
      fetchMoon().then((moonData: IMoon) => {
        params.moon = moonData;
        renderMap(params);
      });
      fetchSun().then((sunData: ISun) => {
        params.sun = sunData;
        renderMap(params);
      });
    }
  }, [moon_sun_view]);

  useEffect(() => {
    const params = paramsRef.current;
    params.zoom_level = zoom;
    renderMap(params);
  }, [zoom]);

  let loading = false;
  if (starsLoading || planetsLoading || moonLoading || sunLoading) {
    loading = true;
  }

  useEffect(() => {
    if (starsError || planetsError || moonError || sunError) {
      setAlertActive(true);
    }
  }, [starsError, planetsError, moonError, sunError]);

  return (
    <Wrapper>
      <SpinnerBox>
        <ClipLoader size={60} color="#fff" loading={loading} />
      </SpinnerBox>
      <AlertPopup
        active={alertActive}
        setActive={setAlertActive}
        title={'Error'}
        message={
          'Error occured during some data fetching. Some object may be not displayed'
        }
        severity={'error'}
      />
      <Map ref={canvasRef} {...props} />
    </Wrapper>
  );
};

export default SkyViewMap;
