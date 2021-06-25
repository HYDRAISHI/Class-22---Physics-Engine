const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options ={
        restitution: 1
    }
    
   //creating the ground 
   ground= Bodies.rectangle(200,390,400,50,ground_options);
   //adding the ground to the world
   World.add(world,ground);
   //creating the ball
   ball= Bodies.circle(200,200,15, ball_options);
   //adding the ball to the world
   World.add(world, ball);
}

function draw(){
    background(0);
    Engine.update(engine);

    //adidng color to the ground
    fill("green");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);
    
    //adidng color to the ball
    fill("cyan");

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,15);

    

}
