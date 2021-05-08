class Snow{
    constructor(x,y){
        var options = {
            friction: 0.8,
            density: 1.2 
        }
        this.body = Bodies.circle(x,y,40,options)
        this.r = 40;
        World.add(world,this.body);
        this.image = loadImage("snow5.webp");
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop();

    }
}