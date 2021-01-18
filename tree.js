class tree{
  constructor(x,y){
  var options = {isStatic:true};
  this.body = Bodies.rectangle(x,y,40,150,options);
  this.image = loadImage("tree.png");
  this.x = x;
  this.y = y;
  World.add(world,this.body); 
  }
  display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,300,450);

  }
}