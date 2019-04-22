let mousePos,ballPos,velocity,acceleration;
const canvasWidth = 1265;
const canvasHeight = 648;
const diameter = 80;
const magnitude = 0.09;
function setup() {
    createCanvas(canvasWidth, canvasHeight);
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

    // setting magnitude of that vector to a choosen value
    // to decrease or increase the force(acceleration)
    mousePos.setMag(magnitude);

    // assigning the (x,y) acceleration object
    // with the vector magnitude(length)
    acceleration.x = mousePos.x;
    acceleration.y = mousePos.y;

    // adding acceleration vector to velocity vector(x,y)
    velocity.add(acceleration.x,acceleration.y);

    // velocity gets added to ballPos
    // to move the ball in mouse cursor´s direction
    ballPos.add(velocity.x,velocity.y);

// checking if velocity is not to high
    if(velocity.x >= 5 || velocity.y >= 5){
      velocity.x *= 0.75;
      velocity.y *= 0.75;
    }
    
    ballPos.x + 60 >= width || ballPos.x - 40 <= 0 ? velocity.x *= -0.5 : velocity.x *= 1;
    ballPos.y + 60 >= height || ballPos.y - 40 <= 0 ? velocity.y *= -0.5 : velocity.y *= 1;
    // draw the ball
    ellipse(ballPos.x , ballPos.y, diameter, diameter);

    
    
}

