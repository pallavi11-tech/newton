class Bob 
{
    constructor(x,y)
    {
        var options = {
            restitution : 0.3,
            friction : 0.5,
            isStatic : true
        }
        this.body = Bodies.circle(x,y,50,options);
        this.r = 50;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display()
    {
      var pos = this.body.position;
     push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(pink);
      ellipse(pos.x,pos.y,this.r);
      pop();
      
      
    }
}