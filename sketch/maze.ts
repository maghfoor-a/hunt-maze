/*
Make a grid which has cells in it and allows you to change the cell.
*/

//create an interface for a grid
interface Maze {
    cellsPerSide: number;
}

//function to create a grid
function createMaze(cellsPerSide: number): Maze {
    return {
        cellsPerSide: cellsPerSide
    }

}

function drawMaze(maze: Maze, cellSize: number) {
    stroke("orange");
    rect(0, 0, cellSize*maze.cellsPerSide, cellSize*maze.cellsPerSide)
    //drawing columns
    for (let colNumber=1; colNumber < maze.cellsPerSide; colNumber++) {
        let pixelX = colNumber * cellSize
        let mazeHeight = maze.cellsPerSide*cellSize
        stroke("black")
        line(pixelX, 0, pixelX, mazeHeight)
    }
    for (let rowNumber=1; rowNumber < maze.cellsPerSide; rowNumber++) {
        let pixelY = rowNumber * cellSize
        let mazeWidth = maze.cellsPerSide*cellSize
        stroke("black")
        line(0, pixelY, mazeWidth, pixelY)
    }
}
