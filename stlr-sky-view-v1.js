const canvas = document.getElementById('sky_view');
var context = canvas.getContext('2d');

let is_moving = false;

let last_x = 0.0; // last x mouse coordinates, for changing the view
let last_y = 0.0; // same as above, but y-cords

var gamma = 90.0; // angle from positive x-axis, in plain of: z = 0. for rotatinon of the plain of view
var theta = 90.0; // angle from positive z-axis

//! angles above are in degrees, not radians

var screen_width = canvas.width;
var screen_height = canvas.height; //! assuming width >= height

var zoom_level = 1;
var zoom_max = 5;
var zoom_min = 1;
zoom_diff = 0.1; // how much zoom_level will change

var rotation_speed = 0.2; //! should be between [0, 1]. if bigger then everything becomes too jerky


//var stars = [[0, 0], [0, 180], [45, 45], [45, 90], [45, 135], [90, 90], [90, 45], [90, 135], [135, 90], [135, 45], [135, 135]];
var stars = [[165, 90 - 61.5], [165, 90 - 56.3], [180, 90 - 53.6], [183.75, 90 - 57], [193.5, 90 - 55.95], [199.5, 90 - 54.9], [207, 90 - 49.28], [40, 0.25]]

// the above sets of stars are for testing, to be removed.
// also, brightness is missing


window.addEventListener("load", render_all());

canvas.addEventListener('mousedown', e => {	
	last_x = e.offsetX;
	last_y = e.offsetY;
  
	is_moving = true;
});

canvas.addEventListener('mousemove', e => {
	if (is_moving === true) {
	
		gamma += (last_x - e.offsetX) * rotation_speed / zoom_level; // changing view angle
		theta += (e.offsetY - last_y) * rotation_speed / zoom_level;
		
		if (gamma > 359) {gamma -= 359}; // here i check if angles are out of range,
		if (gamma < 0) {gamma += 359};	 // and set their values accordingly.
		if (theta > 180) {theta = 180};	 // might be a better way to do this
		if (theta <= 0) {theta = 0.01};
		
		last_x = e.offsetX;
		last_y = e.offsetY;
	
	render_all();
	
	document.getElementById("cords-output").innerHTML = gamma + " " + theta; // this is to be removed
	}
  
});

window.addEventListener('mouseup', e => {
	if (is_moving === true) {
		document.getElementById("cords-output").innerHTML = gamma + " " + theta; // for debugging
		is_moving = false;
	 }
});


window.addEventListener('keydown',this.check,false); // general key-listener
function check(e) {
    let code = e.keyCode;
	
	// zoom in on [+]
	if (code == 187) {
		zoom_level += zoom_diff;
		if (zoom_level > zoom_max) {zoom_level = zoom_max}
		render_all();
	}
	
	// zoom out on [-]
	if (code == 189) {
		zoom_level -= zoom_diff;
		if (zoom_level < zoom_min) {zoom_level = zoom_min}
		render_all();
	}
};

//? stuff below could be simplified, using trigonometry too
// for now it's a mess.

function drawStar(gamma_v, theta_v, gamma_s, theta_s, radius){
	
	let x_v = Math.sin(theta_v) * Math.cos(gamma_v); // view vector in cartesian
	let y_v = Math.sin(theta_v) * Math.sin(gamma_v);
	let z_v = Math.cos(theta_v);
	
	let x_s = Math.sin(theta_s) * Math.cos(gamma_s); // star vector in cartesian
	let y_s = Math.sin(theta_s) * Math.sin(gamma_s);
	let z_s = Math.cos(theta_s);
	
	// check if visible
	let dot_product = (x_v * x_s + y_v * y_s + z_v * z_s) / ((x_v**2 + y_v**2 + z_v**2) * (x_s**2 + y_s**2 + z_s**2))**0.5;
	if (dot_product < 0) {
		return;
	}

	let t_i = (-y_v * x_s + x_v * y_s)/(y_v**2 + x_v**2);
	let t_j = (-x_v * z_v * x_s + -y_v * z_v * y_s + (x_v**2 + y_v**2) * z_s)/((-x_v * z_v)**2 + (-y_v * z_v)**2 + (x_v**2 + y_v**2)**2);

	// projection on x-axis of the screen (sort of)
	let x_i = -y_v * t_i;
	let y_i = x_v * t_i;
	
	//projection on y-axis of the screen (sort of)
	let x_j = -x_v * z_v * t_j;
	let y_j = -y_v * z_v * t_j;
	let z_j = (x_v**2 + y_v**2) * t_j;
	
	let lr = 1; // check if should render in left or right side of the screen
	let ud = 1; // same as above, but up-down
	
	// do not try to understand this.
	if (x_v * y_v > 0) {
		if (x_v > 0) {
			lr = Math.sign(x_i);
		}
		else {
			lr = Math.sign(y_i);
		}
	}
	if (x_v * y_v < 0) {
		if (x_v > 0) {
			lr = - Math.sign(x_i);
		}
		else {
			lr = Math.sign(x_i);
		}
	}
	
	if (z_j > 0){
		ud = -1;
	}

	// actual drawing
	context.fillStyle = "#ffffff"; // should be changeable
	context.beginPath();
	context.arc((x_i**2 + y_i**2)**0.5 * screen_width / 2 * zoom_level * lr + screen_width / 2, (x_j**2 + y_j**2 + z_j**2)**0.5 * zoom_level * ud * screen_width / 2 + screen_height / 2, radius, 0, 2 * Math.PI);
	context.fill();
}

function render_all(){
	blackout();
	for (let i = 0; i < stars.length; i += 1) {
		let in_x = false;
		s_gamma = (stars[i][0]) * Math.PI / 180;
		s_theta = (stars[i][1]) * Math.PI / 180;
		v_gamma = gamma * Math.PI / 180;
		v_theta = theta * Math.PI / 180;
		
		drawStar(v_gamma, v_theta, s_gamma, s_theta, 2);
		
	}
}

// paints screen black
function blackout(){
	context.fillStyle = "black";
	context.fillRect(0, 0, screen_width, screen_height);
}

// for debugging
function print(msg){
	document.getElementById("debug").innerHTML = msg;
}

