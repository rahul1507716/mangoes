class mango{
    constructor(x,y){
    var options = {isStatic:true,restitution:0,friction:1}
    this.body = Bodies.circle(x,y,30,options);
    this.image = loadImage("mango.png");
    World.add(world,this.body);
    }
    display(){
       var pos =this.body.position;
       push();
       translate(pos.x, pos.y);;
       ellipseMode(RADIUS);
       imageMode(CENTER);
       image(this.image,0,0,30,30);
       pop();
   }
   }