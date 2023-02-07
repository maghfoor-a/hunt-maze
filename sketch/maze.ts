/*
Make a grid which has cells in it and allows you to change the cell.
*/

//create an interface for a grid
interface Maze {
  cellsPerSide: number;
  cells: Cell[];
}

interface Cell {
  walls: {
    n: boolean;
    e: boolean;
    s: boolean;
    w: boolean;
  };
  id: number;
}

//function to create a grid
function createMaze(cellsPerSide: number): Maze {
  const cells = [];
  for (let i = 0; i < cellsPerSide * cellsPerSide; i++) {
    const cell: Cell = {
      walls: {
        n: random([true, false]),
        e: random([true, false]),
        s: random([true, false]),
        w: random([true, false]),
      },
      id: i + 1,
    };
    cells.push(cell);
  }
  return {
    cellsPerSide: cellsPerSide,
    cells: cells,
  };
}

function drawMaze(maze: Maze, cellSize: number) {
  stroke("orange");
  rect(0, 0, cellSize * maze.cellsPerSide, cellSize * maze.cellsPerSide);
  drawGridlines(maze, cellSize);
  for (let gridX = 0; gridX < maze.cellsPerSide; gridX++) {
    for (let gridY = 0; gridY < maze.cellsPerSide; gridY++) {
      drawCell(gridX, gridY, cellSize);
    }
  }
}

function drawGridlines(maze: Maze, cellSize: number) {
  stroke("grey");
  for (let colNumber = 1; colNumber < maze.cellsPerSide; colNumber++) {
    let pixelX = colNumber * cellSize;
    let mazeHeight = maze.cellsPerSide * cellSize;
    line(pixelX, 0, pixelX, mazeHeight);
  }
  for (let rowNumber = 1; rowNumber < maze.cellsPerSide; rowNumber++) {
    let pixelY = rowNumber * cellSize;
    let mazeWidth = maze.cellsPerSide * cellSize;
    line(0, pixelY, mazeWidth, pixelY);
  }
}
function getCell(gridX: number, gridY: number, maze: Maze): Cell | null {
  return random(maze.cells);
}
function drawCell(gridX: number, gridY: number, cellSize: number) {
  push();
  translate(
    gridX * cellSize + cellSize * 0.5,
    gridY * cellSize + cellSize * 0.5
  );
  fill("red");
  rectMode(CENTER);
  square(0, 0, cellSize);
  fill("black");
  textSize(cellSize * 0.3);
  textAlign(CENTER, CENTER);
  text(getCell(gridX, gridY, maze).id, 0, 0);
  fill("white");
  circle(0, 0, 5);
  pop();
}
