import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useAction';
// Components
import ClipLoader from 'react-spinners/ClipLoader';
// Styles
import { Wrapper, Map, SpinnerBox } from './SkyViewMap.styles';
// Helper function
import { renderMap } from '../../helpers';

import { getPlanetsCoordinates } from '../../helpers/planet';

const SkyViewMap = (props) => {
  const { right_ascension, declination, zoom, stars_view } = useSelector(
    (state) => state.map
  );
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
  const { setRightAscension, setDeclination, fetchStars, fetchPlanets } =
    useActions();

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
      zoom_max: 5,
      zoom_min: 1,
      zoom_diff: 0.1,
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
    fetchPlanets().then((planets) => {
      console.log(planets);
    });
  }, []);

  useEffect(() => {
    const params = paramsRef.current;
    if (stars_view === false) {
      params.stars = [];
      renderMap(params);
    } else {
      fetchStars(1000).then((stars) => {
        params.stars = stars;
        renderMap(params);
      });
    }
  }, [stars_view]);

  useEffect(() => {
    const params = paramsRef.current;
    params.zoom_level = zoom;
    renderMap(params);
  }, [zoom]);

  if (starsError) {
    return <h1>{starsError}</h1>;
  }

  return (
    <Wrapper>
      <SpinnerBox>
        <ClipLoader size={60} color="#fff" loading={starsLoading} />
      </SpinnerBox>
      <Map ref={canvasRef} {...props} />
    </Wrapper>
  );
};

export default SkyViewMap;
