"use strict";
function create_cells(dim) {
    // create a 2d array
    let cells = new Array(dim);
    for (let i = 0; i < dim; i++) {
        cells[i] = new Array(dim).fill(null);
    }
    return cells;
}
function init_cells(cells) {
    // initialize each cell with a random state (alive or dead)
    return cells.map(row => row.map(cell => Math.random() > 0.5));
}
function check_rules(cells, i, j) {
    let countAlive = 0;
    if (i > 0 && j > 0)
        if (cells[i - 1][j - 1])
            countAlive++;
    if (j > 0)
        if (cells[i][j - 1])
            countAlive++;
    if (i < cells.length - 1 && j > 0)
        if (cells[i + 1][j - 1])
            countAlive++;
    if (i > 0)
        if (cells[i - 1][j])
            countAlive++;
    if (i < cells.length - 1)
        if (cells[i + 1][j])
            countAlive++;
    if (i > 0 && j < cells[i].length - 1)
        if (cells[i - 1][j + 1])
            countAlive++;
    if (j < cells[i].length - 1)
        if (cells[i][j + 1])
            countAlive++;
    if (i < cells.length - 1 && j < cells[i].length - 1)
        if (cells[i + 1][j + 1])
            countAlive++;
    if (countAlive == 3)
        return true;
    else
        return false;
}
function update(cells) {
    // check every cell and its neighbours and create a new array of cells based on the rules
    return cells.map((row, i) => row.map((cell, j) => check_rules(cells, i, j)));
}
function render(cells, canvas, scale) {
    // draw the array of cells on the screen
    let ctx = canvas.getContext("2d");
    let w = canvas.width;
    let x = 0;
    let y = 0;
    let dim = (w / scale) * 2;
    cells.map(row => row.map(cell => {
        ctx.fillStyle = cell ? "white" : "black";
        ctx.fillRect(x, y, dim, dim);
        if (x + dim > w + canvas.offsetLeft) {
            x = 0;
            y += dim;
        }
        else
            x += dim;
    }));
    let new_cells = update(cells);
    setTimeout(render, 100, new_cells, canvas, scale);
}
let scale = 50;
render(init_cells(create_cells(scale)), document.getElementById("canvas"), scale);
