function create_cells(dim: number): any[][] {
	// create a 2d array
	let cells = new Array(dim);
	for (let i = 0; i < dim; i++) {
		cells[i] = new Array(dim).fill(null);
	}

	return cells;
}

function init_cells(cells: any[][]): boolean[][] {
	// initialize each cell with a random state (alive or dead)
	return cells.map(row => row.map(cell => (cell = Math.random() > 0.5)));
}

function update(cells: boolean[][]) {
	// check every cell and its neighbours and create a new array of cells based on the rules
	return cells.map((row, idx, arr) => {});
}

function render(cells: boolean[][], canvas: HTMLCanvasElement, scale: number) {
	// draw the array of cells on the screen
	let ctx = canvas.getContext("2d")!;
	let w = canvas.width;
	let x = 0;
	let y = 0;
	let dim = (w / scale) * 2;

	cells.map(row =>
		row.map(cell => {
			ctx.fillStyle = cell ? "white" : "black";
			ctx.fillRect(x, y, dim, dim);

			if (x + dim > w + canvas.offsetLeft) {
				x = 0;
				y += dim;
			} else x += dim;
		})
	);
}

let scale = 50;
render(
	init_cells(create_cells(scale)),
	<HTMLCanvasElement>document.getElementById("canvas"),
	scale
);
