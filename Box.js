class Box{
    constructor(x,y,width,height){
  var options={
  isStatic: false,
  restitution: 0.3,
  friction: 0.5
  
  }
  this.body= Bodies.rectangle(x,y,width,height,options)
  this.width=width;
  this.height=height;
  World.add(world,this.body);
  }
  display(){
    if(this.body.speed < 10){
     
    
  var pos=this.body.position;
  var angle=this.body.angle;
  push ();
  translate(pos.x,pos.y);
  rotate (angle);
  rectMode(CENTER)
  
  fill("white")
  rect(0,0,this.width,this.height);
  pop ()
    }
    else{
      World.remove(world,this.body)
    }
  
  
  }
  
  
  
  
  
  };