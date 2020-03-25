function create_cells(rows: number, cols: number) {
	// create a 2d array
	let cells = new Array(rows);
	for (let i = 0; i < cols; i++)
		cells[i] = new Array(rows).fill(null);

	return cells;
}

function init_cells(cells: any[][]) {
	// initialize each cell with a random state (alive or dead)
	return cells.map(x => x.map(i => i = Math.random() > 0.5 ? true : false));
}

function update() {
	// check every cell and its neighbours and create a new array of cells based on the rules
}

function render(cells: any[][]) {
	// draw the array of cells on the screen
}
