class Tower{
  constructor(i){
    this.i = i;
    this.x = (this.i + 1) * (width / (nTowers + 1));
    this.y = 60;
    this.h = height-80;
    this.w = 10;
    this.Disks = [];
    this.colour = 0;
    this.sellected = false;
  }

  show(){
    if (this.sellected){
      this.colour = [255,0,0];
    }else{
      this.colour = 0;
    }
    fill(this.colour);
    rect(this.x,this.y,this.w,this.h);
  }

  showDisks(){
    for (let i=0; i < this.Disks.length; i++){
      this.Disks[i].x = this.x - this.Disks[i].diam /2 + 5;
      this.Disks[i].y = this.y + this.h - i * 11 - 11;
      this.Disks[i].show();
    }
  }

  containsMouse(){
    return (this.x - 2 * this.w < mouseX && mouseX < this.x + 3 * this.w && this.y  < mouseY && mouseY < this.y + this.h);
  }
}
