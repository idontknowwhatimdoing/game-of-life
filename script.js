// cells[i][j] = alive || dead
// new array for each generation
function create_cells(rows, cols) {
    // create a 2d array
    var cells = new Array(rows);
    for (var i = 0; i < cols; i++)
        cells[i] = [];
    return cells;
}
function init_cells(cells) {
    // initialize each cell with a random state (alive or dead)
    cells.map(function (x) { return x.map(function (i) { return i = 1; } /*Math.random() > 0.5 ? 1 : 0*/); });
    return cells;
}
function update() {
    // check every cell and its neighbours and create a new array of cells based on the rules
}
function render(cells) {
    // draw the array of cells on the screen
}
// render(update());
