class Box2{
    constructor(x, y, width, height){
    var options = {
    isStatic:false
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    this.body = Bodies.rectangle(x,y,this.width,this.height, options)
    World.add(world, this.body);
    }
    
    display(){
    if(this.body.speed < 3){ 
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y)
    rectMode(CENTER);
    fill(173,216,230);
    rect(0,0,this.width, this.height)
    pop()
    }else{
        World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();
    }
    }
    score(){
        if(this.Visiblity<0 && this.Visiblity>-105){
          score++;
        }
        }
    }
    