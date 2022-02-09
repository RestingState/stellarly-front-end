import { useState, useRef, useEffect } from 'react';
// Styles
import { Wrapper, Map, SpinnerBox } from './SkyViewMap.styles';
// Components
import ClipLoader from 'react-spinners/ClipLoader';
import Popup from '../Popup';
// Hooks
import { useActions } from '../../hooks/useAction';
import { useSelector } from 'react-redux';
// Helper function
import { renderMap } from '../../helpers';
// Axios
import axios from 'axios';

const SkyViewMap = (props) => {
  const {
    right_ascension,
    declination,
    zoom,
    stars_view,
    planets_view,
    moon_sun_view
  } = useSelector((state) => state.map);
  const {
    stars,
    loading: starsLoading,
    error: starsError
  } = useSelector((state) => state.star);
  const {
    planets,
    loading: planetsLoading,
    error: planetsError
  } = useSelector((state) => state.planet);
  const {
    moon,
    loading: moonLoading,
    error: moonError
  } = useSelector((state) => state.moon);
  const {
    sun,
    loading: sunLoading,
    error: sunError
  } = useSelector((state) => state.sun);
  const {
    setRightAscension,
    setDeclination,
    fetchStars,
    fetchPlanets,
    fetchMoon,
    fetchSun
  } = useActions();
  const [popupParams, setPopupParams] = useState({
    active: false,
    message: ''
  });

  const canvasRef = useRef(null);
  const paramsRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.setAttribute('height', window.innerHeight);
    canvas.setAttribute('width', document.documentElement.clientWidth);

    paramsRef.current = {
      context: canvas.getContext('2d'),
      is_moving: false,
      last_x: 0.0,
      last_y: 0.0,
      gamma: right_ascension,
      theta: declination,
      screen_width: canvas.width,
      screen_height: canvas.height,
      zoom_level: zoom,
      rotation_speed: 0.2
    };

    const params = paramsRef.current;

    window.addEventListener('load', () => renderMap(params));

    canvas.addEventListener('mousedown', (e) => {
      params.last_x = e.offsetX;
      params.last_y = e.offsetY;

      params.is_moving = true;
    });

    canvas.addEventListener('mousemove', (e) => {
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

    window.addEventListener('mouseup', (e) => {
      if (params.is_moving === true) {
        params.is_moving = false;
      }
    });
  }, []);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const params = paramsRef.current;
    if (!planets_view) {
      params.planets = [];
      renderMap(params);
    } else {
      fetchPlanets(source).then((planets) => {
        params.planets = planets;
        renderMap(params);
      });
    }
    return () => {
      source.cancel('axios request cancelled');
    };
  }, [planets_view]);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const params = paramsRef.current;
    if (!stars_view) {
      params.stars = [];
      renderMap(params);
    } else {
      fetchStars(source, 1000, 'parallax').then((stars) => {
        params.stars = stars;
        renderMap(params);
      });
    }
    return () => {
      source.cancel('axios request cancelled');
    };
  }, [stars_view]);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const params = paramsRef.current;
    if (!moon_sun_view) {
      params.moon = {};
      params.sun = {};
      renderMap(params);
    } else {
      fetchMoon(source).then((moon) => {
        params.moon = moon;
        renderMap(params);
      });
      fetchSun(source).then((sun) => {
        params.sun = sun;
        renderMap(params);
      });
    }
    return () => {
      source.cancel('axios request cancelled');
    };
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
      setPopupParams({ active: true, message: 'Error' });
    }
  }, [starsError, planetsError, moonError, sunError]);

  return (
    <Wrapper>
      <SpinnerBox>
        <ClipLoader size={60} color="#fff" loading={loading} />
      </SpinnerBox>
      <Popup
        active={popupParams.active}
        setActive={setPopupParams}
        message={popupParams.message}
      />
      <Map ref={canvasRef} {...props} />
    </Wrapper>
  );
};

export default SkyViewMap;
