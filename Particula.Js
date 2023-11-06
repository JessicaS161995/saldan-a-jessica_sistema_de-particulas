class particula{
    constructor() { 
        this.estaMuerta = false;
        this.tiempodeVida = Math.ceil(random(10, 100));
        
        this.pos = createVector(width / 2, height / 2);

        this.vel = createVector(0, random(3,10));
        this.vel = rotate(random(360));

        this.g = createVector(0, 0.1);
    }
    
    // Método ==> method update

    actualizar() {
        this.vel.add(this.g);
        this.pos.add(this.vel);

        this.tiempodeVida -= 1;

        if (this.tiempodeVida <= 0) {
            this.estaMuerta = true;
            print('ups, me morí!');
        }

    }

    // Método ==> method display
    
    mostrar() { 
        circle(this.pos.x, this.pos.y, 20);
    } 
    
}