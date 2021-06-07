const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,iron,stone,plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(100,100,30,150);
    stone = new Stone(300,100,50,50);
    iron = new Iron(400,100,40,170);
    rubber = new Rubber(450,300,30);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();
}