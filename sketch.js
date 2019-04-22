let mouse,test,vel,acc;

function setup() {
    createCanvas(1265, 648);
    vel = new Vector(0,0);
test =  new Vector(width/2,height/2);
acc = new Vector(0,0);
  }
  
  function draw() {
    background(55);
    mouse = new Vector(mouseX,mouseY);
    mouse.sub(test.x,test.y);
    mouse.setMag(0.1);

    acc.x = mouse.x;
    acc.y = mouse.y;
    vel.add(acc.x,acc.y);
    test.add(vel.x,vel.y);
    ellipse(test.x, test.y, 80, 80);
    if(vel.x >= 5 || vel.y >= 5){
        vel.x *= 0.75;
        vel.y *= 0.75;
    }
    
}
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
