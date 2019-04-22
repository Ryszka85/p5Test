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
