class Stone{
    constructor(x,y,bodyA,bodyB){
        var options1 = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        var options2 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options2);
        this.body = Bodies.rectangle(x, y, width, height, options1);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
}