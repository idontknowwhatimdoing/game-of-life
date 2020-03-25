// cells[i][j] = alive || dead
// new array for each generation

function create_cells(rows: number, cols: number) {
	// create a 2d array
	let cells = new Array(rows);
	for (let i = 0; i < cols; i++)
		cells[i] = [];

	return cells;
}

function init_cells(cells: any[][]) {
	// initialize each cell with a random state (alive or dead)
	cells.map(x => x.map(i => i = 1/*Math.random() > 0.5 ? 1 : 0*/));
	return cells;
}

function update() {
	// check every cell and its neighbours and create a new array of cells based on the rules
}

function render(cells: any[][]) {
	// draw the array of cells on the screen
}

// render(update());
