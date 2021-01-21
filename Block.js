class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visiblity=255;
      }
      display(){
       if(this.body.speed <5){
      var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
else{
  World.remove(world,this.body)
  push();
  this.Visiblity = this.Visiblity - 5;
  tint(255,this.Visiblity);
 // image(this.image, this.body.position.x, this.body.position.y, 30, 40);
   pop();
}}
score() {
  if(this.Visibility < 0 && this.Visibility > -105){
      score = score ++;  }
    }}

  