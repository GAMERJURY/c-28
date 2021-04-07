class Stone{
    constructor(x, y) {
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:1.2
        }
        this.body = Bodies.circle(x, y, 1, options);
       this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,0,50,50);
        pop();
      }
}