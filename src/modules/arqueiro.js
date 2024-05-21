import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    tipo = 'Arqueiro'
    destreza

    constructor(nome, level) {
        super(nome, level)
        this.destreza = this.destreza
    }

    obterInsignia() {
        if (this.destreza >=5) {
            return `Dominador de flecas`;
        }
        return super.obterInsignia();
    }
}