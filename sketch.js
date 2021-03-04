
let car,obstacle=[],range,count=0,level=1;
function setup()
{
  let canvas=createCanvas(windowWidth,600);
  canvas.style('z-index', '-1')
  canvas.position(0, 0)
 car=new Car();
 range=random(5,20)
 
 

 
 
  

}

function draw()
{

  if(frameCount%100===0)
 {

   obstacle.push(new Obstacle());
 }



  background(250,125,0);
  fill(0,250,0)
  car.show();
  

  

  //console.log(obstacle.length)
    
  for(let i=0;i<obstacle.length;i++)
  {

    obstacle[i].show();

   let distance= dist(obstacle[i].x+25,obstacle[i].y-50,car.x+75,car.y);

   if(distance<100)
   {
     let life=car.lifeChange();
     obstacle.splice(i,1);

     console.log(life)
     if(life===0)
     {

      document.getElementById("score").innerText=count*5;

  
  document.getElementById("level").innerText=level;
  document.getElementById('gameName').textContent="";

      document.getElementById("gameOver").innerText="Game Over";
       noLoop();
     }
   }

   //console.log(distance);

    obstacle[i].move(level);

    

    if(obstacle[i].y+50>height+100)
    {
     
       obstacle.splice(i,1);
       count++;
     //  console.log("inside logic")
    }

    
  }

  if(count>2)
  {
    document.getElementById('gameName').textContent="";
  }

  level=Math.ceil(count/30)+1;

  if(level>5)
  {
    level=5;
  }
  



  document.getElementById("score").innerText=count*5;

  
  document.getElementById("level").innerText=level;
  
  //console.log("count",count)
    
    
  
  
}
function keyPressed(){
if(keyCode == RIGHT_ARROW) {
  car.move(28);
} else if(keyCode == LEFT_ARROW) {
  car.move(-28);
} 
}