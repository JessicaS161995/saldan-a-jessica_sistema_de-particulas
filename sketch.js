let sistema = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

function draw() {
	background(125, 50, 125);

	let p = new Particula();
  sistema.push(p);
  
  background(0, 50);

	for (let i = 0; i < sistema.length; i++) {
		if (sistema[i].estaMuerta) {
			sistema.splice(i, 1);
		}
	}

	for (let i = 0; i < sistema.length; i++) {
		sistema[i].actualizar();
		sistema[i].mostrar();
	}

	print(sistema.length);
}