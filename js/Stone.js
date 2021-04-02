class Stone {
  constructor(x,y,width,height){
    
    var options={
      isStatic: false,
      restitution:0,
      friction:1,
      density:1.4
    }
    this.image = loadImage("sprites/stone.png");
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world, this.body);       
}
display() {    
    imageMode(CENTER);
    var width=this.body.width;
    var height = this.body.height;
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
  }
}
