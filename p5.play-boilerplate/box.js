class box{
  constructor(x, y, width, height, color) {
      var options = {
 
          'restitution':0,
          'friction':5.0,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.visibility=255
      this.width = width;
      this.height = height;
      this.color=color;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed <5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color) 
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }else{
        push();
        this.visibility = this.visibility -2.5;
        World.remove(world, this.body);
        pop();
        
      }
      
    }
}