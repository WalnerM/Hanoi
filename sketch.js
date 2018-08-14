const nTowers = 3;
const nDisks = 5;
let tower = [];
let disk = [];

function setup(){
  createCanvas(600, 300);
  let separation = width / (nTowers + 1);
  let maxD = separation * 0.8;

  for(let i = 0; i < nTowers; i++){
    tower[i] = new Tower(i,nTowers);
  }

  for(let i = 0; i < nDisks; i++){
    let d = map(i ,nDisks-1,0 ,maxD * 0.5 ,maxD);
    disk[i] = new Disk(d);
    tower[0].Disks.push(disk[i]); //Putting the new disk in the first tower.
  }
}

function draw(){
  background(155);
  fill(0);
  rect(0, height-20 ,width ,20);

  for(let i = 0; i < nTowers; i++){
    tower[i].show();
    tower[i].showDisks();
  }
}

let Stage = 'choosing 1st tower';
let OldSel = -1;
let NewSel = -1;
function sellection(){
  for (let i = 0; i < nTowers; i++){
    if (tower[i].containsMouse()){
      return i;
    }
  }
  return -1;;
}

function mousePressed(){
  NewSel = sellection();
  if (NewSel > -1){
    if (Stage == 'choosing 1st tower'){
      if (OldSel > -1){
        tower[OldSel].sellected = false;
      }
      tower[NewSel].sellected = true;
      Stage = 'choosing 2nd tower';
    }else if (Stage == 'choosing 2nd tower'){
      tower[OldSel].sellected = false;
      if (tower[OldSel].Disks.length > 0){
        let tempDisk = tower[OldSel].Disks.pop();
        tower[NewSel].Disks.push(tempDisk);
      }
      Stage = 'choosing 1st tower';
    }
    OldSel = NewSel;
  }
}
