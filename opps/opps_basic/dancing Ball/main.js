const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// The resulting constant (ctx) is the object that directly represents the drawing area of the canvas and allows us to draw 2D shapes on it.

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Modeling a ball in our program:-
//   Our program will feature lots of balls bouncing around the screen. Since these balls will all behave in the same way, it makes sense to represent them with an object.

class Ball {
  constructor(x, y, velX, velY, color, size) {
    //x and y coordinates
    this.x = x;
    this.y = y;
    //   horizontal and vertical velocity (velX and velY)
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
  //   Drawing the ball:-

//   First add the following draw() method to the Ball class:
draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
//   We can draw the ball in position, but to actually move the ball, we need an update function of some kind.
  update() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  }
//   The first four parts of the function check whether the ball has reached the edge of the canvas. If it has, we reverse the polarity of the relevant velocity to make the ball travel in the opposite direction. So for example, if the ball was traveling upwards (positive velY), then the vertical velocity is changed so that it starts to travel downwards instead (negative velY).

// The last two lines add the velX value to the x coordinate, and the velY value to the y coordinate — the ball is in effect moved each time this method is called.

// Adding collision detection:-
collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
  
}

const balls = [];

while (balls.length < 25) {
  const size = random(10,20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}


function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();
    }
  
    requestAnimationFrame(loop);
  }
  loop();
  

  function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
  
    requestAnimationFrame(loop);
  }
  