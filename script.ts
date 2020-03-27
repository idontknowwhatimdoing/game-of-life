function create_cells(dim: number): any[][] {
	let cells = new Array(dim);
	return cells.map(row => (row = Array(dim).fill(null)));
}

function init_cells(cells: any[][]): boolean[][] {
	// initialize each cell with a random state (alive or dead)
	return cells.map(row => row.map(cell => Math.random() >= 0.3));
}

function check_rules(cells: boolean[][], i: number, j: number): boolean {
	let countAlive = 0;

	if (i > 0 && j > 0) if (cells[i - 1][j - 1]) countAlive++;

	if (j > 0) if (cells[i][j - 1]) countAlive++;

	if (i < cells.length - 1 && j > 0) if (cells[i + 1][j - 1]) countAlive++;

	if (i > 0) if (cells[i - 1][j]) countAlive++;

	if (i < cells.length - 1) if (cells[i + 1][j]) countAlive++;

	if (i > 0 && j < cells[i].length - 1) if (cells[i - 1][j + 1]) countAlive++;

	if (j < cells[i].length - 1) if (cells[i][j + 1]) countAlive++;

	if (i < cells.length - 1 && j < cells[i].length - 1)
		if (cells[i + 1][j + 1]) countAlive++;

	if (countAlive == 3) return true;
	else return false;
}

function update(cells: boolean[][]): boolean[][] {
	return cells.map((row, i) => row.map((cell, j) => check_rules(cells, i, j)));
}

function render(cells: boolean[][], canvas: HTMLCanvasElement, scale: number) {
	let ctx = canvas.getContext("2d")!;
	let x = 0;
	let y = 0;
	let dim = canvas.width / scale;

	cells.map(row =>
		row.map(cell => {
			ctx.fillStyle = cell ? "white" : "black";
			ctx.fillRect(x, y, dim, dim);

			if (x + dim > canvas.width + canvas.offsetLeft) {
				x = 0;
				y += dim;
			} else x += dim;
		})
	);

	let new_cells = update(cells);
	setTimeout(render, 100, new_cells, canvas, scale);
}

let scale = 50;

render(
	init_cells(create_cells(scale)),
	<HTMLCanvasElement>document.getElementById("canvas"),
	scale
);
