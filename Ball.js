class Ball{
    constructor(x, y){
        var options = {
            restitution : 1.0
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);

        World.add(world, this.body);

        this.image = loadImage("images/ball.png");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
        }


}