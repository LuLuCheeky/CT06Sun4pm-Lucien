let x = 50
let y = 40
let fixedX = 40
let fixedY = 40
function setup(){
    createCanvas(600, 600);
    background("grey");
}

function draw(){
    for (let count = 1; count < 11; count++) {
        circle(x, y, 50)
        x = fixedX * count
        y = fixedY * count
    } 
}
