import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useAction';
// Components
import ClipLoader from 'react-spinners/ClipLoader';
// Styles
import { Wrapper, Map, SpinnerBox } from './SkyViewMap.styles';
// Helper function
import { render_all, getStarsCoordinates } from './helpers';

const SkyViewMap = (props) => {
  const { stars, loading, error } = useSelector((state) => state.star);
  const { right_ascension, declination, zoom } = useSelector(
    (state) => state.map
  );
  const { setRightAscension, setDeclination, fetchStars } = useActions();

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

    window.addEventListener('load', () => render_all(params));

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

        render_all(params);
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (params.is_moving === true) {
        params.is_moving = false;
      }
    });
  }, []);

  useEffect(() => {
    fetchStars(1000);
  }, []);

  useEffect(() => {
    const starsCoordinates = getStarsCoordinates(stars);
    const params = paramsRef.current;
    params.stars = starsCoordinates;
    render_all(params);
    console.log('transform');
    console.log(stars);
  }, [stars]);

  useEffect(() => {
    const params = paramsRef.current;
    params.zoom_level = zoom;
    render_all(params);
  }, [zoom]);

  useEffect(() => {
    const params = paramsRef.current;
    params.gamma = right_ascension;
    render_all(params);
  }, [right_ascension]);

  useEffect(() => {
    const params = paramsRef.current;
    params.theta = declination;
    render_all(params);
  }, [declination]);

  return (
    <Wrapper>
      <SpinnerBox>
        <ClipLoader size={60} color="#fff" loading={loading} />
      </SpinnerBox>
      <Map ref={canvasRef} {...props} />
    </Wrapper>
  );
};

export default SkyViewMap;
