var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");

var W = 350,H = 450;
canvas.height = H; canvas.width = W;

var ball = {},
gravity = 0.3,
bounceFactor = 0.7;

ball = {
	x: W/2,
	y: 20,
	
	radius: 25,
	color: "blue",
	vx: 0,
	vy: 3,
	
	draw: function() {
		ctx.beginPath();
		//The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
};

// When we do animations in canvas, we have to repaint the whole canvas in each frame. Either clear the whole area or paint it with some color. This helps in keeping the area clean without any repetition mess.
function clearCanvas() {
	ctx.clearRect(0, 0, W, H);
}

// A function that will update the position of the ball is also needed. Lets create one
function drawing() {
	clearCanvas();
	ball.draw();
	//make the ball move by adding the velocity vectors to its position
	ball.y += ball.vy;

	//acceleration
	ball.vy += gravity;
		//rebound when it touches the floor
	if(ball.y + ball.radius > H) {
		// reposition the ball on top of the floor.
		ball.y = H - ball.radius;
		ball.vy *= -bounceFactor;
		console.log(ball.y, ball.vy);
		if(ball.vy>=-1.120){
			clearCanvas();
			clearInterval(bouncing);
			ball.draw();
			
		}
		}
}
var bouncing=setInterval(drawing, 1000/70);