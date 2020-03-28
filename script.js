"use strict";
function create_cells(dim) {
    return new Array(dim).fill(new Array(dim).fill(null));
}
function init_cells(cells) {
    // initialize each cell with a random state (alive or dead)
    return cells.map(row => row.map(cell => Math.random() >= 0.5));
}
function check_rules(cells, i, j) {
    let count_alive = 0;
    if (i > 0 && j > 0)
        if (cells[i - 1][j - 1])
            count_alive++;
    if (j > 0)
        if (cells[i][j - 1])
            count_alive++;
    if (i < cells.length - 1 && j > 0)
        if (cells[i + 1][j - 1])
            count_alive++;
    if (i > 0)
        if (cells[i - 1][j])
            count_alive++;
    if (i < cells.length - 1)
        if (cells[i + 1][j])
            count_alive++;
    if (i > 0 && j < cells[i].length - 1)
        if (cells[i - 1][j + 1])
            count_alive++;
    if (j < cells[i].length - 1)
        if (cells[i][j + 1])
            count_alive++;
    if (i < cells.length - 1 && j < cells[i].length - 1)
        if (cells[i + 1][j + 1])
            count_alive++;
    if (!cells[i][j] && count_alive == 3)
        return true;
    else if (cells[i][j] && (count_alive == 2 || count_alive == 3))
        return true;
    else
        return false;
}
function update(cells) {
    return cells.map((row, i) => row.map((cell, j) => check_rules(cells, i, j)));
}
function render(cells, canvas, scale) {
    let ctx = canvas.getContext("2d");
    let x = 0;
    let y = 0;
    let dim = canvas.width / scale;
    cells.map(row => row.map(cell => {
        ctx.fillStyle = cell ? "white" : "black";
        ctx.fillRect(x, y, dim, dim);
        if (x + dim >= canvas.width) {
            x = 0;
            y += dim;
        }
        else
            x += dim;
    }));
    let new_cells = update(cells);
    setTimeout(render, 100, new_cells, canvas, scale);
}
let scale = 40;
render(init_cells(create_cells(scale)), document.querySelector("canvas"), scale);
