let pos = 0;
const pacArray1 = 
  ['./images/PacMan1.png', './images/PacMan2.png']
;
const pacArray2 =
  ['./images/PacMan3.png', './images/PacMan4.png']
let direction = 0;
var pacMen = [];



function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}


function makePac() {
  let velocity = setToRandom(10); 
  let position = setToRandom(200);
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  game.appendChild(newimg);
    return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  pacMen.forEach((item) => {
    chomp(item);
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function chomp(item){
  pacMen.forEach(item =>{
    if(item.velocity.x > 0){
      setTimeout(function(){item.newimg.src = './images/PacMan1.png'}, 100);
      setTimeout(function(){item.newimg.src = './images/PacMan2.png'}, 50);
    } else if(item.velocity.x < 0){
      setTimeout(function(){item.newimg.src = './images/PacMan3.png'}, 100);
      setTimeout(function(){item.newimg.src = './images/PacMan4.png'}, 50);
    }
    }
  )
};


function checkCollisions(item) {
  if(item.position.x <= 0 || item.position.x >= (window.innerWidth - item.newimg.width)){
    item.velocity.x *= -1;
  };
  if(item.position.y <= 0 || item.position.y >= (window.innerHeight - item.newimg.height)){
    item.velocity.y *= -1;
  };
}

function makeOne() {
  pacMen.push(makePac());
}

function reset(){
  document.location.reload(true);
}

