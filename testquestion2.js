let x = 60
let y = 60
let fixedX = 60
let fixedY = 60
function setup(){
    createCanvas(600, 600);
    background("grey");
}

function draw(){
    for (let count = 1; count < 11; count++) {
        circle(x, y, 50)
        x = fixedX * count
        y = y * count
    } 
}
