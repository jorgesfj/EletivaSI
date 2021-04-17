class Inimigo{
    constructor(vida, defesa, dano){
        this.vida = vida;
        this.defesa = defesa;
        this.dano = dano;
    }

    atacar(){
        console.log(`Atacando! dano: ${this.dano}`);

    }

    bloquear(){
        console.log(`Defendendo! defesa: ${this.defesa}`);
    }
}

let inimigo = new Inimigo(400,300,200);
inimigo.atacar();
inimigo.bloquear();


class Morcego extends Inimigo{
    constructor(vida,defesa,dano,alturaDeVoo){
        super();
        this.vida = vida;
        this.defesa = defesa;
        this.dano = dano;
        this.voando = false;
        this.alturaDeVoo = alturaDeVoo;
    }

    voar(){
        this.voando = true;
    }

    bloquear(){
        this.defesa  = this.defesa + this.alturaDeVoo; 
    }
}

let morcego = new Morcego(500,300,200,100);
console.log(morcego);
morcego.voar();
console.log(morcego.voando);
morcego.bloquear();
console.log(morcego)

class Orc extends Inimigo{
    constructor(vida,defesa,dano,danoDaArma){
        super();
        this.vida = vida;
        this.defesa = defesa;
        this.dano = dano;
        this.danoDaArma = danoDaArma;
    }

    atacar(){
        this.dano = this.dano + this.danoDaArma;
    }
}

let orc = new Orc(400,300,100,50);
console.log(orc);
orc.atacar();
console.log(orc);

class Troll extends Inimigo{
    constructor(vida,defesa,dano,armadura){
        super();
        this.vida = vida;
        this.defesa = defesa;
        this.dano = dano;
        this.armadura = armadura;
    }

    tankar(){
        this.vida = this.vida + this.armadura;
    }
}
let troll = new Troll(500,400,300,20);
console.log(troll);
troll.tankar();
console.log(troll);