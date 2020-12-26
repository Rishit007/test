class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            //push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("lightblue")
            strokeWeight(4);
            line(pointA.x-150, pointA.y-260, pointB.x-100, pointB.y-250);
            //pop();
        }
        
    }
    
}