class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.5,
          'isStatic':false,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius/2,options);
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.image = loadImage("images/paper.png"); 
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      fill(255);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };