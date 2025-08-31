let x = 20
let y = 20
let fixedX = 20
let fixedY = 20
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
