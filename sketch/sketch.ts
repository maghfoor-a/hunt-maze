 let maze: Maze; 
function setup() {
    const l = min(windowHeight, windowWidth)
    createCanvas(l, l);
    noLoop();
    maze = createMaze(8);
}

function draw() {
    background("beige");
    drawMaze(maze, 20)
}


// If user clicks, draw() will be called again (indirectly)
function mousePressed() {
    redraw();
}
