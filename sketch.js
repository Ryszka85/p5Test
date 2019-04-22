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

  class Vector {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    sub(x,y){
        this.x -= x;
        this.y -= y;
    }
    add(x,y){
        this.x += x;
        this.y += y;
    }
    mag(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
    }
    unit(){
        return {
            unitX : this.x / this.mag(),
            unitY : this.y / this.mag()
        };
    }
    setMag(n){
        this.x = this.unit().unitX * n;
        this.y = this.unit().unitY * n;
    }
  }