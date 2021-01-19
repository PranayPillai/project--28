class Tree{
    constructor(x,y){
       var options = {
           isStatic : true
       }
       this.width = width;
       this.height = height;
       this.x = x;
       this.y = y;
       this.body = Bodies.rectangle(x,y,width,height);
       this.image = loadImage("Plucking mangoes/tree.png");
       World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}