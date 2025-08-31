function setup(){
    createCanvas(600, 400);
    background("white");
    noStroke();
    stroke(220,0,0);
    noFill();
    strokeWeight(10);
}
function draw(){
    circle(100, 200, 100);
    triangle(150, 250, 250, 150, 100, 100);
}