let maze: Maze;
function setup() {
  const l = min(windowHeight, windowWidth);
  createCanvas(l, l);
  noLoop();
  maze = createMaze(5);
  console.log(maze);
}

function draw() {
  background("beige");
  drawMaze(maze, 80);
}

// If user clicks, draw() will be called again (indirectly)
function mousePressed() {
  redraw();
}
