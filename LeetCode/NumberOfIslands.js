/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.
*/

var numIslands = function(grid) {
    let islands = 0;
    for(let i = 0; i < grid.length;i++){
        for(let j = 0; j < grid[0].length;j++){
            if(grid[i][j] === '1'){
                ++islands;
                dfs(grid,i,j);
            }
        }
    }
    return islands;
};
let dfs = function(grid, row, col){
    let rowEnd = grid.length;
    let colEnd = grid[0].length;

    if(row >= rowEnd || col >= colEnd || row < 0 || col < 0 || grid[row][col] === '0') return;

    grid[row][col] = '0';
    dfs(grid, row-1,col);
    dfs(grid, row, col-1);
    dfs(grid, row+1, col);
    dfs(grid, row, col+1);
}
