/*
Make a grid which has cells in it and allows you to change the cell.
*/

//create an interface for a grid
interface Maze {
    numColumns: number;
}

//function to create a grid
function createMaze(numColumns: number): Maze {
    return {
        numColumns: numColumns
    }

}

function drawMaze(maze: Maze, cellSize: number) {
    stroke("orange");
    rect(0, 0, cellSize*maze.numColumns, cellSize*maze.numColumns)
}
