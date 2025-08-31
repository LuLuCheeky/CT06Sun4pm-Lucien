let x = 60
let y = 60
function setup(){
    createCanvas(600, 600);
    background("grey");
}

function draw(){
    for (let count = 1; count < 11; count++) {
        circle(x, y, 50)
        x = x * count
        y = y * count
    } 
}
