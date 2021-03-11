let car,
  obstacle = [],
  range,
  count = 0,
  level = 1;
run = false;
function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);
  car = new Car();
  range = random(5, 20);
}

function draw() {
  if (frameCount % 20 === 0) {
    obstacle.push(new Obstacle());
  }
  background(250, 125, 0);
  fill(0, 250, 0);
  car.show();
  if (!run) {
    noLoop();
  } else {
    loop();
  }
  for (let i = 0; i < obstacle.length; i++) {
    obstacle[i].show();

    let distance = dist(
      obstacle[i].x + 25,
      obstacle[i].y - 50,
      car.x + 75,
      car.y
    );

    if (distance < 100) {
      let life = car.lifeChange();
      obstacle.splice(i, 1);

      console.log(life);
      if (life === 0) {
        document.getElementById("score").innerText = count * 5;

        document.getElementById("level").innerText = level;
        document.getElementById("gameName").textContent = "";

        document.getElementById("gameOver").innerText = "Game Over";
        noLoop();
      }
    }
    obstacle[i].move(level * 2);

    if (obstacle[i].y + 50 > height + 100) {
      obstacle.splice(i, 1);
      count++;
    }
  }

  if (count > 2) {
    document.getElementById("gameName").textContent = "";
  }

  level = Math.ceil(count / 50) + 1;

  if (level > 5) {
    level = 5;
  }

  document.getElementById("score").innerText = count * 5;

  document.getElementById("level").innerText = level;
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    if(level>=1 && level<2){
      car.move(25);
      
    } if(level>=2 && level<3){
      car.move(30)
     
    } if(level>=3 && level<4){
      car.move(40);
      
    } if(level>=4 && level<5){
      car.move(45)
      
    } if(level>=5){
      car.move(50)
    }
  } else if (keyCode == LEFT_ARROW) {
    if(level>=1 && level<2){
      car.move(-25);
     
    } if(level>=2 && level<3){
      car.move(-30)
     
    } if(level>=3 && level<4){
      car.move(-40);
    
    } if(level>=4 && level<5){
      car.move(-45)
      
    } if(level >= 5){
      car.move(-50)
    }
  } else if (key == " " && car.life >0) {
    run = !run;
    document.getElementById("gameOver").innerText = "";
    if (!run) {
      document.getElementById("gameOver").innerText = "Press Space To Continue";
      noLoop();
    } else {
      loop();
    }
  }
}