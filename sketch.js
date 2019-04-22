let mousePos,ballPos,velocity,acceleration;

 // vector class for coordinates
 class Vector {
    // initializing x and y coordinates
  constructor(x,y){
      this.x = x;
      this.y = y;
  }
  // sub() method subtracts two points A and B or two vectors
  sub(x,y){
      this.x -= x;
      this.y -= y;
  }
  // add() method adds two vectors or points A and B
  add(x,y){
      this.x += x;
      this.y += y;
  }
  // mag() method returns the magnitude(length) of a vector
  mag(){
      return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
  }
  // unit() method calculates a unit vector
  unit(){
      return {
          unitX : this.x / this.mag(),
          unitY : this.y / this.mag()
      };
  }
  // setMag() method sets the magnitude(length) of a vector
  setMag(n){
      this.x = this.unit().unitX * n;
      this.y = this.unit().unitY * n;
  }
}

function setup() {
    createCanvas(1265, 648);
    velocity = new Vector(0,0);
    ballPos =  new Vector(width/2,height/2);
    acceleration = new Vector(0,0);
  }
  
  function draw() {
    background(55);

    // creating a mousePos object
    // initializing object x pos with mouseX and y pos with mouseY
    mousePos = new Vector(mouseX,mouseY);

    // subtracting mousePos(x,y) with position of the ball´s (x,y)
    // to create an vector -> from ball to mousePos
    // to move the ball to the mouse cursors position
    // with dynamic speed
    mousePos.sub(ballPos.x,ballPos.y);

    // setting magnitude of that vector to 0,1
    // for to lower the force(acceleration)
    mousePos.setMag(0.1);

    // assigning the (x,y) acceleration object
    // with the vector magnitude(length)
    acceleration.x = mousePos.x;
    acceleration.y = mousePos.y;

    // adding acceleration vector to velocity vector(x,y)
    velocity.add(acceleration.x,acceleration.y);

    // velocity gets added to ballPos
    // to move the ball in mouse cursor´s direction
    ballPos.add(velocity.x,velocity.y);

    // draw the ball
    ellipse(ballPos.x, ballPos.y, 80, 80);

    // checking if velocity is not to high
    if(velocity.x >= 5 || velocity.y >= 5){
        velocity.x *= 0.75;
        velocity.y *= 0.75;
    }
    
}

