class Car{


  constructor()
  {
     this.x=width/2;
     this.y=height-60;
     

  }

  show()
  {
  ///  console.log("sho");
    fill(0,250,0)
    rect(this.x,this.y,150,50);
  }

  move(l)
  {

    if(this.x+100<width-19 && l>0)
    {
      this.x+=l;
    }

    if(this.x+l>0 && l<0)
    {
      this.x+=l;
    }
   

  }





}