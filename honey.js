class Honey{
    constructor(x, y, r) {

        var options = {
            isStatic:true,
            restitution:0.01,
            friction:1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("images/beehive.png");
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }

    
}