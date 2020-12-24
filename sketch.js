const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, sling;
var basket1, basket2;

function setup() {
  createCanvas(displayWidth-20, displayHeight-150);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ball = new Ball(200, 150); 
  sling = new SlingShot(ball.body,{x : 200, y : 150});
  basket1 = new Basket(displayWidth-700, 20);
  basket2 = new Basket(displayWidth-100, 20);
}

function draw() {
  background(255,255,255);  
  ball.display();
  sling.display();
  basket1.display(2);
  basket2.display(4);

  console.log(ball.body.position.x + " "+ball.body.position.y);

}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball.body, {
      x : 200,
      y : 150
    })
    sling.attach(ball.body);
  }

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}




function mouseReleased(){

  sling.fly();
  
}