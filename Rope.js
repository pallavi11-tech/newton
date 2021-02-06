class Rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            bodyB:{x:this.offsetX,y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display()
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        Anchor1X = pointA.x;
        Anchor1Y = pointA.y;

        Anchor2X = pointB.x;
        Anchor2Y = pointB.y;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}