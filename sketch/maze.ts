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
}

function drawGridlines(maze: Maze, cellSize: number) {
  for (let colNumber = 1; colNumber < maze.cellsPerSide; colNumber++) {
    let pixelX = colNumber * cellSize;
    let mazeHeight = maze.cellsPerSide * cellSize;
    stroke("black");
    line(pixelX, 0, pixelX, mazeHeight);
  }
  for (let rowNumber = 1; rowNumber < maze.cellsPerSide; rowNumber++) {
    let pixelY = rowNumber * cellSize;
    let mazeWidth = maze.cellsPerSide * cellSize;
    stroke("black");
    line(0, pixelY, mazeWidth, pixelY);
  }
}
