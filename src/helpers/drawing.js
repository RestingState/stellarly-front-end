function blackout(params) {
  params.context.fillStyle = 'black';
  params.context.fillRect(0, 0, params.screen_width, params.screen_height);
}

function drawCircle(params, x_i, y_i, x_j, y_j, z_j, lr, ud, radius) {
  params.context.fillStyle = '#ffffff'; // should be changeable
  params.context.beginPath();
  params.context.arc(
    (((x_i ** 2 + y_i ** 2) ** 0.5 * params.screen_width) / 2) *
      params.zoom_level *
      lr +
      params.screen_width / 2,
    ((x_j ** 2 + y_j ** 2 + z_j ** 2) ** 0.5 *
      params.zoom_level *
      ud *
      params.screen_width) /
      2 +
      params.screen_height / 2,
    radius,
    0,
    2 * Math.PI
  );
  params.context.fill();
}

export { blackout, drawCircle };
