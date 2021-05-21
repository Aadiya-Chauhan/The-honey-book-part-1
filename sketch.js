const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function preload() {
    backgroundImg = loadImage("images/bg.jpg");
    mowgliImg = loadImage("images/balloo_and_mowgli.png")
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    mowgli = createSprite(200, displayHeight/2, 100, 200);
    mowgli.addImage(mowgliImg);
    mowgli.scale = 0.7;

    ground = new Ground(displayWidth/2, displayHeight - 120, displayWidth, 10);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    drawSprites();
}
