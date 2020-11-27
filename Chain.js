class Chain{
    constructor(a,b,c,d){
        var options = {
            bodyA : a,
            bodyB : b,
            stiffness:c,
            length : d
        }

        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}