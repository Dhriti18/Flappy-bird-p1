class Bird{
    constructor (x,y,width,height){
    
    
    
   // this.body=Bodies.rectangle(x,y,width,height,{isStatic:false});
   /* this.width=width;
    this.height=height;
    
    World.add(world,this.body);*/
   this.bird=createSprite(x,y,width,height);
    this.birdimg=loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png")
    this.bird.addAnimation("hi",this.birdimg);
    this.bird.x=x;
    this.bird.y=y;
    
    
    }
    
    display(){
       // var pos=this.body.position;
        push();
       this.bird.display();
        //imageMode(CENTER);
//image(this.birdimg,p.x,p.y,this.width,this.height);
      this.bird.x=mouseX;
    this.bird.y=mouseY
      pop();
    } 
    }
    

    
    
    
    
    