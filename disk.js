class Disk{
  constructor(d){
    this.diam = d;
    this.colour = [floor(random(255)),floor(random(255)),floor(random(255))];
    this.x = 0;
    this.y = 0;
    this.h = 10;
  }

  show(){
    noStroke();
    fill(this.colour);
    rect(this.x,this.y,this.diam,this.h);
  }
}
