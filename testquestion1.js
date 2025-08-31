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
    triangle(250, 250, 350, 250, 300, 150);
    rect(450, 150, 100, 100)
}