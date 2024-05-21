import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    static descricao = 'Você tem o meu arco!'
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