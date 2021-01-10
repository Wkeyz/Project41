class Drops{
    constructor(x,y){
        var option={
            friction:0.001,
            restitiution:0.1
        }
        this.body = Bodies.circle(x,y,5,option)
        this.radius=5
       
        World.add(world,this.body);

    }
    update(){
if(this.body.position.y>height){
    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
}
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}

