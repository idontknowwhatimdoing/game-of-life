// new array for each generation
function create_cells(rows, cols) {
    // create a 2d array
    var cells = new Array(rows);
    for (var i = 0; i < cols; i++)
        cells[i] = new Array(rows).fill(null);
    return cells;
}
function init_cells(cells) {
    // initialize each cell with a random state (alive or dead)
    return cells.map(function (x) { return x.map(function (i) { return i = Math.random() > 0.5 ? true : false; }); });
}
function update() {
    // check every cell and its neighbours and create a new array of cells based on the rules
}
function render(cells) {
    // draw the array of cells on the screen
}
// render(update());
