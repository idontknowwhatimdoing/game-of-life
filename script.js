class Cell {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = canvas.width / size;
		this.height = canvas.height / size;
		this.alive = true;
	}

	drawAlive(ctx) {
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.strokeRect(this.x, this.y, this.width, this.height);
		ctx.closePath();
	}

	drawDead(ctx) {
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.closePath();
	}
}

class Cells {
	constructor(size) {
		this.size = size;
		this.cells;
	}

	init() {
		this.cells = new Array();
		for (var n = 0; n < this.size; n++) this.cells[n] = new Array();

		var x = 0;
		var y = 0;
		for (var i = 0; i < this.cells.length; i++) {
			for (var j = 0; j < this.size; j++) {
				this.cells[i][j] = new Cell(x, y);
				x += this.cells[i][j].width;
			}
			y += this.cells[i][i].height;
			x = 0;
		}
	}

	updateState(i, j) {
		var countAlive = 0;

		if (i > 0 && j > 0) if (this.cells[i - 1][j - 1].alive) countAlive++;

		if (j > 0) if (this.cells[i][j - 1].alive) countAlive++;

		if (i < this.cells.length - 1 && j > 0)
			if (this.cells[i + 1][j - 1].alive) countAlive++;

		if (i > 0) if (this.cells[i - 1][j].alive) countAlive++;

		if (i < this.cells.length - 1) if (this.cells[i + 1][j].alive) countAlive++;

		if (i > 0 && j < this.cells[i].length - 1)
			if (this.cells[i - 1][j + 1].alive) countAlive++;

		if (j < this.cells[i].length - 1) if (this.cells[i][j + 1].alive) countAlive++;

		if (i < this.cells.length - 1 && j < this.cells[i].length - 1)
			if (this.cells[i + 1][j + 1].alive) countAlive++;

		if (countAlive == 3) this.cells[i][j].alive = true;
		else if (countAlive > 3 || countAlive < 2) this.cells[i][j].alive = false;
	}

	animate(ctx, canvas) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < this.cells.length; i++)
			for (var j = 0; j < this.cells[i].length; j++) {
				this.updateState(i, j);
				if (this.cells[i][j].alive) this.cells[i][j].drawAlive(ctx);
				else this.cells[i][j].drawDead(ctx);
			}
	}
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var btnStart = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");

var size = 15;
var cells = new Cells(size);
cells.init();

var intervalId = 0;
btnStart.onclick = () => (intervalId = setInterval("cells.animate(ctx, canvas);", 50));

btnStop.onclick = () => clearInterval(intervalId);

canvas.onclick = e => {
	for (var i = 0; i < cells.cells.length; i++) {
		for (var j = 0; j < cells.cells[i].length; j++) {
			if (
				e.x >= cells.cells[i][j].x &&
				e.x <= cells.cells[i][j].x + cells.cells[i][j].width &&
				e.y >= cells.cells[i][j].y &&
				e.y <= cells.cells[i][j].y + cells.cells[i][j].height
			) {
				cells.cells[i][j].alive = false;
				cells.cells[i][j].drawDead(ctx);
				console.log("oui");
			}
		}
	}
};
