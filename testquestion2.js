let x = 50
let y = 50
let fixedX = 50
let fixedY = 50
let colour = 255
function setup(){
    createCanvas(600, 600);
    background("grey");
}

function draw(){
    for (let count = 1; count < 11; count++) {
        fill(colour);
        circle(x, y, 50)
        x = fixedX * count
        y = fixedY * count
        colour = colour 
    } 
}
