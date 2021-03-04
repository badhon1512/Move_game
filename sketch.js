
let car,obstacle=[],range,count=0;
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

    obstacle[i].move();

    if(obstacle[i].y+50>height+100)
    {
     
       obstacle.splice(i,1);
       count++;
     //  console.log("inside logic")
    }
  }


  document.getElementById("score").innerText=count*5;
  
  //console.log("count",count)
    
    
  
  
}
function keyPressed(){
if(keyCode == RIGHT_ARROW) {
  car.move(28);
} else if(keyCode == LEFT_ARROW) {
  car.move(-28);
} 
}