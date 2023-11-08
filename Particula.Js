class Particula {
	constructor() {
		this.tamanoInicial = random(10, 50);
		this.tamano = random(5, 30);
		this.estaMuerta = false;
		this.tiempoDeVidaInicial = Math.ceil(random(50, 150));
		this.tiempoDeVida = this.tiempoDeVidaInicial;

		this.pos = createVector(mouseX, mouseY);

		// Dirección y velocidad aleatorias
		this.g = createVector(random(-1, 1), random(0.1, 1.5));

		// Actualiza el color en función de la posición del mouse
		this.color = color(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), random(100, 255), 100);
	}

	// Método update
	actualizar() {
		this.pos.add(this.g);

		this.tamano = map(
			this.tiempoDeVida,
			0,
			this.tiempoDeVidaInicial,
			0,
			this.tamanoInicial
		);

		this.tiempoDeVida -= 1;

		if (this.tiempoDeVida <= 0) {
			this.estaMuerta = true;
		}
	}

	// Método display
	mostrar() {
		noStroke();
		fill(this.color);
		circle(this.pos.x, this.pos.y, this.tamano);
	}
}
